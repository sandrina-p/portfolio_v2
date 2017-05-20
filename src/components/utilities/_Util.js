/* exported Util */

var Util = function(){

    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        untilTablet = isiOS ? screen.width < 750 : window.innerWidth < 750,
        wHeight = isiOS ? screen.height : window.innerHeight, // http://stackoverflow.com/questions/4629969/ios-return-bad-value-for-window-innerheight-width
        hasTouchEvents = Modernizr.touchevents,
        isRetina = checkForRetina();

    // smooth anchor scroll
    $(document).on('click', 'a[href*=\\#]', function(e){
        e.preventDefault();

        const HrefOffset = $( $.attr(this, 'href') ).offset();

        if (HrefOffset) {
            $('html, body').animate({
                scrollTop: HrefOffset.top -100,
            }, 1000);
        }
    });

    function objSize(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }

    function objRandom(obj) {
        var result,
            prop,
            count = 0;
        for (prop in obj) {
            if (Math.random() < 1/++count) result = prop;
        }
        return result;
    }

    function stringSlugLower(str) {
        return str.replace(/ /g,'-').toLowerCase();
    }

    function randomNumb(arr) {
        return Array.isArray(arr)
            ? Math.floor(Math.random() * arr.length)
            : Math.floor(Math.random() * arr);
    }

    function scrollTo(value) {
        $('body').animate({ scrollTop: value }, 1500, 'swing');
    }

    function checkForRetina() {
        var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5),\
                (min--moz-device-pixel-ratio: 1.5),\
                (-o-min-device-pixel-ratio: 3/2),\
                (min-resolution: 1.5dppx)';

        return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches);
    }

    return {
        hasTouchEvents,
        isRetina,
        objSize,
        objRandom,
        randomNumb,
        scrollTo,
        stringSlugLower,
        untilTablet,
        wHeight,
    };
}();

$.fn.extend({
    toggleText: function(a, b) {
        $.trim(this.html()) == a ? this.html(b) : this.html(a);
    }
});
