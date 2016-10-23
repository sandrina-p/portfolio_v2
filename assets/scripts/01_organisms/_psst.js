var Psst = function() {
    var hasTouch = Modernizr.touchevents,
        chatContent = TalkChat.conversation;

    (function onTouchScreen() {
        if (hasTouch) {
            var $jsPsst = $('.js-psst');
            $jsPsst.find('.psst-title').html(chatContent.behaviour.psstMob[0]);
            $jsPsst.find('.psst-parag').html(chatContent.behaviour.psstMob[1]);
            $jsPsst.find('button[name="true"]').remove();
            $jsPsst.find('button[name="false"]').remove();
        }
    })();


    function changePsst(context) {
        if (!hasTouch) {
            var $jsPsst = $('.js-psst');
            $jsPsst.find('.psst-title').html(chatContent.behaviour[context][0]);
            $jsPsst.find('.psst-parag').html(chatContent.behaviour[context][1]);
            $jsPsst.find('button[name="true"]').html(chatContent.behaviour[context][2]);
            $jsPsst.find('button[name="false"]').html(chatContent.behaviour[context][3]);
        }
    }
    return {
        changePsst
    }
}();
