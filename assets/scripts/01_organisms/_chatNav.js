var ChatNav = function() {
    var mainSections = TalkChat.mainSections,
        untilTablet = UtilFuncs.untilTablet,
        isNavReady = false,
        firstShowNav = true;

    //it has to wait for DOM ready to make sure all elements are ready to be shown
    $(function navInit() {
        var $heyThereIntro = $('.heyThere-intro'),
            $nav = $('#chat-nav'),
            $navSections = $nav.find('[id^="btn-"]');
            baffleBg = baffle('#'+$navSections[0].id),
            baffleTh = baffle('#'+$navSections[1].id),
            bafflePr = baffle('#'+$navSections[2].id);

        baffleBg
            .start()
            .text(currentText => mainSections[0]);

        baffleTh
            .start()
            .text(currentText => mainSections[1]);

        bafflePr
            .start()
            .text(currentText => mainSections[2]);


        (function showNav() {
            if($heyThereIntro.css('opacity') > "0.9") { //wtf iphone6, why the fuck you return 0.9999989867210388 on console.
                $('#chat, #chat-nav > *').removeClass('jsLoading');
                baffleBg.reveal(400, 450);
                baffleTh.reveal(400, 250);
                bafflePr.reveal(400, 300);
                setTimeout(function () {
                    isNavReady = true; //to trigger _hashs.js if needed
                }, 1000);
            } else {
                setTimeout(() => showNav(), 300);
            }
        })();

        setTimeout(() => navTranslate(), 1000);


        function navTranslate(thisId = null) {
            var navWidth = untilTablet ? 0 : 20, //padding
                padd = 16;

            $nav.children().each(function() {
                if (thisId && $(this).attr('id') == thisId) {
                    $(this).css({'transform': 'translateX(0px)'});
                    return;
                }

                navWidth = untilTablet ? navWidth : navWidth + 36;
                $(this).css({'transform': 'translateX('+navWidth+'px)'});
                navWidth += $(this).width();
                console.log($(this).width());
            });

            //NOTE: Prevent bug on Safari. Sometimes it loads too soon. Even with timeout(),
            // without knowing the real navWidth value.
            if (firstShowNav && navWidth < 150) {
                console.log('upps... navTranslate() was loaded too soon');
                GAcustom.sendToGA(`&ec=bug&ea=navSoon`);
                setTimeout(function () {
                    navTranslate();
                }, 250);
            } else {
                firstShowNav = false;
                console.log('nav loaded without problems');
            }
        }

        //TODO hide bot on touch devices
        if (Modernizr.touchevents) {
            $('#btn-bot').remove();
        }

        $(document).on('click', '.jsOnNav', function(){
            Hashs.set( $(this).find('.chatPart-title').text() );

            navTranslate( $(this).attr('id') );
            $(this).css({'transform': 'translate(0, 0)'});
            $(this).removeClass('jsOnNav');
            $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                $(this).insertBefore('#chat-nav');
            });
        });

    });

    function checkIsNavReady() {
        return isNavReady;
    }

    return {
        checkIsNavReady
    }
}();
