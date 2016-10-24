var GAcustom = function(){
    var clickN = 0,
        cid, //client id
        inm, //item name
        ea, //action
        el = "", //label
        ec; //category


    function sendToGA(params) {
        clickN++; //ev = event value

        ga(function(tracker) {
            cid = tracker.get('clientId');

            $.ajax({
                url: "https://www.google-analytics.com/collect?v=1&t=event&tid=UA-70069700-3&cid="+cid+params+"&ev="+clickN,
                type: 'POST',
                cache: false,
                dataType: 'json',
                success:function(data) { console.log("Success:");},
                error: function(data) { console.log("Failure:");}
            });
        });
    }

    //track all buttons
    $(document).on('click', 'button', function(){
        var $xthis = $(this);

        ec = $xthis.data('gaec') || 'btn forgotten';
        inm = $xthis.text().replace(/[^a-zA-Z ]/g, ""); //item name
        ea = inm; //action
        el += inm+"|"; //label

        sendToGA(`&ec=${ec}&in=${inm}&ea=${ea}&el=${el}`);
    });


    //track all links
    $(document).on('click', 'a', function(){
        var $xthis = $(this);

        ec = $xthis.data('gaec') || 'link forgotten';
        inm = $xthis.text().replace(/[^a-zA-Z ]/g, ""); //item name
        ea = inm; //action
        el += inm+"|"; //label

        sendToGA(`&cid=${cid}&ec=${ec}&in=${inm}&ea=${ea}&el=${el}`);
    });

    return {
        sendToGA
    }

}();
