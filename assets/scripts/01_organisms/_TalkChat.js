var TalkChat = function(){
    var brk = "<br>",
        linkCodepen = "<a href='#' class='link' target='_blank'>Codepen</a>",
        linkStackOverflow = "<a href='#' class='link' target='_blank'>Stackoverflow</a>",

        mainSections = ['history','knowledge','projects'];

    var conversation = {
        // intro: {
        //     hey: "Hey there!",
        //     hi: "I wanna introduce you to someone. She's a frontend developer with a great passion for interaction design. Where do you like to start?",
        //     back: "Welcome back! I don't know your name yet. Mine is 008080 (I'm just a bot remember?)",
        //     meet0: "So,",
        //     meet1: "input[name=visitorName] ? input[name=visitorName] || person",
        //     meet2: "You already know who Sandrina is. Is there anything you would like to review about her, or do you want to find out some new stuff?"
        // },
        background: {
            "intro":
                `Right now she's a <strong>frontend developer</strong> in a startup: Zaask.
                ${brk}Plus, she just finished a post-graduation degree on <strong>Digital Experience Design</strong> at FBAUL.`,

            "before that":
                `She was <strong>UX/UI Designer</strong> at Pure.
                ${brk}What got her there was her <strong>degree in Communication Design</strong> at FBAUL.
                ${brk}Well, and maybe the fact that she did <strong>Erasmus</strong> in Oporto, where she learned a lot`,

            "future":
                `Of course she is a workaholic, so whenever she has some free time she might accept freelancer projects.
                ${brk}Maybe she can <strong>help you to bring your next big idea to life.</strong>`,

            "tell me more":
                `Hmm... I'm not allowed to share more info about her.
                ${brk}But by all means, don't be shy and go say hello.
                ${brk}She is very nice, specially if you are a bot like me`
        },
        theory: {
            "intro":
                `Basically she breaths <strong>HTML5, SCSS</strong> and <strong>Javascript / JQuery</strong>.
                ${brk}She is really into <strong>interactive stuff</strong> and that’s what makes her good at web development: a passion for the work and 24hours of <strong>daily exploration</strong>.
                ${brk}She loves to create micro interactions that nobody seems to care about until they see them.
                ${brk}Then, of course, they are mind blown`,
            "other techs":
                `She also crossed paths with <strong>PHP</strong>, <strong>Angular 2</strong> and <strong>Ionic 2</strong>.
                "+brk+"But right now she is focusing on improving her javascript skills.`,
            "micro inter#!?":
                `In one sentence: She loves to explore new concepts, meaningful transitions that <strong>connect users like you who interact with stuff like me.</strong>`,
            "learning":
                `She didn't learn it.
                ${brk}She is learning it.
                ${brk}Everyday.
                ${brk}Sharing solutions on <strong>${linkStackOverflow}</strong>, learning on Code School, and creating experiments on <strong>${linkCodepen}.</strong>
                ${brk}On design side she loves <strong>Sketch</strong>, has a great relationship with <strong>Adobe Tools</strong> and likes <strong>Blender</strong>.`,
            "besides www":
                `Hmm... she is a <strong>gamer</strong> too!
                ${brk}Maybe she's playing right now.
                ${brk}Recently she was a part of the creation of a video game's concept as a motion designer.`,
            "workplace":
                `Well... she likes to work alone.
                ${brk}Unless your ambitions are as high as hers, then it’s a match made in heaven.
                ${brk}From <strong>creative to technique she can hold any role</strong>.
                ${brk}More important than that, she believes that each of these roles must work together to achieve the best results.`
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
        onWeb: {
            intro: "social networks",
            dd: "not a big fan of facebook",
            social: {
                codepen: {
                    link: "//codepen.io/sandrina-p",
                    dd: "because coding without fun, it's just boring"
                },
                github: {
                    link: "//github.com/sandrina-p",
                    dd: "Sharing it's what make us better"
                },
                "stack-overflow": {
                    link: "//stackoverflow.com/story/sandrina",
                    dd: "helping others is as important as being helped"
                },
                behance: {
                    link: "//www.behance.net/sandrin4p",
                    dd: "it can't be all about code"
                }
            },
        },
        behaviour: {
            navProjMob: "you can also <span>swipe</span> to the left or to the right",
            navProjDesk: "you can also use your keyboard <span>[<]</span> and <span>[>]</span> keys",
            returnFocus: "It seems her project kept you interested in this conversation. Go on, don't be shy.",
            returnOnFly: "Hey there, where have you been?",
            psstChat: [
                "i'm surprised",
                "i'm not sure what to say but ... algo fun <span class='nowrap'>seria nice.</span>",
                "[do nothing]",
                "[go to bot]"
            ],
            psstMob : [
                "Hmm...",
                "You really like to scroll <span class='nowrap'>don't you?</span>",
                "",
                "not really"
            ]
        },
    };

    return {
        mainSections,
        conversation
    }
}();
