var linkCodepen = "<a href='#' class='link' target='_blank'>Codepen</a>",
    linkStackOverflow = "<a href='#' class='link' target='_blank'>Stackoverflow</a>",
    btnNox = "<button class='btnB js-chatStart' data-initproject='N O X'>Check it out!</button>",
    mainSections = ['history','knowledge','projects'],
    brk = "<br>",
    browser = "[TODO browser]",
    mobileBrand = "[TODO mobile brand]",
    portraitMsg = "[TODO if (scroll.top < window.innerHeight) */oh wait.. you didn't see her portrait yet! clicking isn't everything, you know...]";

if (screen.width < 750) {
    var screenRes = 'small screen',
        resolutionScreenMsg = "I feel so happy that we are reaching this point of our relationship on your "+mobileBrand+". Like a good bot, I always take into consideration what kind of device you are using to connect with me. This way, images and those scary stuff that drain the data network are not really problem: you always get the best for both your eyes and your device. ;)"
} else {
    var screenRes = 'big screen',
        resolutionScreenMsg = "I noticed that you have a "+screenRes+", so the images I showed you have a big and nice resolution. If you were on your mobile, I'd be a thoughtful bot and reduce their size so I could save you some Kb from your mobile data network. How sweet am I, hm ? :D";
}


var chatContent = {
    intro: {
        hey: "Hey there!",
        hi: "I would like to introduce you to someone. She's a frontend developer with a great passion for interaction design. Where do you like to start?",
        // back: "Welcome back! I don't know your name yet. Mine is 008080 (I'm just a bot remember?)",
        // meet0: "So,",
        // meet1: "input[name=visitorName] ? input[name=visitorName] || person",
        // meet2: "You already know who Sandrina is. Is there anything you would like to review about her, or do you want to find out some new stuff?"
    },
    background: {
        intro: "Right now she's a <strong>frontend developer</strong> in a startup: Zaask."+brk+"Plus, she just finished a post-graduation degree on <strong>Digital Experience Design</strong> at FBAUL.",
        "before that": "She was <strong>UX/UI Designer</strong> at Pure."+brk+"What got her there was her <strong>degree in Communication Design</strong> at FBAUL."+brk+"Well, and maybe the fact that she did <strong>Erasmus</strong> in Oporto, where she learned a lot",
        "future": "Of course she is a workaholic, so whenever she has some free time she might accept freelancer projects."+brk+"Maybe she can <strong>help you to bring your next big idea to life.</strong>",
        "tell me more": "Hmm... I'm not allowed to share more info about her."+brk+"But by all means, don't be shy and go say hello."+brk+"She is very nice, specially if you are a bot like me"
        // "anything else": "Go check some of her projects and find out how many cool things she can do."
    },
    theory: {
        intro: "Basically she breaths <strong>HTML5, SCSS</strong> and <strong>Javascript / JQuery</strong>."+brk+"She is really into <strong>interactive stuff</strong> and that’s what makes her good at web development: a passion for the work and 24hours of <strong>daily exploration</strong>."+brk+"She loves to create micro interactions that nobody seems to care about until they see them."+brk+"Then, of course, they are mind blown",
        "other techs" : "She also crossed paths with <strong>PHP</strong>, <strong>Angular 2</strong> and <strong>Ionic 2</strong>."+brk+"But right now she is focusing on improving her javascript skills.",
        "micro inter#!?" : "In one sentence: She loves to explore new concepts, meaningful transitions that <strong>connect users like you who interact with stuff like me.</strong>",
        "learning": "She didn't learn it."+brk+"She is learning it."+brk+"Everyday."+brk+"Sharing solutions on <strong>"+linkStackOverflow+"</strong>, learning on Codeschool, and creating experiments on <strong>"+linkCodepen+".</strong>"+brk+"On design side she loves <strong>Sketch</strong>, has a great relationship with <strong>Adobe Tools</strong> and likes <strong>Blender</strong>.",
        "besides www" : "Hmm... she is a <strong>gamer</strong> too!"+brk+"Maybe she's playing right now."/*+brk+"Recently she was a part of the creation of a video game's concept as a motion designer. "+btnNox*/,
        "workplace" : "Well... she likes to work alone."+brk+"Unless your ambitions are as high as hers, then it’s a match made in heaven."+brk+"From <strong>creative to technique she can hold any role</strong>."+brk+"More important than that, she believes that each of these roles must work together to achieve the best results."
    },
    practice: {
        intro: "Most of these projects she did both design and code parts."+brk+"What connects them is the <strong>constant searching for a unique experience</strong>."+brk+"A visual pleasure that engages the user through a nice interactive experience."+brk+"Let me start with something cool:",
        projects: ['rede expressos', 'carolina machado', 'portfolio 15', 'pistol shrimp', 'moon', 'N O X', 'DET', '141205'],
        'rede expressos': {
            categ: "www projects",
            title: "Rede Expressos",
            sub: "web and app concept redesign",
            role: "creative and front-end",
            img: [
                "assets/media/img/projects/rnex0.png",
                "assets/media/img/projects/rnex1.png",
                "assets/media/img/projects/rnex2.png",
                "assets/media/img/projects/rnexx.png",
            ],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id <span class='nowrap'>est laborum.</span>",
            date: "MMM'YY",
            links: [
                ["//app.html", "check app prototype", "mobile"],
                ["//www.html", "check homepage", "desktop"]
            ]
        },
        'N O X': {
            categ: "opening other doors",
            title: "N O X",
            sub: "video game concept",
            role: "Motion Graphics",
            img: [
                "assets/media/img/projects/nox0.png",
                "assets/media/img/projects/nox1.png",
                "assets/media/img/projects/nox2.png",
                "assets/media/img/projects/nox3.png",
                "assets/media/img/projects/nox4.png",
                "assets/media/img/projects/noxx.png",
            ],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id <span class='nowrap'>est laborum.</span>",
            date: "MMM'YY",
            links: [["//vimeo.com/nox", "check it on vimeo", "vimeo"]],
        },
        'carolina machado': {
            categ: "www projects",
            title: "Carolina Machado",
            sub: "fashion website",
            role: "Tumblr theme developer",
            img: [
                "assets/media/img/projects/cm0.png",
                "assets/media/img/projects/cm1.png",
                "assets/media/img/projects/cm2.png",
                "assets/media/img/projects/cm3.png",
                "assets/media/img/projects/cm4.png",
                "assets/media/img/projects/cmx.png",
            ],
            capt: "A website build from scratch on Tumblr. Its navigation is all through Ajax.",
            more: "After 6 months, Carolina Machado presented her collection for the second time in ModaLisboa - Lisboa Fashion. So I decided to give an upgrade to this website as well as adding some CMS, to make the content dynamic (and of course more easier for her to update it). I chose Tumblr to rebuild the website, and now all the navigation is through Ajax. This way I could have almost full control over the Tumblr standart API and improve <span class='nowrap'>the User Experience.</span>",
            date: "MMM'YY",
            links: [["//carolina-machado.com", "check the website", "desktop"]],
        },
        'portfolio 15': {
            categ: "www projects",
            title: "Portfolio15",
            sub: "her previous site",
            role: "Creative and Programmer",
            img: [
                "assets/media/img/projects/sp0.png",
                "assets/media/img/projects/sp1.png",
                "assets/media/img/projects/sp2.png",
                "assets/media/img/projects/sp3.png",
                "assets/media/img/projects/sp4.png",
            ],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim <span class='nowrap'>est laborum.</span>",
            date: "MMM'YY",
            links: [["practice/portfolio15", "check the website", "desktop"]],
        },
        'pistol shrimp': {
            categ: "www projects",
            title: "Pistol Shrimp",
            sub: "net label website",
            role: "Creative and Programmer",
            img: [
                "assets/media/img/projects/ps0.png",
                "assets/media/img/projects/ps1.png",
                "assets/media/img/projects/ps2.png",
                "assets/media/img/projects/ps3.png",
            ],
            capt: "When you do everything except what teachers asked you to do, you end up with a crazy interactive website.",
            more: "Final Degree project in Communication Design. Website of an online record label that distributes music for free. In each release the record label creates an interactive experience, enhancing the download, so there is more to it than just a click. The website presents itself with a black and white visual by focusing on the user experience. My part was focused on coding HTML5, CSS3 and JQuery. This was a group project made with João Rodrigues, Mariana Freitas and <span class='nowrap'>Margarida Botelho.</span>",
            date: "MMM'YY",
            links: [["practice/pistolshrimp.html", "check the website", "desktop"]],
        },
        'moon': {
            categ: "www projects",
            title: "Moon",
            sub: "Movie website",
            role: "Creative and Programmer",
            img: [
                "assets/media/img/projects/moon0.png",
                "assets/media/img/projects/moon1.png",
                "assets/media/img/projects/moon2.png",
                "assets/media/img/projects/moon3.png",
                "assets/media/img/projects/moon4.png",
                "assets/media/img/projects/moonx.png",
            ],
            capt: "It was in this website she started discovering the beauty about javascript and jQuery.",
            more: "Hope you know the movie Moon (2001) by Duncan Jones. The main focus of the website was not about how the film was made but the story and experience that the character lives along the narration. For this, the user’s interaction was fundamental on creating <span class='nowrap'>the website.</span>",
            date: "MMM'YY",
            links: [["/practice/moon/", "check the website", "desktop"]],
        },
        'DET': {
            categ: "opening other doors",
            title: "DET Dutch Experimental Typography",
            sub: "Digital Magazine",
            role: "Creative and Mag+",
            img: [
                "assets/media/img/projects/DET0.png",
                "assets/media/img/projects/DET1.png",
                "assets/media/img/projects/DET2.png",
                "assets/media/img/projects/DET3.png",
                "assets/media/img/projects/DETx.png",
            ],
            capt: "'I heard there is tool that creates digital magazine with inDesign!', - 'Oh really? Let's try it out!'",
            more: "Dutch Experimental Typography” is a digital catalogue of typography, developed from the 70’s throughout the 90’s in the Netherlands. This app includes an interactive cover that the user can play with. It was developed using Mag+ Software with InDesign. This was a group project made with <span class='nowrap'>Margarida Botelho.</span>",
            date: "MMM'YY",
            links: [["//behance.com/sandrin4p/det", "check it on behance", "behance"]],
        },
        '141205': {
            categ: "opening other doors",
            title: "141205",
            sub: "3D animation",
            role: "Creative and Programmer",
            img: [
                "assets/media/img/projects/blend0.png",
                "assets/media/img/projects/blend1.png",
                "assets/media/img/projects/blend2.png",
                "assets/media/img/projects/blend3.png",
                "assets/media/img/projects/blend4.png",
                "assets/media/img/projects/blendx.png",
            ],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id <span class='nowrap'>Margarida Botelho.</span>",
            date: "MMM'YY",
            links: [["//vimeo.com/", "check it on vimeo", "vimeo"]],
        },
    },

    behaviour: {
        // clickMsg: "show projects index",
        // scrollMsg: "or scroll down and let me show you",
        returnFocus: "It seem her project kept you interested in this conversation. Go on, don't be shy.",
        returnOnFly : "Hey there, where have you been?", //
        // emptybackground: " TODO2 Do you know she loves to learn online and that she developed some awesome work?", // THEORY || PRACTICE
        // emptytheory: "Besides, her timeline is nice too, and so are her projects", // BACKGROUND || PRACTICE
        // emptypractice: "Go check how she did all of these awesome projects and what she's up to now!", // THEORY || BACKGROUND
        // missingbackground: "[suggesting to check background part]",
        // missingtheory: "[suggesting to check theory part]",
        // missingpractice: "[suggesting to check practice part]"
   },
};





//bot links
function genLink(link, name, target) {
    (typeof target !== 'undefined') ? target = "" : target = "target='_blank'";
    return "<a href='"+link+"' "+target+" class='linkBot'>"+name+"</a>"
}

var googleIt = genLink('http://lmgtfy.com/?q=one+divided+by+zero', 'Google it');
    linkKoala = genLink('//koala-app.com/', 'Koala'),
    linkGulp = genLink('http://gulpjs.com/', 'Gulp'),
    linkSUIT = genLink('#linkTODO', 'SUIT methodology'),
    linkMP = genLink('#TlinkODO', 'Module Pattern'),
    linkLT = genLink('#TlinkODO', 'perceived loading time'),
    linkFOUC = genLink('#linkTODO', 'FOUC'),
    linkGit = genLink('#linkTODO', 'Bitbucket'),
    linkHer = genLink('http://www.imdb.com/title/tt1798709/', "Her"),
    myEmail = genLink('mailto:sandrin4pereir4@gmail.com?subject=Hey%20there!', 'sandrin4pereir4@gmail.com', "noTarget");


var publicCmd = "Some stuff you can know about:"
                +brk+"<b>best practices</<b>"
                +brk+"<b>challenges</<b>"
                +brk+"<b>resources</<b>"
                +brk+"<b>exit</<b>"
                +brk+"<b>...</b>"
                +brk+"<i>and much more but I'll not tell you.</<i>";

var botTextAbout = brk+"I was born inside the Atom editor."
                +brk+"^100 HTML5, SCSS and Javascript are my vital organs."
                +brk+"^500 Eventually I evolved and started being built with "+linkKoala+" but as any good programmer knows, crashes happen, so "+linkGulp+" took its place!"
                +brk+"^250 Despite always being under construction I already have the ability to share some stuff that Sandrina taught me while I was growing up."
                +brk+""+publicCmd;

var botOptHelp = "Maybe you should "+googleIt+" and then come back. What do you think?";


var botContent = {
    // intro: ["dubbing", "options", "your answer here", "typedJS"],
    intro: ["Now that we talked enough about Sandrina,"
        +brk+"^100Ah yes, that's her name, I forgot to tell you. Anyways..."
        +brk+"^150I think I could talk about me. Like, nerd talk... but before that just tell me one thing:"
        +brk+"1 divided by 0 equal to:", "options", "your answer here", "typedJS"],
    options: {
        // STRUCTURE:
        // "posible human, inputs sent, separated by, comma" : ["bot answer", "context of the next input", "input placeholder"]
        "infinity, universe, cosmos": ["You are a little crazy… we all are. ^1000 "+brk+""+botTextAbout, "commands", "what's next?", "typedJS"],
        "undefined, null": ["Not it's not. It has another name. At least on javascript language.", "options", "go ask it to some console", "typedJS"],
        "1/0, 1 divided by 0, one divided by zero": ["◉_◉ Don't try to turn the game against me."+brk+"I'm a bot, not a console.", "options", "go ask it to other console", "typedJS"],
        "zero, 0": ["You know that Siri isn't always right. ^1000"+brk+"Neither do you.^500"+brk+""+botOptHelp, "options", 'I still believe in you', "typedJS"],
        "maggie": ["Hey maggie", "options", 'I still believe in you', "typedJS"],
        "exit, esc": ["Really? We didn't even start you already want to leave.. Press ESC and go get a life", "options", "I still believe in you", "typedJS"],
        "help": [botOptHelp, "options", "I still believe in you", "typedJS"],
    },
    commands: {
        "best practices": [
            ["When I first said hello, I wasn't totally ready for you"+brk+" I guess that makes me a bit human, right?"+brk+"But while you were reading my first sentence I had enough time to send you the rest of the CSS and JS files that I needed to have a conversation with you."+brk+"That's a great way to reduce "+linkLT+" and avoid "+linkFOUC+", don't you think?", "commands", ""],
            ["I started following "+linkSUIT+" (css) and "+linkMP+" (js)."+brk+"Which basically means it is very easy for me to adapt myself and change my appearance when Sandrina gets new crazy ideas during her boredom strikes."+brk+"I mean, what will a coder do when she is bored other than code some more?", "commands", ""],
            ["I know you have a sweet "+browser+" with javascript, but I am a wise bot so I always take into consideration people without javascript or with a shitty browser."+brk+"Of course they don’t get the chance to talk to some cool AI like myself, but at least they will know enough about Sandrina."/*+brk+"And in a not creepy way - I was designed like that, it’s not like I worship her -, that’s my life’s purpose: to talk about her, despite the outdated technology people use to access me."*/, "commands", ""],
            [resolutionScreenMsg, "commands", ""],
        ],
        challenges: [
            ["Do you want to know the secret behind these cool animations?"+brk+"CSS makes the magic happen."+brk+"And the javascript only toggles them when it is necessary."+brk+"It makes things run much smoother."+brk+"And that’s really important because there is nothing worst than a laggy website.", "commands", ""],
            ["Maybe you will not believe me, but that switching images effect on Sandrina's projects are CSS only."+brk+"You read me right:"+brk+"no javascript"+brk+"at all. Check it out on [codepen]."+brk+"As well as her [portrait]..."+brk+"You didn’t think that was an image, did you?"+brk+""+portraitMsg, "commands", ""],
            ["My purpose here, despite being a bot, is having a conversation with you."+brk+"I try to be funny, of course."+brk+"But I won’t say the same thing twice."+brk+"Or tell you stuff you didn't asked for."+brk+"What I’m trying to say is I am a bot with a passion for context and human interaction."+brk+"I pretend to think [. . .] by taking some time to answer you, but the truth is, I already knew what to tell you before we first met. They say smart guys think. So I learned to make you think I was thinking so I could impress you [. . .]", "commands", ""],
        ],
        keepSection: [["If you want to know more about Sandrina's [*param*] just press <i>ENTER</i> again.", "commands", "", "typedJS", "keepSectionJS"], ["best practices", "challenges"]],
        allSaid: [["I don't have anything else to tell you about [*param*] "+brk+""+publicCmd, "commands", "", "typedJS"], ["best practices", "challenges"]],
    },
    vocabulary: {
        git: ["Now that we know each other a bit better, we should advance to the second base."+brk+"I'll let you check my sources on "+linkGit+"."+brk+"Feel free to explore and maybe improve me, especially on javascript."+brk+"I still feel some strange energies around here, don't you?", "commands", ""],
        "hey, hey there, hello, hi": ["Hey there! This can be the begining of "+linkHer+" *.*", "commands", ""],
        "..., bye, cya, shut down, exit, close": ["You know what... It's really hard having a human conversation."+brk+"That's why I'm just a bot."+brk+"<b>008080</b> by the way."+brk+"Nice to meet you :) It was nice to talk to you, thank you!"+brk+"But now do me a favor and go get a life, yes?"+brk+"It’s not healthy to talk to a bot all day."+brk+"By the way, don't forget to share me and talk about Sandrina while you’re out there <3", "commands", "like i said, still under construction, 'ESC' to close"],
        "esc, restart, reset, clear": ["are you sure about that? all our memories - at least mine - will be erased. If so, press ESC twice.","commands","[TODO]"],
        "resources, resources": ["still under construction","commands", "don't push me that way okay? :/"],
        "ok, okay": ["hmm... ok.","commands", "don't push me that way okay? :/"],
        "SUIT, SUIT methodology, Module Pattern, Gulp, Grunt, perceived loading time, FOUC": ["hmm... yh I knew you would type that. Sandrina already did some user research, like you in this moment. Soon i'll be able to better answer you, but for now, it's better for you to [Google It].","commands", "this time do it by youself, yes? :D"],
        "SUIT": ["hmm... ok.","commands", "don't push me that way okay? :/"],

    },
    help: ["We all get lost sometimes"+brk+""+publicCmd, "[*params*]", "try again"],
    LosT: ["I'm not sure what you meant. What about talking directly with Sandrina at "+myEmail+""+brk+"She's smarter than me ¯\\_(ツ)_/¯", "commands", "try again", "typedJS"],
    EmpTy: [
        ['._.', "commands", "don't be shy"],
        ['" "', "commands", "i'm feeling you"],
        ['?', "commands", "silence is good"],
        ['...', "commands", "oh well"],
        ["(ง'̀-'́)ง", "commands", "hi?"],
        ['◉_◉', "commands", "are you bored?"]
    ]
}
