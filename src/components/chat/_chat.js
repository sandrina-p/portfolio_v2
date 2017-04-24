/* global
    TalkChat:false,
    UtilFuncs: false,
    Projects: false,
    Hashs: false,
*/
/* exported ChatApp */

var ChatApp = function() {
    // general chat classes
    var chatContent = TalkChat.conversation,
        mainSections = TalkChat.mainSections,
        $chatId = $('#chat'),
        chatPClass = '.chatPart-',
        botClass = chatPClass+'bot',
        btnName,

        // crucial content from each part
        section, // string - section of the clicked button, ex: 'background';
        $currentPart, // jquery - id of the clicked button parent chatPart ex: $('#chatpart-intro');
        text, // string - simple text of the bot;
        title, // string - title of the new part ex: 'before that'
        id, // string -> ex : 'rede-expressos'

        // some numbers to better control auto scroll and @medias
        // mediaQHeight = 550,
        wHeight,
        untilTablet;


    // ------ define if is section or part ------ //
    function clickOption($option) {
        // FIXME strange bug with safari isn't always right wHeight & untilTablet
        untilTablet = window.innerWidth < 750,

        section = $option.closest('.chatSection').attr('id'),
        $currentPart = $option.closest('.chatPart'),
        btnName = $option.text(),
        title = $option.attr('name'),
        id = UtilFuncs.stringSlugLower(title);

        animateClickedOption($option);
        buildSentence($option);
    }

    // ------ GENERAL STUFF ----- //
    // when the user clicks on a chat button, it runs away.
    function animateClickedOption($option) {
        finishLoading($option.parent());
    }

    function animateClickedOptionMob($option, $part) {
        console.log('animateClickedOptionMob() triggered');
        var $parent = $option.parent(),
            thisTop = $parent.offset().top,
            thisLeft = $parent.offset().left,

            $newTitle = $part.find(`${chatPClass}title`),
            otherTop = $newTitle.offset().top,
            otherLeft = $newTitle.offset().left,

            thisX = otherLeft - thisLeft,
            thisY = otherTop - thisTop;

        $parent.css({'transform': `translate(${thisX}px, ${thisY}px)`});

        // FIXME ai ai ai ai so ugly - have timeout to stretch height (slideUp() with css) and remove();
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
    function getElBtn(text) {
        return '<div class="chatPart-option jsLoading">'
                    +`<button type="button" name="${text}" class="btnB jsLoading js-chatOpt" data-gaec="chat" aria-label="Know more about ${text}">${text}</button>`
                +'</div>';
    }

    function getElPart() {
        return  $(`<div class="chatPart" id="${id}" aria-live="polite">`
                    +'<div class="chatPart-human">'
                        +`<h3 class="chatPart-title jsLoading">${title}</h3>`
                    +'</div>'
                    +'<div class="chatPart-bot">'
                        +`<p class="chatPart-text jsLoading">${text}</p>`
                        // options
                    +'</div>'
                +'</div>');
    }

    function getOptions(section) {
        var objSection = chatContent[section],
            chatOptions = [],
            chatBtn,
            clicked; // prevent showing the same button twice.

        for (var key in objSection) {
            if(objSection.hasOwnProperty(key)) {

                if(!objSection['clicked']) {
                    objSection['clicked'] = [];
                }
                clicked = objSection['clicked'];

                // if key isn't on clicked && only first 2 keys found && key isn't clicked obj itself
                if (clicked.indexOf(key) < 0 && chatOptions.length < 2 && key !== 'clicked') {
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
    // 1. scrollSafe() - make sure newPart is 1/4 of the window height.
    function scrollSafe($currentPart) {
        if (!untilTablet) {
            var wScroll = $(window).scrollTop(),
                wHeight =  window.innerHeight,
                pHeight =  $currentPart.height(),
                pScroll = $currentPart.offset().top,
                tooClose = pScroll - wScroll + pHeight > wHeight/2;

            // too close of above the fold || away from the view window
            if (tooClose || pScroll < wScroll) {
                bodyScrollTop(pScroll + pHeight - wHeight/4);
            }
        }
    }

    function finishLoading($element) {
        $element.removeClass('jsLoading');
    }

    // ------ SHOWING A PART PROCESS - HEY TO TIMEOUTS! ------ //
    function showingCommon($part, diffPartCallBack, $option) {
        // var loadingTimeXtext = (section == "practice") ? 0 : $part.find(chatPClass+"human").text().length;
        $option = $option || null;

        // if is 1st part (begin of a section) guide on parent
        // otherwise guide on previous part (currentPart where the user clicked);
        $part.is(':first-child')
            ? scrollSafe($part.parent())
            : scrollSafe($part.prev());

        $part.find(`${chatPClass}human`).slideDown();

        if (untilTablet && $option) {
            animateClickedOptionMob($option, $part);
        }

        finishLoading($part.find(`${chatPClass}title`));
        $part.find(`${chatPClass}bot`).slideDown();

        setTimeout(function () {
            diffPartCallBack($part, chatPClass);
        }, 500);
    }

    function showingSentence($part) {
        var $sentence = $part.find(`${chatPClass}text`);
        finishLoading($sentence);
        showingOptions($part);
    }

    function showingPractice($part){
        finishLoading($part.find(`${chatPClass}text`));
        buildProject($part);
    }

    function showingOptions($part) {
        // show 1st btn and then 2nd
        setTimeout(function () {
            finishLoading($part.find(`${chatPClass}option:first-of-type .js-chatOpt`));

            setTimeout(function () {                    // REVIEW better buttons target
                finishLoading($part.find(`${chatPClass}option:last-of-type .js-chatOpt`));

                // a11y focus next button
                $part.find(`${chatPClass}option:first-of-type .js-chatOpt`).focus();
            }, 300);
        }, 400);
    }

    // ------ TYPES OF PART BUILD ------ //
    // ------ section ------ //
    function buildSection($chatSection) {
        title = $chatSection.text(),
        section = $chatSection.attr('data-section');

        text = chatContent[section]['intro'];
        delete chatContent[section]['intro'];

        var $section =
                $('<section class="chatSection jsLoading" id="'+section+'">'
                    +'<div class="chatPart" id="'+section+'-intro" aria-live="polite">'
                        +'<div class="chatPart-human">'
                            +'<h2 class="chatPart-title jsLoading">'+title+'</h3>'
                        +'</div>'
                    +'</div>'
                +'</section>'),
            ElChatPart;

        setTimeout(function () {
            $chatId.append($section);

            var $sectionIntro = $('#'+section+'-intro');

            ElChatPart =
                $('<div class="chatPart-bot">'
                    +`<p class="chatPart-text jsLoading">${text}</p>`
                +'</div>');

            $sectionIntro.append(ElChatPart);

            if (section == 'practice') {
                showingCommon($sectionIntro, showingPractice);
            } else {
                var ElChatOptions = getOptions(title);
                $sectionIntro.find(botClass).append(ElChatOptions);
                showingCommon($sectionIntro, showingSentence);
            }
        }, 200);
    }

    // ------ talk ------ //
    function buildSentence($option) {

        // get text and remove it from chatContent.
        text = chatContent[section][title];
        delete chatContent[section][title];

        // build part
        var ElChatPart = getElPart(),
            ElChatOptions = getOptions(section);

        ElChatPart.find(botClass).append(ElChatOptions);
        $currentPart.after(ElChatPart);

        var $newPart = $currentPart.next();
        showingCommon($newPart, showingSentence, $option);
    }

    // ------ project ------ //
    function buildProject() {
        setTimeout(function () {
            Projects.startIt(section);
            // scrollSafe($('#projects')); //TODO adjust until top of screen
        }, 600);
    }

    $(document).on('click', '.js-chatOpt', function(){
        clickOption($(this));
    });

    $(document).on('click', '.js-chatSection', function() {
        if (!$(this).hasClass('is-selected') && !$(this).hasClass('js-botTrigger')) {
            $(this)
                .addClass('is-selected')
                .attr('aria-expanded', true);
            buildSection($(this));
        }

        Hashs.set($(this).text());
    });

    return {
        scrollSafe
    };
}();
