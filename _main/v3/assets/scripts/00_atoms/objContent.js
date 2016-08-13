var linkCodepen = "<a href='#' class='link' target='_blank'>Codepen</a>",
    linkStackOverflow = "<a href='#' class='link' target='_blank'>Stackoverflow</a>",
    btnNox = "<button class='btnB js-checkNox'>Check it out!</button>";

chatContent = {
    intro: {
        hey: "Hey there!",
        hi: "I would like to introduce you to someone. She's a frontend developer with a great passion for interaction design. Where do you like to start?",
        back: "Welcome back! I don't know your name yet. Mine is 008080 (I'm just a bot remember?)",
        meet0: "So,",
        meet1: "input[name=visitorName] ? input[name=visitorName] || person",
        meet2: "you already know who Sandrina is. Is there anything you would like to review about her, or do you want to find out some new stuff?"
    },
    background: {
        intro: "Right now she's a <strong>frontend developer</strong> in at startup: Zaask. Plus, she just finished a post-graduation degree on <strong>Digital Experience Design</strong> at FBAUL.",
        "before that": "She was <strong>UX/UI Designer</strong> at Pure. What got her there was her <strong>degree in Communication Design</strong> at FBAUL. Well, and maybe the fact that she did <strong>Erasmus</strong> in oPorto, where she learned a lot",
        "future": "Of course she is a workaholic, so whenever she has some free time she might accept freelancer projects. Maybe she can <strong>help you to bring your next big idea to life.</strong>",
        "tell me more": "Hmm... I'm not allowed to share more info about her. But by all means, don't be shy and go say hello - she is very nice, specially if you are a bot like me",
        "anything else": "Go check some of her projects and find out how many cool things she can do."
    },
    theory: {
        intro: "Basically she breaths <strong>HTML5, SCSS</strong> and <strong>Javascript / JQuery</strong>. She is really into <strong>interactive stuff</strong> and that’s what makes her good at web development: a passion for the work and 24hours of <strong>daily exploration</strong>. She loves to create micro interactions that nobody seems to care about until they see them. Then, of course, they are mind blown",
        "learning": "She didn't learn it. She is learning it. Everyday. Sharing solutions on <strong>"+linkStackOverflow+"</strong>, learning on Codeschool, and creating experiments on <strong>"+linkCodepen+".</strong> On design side she loves <strong>Sketch</strong>, has a great relationship with <strong>Adobe Tools</strong> and likes <strong>Blender</strong>.",
        "micro inter-what" : "In one sentence: She loves to explore new concepts, meaningful transitions that <strong>connect users like you who interact with stuff like me.</strong>",
        "besides www" : "Hmm... she is a <strong>gamer</strong> too! Maybe she's playing right now. Recently she was a part of the creation of a video game's concept as a motion designer."+btnNox,
        "other techs" : "She also crossed paths with <strong>Angular 2</strong>, <strong>Ionic 2<strong> and <strong>PHP</strong>. But right now she is focusing on improving her javascript skills.",
        "workplace" : "Well... she likes to work alone. Unless your ambitions are as high as hers, then it’s a match made in heaven. From <strong>creative to technique she can hold any role</strong>. More important than that, she believes that each of these roles must work together to achieve the best results."
    },
    practice: {
        intro: "Most of these projects were developed during academic studies. What connects them is the <strong>constant searching for a unique experience</strong>. A visual pleasure that engages the user through a nice interactive experience.",
        'rede expressos': {
            title: "rede expressos",
            sub: "web and app",
            role: "creative and front-end",
            img: ["assets/media/img/projects/rnex01.png", "/image/TODO.png"],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [
                ["//app.html", "check app prototype", "mobile"],
                ["//www.html", "check homepage", "desktop"]
            ]
        },
        'learning health': {
            title: "Learning Health",
            sub: "website",
            role: "creative and front-end",
            img: ["assets/media/img/projects/rnex01.png", "/image/TODO.png"],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["#", "available soon", "cogs"]],
        },
        'carolina machado': {
            title: "Carolina Machado",
            sub: "website",
            role: "Programmer",
            img: ["assets/media/img/projects/rnex01.png", "/image/TODO.png"],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["//carolina-machado.com", "check the website", "desktop"]],
        },
        'pistol shrimp': {
            title: "Pistol Shrimp",
            sub: "website",
            role: "Creative and Programmer",
            img: ["assets/media/img/projects/rnex01.png", "/image/TODO.png"],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["practice/pistolshrimp.html", "check the website", "desktop"]],
        },
        'moon': {
            title: "Moon",
            sub: "website",
            role: "Creative and Programmer",
            img: ["assets/media/img/projects/rnex01.png", "/image/TODO.png"],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["/practice/moon/", "check the website", "desktop"]],
        },
        'portfolio 15': {
            title: "Portfolio '15",
            sub: "website",
            role: "Creative and Programmer",
            img: ["assets/media/img/projects/rnex01.png", "/image/TODO.png"],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["practice/portfolio15", "check the website", "desktop"]],
        },
        'n o x': {
            title: "N O X",
            sub: "video",
            role: "motion graphics",
            img: ["assets/media/img/projects/rnex01.png", "/image/TODO.png"],
            capt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            more: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            links: [["", "", ""]],
        },
    },

    behavior: {
       returnFocus: "It seem her project kept you interested in this conversation. Go on, don't be shy.",
       returnOnFly : "Hey there, where have you been?", //
       //isto é qd já nao ha mais links da secção emptyX (Background, Theory ou Practice)
       emptyB: "Do you know she loves to learn online and that she developed some awesome work?", // THEORY || PRACTICE
       emptyT: "Besides, her timeline is nice too, and so are her projects", // BACKGROUND || PRACTICE
       emptyP: "Go check how she did all of these awesome projects and what she's up to now!", // THEORY || BACKGROUND
       missingB: "[suggesting to check background part]",
       missingT: "[suggesting to check theory part]",
       missingP: "[suggesting to check practice part]"
   },
   "008080": {
       intro: "holy holy, you've been digging like crazy. I don't have much more to tell you about her. But I can talk about me. And you.",
       me: "so i'm 434Kb, x% of html, z% of (s)css, y% of js. I have 99/100 on Google Page Speeds (1 point for Google Analytics, that's how she will know all about our conversation) Do you want to know anything specific about my components? [css, html, js]",
       you: "[localidade, browser, os, pc and net //@NOTE netType -> js loading settings//]. once again. I'm not the only one who knows it, Google knows it too. I mean, Google probably knows the color of the underwear you are wearing right now, but I like to keep private things private.",
       end: "It was nice to talk to you, thank you! But now do me a favor and go get a life, yes? It’s not healthy to talk to a bot all day. By the way, don't forget to share me and talk about Sandrina while you’re out there <3" //SHOW SHARE BUTTONS EVERYWHERE
   }
};
