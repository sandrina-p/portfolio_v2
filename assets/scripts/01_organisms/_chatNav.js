var chatNav = function() {

    $(function navInit() {

        var $heyThereIntro = $('.heyThere-intro'),
            $nav = $('#chat-nav'),
            baffleBg = baffle("#btn-bg"),
            baffleTh = baffle("#btn-th"),
            bafflePr = baffle("#btn-pr");

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
            if($heyThereIntro.css('opacity') == "1") {
                $('#theory, #background, #practice').removeClass('jsLoading');
                baffleBg.reveal(400, 750);
                baffleTh.reveal(400, 250);
                bafflePr.reveal(400, 500);
            } else {
                setTimeout(function () {
                    showNav();
                }, 500);
            }
        })();

        function navTranslate(thisId) {
            var navWidth = untilTablet ? 0 : 16, //padding
                padd = 16;
                thisId = thisId || null;

            $nav.children().each(function() {
                if(thisId && $(this).attr('id') == thisId) {
                    return;
                }

                $(this).css({'transform': 'translate('+navWidth+'px, 0)'});
                navWidth += $(this).width();
            });
        }

        $(document).on('click', '.chatSection.jsOnNav', function(){
            navTranslate( $(this).attr('id') );

            $(this).css({'transform': 'translate(0, 0)'});
            $(this).removeClass('jsOnNav');
            $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                $(this).insertBefore('#chat-nav');
            });
        });

        setTimeout(function () {
            navTranslate();
        }, 500);

        // $(document).on('click', '.chat-newnav button', function(){
        //     $navClone = $('#chat-nav').clone().attr('id', 'chat-navClone');
        //     $('#chat').append($navClone);
        //     $(this).css({'opacity':'0'});
        //     navTranslate( $(this).attr('id') );
        //
        //     $(this).css({'transform': 'translate(0, 0)'});
        //     $(this).removeClass('jsOnNav');
        //     $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
        //         $(this).insertBefore('#chat-nav');
        //     });
        // });
    });
}();
