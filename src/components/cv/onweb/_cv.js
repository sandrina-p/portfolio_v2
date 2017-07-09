/* global TalkChat:false, baffle:false, cvProjects: false, Util:false, myselfASCII:false */
/* exported currentText */
/* global currentText */

var onCV = function() {
    var $onWebLink,
        chatContent = TalkChat.conversation,
        contOnWeb = chatContent.onWeb,
        intro = contOnWeb.intro,
        dd = contOnWeb.dd,
        baffleWebSite,
        baffleWebDd;

    function asciiMotion() {
        var firstScroll = true,
            scrolled,
            $ascii = $('.cv-ascii');

        $ascii.append(myselfASCII);

        var $mee = $('.cv-ascii').find('.mee');
        $mee.css('display', 'block');

        var $meeLength = $mee.length,
            asciiOffsetTop,
            asciiOffsetTopWithHeight;

        $(window).on('scroll',function() {
            scrolled = $(window).scrollTop();

            if (firstScroll) {
                asciiOffsetTop = $ascii.offset().top;
                asciiOffsetTopWithHeight = asciiOffsetTop + $mee.innerHeight();
                firstScroll = false;
            }

            if (!Util.isOnViewport(asciiOffsetTop, asciiOffsetTopWithHeight, scrolled)) {
                return false;
            }

            if (!Util.untilTablet) {
                $ascii.css('transform', `translateY(${(scrolled - asciiOffsetTopWithHeight) * 100 / window.innerHeight + 60}%)`);
            }

            if (scrolled % 4 == 0) {
                $mee.css('opacity', 0);
                $('.myself'+ (scrolled%$meeLength)).css('opacity', 1);
            }
        });
    }

    asciiMotion();

    function showContent() {
        // show Titles
        $('.js-cvShowTitle, .js-cvShow').each(function(){
            var $t = $(this),
                shut = false,
                windowHeight = window.innerHeight*0.7,
                thisOffset = $t.offset().top;


            $t.addClass('is-js');

            $(document).scroll(function(){
                if($(this).scrollTop() + windowHeight > thisOffset) {
                    if (!shut) {
                        $t.addClass('is-active');
                        shut = true;
                    }
                }
            });
        });
    }

    function socialInteraction() {
        $onWebLink = $('.js-onWeb-site').parent(),
        baffleWebSite = baffle('.js-onWeb-site'),
        baffleWebDd = baffle('.js-onWeb-dd');

        /* eslint-disable no-unused-vars */
        $(document).on('mouseenter focus', '.js-onWeb-link', function(){
            baffleWebSite
                .start()
                .text(currentText => $(this).data('site'))
                .reveal(150, 150);

            baffleWebDd
                .start()
                .text(currentText => $(this).data('dd'))
                .reveal(150, 150);

            $onWebLink.attr('href', $(this).attr('href')).attr('target', '_blank');
        }).on('mouseleave blur', '.js-onWeb-link', function(){
            baffleWebSite
                .start()
                .text(currentText => intro)
                .reveal(150, 150);

            baffleWebDd
                .start()
                .text(currentText => dd)
                .reveal(150, 150);
            $onWebLink.removeAttr('href');
        });
        /* eslint-enable no-unused-vars */
    }

    return {
        socialInteraction,
        showContent
    };
}();


$(function lookIntoOnWww(){
    var $cv = $('#cv'),
        offsetCv = $cv.offset().top,
        triggerOnWebInit = true;

    $(window).scroll(function() {
        if(triggerOnWebInit && $(window).scrollTop() + Util.wHeight - 45 > offsetCv) {
            triggerOnWebInit = false;

            $('.navCV').remove();
            cvProjects.setProjLoop(true);

            if (!Util.hasTouchEvents) {
                onCV.socialInteraction();
            }

            onCV.showContent();
        }
    });
});
