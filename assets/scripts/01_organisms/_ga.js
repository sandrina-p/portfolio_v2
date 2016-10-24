var GAcustom = function(){
    var clickN = 0,
        cid, //client id
        inm, //item name
        ea, //action
        el = "", //label
        ec; //category


    function sendToGA(params) {
        clickN++; //ev = event value

        $.ajax({
            url: "https://www.google-analytics.com/collect?v=1&t=event&tid=UA-70069700-3"+params+"&ev="+clickN,
            type: 'POST',
            cache: false,
            dataType: 'json',
            success:function(data) { console.log("Success:");},
            error: function(data) { console.log("Failure:");}
        });
    }

    $(document).on('click', 'button', function(){
        var $xthis = $(this);
        ga(function(tracker) {
            cid = tracker.get('clientId');
            ec = $xthis.data('gaec') || 'forgotten';
            inm = $xthis.text().replace(/[^a-zA-Z ]/g, ""); //item name
            ea = inm; //action
            el += inm+"|"; //label

            sendToGA(`&cid=${cid}&ec=${ec}&in=${inm}&ea=${ea}&el=${el}`);
        });

    });

    return {
        sendToGA
    }

}();
