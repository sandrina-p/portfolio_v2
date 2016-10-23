var UtilFuncs = function(){

    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        untilTablet = iOS ? screen.width : window.innerWidth; //http://stackoverflow.com/questions/4629969/ios-return-bad-value-for-window-innerheight-width

        
    $(document).on('click', 'a[href*=#]', function(e){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top -150
        }, 500);
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
        return str.split(' ').join('-').toLowerCase();
    }

    function randomNumb(arr) {
        return Array.isArray(arr)
            ? Math.floor(Math.random() * arr.length)
            : Math.floor(Math.random() * arr);
    }

    return {
        untilTablet,
        objSize,
        objRandom,
        stringSlugLower,
        randomNumb
    }
}();

$.fn.extend({
    toggleText: function(a, b) {
        $.trim(this.html()) == a ? this.html(b) : this.html(a);
    }
});
