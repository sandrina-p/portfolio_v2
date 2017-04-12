var UtilFuncs = function(){

    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        untilTablet = iOS ? screen.width < 750 : window.innerWidth < 750,
        wHeight = iOS ? screen.height : window.innerHeight; //http://stackoverflow.com/questions/4629969/ios-return-bad-value-for-window-innerheight-width

    console.log('until' + untilTablet, wHeight);

    $(document).on('click', 'a[href*=#]', function(e){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top -100
        }, 1000);
        e.preventDefault();
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

    function isRetina() {
        var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                (min--moz-device-pixel-ratio: 1.5),\
                (-o-min-device-pixel-ratio: 3/2),\
                (min-resolution: 1.5dppx)";

        return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches)
    }

    return {
        untilTablet,
        wHeight,
        objSize,
        objRandom,
        stringSlugLower,
        randomNumb,
        scrollTo,
        isRetina
    }
}();

$.fn.extend({
    toggleText: function(a, b) {
        $.trim(this.html()) == a ? this.html(b) : this.html(a);
    }
});
