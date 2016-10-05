Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

Object.random = function(obj) {
    var result;
    var count = 0;
    for (var prop in obj) {
        if (Math.random() < 1/++count) {
            result = prop;
        }
    }
    return result;
}

String.prototype.slugLower = function() {
    return this.split(' ').join('-').toLowerCase();
}

$.fn.extend({
    toggleText: function(a, b) {
        $.trim(this.html()) == a ? this.html(b) : this.html(a);
    }
});
