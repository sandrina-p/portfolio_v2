var botSection = function() {
    var botContent = TalkBot.conversation,
        triggerActive = 'jsLoading',
        botInputId = "botInput",
        botAnswerClass = "bot-answer",
        botSentClass = "bot-sent",
        jsSentEmptyClass = "js-sentEmpty",
        $bot = $('#bot'),
        $botTerminal,
        $botInner,
        $botText,
        setAutoScroll = true,
        firstTrigger = true,
        originalSent, sentText, //text written on input
        context; //input context of the conversation


    function appendSent(directInput = null) {
        var sentEmpty = "";
        originalSent = directInput || originalSent;
        if(originalSent == "") sentEmpty = jsSentEmptyClass;
        $botText.append("<p class='"+botSentClass+" "+sentEmpty+"'>"+originalSent+"</p>");
    }

    function buildBot() {
        var $elBot = $(`<div class="bot-header">
                        <span class="bot-hl js-bot-user">:: /008080 - as superuser @ /*ip*/</span>
                        <button name="close" type="button" class="btnBot bot-hr jsLoading" data-bot="exit">[Close]</button>
                        <button name="help" type="button" class="btnBot bot-hr jsLoading" data-bot="help">[Help]</button>
                        <button name="more" type="button" class="btnBot bot-hr jsLoading" data-bot="more">[More]</button>
                    </div>
                    <div class="bot-terminal"><div class="bot-text"></div></div>
                    <div class="bot-footer">
                        <input type="text" name="talk-to-bot" class="bot-input jsLoading" id="botInput" maxlength="20"></input>
                    </div>`);

        $bot.append($elBot);
        getIp();
        $botInner = $('#bot').find('.bot-inner'),
        $botText = $bot.find('.bot-text');
        $botTerminal = $('.bot-terminal');
    }

    function getBotAnswer() {
        var objContext = botContent[context];
        var botAnswer = [];

        switch (context) {
            case 'options':
                botAnswer = objContext[objSearchSubKeys(objContext)] || objContext['google it'];
                appendBotAnswer(botAnswer);
                break;
            case 'commands':
                //if sent Empty, check if it's to continue previous command or go to .EmpTy.
                if (sentText == "") {
                    var lastSection = $botText.find('.bot-sent').not('.'+jsSentEmptyClass).last().text();
                    if(objContext.keepSection[1].indexOf(lastSection) > -1) {
                        sentText = lastSection;
                    } else {
                        var iR = UtilFuncs.randomNumb(botContent.EmpTy);
                        appendBotAnswer(botContent.EmpTy[iR]);
                        return;
                    }
                }

                var key = objSearchSubKeys(objContext);
                if(key) {
                    var contextLength = objContext[key].length;
                    if (contextLength) {
                        var iR = UtilFuncs.randomNumb(contextLength);
                        botAnswer = objContext[key][iR];
                        objContext[key].splice([iR], 1); //prevent for showing the same thing twice.
                    } else {
                        objContext.allSaid[0][0] = replaceSentText(objContext.allSaid[0][0]);
                        botAnswer = objContext.allSaid[0];
                        var iSection = objContext.keepSection[1].indexOf(sentText);
                        objContext.keepSection[1].splice(iSection,1); //prevent for showing the same thing again;
                    }
                    appendBotAnswer(botAnswer, objContext);
                } else {
                    searchVocabulary();
                }
                break;
            default:
                talkToBot('tilttt', 'commands');
                GAcustom.sendToGA(`&ec=bug&ea=tilttt`);
        }
    }

    function searchVocabulary(context) {
        if (sentText == "") {
            var botAnswer = botContent.EmpTy[UtilFuncs.randomNumb(botContent.EmpTy)]
        } else {
            context = context || "vocabulary";
            var objContext = botContent[context];
            var botAnswer = objContext[objSearchSubKeys(objContext)] || botContent.LosT;
        }
        appendBotAnswer(botAnswer);
    }

    function appendBotAnswer(answer, objContext) {
        setAutoScroll = true;
        startAutoScroll();

        $botText.append("<span class='jsBotThinking'></span>"); //BUG review this please

        $('.jsBotThinking').remove();

        if (typeof answer == "string") {
            setTimeout(function () {
                $botText.append("<p class='"+botAnswerClass+"'></p>").find('p:last-of-type').typed({
                    strings: answer,
                    contentType: 'html',
                    typeSpeed: -450,
                    startDelay: 0,
                    callback: function() {
                        afterAppendBotAnswer(answer, objContext);
                    },
                });
            }, answer.length*1.33);

        } else {
            setTimeout(function () {
                $botText.append("<p class='"+botAnswerClass+"'></p>").find('p:last-of-type').typed({
                    strings: [answer[0]],
                    contentType: 'html',
                    typeSpeed: -450,
                    startDelay: 0,
                    callback: function() {
                        afterAppendBotAnswer(answer, objContext);
                    },
                });
            }, answer[0].length*1.33);
        }
    }

    function afterAppendBotAnswer(answer, objContext) {

        if (typeof answer == "string") {
            showInput();

        } else if (Array.isArray(answer)) {
            switch (answer.length) {
                case 1:
                    showInput();
                    break;
                case 2:
                    showInput(answer[1]);
                    break;
                default:
                    showInput(answer[1], answer[2]);
            }

            //check if it has to show keepStion placeholder
            if (objContext != undefined //if context exists
            && objContext.keepSection[1].indexOf(sentText) > -1 // it's a section with more stuff (array)
            && objContext[sentText].length > 0) { // it still has stuff to show
                objContext.keepSection[0] = replaceSentText(objContext.keepSection[0]);
                showInput(objContext.keepSection[0], answer[2]);
                return true;
            }

        } else {
            console.log("ERROR . verify this line @error2");
        }
    }

    function replaceSentText(string) {
        return string.replace("[*param*]", sentText);
    }


    // ----- Util Functs ----- //

    // look for possible inputs in the context
    function objSearchSubKeys(objContext) {
        for (var key in objContext) {
            if(objContext.hasOwnProperty(key)) {
                var subKeys = key.split(/,\s?/);
                if (subKeys.indexOf(sentText) > -1) {
                    return key;
                }
            }
        }
    }

    // activate input again
    function showInput(placeholder = '>_', name = 'commands') {

        $('#'+botInputId)
            .attr({name: name, placeholder: placeholder})
            .removeClass('jsLoading').prop('disabled', false).focus();

        // $('.typed-cursor').remove(); //NOTE i think this doesn't do nothing. | | blink |


        $('.bot-terminal').animate({
            scrollTop: $('.bot-text').prop('scrollHeight')
        }, 0);

        setAutoScroll = false;
    }

    function getIp() {
        $.get("https://ipinfo.io", function(response) {
            console.log(response.ip);
            var $botUser = $('.js-bot-user'),
                newTxt = $botUser.text().replace('/*ip*/', response.ip);
            $botUser.text(newTxt);
        }, "jsonp");
    }

    function startAutoScroll() {
        if (setAutoScroll) {
            setTimeout(function () {
                $botTerminal.animate({
                    scrollTop: $('.bot-text').prop('scrollHeight')
                }, 0);
                startAutoScroll();
            }, 300);
        }
    }
    // ----- publicCmd ----- //
    var gael = "";

    function talkToBot(directText, directContext = null) {
        originalSent = directText || $('#'+botInputId).val()
        sentText = originalSent; //prevent funny users to struggle with this function;

        //prevent funny users to struggle with this function
        if (typeof sentText !== "string" ) {
            console.log('tillt typeof');
            sentText = "tilttt";
            directContext = "commands";
        }

        sentText = sentText.replace(/[^a-zA-Z ]/g, "").toLowerCase();
        context = directContext || $('#'+botInputId).attr('name') || 'commands';

        $('#'+botInputId).addClass('jsLoading').val('').prop('disabled', true);

        appendSent();
        getBotAnswer();


        (function toGA() {
            var ec = 'bot',
                ea = sentText.replace(/[^a-zA-Z ]/g, ""); //action

            gael += ea+"|"; //save all path clicks to know the jorney

            GAcustom.sendToGA(`&ec=${ec}&ea=${ea}&el=${gael}`);
        })();

    }

    function toggleBot() {
        $bot.toggleClass(triggerActive);
        cvProjects.setProjLoop(false);
    }


    // ------ DOM Interactions ------ //

    //showing 008080 section
    $(document).on('click', '.js-botTrigger', function(){

        if(!firstTrigger) {
            toggleBot();
            talkToBot('welcome back');
        } else {
            cvProjects.setProjLoop(false);
            buildBot();
            $bot.removeClass(triggerActive);
            setTimeout(() => appendBotAnswer(botContent.intro), 500);
            setTimeout(() => { $('.bot-header').find('button').removeClass(triggerActive) }, 3000);
            firstTrigger = false;
        }
    });

    var tooLongWarn = true,
        inputVal
    //press ENTER key to send what's on input
    $(document).on('keyup', '#'+botInputId, function(e) {
        var inputVal = this.value;

        switch (inputVal.length) {
            case 20:
                if (tooLongWarn) {
                    appendSent(botContent.poet);
                    GAcustom.sendToGA(`&ec=chatMax&ea=${inputVal}`);
                    tooLongWarn = false;
                }
                break;
            case 10:
                tooLongWarn = true;
                    break;
            default:

        }

        if(e.keyCode == 13) { //ENTER
            talkToBot();
        }
    });

    //close 008080 section with ESC key
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // ESC
            toggleBot();
        }
    });

    $(document).on('click', '.btnBot', function(){
        talkToBot($(this).data('bot'));
    });

    return {
        talkToBot,
        toggleBot
    }

}();
