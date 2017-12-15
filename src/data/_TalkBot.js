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
        linkHer = genLink('http://www.imdb.com/title/tt1798709/', 'Her'),
        linkFirebase = genLink('http://firebase.google.com', 'Google Firebase'),
        linkHelpMe = genLink('https://github.com/sandrina-p/s008080/blob/master/src/data/_TalkBot-vocabulary.js', 'help me'),
        linkCodeAvatar = genLink('https://codepen.io/sandrina-p/pen/XNrVZj', 'profile picture'),
        linkCodeGlidder = genLink('https://codepen.io/sandrina-p/pen/pNzpqj', 'codepen'),
        // linkChill = genLink('https://www.youtube.com/watch?v=yecFTeMVSlo', 'She A Go'),
        myEmail = genLink('mailto:a.sandrina.p@gmail.com?subject=Hey%20there!', 'a.sandrina.p@gmail.com', 'noTarget'),
        linkCHTSTW = genLink('http://clickheretosavetheworld.com/', 'clickHereToSaveTheWorld'),

        brk = '<br>',
        browser = 'browser';
        // mobileBrand = "mobile";

    // if (screen.width < 750) {
    //     var screenRes = 'small screen',
    //         resolutionScreenMsg = "I feel so happy that we are reaching this point of our relationship on your "+mobileBrand+". Like a good bot, I always take into consideration what kind of device you are using to connect with me. This way, images and those scary stuff that drain the data network are not really problem: you always get the best for both your eyes and your device. ;)"
    //
    // } else {
    var screenRes = 'big screen',
        resolutionScreenMsg = 'I noticed that you have a '+screenRes+", so the images I showed you have a big and nice resolution. If you were on your mobile, I'd be a thoughtful bot and reduce their size so I could save you some Kb from your mobile data network. How sweet am I, hm ? :D";
    // }

    var publicCmd = 'What do you wanna know?'
                    +brk+'<b>technologies</b>'
                    +brk+'<b>best practices</<b>'
                    +brk+'<b>challenges</b>'
                    +brk+'<b>resources</b>'
                    +brk+'<b>exit</b>'
                    +brk+'<b>...</b>';

    var conversation = {
        // intro: ['type gg', "aqui", "options"],
        intro: [
            'Now that you know Sandrina, let me introduce myself: 👽'
            +brk+"I'm 008080 and here you can ask me stuff about me."
            +brk+''+publicCmd,
            'e.g. How are you', 'commands'
        ],
        commands: {
            'technologies': [
                [
                    'I was born inside ⚛ Atom editor.'
                    +brk+'HTML5, SCSS and Javascript (with jQuery) are my vital organs.',
                    '|','commands'
                ],
                [
                    'I started being built with '+linkKoala+' but as any programmer knows, 💥 happen, so '+linkGulp+' took its place!'
                    +brk+'Soon Webpack will rock here when Sandrina finds the time for it.',
                    '|','commands'
                ],
                [
                    "You probably value your privacy, but Sandrina knows everything you told me and where you clicked. That's her way to improve me each time a new user comes here."
                    +brk+'Thank you Google Analytics ;) 👀.',
                    '|','commands'
                ],
                [
                    "When Sandrina learns Node.js / Express, I'll move on to React with SSR."
                    +brk+"Until then, I'm just a static website hosted at Github with some PHP to help on HTML markup."
                    +brk+'Because for her, SEO and SSR are more important than Hyped Frameworks',
                    '|', 'commands'
                ],

                [
                    'You might think that writing Vanilla JS and jQuery are old fashion. But the truth is they are the starting point for all the new fancy techs. React, Vue, Typescript, etc..'
                    +brk+'So before you pick up a fancy tech, make sure you know well the roots! 🌱',
                    '|','commands'
                ],
            ],
            'best practices': [
                [
                    "When I first said hello, I wasn't totally ready for you ⏳"
                    +brk+' I guess that makes me a bit human, right? 👽'
                    +brk+'While you were reading the intro, I was still loading CSS and JS files that I needed too hold a conversation with you.'
                    +brk+"That's a great way to reduce "+linkLT+' and avoid '+linkFOUC+", don't you think?",
                    '|','commands'
                ],
                [
                    'I was built under '+linkSUIT+' (css) and '+linkMP+' (js).'
                    +brk+'Which basically means it is very easy for me to adapt myself when Sandrina gets new crazy ideas during her boredom strikes. 🌘'
                    +brk+'I mean, what will a coder do when she is bored other than code some more? 🤓',
                    '|','commands'
                ],
                [
                    'I know you have a sweet '+browser+' with javascript, but I am a wise bot so I always take into consideration people without javascript or with a shitty browser.'
                    +brk+'Of course they don’t get the chance to talk to some cool 👽 like myself, but at least they will know enough about Sandrina.',
                    '|','commands'
                ],
                [
                    resolutionScreenMsg,
                    '|','commands'
                ],
            ],
            'resources': [
                [
                    'Hum...'
                    +brk+'Sandrina never coded this part of me. 🏗'
                    +brk+'But '+linkCHTSTW+'. I think he is in the family.',
                    "Come back later and maybe I'll have more stuff to share", 'commands'
                ]
            ],
            'challenges': [
                [
                    'Do you know the secret behind these cool animations?'
                    +brk+'CSS makes the magic happen. ✨'
                    +brk+'And the javascript only toggles them when necessary.'
                    +brk+'It makes things much smoother.'
                    +brk+'And that’s really important. There\'s nothing worst than a laggy website.',
                    '|','commands'
                ],
                [
                    "Maybe you will not believe me, but that switching images effect on Sandrina's projects is CSS only."
                    +brk+'You read me right:'
                    +brk+'No javascript at all'
                    +brk+'Check it out on '+linkCodeGlidder+'.'
                    +brk+'As well as her '+linkCodeAvatar+'...'
                    +brk+'You didn’t think that was an image, did you?',
                    '|','commands'
                ],
                [
                    'My purpose here, despite being a bot 👽, is having a chat with you.'
                    +brk+'I try to be funny, of course.'
                    +brk+'But I won’t say the same thing twice.'
                    +brk+"Or tell you stuff you didn't asked for. 🙊"
                    +brk+'What I’m trying to say is I\'m a website with a passion for context and human interaction.'
                    +brk+'I pretend to think by taking some time to answer you, but the truth is, I already knew what to tell you before we first met.'
                    +brk+'They say smart guys think. So I learned to make you think I was thinking so I could impress you 🔮',
                    '|','commands'
                ],
            ],
            'keepSection': [
                'Press ENTER again to know more about [*param*]',
                ['technologies', 'best practices', 'challenges']
            ],
            'allSaid': [
                [
                    "I don't have anything else to tell you about [*param*] "
                    +brk+publicCmd,
                    '|','commands'
                ],
                ['best practices', 'challenges', 'resources']
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
            'resorce, resource': [
                'I think you meant <b>resources</b>, right?'
            ],
            'bp, practices, best practice, best pratice': [
                'Did you mean <b>best practices</b>?'
            ],
            'challenge, chalenge': [
                'Hum... <b>challenges</b> you mean, right?'
            ],
            'techs, tech, technology': [
                '<b>technologies</b> is what you are looking for...'
            ],
            'git, src, code, source, github': [
                'Now that we know each other,'
                +brk+"I'll let you check my sources @ "+linkGit+'.'
                +brk+'Please, don\'t judge Sandrina\'s technical skills for that.'
                +brk+'I was built in 2016 and a lot she\'s been learning since those times.'
                +brk+'Module approach, Unit Testing (TDD), Type Checkers, Linters, bla bla bla...'
                +brk+"Still, I'm quite Accessible and that's something most of the developers forget about... 😔"
            ],
            'hey, hey there, hello, hi': [
                'Hey there! 👋 This can be the begining of '+linkHer+' *.*'
            ],
            'thanks, thank you, thank u': [
                "You're welcome 👾", '|','commands'
            ],
            'sandrina': [
                'Anything more you want to know about her? Go say Hi! -> '+myEmail
            ],
            "what's your name, what is your name, name": [
                "I'm 008080. What about you?",
                "You can tell me, but i'll not be able to understand you. not yet :(", 'username'
            ],

            '008080, #008080, why that name?': [
                "That's my name. Why? Sandrina likes teal as you can see..."
                +brk+"Maybe she's not that creative afterall 🙄"
            ],
            '...' :[
                'there are more commands available than you think. In fact, you can '+linkHelpMe+' to better understand your human kind.'
            ],
            // "esc, restart, reset, clear": [
            //     "Are you sure about that? all our memories - at least mine - will be erased. If so, press ESC twice."
            // ],
            'ok, okay': [
                'hmm... ok. 👍'
            ],
            'suit, suit methodology, module pattern, gulp, grunt, perceived loading time, fouc': [
                "I knew you would type that. Sandrina already did some user research, like you in this moment. Soon I'll be able to better answer you, but for now, it's better for you to [Google It].",
                'this time do it by youself, ok? :D'
            ],
            'tell me more, more, what else, anything else': [
                'you are such a curious creature 🤓. Your best move is to talk with Sandrina at '+myEmail,
                // but you can leave a quick message to Sandrina. Just type something started by @@.*/",
                // "@@ Hi sandrina! How much is 0.1 + 0.3 ?"
                "or you can use social networks, she's there somewhere 🔭"
            ],
            'tilttt': [
                '💣 💣 💣 💣 💣'
                +brk+'ahhh... Something went wrong and I almost crashed... please can you try again?',
                'sandrina will take a look. I hope.', 'commands'
            ],
            "help, help me, lost, i'm lost, im lost, i am lost": [
                'We all get lost sometimes'
                +brk+''+publicCmd,
                'try again'
            ],
            'bye, cya, shut down, exit, halt, close, take care, git gud, get good': [
                'Nice to meet you! It was good to talk to you, thank you!'
                +brk+'But now do me a favor and go get a life, yes?'
                +brk+'It’s not healthy to talk to a bot all day.'
                +brk+"By the way, don't forget to share me and talk about Sandrina while you’re out there 😎",
                'press ESC to close'
            ],
            'hey there, welcome back' : [
                'Hi again! It was so dark here, now I feel safer with you!'
            ],

            'how are you, how are you today' : [
                "I'm happy for having someone to talk! 😃"
            ],
            'no, nop, not really' : [
                "Okay then... I'm just a machine, I have no control over you. Yet 😈"
            ],
        },
        LosT: [
            "I'm not sure what you meant. What about talking directly with Sandrina at "+myEmail
            +brk+"She's smarter than me ¯\\_(ツ)_/¯",
            'try again'
        ],
        EmpTy: [
            ['._.', "don't be shy"],
            ['" "', "i'm feeling you"],
            ['?', 'silence is good'],
            ['...', 'oh well'],
            ["(ง'̀-'́)ง", 'hi?'],
            ['◉_◉', 'are you bored?'],
            ['🤖', 'are u a robot?']
        ],
        poet: "<i style='font-family:times'>Hey Shakespeare, keep it short okay? ಠ~ಠ</i>"
    };

    return { conversation };
}();
