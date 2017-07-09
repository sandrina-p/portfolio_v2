var Psst = function() {
    var { hasTouchEvents } = Util,
        chatContent = TalkChat.conversation;

    // change message only for touch mobile (no bot there)
    function showScrollify($jsPsst) {
        var $scrolled = $('.js-scrolled'),
            newMargin = 400,
            scrolledRecord = getStorage();

        $jsPsst.find('.psst-title').html(chatContent.behaviour.psstMob[0]);
        $jsPsst.find('.psst-parag').html(chatContent.behaviour.psstMob[1]+'<br><br>');
        $jsPsst.find('button').remove();

        getScrolledText();

        $(window).scroll(function() {
            getScrolledText();

            // increase document height to keep scrolling
            if ($(document).height() <= (window.innerHeight + $(window).scrollTop())) {
                newMargin += 800;
                $('#cv').css({ 'margin-bottom': newMargin});
            }
        });

        function getScrolledText() {
            // check if it is a new record or not
            if ($(window).scrollTop() > scrolledRecord) {
                scrolledRecord = $(window).scrollTop();
                $scrolled.text(scrolledRecord);
            } else {
                $scrolled.text( Math.abs($(window).scrollTop() - scrolledRecord) +' until new record');
            }
        }

        function getStorage() {
            try { // Safari BUG fixed: SecurityError: DOM Exception 18: An attempt was made to break through the security policy of the user agent.
                var storedRecord = localStorage.getItem('scrolledRecord');
                return !isNaN(storedRecord) ? storedRecord : 1;
            } catch (e) {
                return 1;
            }
        }

        (function setStorage() {
            localStorage.setItem('scrolledRecord', JSON.stringify(scrolledRecord));
            setTimeout(() => setStorage(), 1000);
        })();
    }

    // change message on psstt when clicked on Projects
    function changePsst(context) {
        var $jsPsst = $('.js-psst');
        var psstText = chatContent.behaviour[context];

        if (!hasTouchEvents) { // trigger focus on bot
            $jsPsst.find('.psst-title').html(psstText[0]);
            $jsPsst.find('.psst-parag').html(psstText[1]);
            $jsPsst.find('button[name="true"]').remove();
            $jsPsst.find('button[name="false"]').html(psstText[2]);

        } else { // trigger scroll
            setTimeout(function () {
                showScrollify($jsPsst);
            }, 5000);
        }
    }

    $(function hideBotTrigger(){
        if(hasTouchEvents) {
            $('.js-botTrigger').removeClass('js-botTrigger').addClass('js-scrollify').text('not really');
        }
    });

    $(document).on('click', '.js-botProjects', function(){
        var $NavItemPractice = $('.js-chatSection[data-section="practice"]');
        $NavItemPractice.trigger('click'); // it will call Psst.changePsst().

        if (hasTouchEvents) {
            // FIXME: DRY here please... it's from _chat.js -> scrollSafe()
            var wScroll = $(window).scrollTop(),
                wHeight = window.innerHeight,
                pHeight =  $NavItemPractice.height(),
                pScroll = $NavItemPractice.offset().top,
                tooClose = pScroll - wScroll + pHeight > wHeight/2;

            // too close of above the fold || away from the view window
            if (tooClose || pScroll < wScroll) {
                $('body').animate({ scrollTop: pScroll + pHeight - wHeight/4*1 }, 1000, 'swing');
            }
        }
    });

    $(document).on('click', '.js-scrollify', function(){
        showScrollify($('.js-psst'));
    });

    $(document).on('click', '.js-chatSection[data-section="practice"]', function(){
        Psst.changePsst('psstChat');
    });

    return {
        changePsst
    };
}();
