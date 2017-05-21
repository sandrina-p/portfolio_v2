// Swipped 1.0.0
// @sandrina-p - May 2017
// Based on https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d

/* eslint-disable no-unused-vars */
var Swipped = function() {
    const doc = document.documentElement;

    // min px needed to trigger swipe
    const SWIPE_MIN = 40;

    // max px on opposite direction to prevent swipe
    // ex: on swipe left/right prevent if swipe top bottom is bigger than 75px
    const SWIPE_OPPOSITE_MAX = 75;

    // touch events coordinates
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    // document scrolled coordinates
    let scrolled = {};
    let scrollStartTop = 0;
    let scrollStartLeft = 0;
    let scrollEndTop = 0;
    let scrollEndLeft = 0;

    // document total scrolled
    let scrolledTop = 0;
    let scrolledLeft = 0;


    function right(el, callback, args) {
        on(el, 'right', callback, args);
    }

    function left(el, callback, args) {
        on(el, 'left', callback, args);
    }

    function top(el, callback, args) {
        on(el, 'top', callback, args);
    }

    function down(el, callback, args) {
        on(el, 'down', callback, args);
    }

    function getScroll() {
        return {
            left: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
            top: (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0),
        };
    }

    function on(el, direction, callback, args) {
        el.addEventListener('touchstart', function(event) {
            touchstartX = event.pageX;
            touchstartY = event.pageY;
            scrolled = getScroll();
            scrollStartTop = scrolled.top;
            scrollStartLeft = scrolled.left;
        }, false);

        el.addEventListener('touchend', function(event) {
            touchendX = event.pageX;
            touchendY = event.pageY;
            scrolled = getScroll();
            scrollEndTop = scrolled.top;
            scrollEndLeft = scrolled.left;
            handleSwipe(direction, callback, args);
        }, false);
    }

    function handleSwipe(direction, callback, args) {
        console.log('Swipped:', {
            touchstartX, touchendX, touchstartY, touchendY,
            scrollStartTop, scrollStartLeft, scrollEndTop, scrollEndLeft
        });

        scrolledTop = (scrollEndTop + touchendY) - (scrollStartTop + touchstartY);
        scrolledLeft = (scrollEndLeft + touchendX) - (scrollStartLeft + touchstartX);

        switch (direction) {
        case 'left': // <<
            return checkLeft(callback, args);
        case 'right': // >>
            return checkRight(callback, args);
        case 'top': // ^
            return checkTop(callback, args);
        case 'bottom': // v
            return checkBottom(callback, args);
        default:
            break;
        }
    }

    function checkLeft(callback, args) {
        if (scrollEndLeft + touchendX + SWIPE_MIN < scrollStartLeft + touchstartX
            && -SWIPE_OPPOSITE_MAX < scrolledTop && scrolledTop < SWIPE_OPPOSITE_MAX) {

            console.log('px swipped left:', (scrollStartLeft + touchstartX) - (scrollEndLeft + touchendX + SWIPE_MIN));

            if (callback) { return callback(args); }
        }

        return false;
    }

    function checkRight(callback, args) {
        if (scrollStartLeft + touchstartX + SWIPE_MIN < scrollEndLeft + touchendX
            && -SWIPE_OPPOSITE_MAX < scrolledTop && scrolledTop < SWIPE_OPPOSITE_MAX) {

            console.log('px swipped right:', (scrollStartLeft + touchstartX + SWIPE_MIN) - (scrollEndLeft + touchendX));

            if (callback) { return callback(args); }
        }
        return false;
    }

    function checkTop(callback, args) {
        if (scrollEndTop + touchendY + SWIPE_MIN < scrollStartTop + touchstartY
            && -SWIPE_OPPOSITE_MAX < scrolledLeft && scrolledLeft < SWIPE_OPPOSITE_MAX) {
            console.log('px swipped down:', (scrollEndTop + touchendY + SWIPE_MIN ) - (scrollStartTop + touchstartY));

            if (callback) { return callback(args); }
        }
        return false;
    }

    function checkBottom(callback, args) {
        if (scrollStartTop + touchstartY + SWIPE_MIN < scrollEndTop + touchendY
            && -SWIPE_OPPOSITE_MAX < scrolledLeft && scrolledLeft < SWIPE_OPPOSITE_MAX) {

            console.log('px swipped top:', (scrollStartTop + touchstartY + SWIPE_MIN) - (scrollEndTop + touchendY));

            if (callback) { return callback(args); }
        }
        return false;
    }

    return { right, left, top, down };
}();
