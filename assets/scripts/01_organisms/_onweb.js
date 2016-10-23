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
        init
    }
}();

if (!Modernizr.touchevents) {
    $(function lookIntoOnWww(){
        var $cv = $("#cv"),
            offsetCv,
            windowHeight = window.innerHeight;
            triggerOnWebInit = true;

        $(window).scroll(function() {
            offsetCv = $cv.offset().top;

            if(triggerOnWebInit && $(window).scrollTop() + windowHeight > offsetCv) {
                triggerOnWebInit = false;
                OnWeb.init();
            }
        });
    });
}
