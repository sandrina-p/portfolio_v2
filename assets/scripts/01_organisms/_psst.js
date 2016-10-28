var Psst = function() {
    var hasTouch = Modernizr.touchevents,
        chatContent = TalkChat.conversation;

    //change message only for touch mobile (no bot there).
    function showScrollify($jsPsst) {
        var $scrolled = $('.js-scrolled'),
            innerHeight,
            newMargin = 400,
            scrolledRecord =
                !isNaN(localStorage.getItem("scrolledRecord"))
                    ? localStorage.getItem("scrolledRecord")
                    : 1;

        $jsPsst.find('.psst-title').html(chatContent.behaviour.psstMob[0]);
        $jsPsst.find('.psst-parag').html(chatContent.behaviour.psstMob[1]+"<br><br>");
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

    //change message on psstt when clicked on Projects
    function changePsst(context) {
        var $jsPsst = $('.js-psst');

        if (!hasTouch) { //trigger focus on bot
            $jsPsst.find('.psst-title').html(chatContent.behaviour[context][0]);
            $jsPsst.find('.psst-parag').html(chatContent.behaviour[context][1]);
            $jsPsst.find('button[name="true"]').remove();
            $jsPsst.find('button[name="false"]').html(chatContent.behaviour[context][2]);

        } else { // trigger scroll
            setTimeout(function () {
                showScrollify($jsPsst);
            }, 5000);
        }
    }

    $(function hideBotTrigger(){
        if(hasTouch) {
            $('.js-botTrigger').removeClass('js-botTrigger').addClass('js-scrollify');
        }
    });

    $(document).on('click', '.js-botProjects', function(){
        $('#btn-pr').trigger('click'); //it will  call Psst.changePsst().

        if (hasTouch) {
            // FIXME: DRY here please... it's from _chat.js   scrollSafe()
            var wScroll = $(window).scrollTop(),
                wHeight = window.innerHeight;
                pHeight =  $("#btn-pr").height(),
                pScroll = $("#btn-pr").offset().top,
                tooClose = pScroll - wScroll + pHeight > wHeight/2;

            // too close of above the fold || away from the view window
            if (tooClose || pScroll < wScroll) {
                $('body').animate({ scrollTop: pScroll + pHeight - wHeight/4*1 }, 1000, 'swing');
            }
        }
    })

    $(document).on('click', '.js-scrollify', function(){
        showScrollify($('.js-psst'));
    })

    return {
        changePsst
    }
}();
