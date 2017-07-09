/* global
    TalkChat: false,
    baffle: false,
    Util: false,
*/
/* exported Nav */

var Nav = function() {
    var mainSections = TalkChat.mainSections,
        isNavReady = false,
        $heyThereIntro,
        $nav,
        $navItems,
        baffle0,
        baffle1,
        baffle2;

    $(document).ready(navInit);

    function navInit() {
        $heyThereIntro = $('.heyThere-intro');
        $nav = $('.js-Nav');
        $navItems = $('.js-NavItem');

        setTimeout(function () {
            showNav();
        }, 1500);
    }

    function showNav() {
        console.log('showNav()');
        // Bug on iphone6 returns 0.9999989867210388 instead of 1.
        if($heyThereIntro.css('opacity') >= '0.9') {
            startBaffle();

            $nav.removeClass('is-loading');
            $navItems.addClass('is-active');

            setTimeout(function () {
                isNavReady = true; // to trigger _hashs.js if needed
            }, 1000);

        } else {
            setTimeout(() => showNav(), 300);
        }
    }

    function startBaffle() {
        baffle0 = baffle($navItems[0]),
        baffle1 = baffle($navItems[1]),
        baffle2 = baffle($navItems[2]);

        /* eslint-disable no-unused-vars */
        baffle0.start().text(currentText => mainSections[0]);
        baffle1.start().text(currentText => mainSections[1]);
        baffle2.start().text(currentText => mainSections[2]);
        /* eslint-enable no-unused-vars */

        baffle0.reveal(400, 450);
        baffle1.reveal(400, 250);
        baffle2.reveal(400, 300);
    }

    function checkIsNavReady() {
        return isNavReady;
    }

    return {
        checkIsNavReady
    };
}();
