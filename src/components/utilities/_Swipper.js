// Based on https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d

/* eslint-disable no-unused-vars */

var Swipper = function() {
    const doc = document.documentElement;
    const SWIPE_MIN = 40; // min px needed to trigger swipe
    const SWIPE_OPPOSITE_MAX = 75; // max px on opposite direction to prevent swipe
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;
    let scrolled = {};
    let scrollStartTop = 0;
    let scrollStartLeft = 0;
    let scrollEndTop = 0;
    let scrollEndLeft = 0;

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
        console.log('Swipper:', {
            touchstartX, touchendX, touchstartY, touchendY,
            scrollStartTop, scrollStartLeft, scrollEndTop, scrollEndLeft
        });

        const scrolledTop = (scrollEndTop + touchendY) - (scrollStartTop + touchstartY);
        const scrolledLeft = (scrollEndLeft + touchendX) - (scrollStartLeft + touchstartX);

        switch (direction) {
        case 'left': // <<
            if (scrollEndLeft + touchendX + SWIPE_MIN < scrollStartLeft + touchstartX
                && -SWIPE_OPPOSITE_MAX < scrolledTop && scrolledTop < SWIPE_OPPOSITE_MAX) {
                console.log('px swipped left:', (scrollStartLeft + touchstartX) - (scrollEndLeft + touchendX + SWIPE_MIN));
                return callback(args);
            }
            break;
        case 'right': // >>
            if (scrollStartLeft + touchstartX + SWIPE_MIN < scrollEndLeft + touchendX
                && -SWIPE_OPPOSITE_MAX < scrolledTop && scrolledTop < SWIPE_OPPOSITE_MAX) {
                console.log('px swipped right:', (scrollStartLeft + touchstartX + SWIPE_MIN) - (scrollEndLeft + touchendX));
                return callback(args);
            }
            break;
        case 'top': // ^
            if (scrollEndTop + touchendY + SWIPE_MIN < scrollStartTop + touchstartY
                && -SWIPE_OPPOSITE_MAX < scrolledLeft && scrolledLeft < SWIPE_OPPOSITE_MAX) {
                console.log('px swipped down:', (scrollEndTop + touchendY + SWIPE_MIN ) - (scrollStartTop + touchstartY));
                return callback(args);
            }
            break;
        case 'bottom': // v
            if (scrollStartTop + touchstartY + SWIPE_MIN < scrollEndTop + touchendY
                && -SWIPE_OPPOSITE_MAX < scrolledLeft && scrolledLeft < SWIPE_OPPOSITE_MAX) {
                console.log('px swipped top:', (scrollStartTop + touchstartY + SWIPE_MIN) - (scrollEndTop + touchendY));
                return callback(args);
            }
            break;
        default:
            break;
        }
    }

    return {
        right,
        left,
        top,
        down,
    };
}();
