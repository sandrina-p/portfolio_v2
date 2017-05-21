/* global
    TalkChat:false,
    Util: false,
    Projects: false,
    Hashs: false,
*/
/* exported ChatApp */

var ChatApp = function() {
    var chatContent = TalkChat.conversation,
        $chatId = $('#chat'),
        chatPClass = '.chatPart-',
        botClass = chatPClass+'bot',

        // crucial content from each part
        section, // string - section of the clicked button, ex: 'practice';
        $currentPart, // jquery - id of the clicked button parent chatPart ex: $('#chatpart-intro');
        id, // string - id of part ex: 'hobbies'
        title, // string - title of the new part ex: 'before that'
        sentence, // string - sentece shown on that part

        // some numbers to better control auto scroll and @medias
        // mediaQHeight = 550,
        wHeight,
        untilTablet;


    function clickOption($option) {
        // FIXME strange bug with safari isn't always right wHeight & untilTablet
        untilTablet = window.innerWidth < 750,

        section = $option.closest('.chatSection').attr('id'),
        $currentPart = $option.closest('.chatPart'),
        title = $option.attr('name'),
        id = Util.stringSlugLower(title);

        animateClickedOption($option);
        buildSentence($option);
    }

    function clickSection($section) {
        var $this = $($section);

        Hashs.set($this.text());

        // prevent buildSection twice
        if ($this.hasClass('is-selected') || $this.hasClass('js-botTrigger')) {
            return false;
        }

        $this.addClass('is-selected').attr('aria-expanded', true);
        buildSection($this);

        $('.navCV').remove();
    }

    // ------ GENERAL STUFF ----- //
    // when the user clicks on a chat button, it runs away.
    function animateClickedOption($option) {
        var $optionParent = $option.parent();
        finishLoading($optionParent);
        setTimeout(function () {
            $optionParent.remove();
        }, 250);
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

        // FIXME - have timeout to stretch height (slideUp() with css) and remove();
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
    function getElPart() {
        return  $(`<div class="chatPart" id="${id}">`
                    +getElTitle(title)
                    +getElSentence()
                +'</div>');
    }

    function getElTitle(title) {
        return '<div class="chatPart-human">'
                +`<h3 class="chatPart-title jsLoading" tabindex="0">${title}</h3>`
            +'</div>';
    }
    function getElSentence() {
        return '<div class="chatPart-bot">'
                    +`<p class="chatPart-text jsLoading" role="alert" aria-atomic="true">${sentence}</p>`
                    // options
                +'</div>';
    }

    function getElBtn(text) {
        return '<div class="chatPart-option jsLoading">'
                    +`<button type="button" name="${text}" class="btnB jsLoading js-chatOpt" data-gaec="chat" aria-label="Know more about ${text}">${text}</button>`
                +'</div>';
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

        // a11y purposes
        $part.find(`${chatPClass}title`).focus();
    }

    function showingSentence($part) {
        var $sentence = $part.find(`${chatPClass}text`);
        finishLoading($sentence);
        showingOptions($part);
    }

    function showingPractice($part){
        finishLoading($part.find(`${chatPClass}text`));
        setTimeout(function () {
            Projects.startIt(section);
        }, 400);
    }

    function showingOptions($part) {
        // show 1st btn and then 2nd
        setTimeout(function () {
            finishLoading($part.find(`${chatPClass}option:first-of-type .js-chatOpt`));

            setTimeout(function () {                    // REVIEW better buttons target
                finishLoading($part.find(`${chatPClass}option:last-of-type .js-chatOpt`));

                // a11y focus text
                $part.find(`${chatPClass}text`).focus();
            }, 300);
        }, 400);
    }

    // ------ TYPES OF PART BUILD ------ //
    // ------ section ------ //
    function buildSection($chatSection) {
        var $sectionIntro = '';
        title = $chatSection.text(),
        section = $chatSection.attr('data-section');

        sentence = chatContent[section]['intro'];
        delete chatContent[section]['intro'];

        $('<section/>', {
            'id': section,
            'class': 'chatSection jsLoading',
            'html': `<div class="chatPart" id="${section}-intro">`
                    +getElTitle(title)
                    +getElSentence()
                +'</div>',
        }).appendTo($chatId);

        $sectionIntro = $(`#${section}-intro`);

        if (section === 'practice') {
            showingCommon($sectionIntro, showingPractice);
        } else {
            $sectionIntro.find(botClass).append(getOptions(title));

            showingCommon($sectionIntro, showingSentence);
        }
    }

    // ------ talk ------ //
    function buildSentence($option) {
        // get text and remove it from chatContent.
        sentence = chatContent[section][title];
        delete chatContent[section][title];

        // build part
        var $ChatPart = getElPart(),
            $ChatOptions = getOptions(section);

        $ChatPart.find(botClass).append($ChatOptions);
        $currentPart.after($ChatPart);

        showingCommon($currentPart.next(), showingSentence, $option);
    }


    $(document).on('click', '.js-chatOpt', function(){
        clickOption($(this));
    });

    $(document).on('click', '.js-chatSection', function() {
        clickSection($(this));
    });

    return {
        scrollSafe
    };
}();
