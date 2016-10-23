var chatApp = function() {
    //general chat classes
    var chatContent = TalkChat.conversation,
        mainSections = TalkChat.mainSections,
        $chatId = $('#chat'),
        $navSections = $(".navSections"),
        $heyThere = $('.heyThere-intro'),
        chatPClass = '.chatPart-',
        botClass = chatPClass+'bot',

        //crucial content from each part
        section, //string - section of the clicked button, ex: 'background';
        $currentPart, //jquery - id of the clicked button parent chatPart ex: $('#chatpart-intro');
        text, // string - simple text of the bot;
        title, // string - title of the new part ex: 'before that'
        id, // string -> ex : 'rede-expressos'

        //some numbers to better crontrol auto scroll and @medias
        mediaQHeight = 550,
        wHeight, untilTablet;


    // ------ define if is section or part ------ //
    function clickOption($option) {
        wHeight =  window.innerHeight, //FIXME strange bug with safari isn't always right
        untilTablet = window.innerWidth < 750, //FIXME strange bug with safari isn't always right

        section = $option.closest('.chatSection').attr('id'),
        $currentPart = $option.closest('.chatPart'),
        btnName = $option.text(),
        title = $option.attr('name'),
        id = UtilFuncs.stringSlugLower(title);

        if (mainSections.indexOf(btnName) > -1) {
            $option.attr('disabled', 'disabled');
            buildSection();
        } else {
            animateClickedOption($option);
            buildSentence($option);
        }
    }

    // ------ GENERAL STUFF ----- //
    //when the user clicks on a chat button, it runs away.
    function animateClickedOption($option) {
        finishLoading($option.parent());
    }

    function animateClickedOptionMob($option, $part) {
        var $parent = $option.parent();
            thisTop = $parent.offset().top,
            thisLeft = $parent.offset().left,

            $newTitle = $part.find(chatPClass+"title"),
            otherTop = $newTitle.offset().top,
            otherLeft = $newTitle.offset().left,

            thisX = otherLeft - thisLeft,
            thisY = otherTop - thisTop;

        $parent.css({'transform': 'translate('+thisX+'px, '+thisY+'px)'});

        //FIXME ai ai ai ai so ugly - have timeout to stretch height (slideUp() with css) and remove();
        setTimeout(function () {
            $parent.addClass('remove');

            setTimeout(function () {
                if ($parent.siblings == 0) {
                    $parent.remove();
                } else if ($parent.siblings('.remove') == 1){
                    $parent.remove();
                }
            }, 250);

        }, 500);
    }

    function bodyScrollTop(value) {
        $('body').animate({ scrollTop: value }, 1000, 'swing');
    }

    // ------ DOM STRUCTURE ELEMENTS ------ //
    function getElSection(trigger) {
        return $("<div class='chatSection' id='"+trigger+"'></div>");
    }

    function getElBtn(text) {
        return "<div class='chatPart-option jsLoading'>"
                    +"<button type='button' name='"+text+"' class='btnB jsLoading js-chatOpt'>"+text+"</button>"
                +"</div>";
    }

    function getElPart() {
        return  $("<div class='chatPart' id='"+id+"'>"
                    +"<div class='chatPart-human'>"
                        +"<p class='chatPart-title jsLoading'>"+title+"</p>"
                    +"</div>"
                    +"<div class='chatPart-bot'>"
                        +"<p class='chatPart-text jsLoading'>"+text+"</p>"
                        // options
                    +"</div>"
                +"</div>");
    }

    // ------ GET CHAT OPTION ------ //
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

                //if key isn't on clicked && only first 2 keys found && key isn't clicked obj itself
                if (clicked.indexOf(key) < 0 && chatOptions.length < 2 && key !== "clicked") {
                    chatBtn = getElBtn(key);
                    chatOptions.push(chatBtn);
                    objSection['clicked'].push(key);
                }

                if (chatOptions.length == 2) {
                    break;
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
        if (!untilTablet) {
            var wScroll = $(window).scrollTop(),
                wHeight = window.innerHeight;
                pHeight =  $currentPart.height(),
                pScroll = $currentPart.offset().top,
                tooClose = pScroll - wScroll + pHeight > wHeight/2;

            // too close of above the fold || away from the view window
            if (tooClose || pScroll < wScroll) {
                bodyScrollTop(pScroll + pHeight - wHeight/4*1);
            }
        }
    }

    function scrollFinal($part) {
        if(!untilTablet && screen.height > mediaQHeight) {
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

    function finishLoading($element) {
        $element.removeClass('jsLoading');
    }

    // ------ SHOWING A PART PROCESS - HEY TO TIMEOUTS! ------ //
    function showingCommon($part, diffPartCallBack, $option) {
        var loadingTimeXtext = (section == "practice") ? 0 : $part.find(chatPClass+"human").text().length;
        $option = $option || null;

        // if is 1st part (begin of a section) guide on parent
        // otherwise guide on previous part (currentPart where the user clicked);
        $part.is(':first-child')
            ? scrollSafe($part.parent())
            : scrollSafe($part.prev());

        $part.find(chatPClass+"human").slideDown();

        if (untilTablet && $option) {
            animateClickedOptionMob($option, $part);
        }

        finishLoading($part.find(chatPClass+"title"));
        $part.find(chatPClass+"bot").slideDown();

        setTimeout(function () {
            diffPartCallBack($part, chatPClass);
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
        // show 1st btn and then 2nd
        setTimeout(function () {
            finishLoading($part.find(chatPClass+"option:first-of-type button"));
            scrollFinal($part);

            // FIXME better buttons target
            setTimeout(function () {
                finishLoading($part.find(chatPClass+"option:last-of-type button") );
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

        var ElChatPart = $("<div class='chatPart-bot'>"
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
    function buildSentence($option) {

        //get text and remove it from chatContent.
        text = chatContent[section][title];
        delete chatContent[section][title];

        //build part
        var ElChatPart = getElPart(),
            ElChatOptions = getOptions(section);

        ElChatPart.find(botClass).append(ElChatOptions);
        $currentPart.after(ElChatPart);

        $newPart = $currentPart.next();
        showingCommon($newPart, showingSentence, $option);
    }

    // ------ project ------ //
    function buildProject($part) {
        setTimeout(function () {
            Projects.startIt(section);
            scrollSafe($('#projects')); //TODO adjust until top of screen
        }, 600);
    }

    $(document).on('click', '.js-chatOpt', function(){
        clickOption($(this));
    });

    $(document).one('click', '.js-chatOpt', function(){
        Psst.changePsst('psstChat');
    });
}();
