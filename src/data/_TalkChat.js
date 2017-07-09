/* global TalkChat:false */
/* exported TalkChat */

var TalkChat = function(){
    var brk = '<br>',
        linkCodepen = '<a href=\'//codepen.com/sandrina-p\' class=\'link\' target=\'_blank\'>Codepen</a>',
        linkStackOverflow = '<a href=\'//stackoverflow.com/story/sandrina\' class=\'link\' target=\'_blank\'>Stackoverflow</a>',
        linkMariana = genLink('//marianarpdf.com', 'Mariana Freitas'),
        linkJoao = genLink('//www.facebook.com/joaocdvrodrigues', 'João Rodrigues'),
        linkMaggie = genLink('//mmbotelho.com', 'Margarida Botelho'),
        linkLusco = genLink('//www.facebook.com/luscooo', 'LUSCO'),
        mainSections = ['projects', 'journey', 'about'];

    function genLink(link, name) {
        return `<a href='${link}' target='_blank' class='linkProj'>${name}</a>`;
    }

    var conversation = {
        journey: {
            'intro': 'Right now she\'s working as a <strong>UI Developer</strong> <span class="nowrap">at Farfetch.</span>'
                +brk+'On her free time, she loves to explore and share new ideas with the web.',
            'ambition': 'She believes that design is more than a interface and coding is not only about performance.'
                +brk+'She seeks for a web where both can work as one to <strong>accomplish a great experience.</strong>',
            'hobbies': '<span class="nowrap"><strong>Video Games</strong></span> is one of her choices. It\'s where <strong>experience is on its richer state</strong>: Interface, interaction and sound focused on <span class="nowrap">the user behavior.</span>',
            'what else': 'She likes <strong>open-source</strong> projects! She would love to hear your next crazy idea!',
            'workplace': 'She is a fast paced worker, so she likes to work alone.'
                +brk+'Unless your ambitions are as high as hers, then it’s a match made in heaven.'
                +brk+'From <strong>creative to technical, she can excel at any role.</strong>',
            'education': 'She has a degree in Design of Communication at FBAUL.'
                +brk+'She also did a post-graduation on <strong>Digital Experience Design</strong> <span class="nowrap">at the same faculty.</span>'
        },
        practice: {
            intro: 'These were born during her academic studies. The constant searching for <strong>something interactive</strong> is what connects her projects.',
            projects: ['rede expressos', /*'carolina machado',*/ 'portfolio 15', 'pistol shrimp', 'moon', 'NOX', 'DET', '141205'],
            'rede expressos': {
                categ: 'www projects',
                title: 'Rede Expressos',
                sub: 'web and app concept redesign',
                role: 'creative and front-end',
                team: 'Individual project',
                img: [
                    'src/media/img/projects/rnex0.png',
                    'src/media/img/projects/rnex1.png',
                    'src/media/img/projects/rnex2.png',
                    'src/media/img/projects/rnex3.png',
                ],
                capt: 'Everyone knows that Rede Expressos is not an user friendly platform...',
                more: 'During her post graduation she redesigned and coded the website\'s homepage and used Jekyll. UX / UI wise, she redesigned the "buy ticket" userflow for Mobile iOS and Android. The project had several phases: competitor Analysis, product SWOT, wireframes, design and prototype. She also learned how to adapt an app to follow both Human Guidelines and Material Design.',
                date: 'JUN\'16',
                links: [
                    ['https://marvelapp.com/6jef9dg', 'iOS prototype', 'apple'],
                    ['https://sandrina-p.github.io/rede-expressos/', 'homepage', 'desktop']
                ]
            },
            // 'carolina machado': {
            //     categ: 'www projects',
            //     title: 'Carolina Machado',
            //     sub: 'fashion website',
            //     role: 'Tumblr theme developer',
            //     team: 'Individual project',
            //     img: [
            //         'src/media/img/projects/cm0.png',
            //         'src/media/img/projects/cm1.png',
            //         'src/media/img/projects/cm2.png',
            //         'src/media/img/projects/cm3.png',
            //     ],
            //     capt: 'A Tumblr theme build from scratch. Ajax is the secret',
            //     more: 'After the first static website, she decided to give it an upgrade by adding some CMS to make the content dynamic and of course, easier for Carolina to update. Tumblr was the chosen one for its simple API and content management. With Ajax it was possible to have almost full control over it that now no one says it\'s a Tumblr.',
            //     date: 'mar\'16',
            //     links: [['//carolina-machado.com', 'check the website', 'desktop']],
            // },
            'portfolio 15': {
                categ: 'www projects',
                title: 'Portfolio15',
                sub: 'her previous site',
                role: 'Creative and Programmer',
                team: 'Individual project',
                img: [
                    'src/media/img/projects/sp0.png',
                    'src/media/img/projects/sp1.png',
                    'src/media/img/projects/sp2.png',
                    'src/media/img/projects/sp3.png'
                ],
                capt: 'Say hello to my brother from 2015',
                more: 'She was looking for new interactive ways to present herself. I think the best part is the menu. You never saw something like that! She started to explore advanced CSS transitions and experimenting a lot of JS plugins. It\'s also an under construction website that she never finished. I don\'t think that\'s bad. In fact, that\'s the beauty about it!',
                date: 'AUG\'15',
                links: [['https://sandrina-p.github.io/portfolio-15/', 'check the website', 'desktop']],
            },
            'pistol shrimp': {
                categ: 'www projects',
                title: 'Pistol Shrimp',
                sub: 'net label website',
                role: 'Creative and Programmer',
                team: 'Made with '+linkMariana+', '+linkJoao+' and '+linkMaggie,
                img: [
                    'src/media/img/projects/ps0.png',
                    'src/media/img/projects/ps1.png',
                    'src/media/img/projects/ps2.png',
                    'src/media/img/projects/ps3.png',
                ],
                capt: 'When you do all but what teachers asked, you end up with a crazy interactive project',
                more: 'Some friends of her wanted to build an online record label that distributes music for free. She wanted to work on a website. So they decided to go for it as a Final Degree project in Communication Design. The website presents itself with a black and white design by focusing on the user experience through each interactive release, enhancing the download, so there is more to it than just a click.',
                date: 'JUN\'15',
                links: [['https://sandrina-p.github.io/pistol-shrimp/', 'check the website', 'desktop']],
            },
            'moon': {
                categ: 'www projects',
                title: 'Moon',
                sub: 'Movie website',
                role: 'Creative and Programmer',
                team: 'Individual project',
                img: [
                    'src/media/img/projects/moon0.png',
                    'src/media/img/projects/moon1.png',
                    'src/media/img/projects/moon2.png',
                    'src/media/img/projects/moon3.png',
                ],
                capt: 'It\'s not a movie, but it could be',
                more: 'Hope you know the movie Moon (2009) by Duncan Jones. The main focus of this website was not about how the film was made but the story and experience that the character lives along the narration. Here, the user’s interaction is fundamental to create the website.',
                date: 'feb\'15',
                links: [['https://sandrina-p.github.io/moon/', 'check the website', 'desktop']],
            },
            'NOX': {
                categ: 'opening other doors',
                title: 'NOX',
                sub: 'video game concept',
                role: 'Motion Graphics',
                team: 'Made with '+linkMaggie,
                img: [
                    'src/media/img/projects/nox0.png',
                    'src/media/img/projects/nox1.png',
                    'src/media/img/projects/nox2.png',
                    'src/media/img/projects/nox3.png'
                ],
                capt: 'This one is out of the text editor',
                more: 'She and her friend Margarida always loved video games. When given the chance, they took it and just did it. They didn\'t know anything about the design process behind it, but learned a lot trying to understand it. With Nyx (the greek goddess of night) in mind, they designed a video game trailer that focuses on darkness. Everything is illuminated only by the main characters fireflies. But I will not spoil you. Watch the video!',
                date: 'JUl\'16',
                links: [['https://vimeo.com/176452854', 'watch the video', 'vimeo']],
            },
            'DET': {
                categ: 'opening other doors',
                title: 'DET Dutch Experimental Typography',
                sub: 'Digital Magazine',
                role: 'Creative and Mag+',
                team: 'Made with '+linkMaggie,
                img: [
                    'src/media/img/projects/det0.png',
                    'src/media/img/projects/det1.png',
                    'src/media/img/projects/det2.png',
                    'src/media/img/projects/det3.png'
                ],
                capt: '"I heard we can create digital magazines with inDesign!", "Oh really? Let\'s try it out!"',
                more: 'Because creating books it\'s not her thing, she and her friend Margarida decided to experiment a new digital world once again. They came up with "Dutch Experimental Typography\”, a digital catalogue of typography, developed from the 70’s throughout the 90’s in the Netherlands. I wish you could use it by yourself. It\'s really funny playing with its cover.',
                date: 'Mar\'15',
                links: [['https://www.behance.net/gallery/26687261/Digital-Magazine-Dutch-experimental-typography', 'check it on behance', 'behance']],
            },
            '141205': {
                categ: 'opening other doors',
                title: '141205',
                sub: '3D animation',
                role: 'Creative and technique',
                team: 'Sound by '+linkLusco,
                img: [
                    'src/media/img/projects/blend0.png',
                    'src/media/img/projects/blend1.png',
                    'src/media/img/projects/blend2.png',
                    'src/media/img/projects/blend3.png'
                ],
                capt: 'Today is a video, tomorrow might be a website',
                more: 'Finally she had the opportunity to have 3D classes during her Erasmus in Porto. Although this video project is all about a single solid, she learned the basics essential about Blender and 3D mechanisms to keep learning by herself after Erasmus. She dreams for the day where her path crosses with Three.js and she can bring 3D to websites like me!',
                date: 'DEC\'14',
                links: [['https://vimeo.com/115483647', 'check the video', 'vimeo']],
            },
        },
        onWeb: {
            intro: 'social networks',
            dd: 'not a big fan of facebook',
        },
        behaviour: {
            navProjMob: 'you can also <span>swipe</span> to the left or to the right',
            navProjDesk: 'you can also use your keyboard <span>[<]</span> and <span>[>]</span> keys',
            // returnFocus: "It seems her project kept you interested in this conversation. Go on, don't be shy.",
            // returnOnFly: "Hey there, where have you been?",
            psstChat: [
                'I\'m surprised',
                'I\'m not allowed to share more info about her.'
                +brk+'But by all means, don\'t be shy and go <a href=\'mailto:a.sandrina.p@gmail.com?subject=Hello!\' target=\'_blank\' class=\'link\'>say hello</a>.'
                +brk+'She is very nice, specially if you are a good looking website like me.',
                'Who are you?'
            ],
            psstMob: [
                'Hmm...',
                'You really like to scroll <span class=\'nowrap\'>don\'t you?</span>'
            ]
        },
    };

    return {
        mainSections,
        conversation
    };
}();
