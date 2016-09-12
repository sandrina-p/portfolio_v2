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
        id, // string - it's build with stringToSlug() -> ex : 'rede-expressos'

        //some numbers to better crontrol auto scroll
        mediaQHeight = 550, // a trigger to prevent some stuff on small devices
        wHeight =  window.innerHeight, // doesn't need expl., does it?
        navSectionTop, //number - nav offsetTop to trigger fixed class

        intervalLoadingDots, //function - setInteral controller

        //some conditions that practice has //REVIEW review this. is too complex.
        initProj, //string - used when calls a project without starting the chat.
        isIntroPractice, //bollean - if 1st project, show index
        noScroll; // bollean - scroll when buil new part. true when shows indexPractice


    // ------ TRIGGERS ----- //
    // ------ define if is section or part ------ //
    function init(option) {
        section = option.closest('.chatSection').attr('id');
        $currentPart = option.closest('.chatPart');
        title = option.text();
        id = stringToSlug(title);

        fixChatNav(); //calling it here prevent to fix the nav position without first click on it;

        // doesn't have section and its title is one of the mainSections.
        if (section && mainSections.indexOf(title) < 0) {
            animateClickedOption(option);

            if (section == "practice" && title != "practice") {
                buildProject(section, title);
                navActiveBtn(section);
            } else {
                buildSentence(section, title);
            }
        } else {
            if (section && mainSections.indexOf(title) > -1) {
                animateClickedOption(option);
            }
            section = title;
            navActiveBtn(section);
            buildSection(title);
        }
    }

    // ------ cv part ------ //
    function outsider(trigger) {
        section = trigger.data('section'),
        title = trigger.data('title');
        initProj = trigger.data('initproject');

        if(initProj) {
            title = initProj;
            section = 'practice';
        }
        id = stringToSlug(title);

        thatBtn = $('#'+section).find("button:contains("+initProj+")");
        animateClickedOption(thatBtn);

        //if part exists, scroll to it, otherwise build its section.
        ($("#"+id).length > 0)
            ? bodyScrollTop($("#"+id).offset().top - wHeight/4*1)
            : buildSection(section);

        fixChatNav();
        navActiveBtn(section);
    }


    // ------ GENERAL STUFF ----- //
    function navActiveBtn(section) {
        $('.js-chatOpt').removeClass('jsActive');
        $("[name="+section+"]").addClass('jsActive');
    }

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

    //navbar controller position
    function fixChatNav() {
        //prevent navSectionTop value be higher than the original trigger.
        if(!$navSections.hasClass('jsFixed') ) {
            navSectionTop = $(".navSections").offset().top;
        }

        $(document).scroll(function(){
            if($(this).scrollTop() > navSectionTop) {
                $navSections.addClass('jsFixed');
                $heyThere.addClass('jsFixed');
            } else {
                $navSections.removeClass('jsFixed');
                $heyThere.removeClass('jsFixed');
                replaceLastPart();
            }
        });
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
        var chatBtn =   "<div class='chatPart-option'>"
                            +"<button type='button' name='button' class='btnB jsLoading js-chatOpt'>"+text+"</button>"
                        +"</div>";
        return chatBtn;
    }

    function getElPart(id, title, text) {
        // var options = functionOption(section);
        var chatPart =  $("<div class='chatPart chatPart--jsLast' id='"+id+"'>"
                            +"<div class='chatPart-human'>"
                                +"<p class='chatPart-title jsLoading'>"+title+"</p>"
                            +"</div>"
                            +"<div class='chatPart-bot'>"
                                +"<p class='chatPart-text jsLoading'>"+text+"</p>"
                                // options FIXME
                            +"</div>"
                        +"</div>");

        return chatPart;
    }

    function getElProject(id, title, sub, img, role, capt, more, links) {
        var elImgs = getProjectImgs(img);
        var ElLinks = getProjectLinks(links);
        var chatProj =  $("<div class='chatPart chatPart--project chatPart--jsLast' id='"+id+"'>"
                            +"<div class='chatPart-human'>"
                                +"<h3 class='chatPart-title'>"+title+"</h3>"
                                +"<h4 class='chatPart-subtitle'>"+sub+"</h4>"
                            +"</div>"
                            +"<div class='chatPart-bot'>"
                                +"<div class='chatPart-project'>"
                                    // TODO Glidder glitch + slider
                                    +"<div class='chatPart-fs'>"
                                        +elImgs
                                    +"</div>"
                                    +"<h5 class='chatPart-role'>"+role+"</h5>"
                                    +"<p class='chatPart-capt'>"+capt+"</p>"
                                    +"<p class='chatPart-more jsLoading'>"+more+"</p>"

                                    +"<div class='chatPart-details'>"
                                        +"<button type='button' name='more' class='btnDetails'>_more info</button>"
                                        +"<div class='chatPart-www'>"
                                            +"<span class='chatPart-checkItOut js-checkItOut'></span>"
                                            +ElLinks
                                        +"</div>"
                                    +"</div>"
                                +"</div>"
                            +"</div>"
                        +"</div>");

        return chatProj;
    }

    // get available options to the user.
    function getOptions(section) {
        var objSection = chatContent[section];
        var objI = 0;
        var chatOptions = [];

        for (var key in objSection) {
            if(objSection.hasOwnProperty(key)) {

                //clicked is to prevent showing the same button twice.
                var clicked;
                //if clicked doesn't exist, build it.
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

        if (chatOptions.length == 0) {
            ///// function getBehaviour(section); return chatOptions;
            var chatBtn,
                sentence,
                chatBehaviour = chatContent['behaviour'],
                indexOfSection = mainSections.indexOf(section);

            if(indexOfSection > -1) {
                mainSections.splice(indexOfSection, 1);
                for (var i = 0; i < mainSections.length; i++) {
                    chatBtn = getElBtn(mainSections[i]);
                    chatOptions.push(chatBtn);
                }

                if(mainSections.length == 2) {
                    var sentence = chatBehaviour["empty"+section];
                } else if (mainSections.length == 1) {
                    var sentence = chatBehaviour["missing"+mainSections[0]];
                } else {
                    console.log('lets 008080 start the fun');
                }

                chatOptions.unshift("<p class='chatPart-redirect'>"+sentence+"</p>");

            }
            //////


            // console.log('acabou links. gchama [behavior].');
        }
        return chatOptions;
    }

    // that beautiful index when the user clicks "practice"
    function getProjectsIndex(section) {
        var objSection = chatContent[section];
        var objI = 0;
        var chatOptions = [];
        var $liIndexUl = $("<ul class='liIndex-ul'></ul>");

        delete objSection['firstProject'];
        delete objSection['clicked'];

        for (var key in objSection) {
            if(objSection.hasOwnProperty(key)) {

                var categ = objSection[key]['categ'];
                if(categ) {
                    var catC = stringToSlug(categ);
                }

                //if category doesn't exist, build it
                if( $liIndexUl.find('.'+catC).length == 0) {
                    var newCat = "<li class='liIndex-liCateg "+catC+"'>"
                                    +"<span class='liIndex-categ'>"+categ+"</span>"
                                    +"<ul class='liIndex-dl'></ul>"
                                +"</li>";
                    $liIndexUl.append(newCat);
                }

                var li = "<li class='liIndex-liProj'>"
                            +"<button type='button' name='button' class='btnP js-chatOpt'>"+key+"</button>"
                            +"<span class='liIndex-sub'>"+objSection[key]['sub']+"</span>"
                        +"</li>";

                $liIndexUl.find('.'+catC).find('ul').append(li);
            }
        }

        return $liIndexUl;
    }

    function stringToSlug(string) {
        var id = string.split(' ').join('-');
        id = id.toLowerCase();
        return id;
    }

    function getProjectLinks(links) {
        var elLinks = "";
        for (i = 0; i < links.length; i++) {
            (links[i][1] == "available soon")
                ? elLinks += "<i title='"+links[i][1]+" class='fa fa-"+links[i][2]+"'></i>"
                : elLinks += "<a href='"+links[i][0]+"' target='_blank' class='btnOut"+[i+1]+" js-linkswww' title='"+links[i][1]+"'><i class='fa fa-"+links[i][2]+"'></i></a>";
        }
        return elLinks;
    }

    function getProjectImgs(imgArray) {
        var elImgs = "";
        var desktop = window.innerWidth >= 940;
        for (var i = 0; i < imgArray.length; i++) {
            if(desktop) {
                var newImg;
                var imgRet = imgArray[i].split('.');
                imgRet.splice(1, 0, "@2x");
                imgRet.splice(2, 0, ".");
                var newImg = imgRet.join("");
                elImgs += "<img src='"+newImg+"'>";
            } else {
                elImgs += "<img src='"+imgArray[i]+"'>";
            }

        }
        return elImgs;
    }


    // ------ SHOWING A PART COMPONENTS ------ //
    //scroll has 2 phases:
    // 1. scrollSafe() - make sure newPart is 1/4 of the window height.
    // 2. scrollFinal() - if newPart is outside of the window view, scroll it until its end is visible.
    function scrollSafe($currentPart) {
        //scroll to fit perfectly
        var wScroll = $(window).scrollTop();
        var pHeight =  $currentPart.height();
        var pScroll = $currentPart.offset().top;
        var tooClose = pScroll - wScroll + pHeight > wHeight/2;

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

    function replaceLastPart(part) {
        $('.chatPart--jsLast').removeClass('chatPart--jsLast');
        if (part) {
            part.addClass('chatPart--jsLast');
        }
    }

    function finishLoading($element) {
        $element.removeClass('jsLoading');
    }

    //FIXME remove glitcin... consistence pleasseeee
    function glitchIn($element) {
        $element.addClass('jsGlitchIn');
    }


    // ------ SHOWING A PART PROCESS - HEY TO TIMEOUTS! ------ //
    function showingCommon($part, diffPartCallBack) {
        var loadingTimeXtext = $part.find(chatPClass+"human").text().length;

        // if is 1st part (begin of a section) guide on parent
        // otherwise guide on previous part (currentPart where the user clicked);
        if (noScroll) {
            // keep going no scroll
        } else if ($part.is(':first-child') ) {
            scrollSafe($part.parent());
        } else {
            scrollSafe($part.prev());
        }

        // 1.show line title
        $part.find(chatPClass+"human").slideDown();

        // 2.show title and loading dots
        setTimeout(function () {
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
            }, 1000);
        }, 250);
    }

    function showingSentence($part) {
        replaceLastPart($part);
        finishLoading($part.find(chatPClass+"text"));
        showingOptions($part);
    }

    function showingPractice($part){
        replaceLastPart($part); //FIXME don't duplicate these 2 lines ^^^
        finishLoading($part.find(chatPClass+"text"));

        showProject = initProj || chatContent[section]['firstProject']
        buildProject(section, showProject);
    }

    function showingProject($part) {
        $part.find(chatPClass+"role").slideDown();
        setTimeout(function () {

            setTimeout(function () {
                $part.find(".btnDetails").show();
                glitchIn($part.find(chatPClass+"role"));

                setTimeout(function () {
                    $part.find(chatPClass+"details").show();

                    glitchIn($part.find(".btnDetails"));

                    setTimeout(function () {
                        $part.find(chatPClass+"fs").slideDown();
                        glitchIn($part.find(chatPClass+"details"));

                        setTimeout(function () {
                            glitchIn($part.find(chatPClass+"fs"));

                            setTimeout(function () {
                                $part.find(chatPClass+"capt").slideDown();

                                scrollFinal($part);

                                if (isIntroPractice) {
                                    isIntroPractice = false;
                                    setTimeout(function () {
                                        buildIndexPart( $("#"+section) );
                                    }, 500);
                                }

                            }, 100);
                        }, 450);
                    }, 250);

                }, 250);
            }, 250);
        }, 250);
    }

    function showingOptions($part) {
        // 6. show 1st btn
        setTimeout(function () {
            finishLoading($part.find(chatPClass+"option:nth-last-of-type(2) .btnB"));
            if(noScroll) {
                noScroll = false;
            } else {
                scrollFinal($part);
            }
            // 6. show 2nd btn
            setTimeout(function () {
                finishLoading( $part.find(chatPClass+"option:last-of-type .btnB") );
            }, 300);
        }, 400);
    }



    // ------ TYPES OF PART BUILD ------ //
    // ------ section ------ //
    function buildSection(section) {
        var $section = $('#'+section);

        if($section.length != 1) {
            //get intro text and remove it from chatContent.
            text = chatContent[section]["intro"];
            delete chatContent[section]["intro"];

            if (section == 'practice' && title == initProj) {
                title = 'practice';
            }

            //build section, part and options
            var ElChatSection = getElSection(section),
                ElChatPart = getElPart(section+"-intro", title, text),
                ElChatOptions = getOptions(title);


            //FIXME find a way to not write "practice" here...
            ElChatSection.append(ElChatPart);
            if (section != "practice") {
                ElChatSection.find(botClass).append(ElChatOptions);
            }
            $chatId.append(ElChatSection);

            $newPart = $('#'+section+'-intro');
            if (section == "practice") {
                isIntroPractice = true;
                showingCommon($newPart, showingPractice);
            } else {
                showingCommon($newPart, showingSentence);
            }

        } else {
            //scroll to fit perfectly
            if(initProj) {
                buildProject(section, initProj);
            } else {
                bodyScrollTop($section.offset().top - wHeight/4*1)
            }
        }
    }

    // ------ talk ------ //
    function buildSentence(section, title) {

        //get text and remove it from chatContent.
        text = chatContent[section][title];

        delete chatContent[section][title];

        //build part
        var ElChatPart = getElPart(id, title, text),
            ElChatOptions = getOptions(section);

        ElChatPart.find(botClass).append(ElChatOptions);
        $currentPart.after(ElChatPart);

        $newPart = $currentPart.next();
        showingCommon($newPart, showingSentence);
    }

    // ------ project ------ //
    function buildProject(section, project) {
        //get all info needed about project and delete it.
        var objProj = chatContent[section][project],
            title = objProj["title"],
            sub = objProj["sub"],
            role = objProj["role"],
            img = objProj["img"],
            capt = objProj["capt"],
            more = objProj["more"],
            links = objProj["links"];

        delete chatContent[section][project];
        delete chatContent[section]['firstProject'];
        // create project
        var ElChatPart = getElProject(id, title, sub, img, role, capt, more, links);

        //if is the first project, there is no index yet, so append it.
        //otherwise, append it before index.
        $section = $('#'+section);
        if($section.children().length == 1) {
            $section.append(ElChatPart);
        } else {
            $section.children(':last-child').before(ElChatPart);
        }

        $newPart = ElChatPart;
        showingCommon($newPart, showingProject);

        initProj = false;
    }

    // ------ index ------ //
    function buildIndexPart($section) {
        noScroll = true;

        var ElChatPart = getElPart(section+"-index", "", ""),
            $projectsUl = getProjectsIndex(section);

        $section.append(ElChatPart);
        ElChatPart.find(botClass).append($projectsUl);
        $newPart = $('#'+section+'-index');
        showingCommon($newPart, showingSentence);
    }



    // ------ CHAT INTERACTIVITY ------ //

    //hover CTA btn on each project to show its cta text
    $(document)
        .on('mouseenter', '.js-linkswww', function(){
            var cta = $(this).attr('title'),
                $checkItOut = $(this).siblings('.js-checkItOut');
            $checkItOut.text(cta);
            $checkItOut.addClass('jsActive');
        })
        .on('mouseleave', '.js-linkswww', function(){
            var $checkItOut = $(this).siblings('.js-checkItOut');
            $checkItOut.text('');
            $checkItOut.removeClass('jsActive');
        });


    //show / hide more info each project
    $(document).on('click', '.btnDetails', function(){
        $more = $(this).closest('.chatPart').find('.chatPart-more');
        $more.toggleClass('jsLoading');
        $(this).toggleText("_more info", "_less info");
    });

    // public function
    return {
        init,
        outsider
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
    $(document).on('click', '.js-chatOpt', function(){
        var section = $(this).closest('.chatSection').attr('id'),
            $childrens = $trigger.children().not('.'+visibleClass),
            i = Math.floor( (Math.random() * $childrens.length));

        if (section != undefined) {
            if(!clickOn[section]) {
                clickOn[section] = 0;
            }

            if(clickOn[section] < 2) {
                $childrens.eq(i).addClass(visibleClass);
                clickOn[section] ++;
            }

            $childrens = $trigger.children().not('.'+visibleClass);
            if ($childrens.length == 0) {
                $trigger.removeClass(triggerActive);
            }
        }
    });

    //showing 008080 section
    $(document).on('click', '.js-botTrigger', function(){
        if(!$(this).hasClass(triggerActive)) {
            $bot.addClass(triggerActive);
            if(firstTrigger) {
                appendBotAnswer(botContent.intro);
                firstTrigger = false;
            }
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

        $botText.animate({
            scrollTop: $('.bot-text').prop('scrollHeight')
        }, 0);

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
            $bot.removeClass(triggerActive);
        }
    });
}();

$(document).ready(function(){

    //heyThere.init();

    $(document).on('click', '.js-chatOpt', function(){
        chatApp.init($(this));
    });

    $(document).on('click', '.js-chatStart', function(){
        chatApp.outsider($(this));
    });



    //NAV BEING FIXED
    var $underNav = $('.under-nav');
    var underNavFixed = false;
    var $void = $('.void');
    $(window).scroll(function() {
       if ( $(document).height() <= ($(window).height() + $(window).scrollTop()) ) {
           if(underNavFixed) {
               $underNav.removeClass('jsFixed');
               underNavFixed = false;
           } else {
               $underNav.addClass('jsFixed');
               underNavFixed = true;
           }
       }
    });

    // doting on under section
    $(document)
        .on('mouseenter', '.js-underDotingTrigger', function(){
            $(this).closest('.js-underDotingTarget').addClass('jsGlitching');
        })
        .on('mouseleave', '.js-underDotingTrigger', function(){
            $(this).closest('.js-underDotingTarget').removeClass('jsGlitching');
    });
});
