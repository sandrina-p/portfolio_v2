var Psst = function() {
    function changePsst(context) {
        var $jsPsst = $('.js-psst');
        $jsPsst.find('.psst-title').html(chatContent.behaviour[context][0]);
        $jsPsst.find('.psst-parag').html(chatContent.behaviour[context][1]);
        $jsPsst.find('button[name="true"]').html(chatContent.behaviour[context][2]);
        $jsPsst.find('button[name="false"]').html(chatContent.behaviour[context][3]);
    }
    return {
        changePsst
    }
}();
