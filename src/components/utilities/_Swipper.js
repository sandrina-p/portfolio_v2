// Based on https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d

var Swipper = function() {

    var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;

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

    function on(el, direction, callback, args) {
        el.addEventListener('touchstart', function(event) {
            touchstartX = event.pageX;
            touchstartY = event.pageY;
        }, false);

        el.addEventListener('touchend', function(event) {
            touchendX = event.pageX;
            touchendY = event.pageY;
            handleGesure(direction, callback, args);
        }, false);
    }

    function handleGesure(direction, callback, args) {
        console.log('alguma cosia?');
        switch (direction) {
        case 'left':
            if (touchendX < touchstartX + 30) {
                console.log('swipe left');
                callback(args);
            }
            break;
        case 'right':
            if (touchendX > touchstartX + 30) {
                console.log('swipe right');
                callback(args);
            }
            break;
        case 'top':
            if (touchendY < touchstartY + 30) {
                console.log('swipe down');
                callback(args);
            }
            break;
        case 'bottom':
            if (touchendY > touchstartY + 30) {
                console.log('swipe top');
                callback(args);
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
