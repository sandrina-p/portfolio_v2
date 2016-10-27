var Psst = function() {
    var hasTouch = Modernizr.touchevents,
        chatContent = TalkChat.conversation;

    //change message only for touch mobile (no bot there).
    $(function ifTouchScreen() {
        if (hasTouch) {
            var $jsPsst = $('.js-psst'),
                $scrolled = $('.js-scrolled'),
                innerHeight,
                newMargin = 400,
                scrolledRecord =
                    !isNaN(localStorage.getItem("scrolledRecord"))
                        ? localStorage.getItem("scrolledRecord")
                        : 1;

            $jsPsst.find('.psst-title').html(chatContent.behaviour.psstMob[0]);
            $jsPsst.find('.psst-parag').html(chatContent.behaviour.psstMob[1]);
            $jsPsst.find('button').remove();


            $(window).scroll(function() {
                //check if it is a new record or not
                if ($(window).scrollTop() > scrolledRecord) {
                    scrolledRecord = $(window).scrollTop();
                    $scrolled.text(scrolledRecord);
                } else {
                    $scrolled.text( Math.abs($(window).scrollTop() - scrolledRecord) +" until new record");
                }

                //increase document height to keep scrolling
                if ($(document).height() <= (window.innerHeight + $(window).scrollTop())) {
                    newMargin += 800;
                    $('#cv').css({ 'margin-bottom': newMargin});
                };
            });

            (function setStorage() {
                localStorage.setItem("scrolledRecord", JSON.stringify(scrolledRecord));
                setTimeout(() => setStorage(), 1000);
            })();
        }
    });

    //change message
    function changePsst(context) {
        if (!hasTouch) {
            var $jsPsst = $('.js-psst');
            $jsPsst.find('.psst-title').html(chatContent.behaviour[context][0]);
            $jsPsst.find('.psst-parag').html(chatContent.behaviour[context][1]);
            $jsPsst.find('button[name="true"]').remove();
            $jsPsst.find('button[name="false"]').html(chatContent.behaviour[context][2]);
        }
    }

    $(document).on('click', '.js-botProjects', function(){
        $('#btn-pr').trigger('click');
    })

    return {
        changePsst
    }
}();
