var OnWeb = function() {
    var $onWebLink,
        chatContent = TalkChat.conversation,
        contOnWeb = chatContent.onWeb,
        social = contOnWeb.social,
        intro = contOnWeb.intro,
        dd = contOnWeb.dd,
        baffleWebSite,
        baffleWebDd,
        elSocial = getElSocial();
        elOnWeb = $(`<div class="onWeb cv-dl">
                    <div class="onWeb-site">
                        <span class="cv-dt js-onWeb-site">${intro}</span>
                    </div>
                    <div class="onWeb-href">
                        ${elSocial}
                    </div>
                    <div class="onWeb-desc">
                        <span class="cv-dd js-onWeb-dd">${dd}</span>
                    </div>
                </div>`);


    function getElSocial() {
        var elLinks = "";
        var test = "tess delete me";

        for (var key in social) {
            if(social.hasOwnProperty(key)) {
                elLinks += `<a href="${social[key].link}" target="_blank" title="sandrina's ${key}" class="js-onWeb-link" data-site="${key}" data-dd="${social[key].dd}">
                                <i class="fa fa-${key}"></i>
                            </a>`
            }
        }
        return elLinks;
    }

    function ascii() {

        var winHeight = $(window).innerHeight(),
            i,
            scrolled,
            $ascii = $(".cv-ascii");
            $mee = $(".cv-ascii").find('.mee');
            $meeLength = $mee.length;

        $(window).on('scroll',function(){

          $ascii.css('bottom', $('#cv').offset().top + $(window).scrollTop()*0.9 * -1);
          $mee.css('display','block');
          scrolled = $(window).scrollTop();

          if (scrolled%3 == 0) {
              i = scrolled%$meeLength;
              $mee.css('opacity', 0);
              $('.myself'+i).css('opacity', 1);
          }

        });
    }

    ascii();

    function cvShowing() {

        //show Titles
        $('.js-cvShowTitle').each(function(){

            var $t = $(this),
                shut = false;

            $t.addClass('is-js');

            $(document).scroll(function(){
                if($(this).scrollTop() + window.innerHeight*0.4 > $t.offset().top) {
                   if (!shut) {
                        $t.addClass('is-active');
                        shut = true;
                   }
                }
            });
        });

        //show Lists
        $('.js-cvShow').each(function(){

            var $t = $(this),
                shut = false;

            $t.addClass('is-js');

            $(document).scroll(function(){
                if(!shut && $(this).scrollTop() + window.innerHeight*0.6 > $t.offset().top) {
                   $t.addClass('is-active');
                   shut = true;
                }
            });

        });

    }

    function init() {
        $('.js-onWeb-remove').remove();
        $('.js-onWebAfter').after(elOnWeb);

        $onWebLink = $('.js-onWeb-site').parent(),
        baffleWebSite = baffle('.js-onWeb-site'),
        baffleWebDd = baffle('.js-onWeb-dd');

        $(document).on('mouseenter', '.js-onWeb-link', function(){
            baffleWebSite
                .start()
                .text(currentText => $(this).data('site'))
                .reveal(150, 150);

            baffleWebDd
                .start()
                .text(currentText => $(this).data('dd'))
                .reveal(150, 150);

            $onWebLink.attr('href', $(this).attr('href')).attr('target', '_blank');
        }).on('mouseleave', '.js-onWeb-link', function(){
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
    }

    return {
        init,
        cvShowing
    }
}();


$(function lookIntoOnWww(){
    var $cv = $("#cv"),
        offsetCv,
        windowHeight = window.innerHeight;
        triggerOnWebInit = true;

    $(window).scroll(function() {
        offsetCv = $cv.offset().top;

        if(triggerOnWebInit && $(window).scrollTop() + windowHeight - 45 > offsetCv) {
            triggerOnWebInit = false;

            $('.navCV').remove();
            cvProjects.setProjLoop(true);

            if (!Modernizr.touchevents) {
                OnWeb.init();
            }

            OnWeb.cvShowing();
        }
    });
});
