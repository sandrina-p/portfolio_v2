var chatApp = function() {
    //general chat classes
    var $chatId = $('#chat'),
        $navSections = $(".navSections"),
        $heyThere = $('.heyThere-intro'),
        botClass = '.chatPart-bot',
        chatPClass = '.chatPart-',

        //crucial content from each part
        section, //string - section of the clicked button, ex: 'background';
        $currentPart, //jquery - id of the clicked button parent chatPart ex: $('#chatpart-intro');
        text, // string - simple text of the bot;
        title, // string - title of the new part ex: 'before that'
        id, // string - it's build with string.slugLower -> ex : 'rede-expressos'

        //some numbers to better crontrol auto scroll
        mediaQHeight = 550, // a trigger to prevent some stuff on small devices
        wHeight =  window.innerHeight, // doesn't need expl., does it?
        navSectionTop, //number - nav offsetTop to trigger fixed class

        intervalLoadingDots; //function - setInteral controller


    // ------ TRIGGERS ----- //
    // ------ define if is section or part ------ //
    function init(option) {
        section = option.closest('.chatSection').attr('id'),
        $currentPart = option.closest('.chatPart'),
        title = option.text(),
        id = title.slugLower();

        if (mainSections.indexOf(title) > -1) {

            option.attr('disabled', 'disabled');
            buildSection();

        } else {
            animateClickedOption(option);
            buildSentence();
        }
    }

    // ------ GENERAL STUFF ----- //
    //when the user clicks on a chat button, it runs away.
    function animateClickedOption(option) {
        var parent = option.parent();
            liIndex = option.closest('.liIndex-liCateg');
            siblings = parent.siblings('.chatPart-option, .liIndex-liProj');

        // TODO remove this animate, add a class pellleaseee.
        parent.animate({'margin-left':'-49%'});
        option.animate({'margin-left':'-100%'});

        if (siblings.length > 0) {
            //siblings.children().removeClass('btnB');
            setTimeout(function () {
                parent.remove();
            }, 500);

        } else {  //is is the last one, remove the parent.
            parent.slideUp();
            liIndex.slideUp();
            setTimeout(function () {
                parent.remove();
                liIndex.remove();
            }, 250);
        }
    }

    function bodyScrollTop(value) {
        $('body').animate({
            scrollTop: value
        }, 500);
    }

    // ------ DOM STRUCTURE ELEMENTS ------ //
    function getElSection(trigger) {
        return $("<div class='chatSection' id='"+trigger+"'></div>");
    }

    function getElBtn(text) {
        return "<div class='chatPart-option'>"
                    +"<button type='button' name='button' class='btnB jsLoading js-chatOpt'>"+text+"</button>"
                +"</div>";
    }

    function getElPart() {
        return  $("<div class='chatPart' id='"+id+"'>"
                    +"<div class='chatPart-human'>"
                        +"<p class='chatPart-title jsLoading'>"+title+"</p>"
                    +"</div>"
                    +"<div class='chatPart-bot'>"
                        +"<p class='chatPart-text jsLoading'>"+text+"</p>"
                        // options FIXME
                    +"</div>"
                +"</div>");
    }

    function getOptions(section) {
        var objSection = chatContent[section],
            objI = 0,
            chatOptions = [],
            clicked; //prevent showing the same button twice.

        for (var key in objSection) {
            if(objSection.hasOwnProperty(key)) {

                if(!objSection['clicked']) {
                    objSection['clicked'] = [];
                }
                clicked = objSection['clicked'];

                //if key isn't on clicked && only first 2 keys && key isn' clicked obj itself
                if (clicked.indexOf(key) < 0 && chatOptions.length < 2 && key !== "clicked") {
                    chatBtn = getElBtn(key);
                    chatOptions.push(chatBtn);
                    objSection['clicked'].push(key);
                }
            }
        }

        return chatOptions;
    }

    // ------ SHOWING A PART COMPONENTS ------ //
    //scroll has 2 phases:
    // 1. scrollSafe() - make sure newPart is 1/4 of the window height.
    // 2. scrollFinal() - if newPart is outside of the window view, scroll it until its end is visible.
    function scrollSafe($currentPart) {
        var wScroll = $(window).scrollTop(),
            pHeight =  $currentPart.height(),
            pScroll = $currentPart.offset().top,
            tooClose = pScroll - wScroll + pHeight > wHeight/2;

        // too close of above the fold ||away from the view window
        if (tooClose || pScroll < wScroll) {
            bodyScrollTop(pScroll + pHeight - wHeight/4*1);
        }
    }

    function scrollFinal($part) {
        if( screen.height > mediaQHeight) {
            var safeArea = 120,
                pHeight = $part.height(),
                pScroll = $part.offset().top,
                wScroll = $(window).scrollTop(),
                diff = pScroll - wScroll,
                visibleOnScreen = diff + pHeight, //part position + its height
                wArea = wHeight - safeArea; // safe area of the window.

            //if new part is away of the above the fold, scroll it to a safer area.
            if (visibleOnScreen > wArea) {
                var diff2 = visibleOnScreen - wArea;
                bodyScrollTop(wScroll + diff2);
            }
        }

    }


    //FIXME this MUST be only css
    function loadingDots($elAfter) {
        $elAfter.after('<span class="js-loadingRetro"></span>');

        function dotdotdot(cursor, times, string) {
          return Array(times - Math.abs(cursor % (times * 2) - times) + 1).join(string);
        }

        var cursor = 0;
        intervalLoadingDots = setInterval(function () {
         $('.js-loadingRetro').text( dotdotdot(cursor++, 3, '.') );
        }, 100);
    }

    function finishLoading($element) {
        $element.removeClass('jsLoading');
    }

    // ------ SHOWING A PART PROCESS - HEY TO TIMEOUTS! ------ //
    function showingCommon($part, diffPartCallBack) {
        var loadingTimeXtext = (section == "practice") ? 0 : $part.find(chatPClass+"human").text().length;

        // if is 1st part (begin of a section) guide on parent
        // otherwise guide on previous part (currentPart where the user clicked);
        $part.is(':first-child')
            ? scrollSafe($part.parent())
            : scrollSafe($part.prev());


        // 1.show line title
        $part.find(chatPClass+"human").slideDown();

        // 2.show title and loading dots
        $part.find(chatPClass+"title").removeClass('jsLoading');
        loadingDots($part.find(chatPClass+"human"));
        // 3. hide loading dots and show bigger line
        setTimeout(function () {
            $('.js-loadingRetro').slideUp();
            clearInterval(intervalLoadingDots);
            $part.find(chatPClass+"bot").slideDown();
            // 4. show text
            setTimeout(function () {
                $('.js-loadingRetro').remove();

                diffPartCallBack($part, chatPClass); //a part or a project

            }, loadingTimeXtext);
        }, 500);
    }

    function showingSentence($part) {
        finishLoading($part.find(chatPClass+"text"));
        showingOptions($part);
    }

    function showingPractice($part){
        finishLoading($part.find(chatPClass+"text"));
        buildProject($part);
    }

    function showingOptions($part) {
        // 6. show 1st btn
        setTimeout(function () {
            finishLoading($part.find(chatPClass+"option:nth-last-of-type(2) .btnB"));
            scrollFinal($part);
            // FIXME better buttons target
            // 6. show 2nd btn
            setTimeout(function () {
                finishLoading( $part.find(chatPClass+"option:last-of-type .btnB") );
            }, 300);
        }, 400);
    }



    // ------ TYPES OF PART BUILD ------ //
    // ------ section ------ //
    function buildSection() {
        var $section = $('#'+section),
            $sectionIntro = $("#"+section+"-intro"),
            ElChatPart;

        text = chatContent[section]["intro"];
        delete chatContent[section]["intro"];

        var ElChatPart =    $("<div class='chatPart-bot'>"
                                +"<p class='chatPart-text jsLoading'>"+text+"</p>"
                            +"</div>");

        $sectionIntro.append(ElChatPart);

        if (section == "practice") {
            showingCommon($sectionIntro, showingPractice);
        } else {
            var ElChatOptions = getOptions(title);
            $sectionIntro.find(botClass).append(ElChatOptions);
            showingCommon($sectionIntro, showingSentence);
        }
    }

    // ------ talk ------ //
    function buildSentence() {

        //get text and remove it from chatContent.
        text = chatContent[section][title];
        delete chatContent[section][title];

        //build part
        var ElChatPart = getElPart(),
            ElChatOptions = getOptions(section);

        ElChatPart.find(botClass).append(ElChatOptions);
        $currentPart.after(ElChatPart);

        $newPart = $currentPart.next();
        showingCommon($newPart, showingSentence);
    }

    // ------ project ------ //
    function buildProject($part) {
        setTimeout(function () {
            Projects.initProj(section);
            scrollSafe($('#projects'));
            //TODO adjust until top of screen
        }, 600);
    }


    // --------- NAV INIT ------------ //

    var $nav = $('#chat-nav');

    function navTranslate(thisId) {
        var navWidth = 16, //padding;
            thisId = thisId || null;

        $nav.children().each(function() {
            if(thisId && $(this).attr('id') == thisId) {
                return;
            }
            $(this).css({'transform': 'translate('+navWidth+'px, 0)'});
            navWidth += $(this).width();
        });
    }


    $(document).ready(function(){

        $(function navInit() {
            var $heyThereIntro = $('.heyThere-intro');

            var baffleBg = baffle("#btn-bg");
            var baffleTh = baffle("#btn-th");
            var bafflePr = baffle("#btn-pr");

            baffleBg
                .start()
                .text(currentText => mainSections[0]);

            baffleTh
                .start()
                .text(currentText => mainSections[1]);

            bafflePr
                .start()
                .text(currentText => mainSections[2]);


            setTimeout(function () {
                navTranslate();
            }, 250);

            (function showNav() {
                if($heyThereIntro.css('opacity') == "1") {
                    $('#theory, #background, #practice').removeClass('jsLoading jsLoading2');
                    baffleBg.reveal(400, 750);
                    baffleTh.reveal(400, 250);
                    bafflePr.reveal(400, 500);
                } else {
                    setTimeout(function () {
                        showNav();
                    }, 500);
                }
            })();
        });
    });

    $(document).on('click', '.chatSection.jsOnNav', function(){
        navTranslate( $(this).attr('id') );

        $(this).css({'transform': 'translate(0, 0)'});
        $(this).removeClass('jsOnNav');
        $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
            $(this).insertBefore('#chat-nav');
        });
    });

    return {
        init,
        // outsider
    }

}();


var botSection = function() {
    var $trigger = $('.js-botTrigger'),
        visibleClass = 'js-aboutVisible',
        triggerActive = 'jsLoading',
        botInputId = "botInput",
        botAnswerClass = "bot-answer",
        botSentClass = "bot-sent",
        jsSentEmptyClass = "js-sentEmpty",
        $bot = $('#bot'),
        $botInner = $('#bot').find('.bot-inner'),
        $botText = $bot.find('.bot-text'),
        clickOn = {},
        intervalBotScroll,
        firstTrigger = true,
        botAnswerTyped = false,
        sentText, //text written on input
        context; //input context of the conversation



    // helpful functions //
    ///////////////////////
    // function getRandomIndex(val) {
    //     return Math.floor(Math.random() * arr);
    // }

    // get ready 008080 //
    //////////////////////
    function showInput(name, placeholder) {
        return '<input type="text" name="'+name+'" placeholder="'+placeholder+'" class="bot-input" id="'+botInputId+'"></input>';
    }

    //showing the 008080 characters
    // $(document).on('click', '.js-chatOpt', function(){
    //     var section = $(this).closest('.chatSection').attr('id') || $(this).attr('name'),
    //         $childrens = $trigger.children().not('.'+visibleClass),
    //         i = Math.floor( (Math.random() * $childrens.length));
    //
    //     if(!clickOn[section]) {
    //         clickOn[section] = 0;
    //     }
    //
    //     if(clickOn[section] < 2) {
    //         $childrens.eq(i).addClass(visibleClass);
    //         clickOn[section] ++;
    //     }
    //
    //     $childrens = $trigger.children().not('.'+visibleClass);
    //     if ($childrens.length == 0) {
    //         $trigger.children().removeClass(visibleClass);
    //         $trigger.removeClass(triggerActive);
    //     }
    // });

    //showing 008080 section
    $(document).on('click', '.js-botTrigger', function(){
        $botInner.toggleClass(triggerActive);
        $bot.toggleClass(triggerActive);
        if(firstTrigger) {
            appendBotAnswer(botContent.intro);
            firstTrigger = false;
        }
    });


    // talking with 008080 //
    /////////////////////////
    function hitEnter() {
        sentText = $('#'+botInputId).val().toLowerCase();
        context = $('#'+botInputId).attr('name');
        $('#'+botInputId).remove();
        appendSent();
        getBotAnswer();
    }

    function appendSent() {
        var sentEmpty = "";
        sentText == "" ? sentEmpty = jsSentEmptyClass : "";
        $botText.append("<p class='"+botSentClass+" "+sentEmpty+"'>"+sentText+"</p>");
        $botText.find('input').remove();
    }

    function objSearchSubKeys(objContext) {
        for (var key in objContext) {
            if(objContext.hasOwnProperty(key)) {
                var subKeys = key.split(/,\s?/);
                if (subKeys.indexOf(sentText) > -1) {
                    return key;
                    break;
                }
            }
        }
    }

    function getBotAnswer() {
        var objContext = botContent[context];
        var botAnswer = [];

        switch (context) {
            case 'options':
                botAnswer = objContext[objSearchSubKeys(objContext)] || objContext.help;
                appendBotAnswer(botAnswer);
                // NOTE: very strange bug here.
                // if botContent.options["undefined"] it doesnt work..
                // this key has to have 2 options (ex: botContent.options["undefined, null, other"] )
                break;
            case 'commands':
                //if sent Empty, check if it's to continue previous command or go to .EmpTy.
                if (sentText == "") {
                    var lastSection = $botText.find('.bot-sent').not('.'+jsSentEmptyClass).last().text();
                    if(objContext.keepSection[1].indexOf(lastSection) > -1) {
                        sentText = lastSection;
                    } else {
                        var iR = Math.floor(Math.random() * botContent.EmpTy.length);
                        appendBotAnswer(botContent.EmpTy[iR]);
                        break;
                        return;
                    }
                }

                var key = objSearchSubKeys(objContext);
                if(key) {
                    var contextLength = objContext[key].length;
                    if (contextLength) {
                        var iR = Math.floor(Math.random() * contextLength);
                        botAnswer = objContext[key][iR];
                        objContext[key].splice([iR], 1); //prevent for showing the same thing twice.
                    } else {
                        objContext.allSaid[0][0] = replaceSentText(objContext.allSaid[0][0]);
                        botAnswer = objContext.allSaid[0];
                        var iSection = objContext.keepSection[1].indexOf(sentText);
                        objContext.keepSection[1].splice(iSection,1); //prevent for showing the same thing again;
                    }
                    appendBotAnswer(botAnswer, objContext);
                } else {
                    searchVocabulary();
                }
                break;

            default:
                appendBotAnswer(botContent.LosT);
        }
    }

    function searchVocabulary() {
        var objContext = botContent.vocabulary;
        var botAnswer = [];

        //BEFORE: - just to remember how dumb i was...
        // objSearchSubKeys(objContext)
        // for (var key in objContext) {
        //     if(objContext.hasOwnProperty(key)) {
        //         var subKeys = key.split(/,\s?/);
        //         if (subKeys.indexOf(sentText) > -1) {
        //             botAnswer = objContext[key];
        //         }
        //     }
        // }
        //
        // if(botAnswer.length == 0) { botContent.LosT;}
        // appendBotAnswer(botAnswer);
        //
        // AFTER: - and how i'm so fucking a genius now
        botAnswer = objContext[objSearchSubKeys(objContext)] || botContent.LosT;
        appendBotAnswer(botAnswer);
    }

    function appendBotAnswer(answer, objContext) {
        botAnswerTyped = answer.indexOf('typedJS') > -1;
        keepSectionFlag = answer.indexOf('keepSectionJS') > -1;

        //remove previous keepSection messages
        if(typeof keepSectionClass !== 'undefined' && keepSectionClass != "") {
            $botText.find('.'+keepSectionClass).remove();
        }

        intervalBotScroll = setInterval(function () {
            console.log('autoScroll');
            $botText.animate({
                scrollTop: $('.bot-text').prop('scrollHeight')
            }, 0);
        }, 200);

        $botText.append("<span class='jsBotThinking'></span>");
        setTimeout(function () {
            $('.jsBotThinking').remove();
            if (botAnswerTyped) {
                keepSectionClass = "jskeepSection" && keepSectionFlag;
                $botText.append("<p class='"+botAnswerClass+" "+keepSectionClass+"'></p>").find('p:last-of-type').typed({
                    strings: [answer[0]],
                    contentType: 'html',
                    typeSpeed: -450,
                    startDelay: 0,
                    callback: function() {
                        afterAppendBotAnswer(answer, objContext);
                    },
                });
            } else {
                $botText.append("<p class='"+botAnswerClass+"'>"+answer[0]+"</p>");
                keepSectionClass = "";
                afterAppendBotAnswer(answer, objContext);
            }
        }, answer[0].length*1.33);
    }

    function afterAppendBotAnswer(answer, objContext) {
        $('.typed-cursor').remove();
        $botText.append(showInput(answer[1], answer[2]));
        $botText.find('input').last().focus();

        setTimeout(function () {
            console.log('stop autoscroll');
            clearInterval(intervalBotScroll);
        }, 250);

        //check if it has to show keepStion message
        if (objContext != undefined //if context exists
        && objContext.keepSection[1].indexOf(sentText) > -1 // it's a section with more stuff (array)
        && objContext[sentText].length > 0) { // it still has stuff to show
            $botText.find('input').remove();
            objContext.keepSection[0][0] = replaceSentText(objContext.keepSection[0][0]);
            botAnswer = objContext.keepSection[0];
            appendBotAnswer(botAnswer);
        }
    }

    function replaceSentText(string) {
        return string.replace("[*param*]", sentText);
    }
    //input behavior (ENTER)
    $(document).on('keyup', '#'+botInputId, function(e) {
        if(e.keyCode == 13) { //ENTER
            hitEnter($(this));
        }
    });

    //force to always focus on input
    $(document).on('click', '#bot', function(){
        // $('#'+botInputId).focus();
    })

    //close 008080 section
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // ESC
            $botInner.removeClass(triggerActive);
            $bot.removeClass(triggerActive);
        }
    });
}();


$(document).ready(function(){
    $(document).on('click', '.js-chatOpt', function(){
        chatApp.init($(this));
    });
});
