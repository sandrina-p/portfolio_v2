var linkCodepen = "<a href='#' class='link' target='_blank'>Codepen</a>",
    linkStackOverflow = "<a href='#' class='link' target='_blank'>Stackoverflow</a>",
    btnNox = "<button class='btnB js-chatStart' data-initproject='N O X'>Check it out!</button>",
    mainSections = ['background','theory','practice'],
    brChar = "<br>",
    browser = "[browser]"
    mobileBrand = "[mobile brand]";
    screenRes = '[big/small]'


if (screen.width < 750) {
    var resolutionScreenMsg = "I feel so happy that we are reaching this point of our relationship on your "+mobileBrand+". Like a good bot, I always take into consideration what kind of device you are using to connect with me. This way, images and those scary stuff that drain the data network are not really problem: you always get the best for both your eyes and your device. ;)"

} else {
    var resolutionScreenMsg = "I noticed that you have a "+screenRes+", so the images I showed you have a big and nice resolution. If you were on your mobile, I'd be a thoughtful bot and reduce their size so I could save you some Kb from your mobile data network. How sweet am I, hm ? :D";
}


var chatContent = {
    intro: {
        hey: "Hey there!",
        hi: "I would like to introduce you to someone. She's a frontend developer with a great passion for interaction design. Where do you like to start?",
        back: "Welcome back! I don't know your name yet. Mine is 008080 (I'm just a bot remember?)",
        meet0: "So,",
        meet1: "input[name=visitorName] ? input[name=visitorName] || person",
        meet2: "You already know who Sandrina is. Is there anything you would like to review about her, or do you want to find out some new stuff?"
    },
    background: {
        intro: "Right now she's a <strong>frontend developer</strong> in a startup: Zaask."+brChar+"Plus, she just finished a post-graduation degree on <strong>Digital Experience Design</strong> at FBAUL.",
        "before that": "She was <strong>UX/UI Designer</strong> at Pure."+brChar+"What got her there was her <strong>degree in Communication Design</strong> at FBAUL."+brChar+"Well, and maybe the fact that she did <strong>Erasmus</strong> in Oporto, where she learned a lot",
        "future": "Of course she is a workaholic, so whenever she has some free time she might accept freelancer projects."+brChar+"Maybe she can <strong>help you to bring your next big idea to life.</strong>",
        "tell me more": "Hmm... I'm not allowed to share more info about her."+brChar+"But by all means, don't be shy and go say hello."+brChar+"She is very nice, specially if you are a bot like me"
        // "anything else": "Go check some of her projects and find out how many cool things she can do."
    },
    theory: {
        intro: "Basically she breaths <strong>HTML5, SCSS</strong> and <strong>Javascript / JQuery</strong>."+brChar+"She is really into <strong>interactive stuff</strong> and that’s what makes her good at web development: a passion for the work and 24hours of <strong>daily exploration</strong>."+brChar+"She loves to create micro interactions that nobody seems to care about until they see them."+brChar+"Then, of course, they are mind blown",
        "other techs" : "She also crossed paths with <strong>PHP</strong>, <strong>Angular 2</strong> and <strong>Ionic 2</strong>."+brChar+"But right now she is focusing on improving her javascript skills.",
        "micro inter-what" : "In one sentence: She loves to explore new concepts, meaningful transitions that <strong>connect users like you who interact with stuff like me.</strong>",
        "learning": "She didn't learn it."+brChar+"She is learning it."+brChar+"Everyday."+brChar+"Sharing solutions on <strong>"+linkStackOverflow+"</strong>, learning on Codeschool, and creating experiments on <strong>"+linkCodepen+".</strong>"+brChar+"On design side she loves <strong>Sketch</strong>, has a great relationship with <strong>Adobe Tools</strong> and likes <strong>Blender</strong>.",
        "besides www" : "Hmm... she is a <strong>gamer</strong> too!"+brChar+"Maybe she's playing right now."+brChar+"Recently she was a part of the creation of a video game's concept as a motion designer."+btnNox,
        "workplace" : "Well... she likes to work alone."+brChar+"Unless your ambitions are as high as hers, then it’s a match made in heaven."+brChar+"From <strong>creative to technique she can hold any role</strong>."+brChar+"More important than that, she believes that each of these roles must work together to achieve the best results."
    },
    practice: {
        intro: "Most of these projects she did both design and code parts."+brChar+"What connects them is the <strong>constant searching for a unique experience</strong>."+brChar+"A visual pleasure that engages the user through a nice interactive experience."+brChar+"Let me start with something cool:",
        firstProject: "rede expressos",
        'rede expressos': {
            categ: "other www projects",
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
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [
                ["//app.html", "check app prototype", "mobile"],
                ["//www.html", "check homepage", "desktop"]
            ]
        },
        'carolina machado': {
            categ: "other www projects",
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
            more: "After 6 months, Carolina Machado presented her collection for the second time in ModaLisboa - Lisboa Fashion. So I decided to give an upgrade to this website as well as adding some CMS, to make the content dynamic (and of course more easier for her to update it). I chose Tumblr to rebuild the website, and now all the navigation is through Ajax. This way I could have almost full control over the Tumblr standart API and improve the User Experience.",
            links: [["//carolina-machado.com", "check the website", "desktop"]],
        },
        'portfolio 15': {
            categ: "other www projects",
            title: "Portfolio 15",
            sub: "Her previous portfolio",
            role: "Creative and Programmer",
            img: [
                "assets/media/img/projects/sp0.png",
                "assets/media/img/projects/sp1.png",
                "assets/media/img/projects/sp2.png",
                "assets/media/img/projects/sp3.png",
                "assets/media/img/projects/sp4.png",
            ],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["practice/portfolio15", "check the website", "desktop"]],
        },
        'pistol shrimp': {
            categ: "other www projects",
            title: "Pistol Shrimp",
            sub: "net label website",
            role: "Creative and Programmer",
            img: [
                "assets/media/img/projects/ps0.png",
                "assets/media/img/projects/ps1.png",
                "assets/media/img/projects/ps2.png",
                "assets/media/img/projects/ps3.png",
            ],
            capt: "When you do everything but what teachers asked you to do, you end up with a crazy interactive website.",
            more: "Final Degree project in Communication Design. Website of an online record label that distributes music for free. In each release the record label creates an interactive experience, enhancing the download, so there is more to it than just a click. The website presents itself with a black and white visual by focusing on the user experience. My part was focused on coding HTML5, CSS3 and JQuery. This was a group project made with Lusco, BLEID and Margarida Botelho.",
            links: [["practice/pistolshrimp.html", "check the website", "desktop"]],
        },
        'moon': {
            categ: "other www projects",
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
            more: "Hope you know the movie Moon (2001) by Duncan Jones. The main focus of the website was not about how the film was made but the story and experience that the character lives along the narration. For this, the user’s interaction was fundamental on creating the website.",
            links: [["/practice/moon/", "check the website", "desktop"]],
        },
        'N O X': {
            categ: "opening other doors",
            title: "N O X",
            sub: "video game concept video",
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
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["//vimeo.com/nox", "check it on vimeo", "vimeo"]],
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
            more: "Dutch Experimental Typography” is a digital catalogue of typography, developed from the 70’s throughout the 90’s in the Netherlands. This app includes an interactive cover that the user can play with. It was developed using Mag+ Software with InDesign. This was a group project made with Margarida Botelho.",
            links: [["//behance.com/sandrin4p/det", "check it on behance", "behance"]],
        },
        '141205': {
            categ: "opening other doors",
            title: "141205",
            sub: "blender animation",
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
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["//vimeo.com/", "check it on vimeo", "vimeo"]],
        },
    },

    behaviour: {
       returnFocus: "It seem her project kept you interested in this conversation. Go on, don't be shy.",
       returnOnFly : "Hey there, where have you been?", //
       emptybackground: "Do you know she loves to learn online and that she developed some awesome work?", // THEORY || PRACTICE
       emptytheory: "Besides, her timeline is nice too, and so are her projects", // BACKGROUND || PRACTICE
       emptypractice: "Go check how she did all of these awesome projects and what she's up to now!", // THEORY || BACKGROUND
       missingbackground: "[suggesting to check background part]",
       missingtheory: "[suggesting to check theory part]",
       missingpractice: "[suggesting to check practice part]"
   },
   "008080": {
       intro: "holy holy, you've been digging like crazy. I don't have much more to tell you about her. But I can talk about me. And you.",
       me: "so i'm 434Kb, x% of html, z% of (s)css, y% of js. I have 99/100 on Google Page Speeds (1 point for Google Analytics, that's how she will know all about our conversation) Do you want to know anything specific about my components? [css, html, js]",
       you: "[localidade, browser, os, pc and net //@NOTE netType -> js loading settings//]. once again. I'm not the only one who knows it, Google knows it too. I mean, Google probably knows the color of the underwear you are wearing right now, but I like to keep private things private.",
       end: "It was nice to talk to you, thank you! But now do me a favor and go get a life, yes? It’s not healthy to talk to a bot all day. By the way, don't forget to share me and talk about Sandrina while you’re out there <3" //SHOW SHARE BUTTONS EVERYWHERE
   }
};

var botContent = {
    intro: "Now that we talked enough about Sandrina...ah yes, that's her name, I forgot to tell you. Anyways... I think I could talk about me. Like, nerd talk... but before that just tell me one thing: 1 / 0 =",
    correct: "You are a little crazy…",
    nop: "You know that Siri isn't always right. Neither do you.",
    step1: "I was born inside the Atom editor."+brChar+"HTML5, SCSS and Javascript are my vital organs."+brChar+"Eventually I evolved and started being built with [Koala] but as any good programmer knows, crashes happen, so [Gulp] took its place! "+brChar+"Despite always being under construction I already have the ability to share random stuff that Sandrina taught me while I was growing up.",
    bests: [
        "When I first said hello, I wasn't totally ready for you"+brChar+" - guess that makes me a bit human, right?"+brChar+"But while you were reading my first sentence I had enough time to send you the rest of the CSS and JS files that I needed to have a conversation with you."+brChar+"That's a great way to reduce [perceived loading time] and avoid [FOUC], don't you think?",
        "I started following [SUIT methodology] (css) and [Module Pattern] (js)."+brChar+"Which basically means it is very easy for me to adapt myself and change my appearance when Sandrina gets new crazy ideas during her boredom strikes."+brChar+"I mean, what will a coder do when she is bored other than code some more?",
        "I know you have a sweet "+browser+" with javascript, but I am a wise bot so I always take into consideration people without javascript or with a shitty browser."+brChar+"Of course they don’t get the chance to talk to some cool AI like myself, but at least they will know enough about Sandrina."+brChar+"And in a not creepy way - I was designed like that, it’s not like I worship her -, that’s my life’s purpose:"+brChar+"to talk about her, despite the outdated technology people use to access me.",
        resolutionScreenMsg
    ],
    challenges : [
        "Do you want to know the secret behind these cool animations?"+brChar+"CSS makes the magic happen."+brChar+"And the javascript only toggles them when it is necessary."+brChar+"It makes things run much smoother."+brChar+"And that’s really important because there is nothing worst than a laggy website.",
        "Maybe you will not believe me, but that switching images effect on Sandrina's projects are CSS only."+brChar+"You read me right:"+brChar+"no javascript"+brChar+"at all. Check it out on [codepen]."+brChar+"As well as her [portrait]..."+brChar+"You didn’t think that was an image, did you?"+brChar+"/*if (scroll.top < window.innerHeight) */oh wait.. you didn't see her portrait yet! clicking isn't everything, you know...*",
        "My purpose here, despite being a bot, is having a conversation with you."+brChar+"I try to be funny, of course."+brChar+"But I won’t say the same thing twice."+brChar+"Or tell you stuff you didn't asked for."+brChar+"What I’m trying to say is I am a bot with a passion for context and human interaction."+brChar+"I pretend to think [ . . . ] by taking some time to answer you, but the truth is, I already knew what to tell you before we first met. They say smart guys think. So I learned to make you think I was thinking so I could impress you [ . . . ]"
    ],
    git: "Now that we know each other a bit better, we should advance to the second base."+brChar+"I'll let you check my sources on [github]."+brChar+"Feel free to explore and maybe improve me, especially on javascript."+brChar+"I still feel some strange energies around here, don't you?",
    bye: "You know what... It's really hard having a human conversation."+brChar+"That's why I'm just a bot."+brChar+"[008080] by the way."+brChar+"Nice to meet you :) It was nice to talk to you, thank you!"+brChar+"But now do me a favor and go get a life, yes?"+brChar+"It’s not healthy to talk to a bot all day."+brChar+"By the way, don't forget to share me and talk about Sandrina while you’re out there <3"
}
