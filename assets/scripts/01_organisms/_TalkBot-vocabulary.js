var TalkBotVocabulary = function(currentTalkBot){
    var brk = "<br>",
        knowIt = currentTalkBot.conversation.vocabulary;

        /* AND THEN THERE WAS A KLAUZ
            a tua identaçao é feia, bj
        */
        knowIt["yo, yoyo"] = [
            "MC 008080 in da house yall!"
            +brk+"Sandrina isn't really a major Hip Hop fan, but I am."
            +brk+"You wanna dig my rhymes? type <b>mc 008080</b>",
            "_"
        ];
        knowIt["mc 008080"] = [
            "Sandrina is the pro who'll get things done"
            +brk+"From styling to dev, she'll beat you son!"
            +brk+"She's the browser magician,"
            +brk+"Her skillz: an addiction"
            +brk+"You know she's the boss"
            +brk+"Cause you found this musician"
            +brk+"....peace!",
            "_"
        ];
        knowIt["yes, cool, yeah, yeas, wow, that is cool, that's cool"] = [
            "Indeed! Try other commands like:"
            +brk+"<b>best practices</b>"
            +brk+"<b>challenges</b>"
            +brk+"<b>resources</b>"
            +brk+"<b>nestum addiction</b>",
            "_"
        ];
        knowIt["damn"] = [
            "Yeah! (•_•) / ( •_•)>⌐■-■ / (⌐■_■)"
            +brk+"AHHHHHHHHHHHHHHHHHH!!!!!! TUM TUMTUM.",
            "_"
        ];
        knowIt["you suck, cause you suck"] = [
            "You're not being very nice :("
            +brk+"Maybe a <b>joke</b> will cheer you up!",
            "_"
        ];
        knowIt["joke, tell me a joke, tell joke"] = [
            "What’s Beethoven’s favorite fruit?"
            +brk+"<^200.^200.^200."
            +brk+"^200..^200..^200.."
            +brk+"^300...BA-NA-NAA-NAAAAAA!",
            "_"
        ];
        knowIt["lol, lolol, ahah"] = [
            "I'm a funny bot ;)"
            +brk+"It all has to do with my personality.",
            "_"
        ];
        knowIt["sorry, i'm sorry, i am sorry"] = [
            "Don't worry, I'm a bot. I have no feelings ;)",
            "_"
        ];
        knowIt["mm"] = [
            "Meamu.",
            "commands",""
        ];
        knowIt["birthday, when's your birthday, your birthday, when is your birthday, birth date, your birth date"] = [
            "I was created somewhere between July and October 2016, and oficially released on November 2016",
            "_"
        ];
        knowIt["personality"] = [
            "Clearly, I'm an ENTP, since I'm so good talking to people! Sandrina is an <b>INTJ</b> though, so, we're very unlike each other",
            "_"
        ];
        knowIt["intj"] = [
            "Well, you know how INTJ's are."
            +brk+"They are very focused, always trying to be the best at what they love so dearly, their work. Also, they have the rare quality of being very tidy and organized people.",
            "_"
        ];
        knowIt["nestum addiction, nestum"] = [
            "omg. .... omg omg omg"
            +brk+"DID YOU JUST SAY NESTUM"
            +brk+"I don't know love, and I don't think I have felt it, except for when someone says Nestum."
            +brk+"I think about Nestum all day. I have dreams about Nestum..."
            +brk+"Nestum is my life!!!",
            "_"
        ];

        /*
        You can teach this bot too!
        Just copy this structure to each new stuff you want to teach:
        Before that, if you know a better and easier way to not repeat knowIt each time we add a new word, please let me know ;)

        knowIt["possible human, inputs sent, separated by, comma, and in lowercase"] = [
            "an awesome bot answer"
            +brk+"with some lines if you want",
            "some input placeholder"
        ];

        */

    return { currentTalkBot }
}(TalkBot);
