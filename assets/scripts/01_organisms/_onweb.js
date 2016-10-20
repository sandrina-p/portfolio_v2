var OnWeb = function() {
    var $onWebLink,
        baffleWebSite,
        baffleWebDd,
        elOnWeb = $(`<div class='onWeb cv-dl'>
                    <div class='onWeb-site'>
                        <span class='cv-dt js-onWeb-site'>my social networks</span>
                    </div>
                    <div class='onWeb-href'>
                        <a href='//codepen.io/sandrina-p' target='_blank' title='sandrina's stackoverflow' class='js-onWeb-link' data-site='codepen' data-dd='because coding without fun, it&#39;s just boring'>
                            <i class='fa fa-codepen'></i>
                        </a>
                        <a href='//github.com/sandrina-p' target='_blank' title='sandrina's stackoverflow' class='js-onWeb-link' data-site='github' data-dd='Sharing it&#39;s what make us better'>
                            <i class='fa fa-github'></i>
                        </a>
                        <a href='//stackoverflow.com/story/sandrina' target='_blank' title='sandrina's stackoverflow' class='js-onWeb-link' data-site='stackoverflow' data-dd='helping others is as important as being helped'>
                            <i class='fa fa-stack-overflow'></i>
                        </a>
                        <a href='//www.behance.net/sandrin4p' target='_blank' title='sandrina's stackoverflow' class='js-onWeb-link' data-site='behance' data-dd='it can&#39;t be all about code'>
                            <i class='fa fa-behance'></i>
                        </a>
                    </div>
                    <div class='onWeb-desc'>
                        <span class='cv-dd js-onWeb-dd'>not a big fan of facebook</span>
                    </div>
                </div>`);

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
