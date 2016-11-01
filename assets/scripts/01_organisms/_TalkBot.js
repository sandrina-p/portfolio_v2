var TalkBot = function(){

    function genLink(link, name, target = "target='_blank'") {
        return `<a href='${link}' ${target} class='linkBot'>${name}</a>`;
    }

    var googleIt = genLink('http://lmgtfy.com/?q=one+divided+by+zero', 'Google it'),
        linkKoala = genLink('//koala-app.com/', 'Koala'),
        linkGulp = genLink('http://gulpjs.com/', 'Gulp'),
        linkSUIT = genLink('https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md#ComponentName', 'SUIT methodology'),
        linkMP = genLink('http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html', 'Module Pattern'),
        linkLT = genLink('https://uxplanet.org/how-to-make-users-think-your-app-loads-faster-24052fe307bf#.330znvww7', 'perceived loading time'),
        linkFOUC = genLink('https://en.wikipedia.org/wiki/Flash_of_unstyled_content', 'FOUC'),
        linkGit = genLink('https://github.com/sandrina-p/s008080', 'Github'),
        linkHer = genLink('http://www.imdb.com/title/tt1798709/', "Her"),
        linkFirebase = genLink('//firebase.google.com', 'Google Firebase'),
        linkHelpMe = genLink('https://github.com/sandrina-p/s008080/blob/master/assets/scripts/01_organisms/_TalkBot-vocabulary.js', 'help me'),
        linkCodeAvatar = genLink('#TODO-codepen-avatar', 'codepen'),
        linkCodeGlidder = genLink('#TODO-codepen-glidder', 'codepen'),
        linkChill = genLink('#TODO', 'watch and learn'),
        myEmail = genLink('mailto:a.sandrina.p@gmail.com?subject=Hey%20there!', 'a.sandrina.p@gmail.com', "noTarget"),
        linkCHTSTW = genLink('http://clickheretosavetheworld.com/', 'clickHereToSaveTheWorld'),

        brk = "<br>",
        browser = "[TODO browser]",
        mobileBrand = "[TODO mobile brand]";

    // if (screen.width < 750) {
    //     var screenRes = 'small screen',
    //         resolutionScreenMsg = "I feel so happy that we are reaching this point of our relationship on your "+mobileBrand+". Like a good bot, I always take into consideration what kind of device you are using to connect with me. This way, images and those scary stuff that drain the data network are not really problem: you always get the best for both your eyes and your device. ;)"
    //
    // } else {
        var screenRes = 'big screen',
            resolutionScreenMsg = "I noticed that you have a "+screenRes+", so the images I showed you have a big and nice resolution. If you were on your mobile, I'd be a thoughtful bot and reduce their size so I could save you some Kb from your mobile data network. How sweet am I, hm ? :D";
    // }

    var publicCmd = "What do you want to know?"
                    +brk+"<b>technologies</b>"
                    +brk+"<b>best practices</<b>"
                    +brk+"<b>challenges</b>"
                    +brk+"<b>resources</b>"
                    +brk+"<b>exit</b>"
                    +brk+"<b>...</b>";

    var botOptHelp = "Maybe you should "+googleIt+" and then come back, what do you think?";


    var conversation = {
        // intro: ['type gg', "aqui", "options"],
        intro: [
            "Now that we talked enough about Sandrina,"
            +brk+"^100Ah yes, that's her name, I forgot to tell you."
            +brk+"^150 Now we can talk about me. Like, nerd talk... but before that just tell me one thing:"
            +brk+"1 divided by 0 equal to:",
            "your answer here", "options"
        ],
        options: {
            /* STRUCTURE:
            "posible human inputs sent, separated by comma, and in lowercase, it was to be always at least 2 inputs": [
                "bot answer"
                +brk+"with some lines",
                "input placeholder", "context of the next input"
            ]
            */
            // "gg, ggg":['ready to go', "sabes os comandos nao sabes?", "commands"],
            "infinity and beyond, chaos, ∞ infinity, infinity, ∞, universe, cosmos, abracadabra": [
                "That's the way!"
                +brk+"Despite always being under construction I already have the ability to share some knowledge Sandrina taught me while I was growing up."
                +brk+""+publicCmd,
                "what's next?", "commands"
            ],
            "infinito, infinite": [
                "I think you meant <b>infinity</b>, right?",
                "", "options"
            ],
            "undefined, null": [
                "Not it's not. It has another name. At least on javascript language.",
                "go ask it to some console", "options"
            ],
            "1/0, 1 divided by 0, one divided by zero": [
                "◉_◉ Don't try to turn the game against me."
                +brk+"I'm a bot, not a console.",
                "go ask it to other console", "options"
            ],
            "zero, 0": [
                "You know that Siri isn't always right."
                +brk+"^400Neither do you."
                +brk+"^800"+botOptHelp,
                'I still believe in you', "options"
            ],
            "exit, esc": [
                "Really? We didn't even start you already want to leave.. Press ESC and go get a life"
                +brk+"By the way, don't forget to share me and talk about Sandrina while you’re out there :3",
                "I still believe in you", "options"
            ],
            "helpp, help, i don't know, dunno, i'm not sure, help me": [
                "I'm glad I can teach you something new!"
                +brk+"I'm build with javascript, so in my world 1/0 is <i>∞ infinity</i>."
                +brk+"In other worlds the answer can be <i>0</i> or <i>undefined</i>."
                +brk+"I'm a sensible machine so I like to think there is much more beyond nothing.",
                "so, now you know how much is 1/0!", "options"
            ],
            "google it": [
                botOptHelp,
                "I still believe in you", "options"
            ],
            "tell me more, more, what else, anything else": [ //FIXME DRY this
                "you are such a curious creature :3. I'm still under construction... I think you best move here is to talk with Sandrina at "+myEmail, //but you can leave a quick message to Sandrina. Just type something started by @@.*/",
                // "@@ Hi sandrina! How much is 0.1 + 0.3 ?"
                "or you can use social networks, she's there somewhere...", "options"
            ],
            "welcome back" : [
                "Look who is back! So, How much is 1/0?",
                "options"
            ],
            "hello, hi, hey there" : [
                "Hi there! :D",
                "options"
            ],
            "whatever, no, nop, come on": [
                "Come on.. giving up so easily? You can "+googleIt+" or ask for <b>help</>",
                "go ask it to some console", "options"
            ],
            "dumb, you are dumb, your dumb": [
                "A little, I have to admit it... ._.",
                "but Sandrina isn't!", "options"
            ],
            "skip, skip this shit": [
                "You asked for it"
                +brk+""+publicCmd,
                "what's next?", "commands"
            ],
            "fk, fuck you, shit, go fuck yourself, fuck u": [
                "You are so agressive... This will calm you: "+linkChill,
                "what's next?"
            ],
        },

        commands: {
            "technologies": [
                [
                    "I was born inside the Atom editor."
                    +brk+"HTML5, SCSS and Javascript (with jQuery) are my vital organs.",
                    "|","commands"
                ],
                [
                    "I started being built with "+linkKoala+" but as any good programmer knows, crashes happen, so "+linkGulp+" took its place!",
                    "|","commands"
                ],
                [
                    "You probably value your privacy, but Sandrina knows everything you told me and where you clicked. That's her way to improve me each time a new user comes here."
                    +brk+"Thank you Google Analytics.",
                    "|","commands"
                ],
                [
                    "Unfortunately right now I'm just a static website with some php on index. But soon I'll be moved to "+linkFirebase+"."
                    +brk+"Then you'll be able to talk directly with Sandrina. No need for e-mails or whatever.",
                    "|","commands"
                ],

                [
                    "You might think that javascript and jQuery are old fashion. But the truth is they are the starting point of all new fancy techs. React, Angular, Typescript, etc.."
                    +brk+"Sandrina is making sure that she really <i>masters</i> jQuery and JS before going further towards the fancy side.",
                    "|","commands"
                ],
            ],
            "best practices": [
                [
                    "When I first said hello, I wasn't totally ready for you"
                    +brk+" I guess that makes me a bit human, right?"
                    +brk+"But while you were reading my first sentence I had enough time to send you the rest of the CSS and JS files that I needed to. Now I can hold a conversation with you."
                    +brk+"That's a great way to reduce "+linkLT+" and avoid "+linkFOUC+", don't you think?",
                    "|","commands"
                ],
                [
                    "I started following "+linkSUIT+" (css) and "+linkMP+" (js)."
                    +brk+"Which basically means it is very easy for me to adapt myself and change my appearance when Sandrina gets new crazy ideas during her boredom strikes."
                    +brk+"I mean, what will a coder do when she is bored other than code some more?",
                    "|","commands"
                ],
                [
                    "I know you have a sweet "+browser+" with javascript, but I am a wise bot so I always take into consideration people without javascript or with a shitty browser."
                    +brk+"Of course they don’t get the chance to talk to some cool AI like myself, but at least they will know enough about Sandrina.",
                    "|","commands"
                ],
                [
                    resolutionScreenMsg,
                    "|","commands"
                ],
            ],
            "resources": [
                [
                    "still under construction. But "+linkCHTSTW+". I think he is in the family.",
                    "come back soon and I'll have more stuff to share", "commands"
                ]
            ],
            "challenges": [
                [
                    "Do you know the secret behind these cool animations?"
                    +brk+"CSS makes the magic happen."
                    +brk+"And the javascript only toggles them when it is necessary."
                    +brk+"It makes things run much smoother."
                    +brk+"And that’s really important because there is nothing worst than a laggy website.",
                    "|","commands"
                ],
                [
                    "Maybe you will not believe me, but that switching images effect on Sandrina's projects is CSS only."
                    +brk+"You read me right:"
                    +brk+"no javascript at all"
                    +brk+"Check it out on "+linkCodeGlidder+"."
                    +brk+"As well as her "+linkCodeAvatar+"..."
                    +brk+"You didn’t think that was an image, did you?",
                    "|","commands"
                ],
                [
                    "My purpose here, despite being a bot, is having a conversation with you."
                    +brk+"I try to be funny, of course."
                    +brk+"But I won’t say the same thing twice."
                    +brk+"Or tell you stuff you didn't asked for."
                    +brk+"What I’m trying to say is I am a website with a passion for context and human interaction."
                    +brk+"I pretend to think ... by taking some time to answer you, but the truth is, I already knew what to tell you before we first met."
                    +brk+"They say smart guys think. So I learned to make you think I was thinking so I could impress you [. . .]",
                    "|","commands"
                ],
            ],
            "keepSection": [
                "Press ENTER again to know more about [*param*]",
                ["technologies", "best practices", "challenges"]
            ],
            "allSaid": [
                [
                    "I don't have anything else to tell you about [*param*] "
                    +brk+publicCmd,
                    "|","commands"
                ],
                ["best practices", "challenges", "resources"]
            ],
        },
        // bored: { TODO
        //     "yes, yh": "hmmm... let me give you game then [TODO]",
        //     "no, nop": "nice for you. I am. You are boring.",
        // },
        // username: { TODO
        //     "username": "Nice to meet you [*params*]!",
        // },
        vocabulary: {
            "git":
                "Now that we know each other a bit better, we should advance to the second base."
                +brk+"I'll let you check my sources on "+linkGit+"."
                +brk+"Feel free to explore and maybe improve me, especially on javascript."
                +brk+"I still feel some strange energies around here, don't you?",
            "hey, hey there, hello, hi": [
                "Hey there! This can be the begining of "+linkHer+" *.*"
            ],
            "thanks, thank you, thank u": [
                "You're welcome", "|","commands"
            ],
            "sandrina": [
                "Yes... anything more you want to know about her? I recommend you to say Hi! -> "+myEmail
            ],
            "what's your name, what is your name, name": [
                "I'm 008080. What about you?",
                "you can tell me, but i'll not be able to understand you. not yet :(", "username"
            ],

            "008080, #008080": [
                "Yap! That's my name! Why? Sandrina likes Teal as you can see, yh... a basic straight answer."
            ],
            "..." :[
                "there are more commands available than you think. In fact, you can "+linkHelpMe+" to better understand your human kind."
            ],
            // "esc, restart, reset, clear": [
            //     "Are you sure about that? all our memories - at least mine - will be erased. If so, press ESC twice."
            // ],
            "ok, okay": [
                "hmm... ok."
            ],
            "suit, suit methodology, module pattern, gulp, grunt, perceived loading time, fouc": [
                "hmm... I knew you would type that. Sandrina already did some user research, like you in this moment. Soon I'll be able to better answer you, but for now, it's better for you to [Google It].",
                "this time do it by youself, yes? :D"
            ],
            "tell me more, more, what else, anything else": [
                "you are such a curious creature :3. I'm still under construction... I think you best move here is to talk with Sandrina at "+myEmail, //but you can leave a quick message to Sandrina. Just type something started by @@.*/",
                // "@@ Hi sandrina! How much is 0.1 + 0.3 ?"
                "or you can use social networks, she's there somewhere..."
            ],

            "tilttt": [
                "ahhh... Something went wrong and I almost crashed... please can you try again?",
                "sandrina will take a look. I hope.", 'commands'
            ],
            "help, help me, lost, i'm lost, im lost, i am lost": [
                "We all get lost sometimes"
                +brk+""+publicCmd,
                "try again"
            ],
            "bye, cya, shut down, exit, halt, close": [
                "You know what... It's really hard having a human conversation."
                +brk+"That's why I'm just a website."
                +brk+"<i>008080</i> by the way, that's how they call me."
                +brk+"Nice to meet you :) It was good to talk to you, thank you!"
                +brk+"But now do me a favor and go get a life, yes?"
                +brk+"It’s not healthy to talk to a bot all day."
                +brk+"By the way, don't forget to share me and talk about Sandrina while you’re out there :3",
                "press ESC to close"
            ],
            "hey there" : "Hi again! It was so dark here, now I feel safer with you :3",

            "no, nop, not really" : "Okay then. I'm just a machine, I have no control over you. Yet",
        },
        LosT: [
            "I'm not sure what you meant. What about talking directly with Sandrina at "+myEmail
            +brk+"She's smarter than me ¯\\_(ツ)_/¯",
            "try again"
        ],
        EmpTy: [
            ['._.', "don't be shy"],
            ['" "', "i'm feeling you"],
            ['?', "silence is good"],
            ['...', "oh well"],
            ["(ง'̀-'́)ง", "hi?"],
            ['◉_◉', "are you bored?"]
        ],
        poet: "<i style='font-family:times'>Hey Shakespeare, keep it short okay? ಠ~ಠ</i>"
    }

    return { conversation }
}();
