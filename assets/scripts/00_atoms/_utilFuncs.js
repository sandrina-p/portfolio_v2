var UtilFuncs = function(){

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
