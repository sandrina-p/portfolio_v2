var botSection = function() {
    var botContent = TalkBot.conversation,
        $trigger = $('.js-botTrigger'),
        visibleClass = 'js-aboutVisible',
        triggerActive = 'jsLoading',
        botInputId = "botInput",
        botAnswerClass = "bot-answer",
        botSentClass = "bot-sent",
        jsSentEmptyClass = "js-sentEmpty",
        $bot = $('#bot'),
        $botInner = $('#bot').find('.bot-inner'),
        $botText = $bot.find('.bot-text'),
        clickOn = {},
        intervalBotScroll,
        firstTrigger = true,
        botAnswerTyped = false,
        sentText, //text written on input
        context; //input context of the conversation


    // get ready 008080 //
    //////////////////////
    function showInput(name, placeholder) {
        return '<input type="text" name="'+name+'" placeholder="'+placeholder+'" class="bot-input" id="'+botInputId+'"></input>';
    }

    //showing 008080 section
    $(document).on('click', '.js-botTrigger', function(){
        $bot.removeClass(triggerActive);
        // $('body').addClass('jsNoScroll');
        if(firstTrigger) {
            appendBotAnswer(botContent.intro);
            firstTrigger = false;
        }
    });


    // talking with 008080 //
    function hitEnter() {
        sentText = $('#'+botInputId).val().toLowerCase();
        context = $('#'+botInputId).attr('name');
        $('#'+botInputId).remove();
        appendSent();
        getBotAnswer();
    }

    function appendSent() {
        var sentEmpty = "";
        sentText == "" ? sentEmpty = jsSentEmptyClass : "";
        $botText.append("<p class='"+botSentClass+" "+sentEmpty+"'>"+sentText+"</p>");
        $botText.find('input').remove();
    }

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

    function getBotAnswer() {
        var objContext = botContent[context];
        var botAnswer = [];

        switch (context) {
            case 'options':
                botAnswer = objContext[objSearchSubKeys(objContext)] || objContext.help;
                appendBotAnswer(botAnswer);
                // NOTE: very strange bug here.
                // if botContent.options["undefined"] it doesnt work..
                // this key has to have 2 options (ex: botContent.options["undefined, null, other"] )
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
                searchVocabulary(context);
                // appendBotAnswer(botContent.LosT);
        }
    }

    function searchVocabulary(context) {
        context = context || "vocabulary";
        var objContext = botContent[context];
        var botAnswer = [];

        //BEFORE: - just to remember how dumb i was...
        // objSearchSubKeys(objContext)
        // for (var key in objContext) {
        //     if(objContext.hasOwnProperty(key)) {
        //         var subKeys = key.split(/,\s?/);
        //         if (subKeys.indexOf(sentText) > -1) {
        //             botAnswer = objContext[key];
        //         }
        //     }
        // }
        //
        // if(botAnswer.length == 0) { botContent.LosT;}
        // appendBotAnswer(botAnswer);

        // AFTER: - and how i'm so fucking a genius now
        if (sentText == "") {
            var iR = UtilFuncs.randomNumb(botContent.EmpTy);
            appendBotAnswer(botContent.EmpTy[iR]);
        } else {
            botAnswer = objContext[objSearchSubKeys(objContext)] || botContent.LosT;
            appendBotAnswer(botAnswer);
        }

    }

    function appendBotAnswer(answer, objContext) {
        botAnswerTyped = answer.indexOf('typedJS') > -1;
        keepSectionFlag = answer.indexOf('keepSectionJS') > -1;

        //remove previous keepSection messages
        if(typeof keepSectionClass !== 'undefined' && keepSectionClass != "") {
            $botText.find('.'+keepSectionClass).remove();
        }

        intervalBotScroll = setInterval(function () {
            console.log('autoScroll');
            $botText.animate({
                scrollTop: $('.bot-text').prop('scrollHeight')
            }, 0);
        }, 200);

        $botText.append("<span class='jsBotThinking'></span>");

        $('.jsBotThinking').remove();

        if (answer.length == 2) {
            setTimeout(function () {
                $botText.append("<p class='"+botAnswerClass+"'></p>").find('p:last-of-type').typed({
                    strings: [answer[0]],
                    contentType: 'html',
                    typeSpeed: -450,
                    startDelay: 0,
                    callback: function() {
                        afterAppendBotAnswer(["", "commands", answer[1], "typeJS"], objContext);
                    },
                });
            }, answer.length*1.33);
        } else {
            setTimeout(function () {
                if (botAnswerTyped) {
                    keepSectionClass = "jskeepSection" && keepSectionFlag;
                    $botText.append("<p class='"+botAnswerClass+" "+keepSectionClass+"'></p>").find('p:last-of-type').typed({
                        strings: [answer[0]],
                        contentType: 'html',
                        typeSpeed: -450,
                        startDelay: 0,
                        callback: function() {
                            afterAppendBotAnswer(answer, objContext);
                        },
                    });
                } else {
                    $botText.append("<p class='"+botAnswerClass+"'>"+answer[0]+"</p>");
                    keepSectionClass = "";
                    afterAppendBotAnswer(answer, objContext);
                }
            }, answer[0].length*1.33);
        }
    }

    function afterAppendBotAnswer(answer, objContext) {
        $('.typed-cursor').remove();
        $botText.append(showInput(answer[1], answer[2]));
        $botText.find('input').last().focus();

        setTimeout(function () {
            console.log('stop autoscroll');
            clearInterval(intervalBotScroll);
        }, 250);

        //check if it has to show keepStion message
        if (objContext != undefined //if context exists
        && objContext.keepSection[1].indexOf(sentText) > -1 // it's a section with more stuff (array)
        && objContext[sentText].length > 0) { // it still has stuff to show
            $botText.find('input').remove();
            objContext.keepSection[0][0] = replaceSentText(objContext.keepSection[0][0]);
            botAnswer = objContext.keepSection[0];
            appendBotAnswer(botAnswer);
        }
    }

    function replaceSentText(string) {
        return string.replace("[*param*]", sentText);
    }

    //input behavior (ENTER)
    $(document).on('keyup', '#'+botInputId, function(e) {
        if(e.keyCode == 13) { //ENTER
            hitEnter($(this));
        }
    });


    //close 008080 section
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // ESC
            $bot.addClass(triggerActive);
        }
    });

}();
