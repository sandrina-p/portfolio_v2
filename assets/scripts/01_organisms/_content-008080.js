//bot links
function genLink(link, name, target) {
    (typeof target !== 'undefined') ? target = "" : target = "target='_blank'";
    // /*ES5 ->*/ return "<a href='"+link+"' "+target+" class='linkBot'>"+name+"</a>"
    /*ES6 ->*/ return `<a href='${link}' ${target} class='linkBot'>${name}</a>`
}

var googleIt = genLink('http://lmgtfy.com/?q=one+divided+by+zero', 'Google it'),
    linkKoala = genLink('//koala-app.com/', 'Koala'),
    linkGulp = genLink('http://gulpjs.com/', 'Gulp'),
    linkSUIT = genLink('#linkTODO', 'SUIT methodology'),
    linkMP = genLink('#TlinkODO', 'Module Pattern'),
    linkLT = genLink('#TlinkODO', 'perceived loading time'),
    linkFOUC = genLink('#linkTODO', 'FOUC'),
    linkGit = genLink('#linkTODO', 'Bitbucket'),
    linkHer = genLink('http://www.imdb.com/title/tt1798709/', "Her"),
    myEmail = genLink('mailto:a.sandrina.p@gmail.com?subject=Hey%20there!', 'a.sandrina.p@gmail.com', "noTarget");


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
    intro: ["Now that we talked enough about Sandrina,"
        +brk+"^100Ah yes, that's her name, I forgot to tell you. Anyways..."
        +brk+"^150I think I could talk about me. Like, nerd talk... but before that just tell me one thing:"
        +brk+"1 divided by 0 equal to:", "options", "your answer here", "typedJS"],
    options: {
        // STRUCTURE:
        // "posible human, inputs sent, separated by, comma" : ["bot answer", "context of the next input", "input placeholder"]
        "infinity, infinito, ∞, universe, cosmos": ["You are a little crazy… we all are. ^1000 "+brk+""+botTextAbout, "commands", "what's next?", "typedJS"],
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
    bored: {
        "yes, yh": ["hmmm... let me give you game then [TODO]", "commands", "...", "typedJS"],
        "no, nop": ["nice for you. I am. You are boring.", "commands", "...", "typedJS"],
    },
    username: {
        "username": ["Nice to meet you [username]!", "commands", "...", "typedJS"],
    },
    vocabulary: {
        git: ["Now that we know each other a bit better, we should advance to the second base."+brk+"I'll let you check my sources on "+linkGit+"."+brk+"Feel free to explore and maybe improve me, especially on javascript."+brk+"I still feel some strange energies around here, don't you?", "commands", ""],
        "hey, hey there, hello, hi": ["Hey there! This can be the begining of "+linkHer+" *.*", "commands", ""],
        "thanks, thank you, thank u": ["You're welcome", "commands", ""],
        "sandrina": ["Yes... anything more you want to know about her? I recommend you to say Hi! ->"+myEmail, "commands", ""],
        "what's your name?, what is your name?": ["I'm 008080. What about you?", "username", ""],
        "..., bye, cya, shut down, exit, close": ["You know what... It's really hard having a human conversation."+brk+"That's why I'm just a bot."+brk+"<b>008080</b> by the way."+brk+"Nice to meet you :) It was nice to talk to you, thank you!"+brk+"But now do me a favor and go get a life, yes?"+brk+"It’s not healthy to talk to a bot all day."+brk+"By the way, don't forget to share me and talk about Sandrina while you’re out there <3", "commands", "like i said, still under construction, 'ESC' to close"],
        "esc, restart, reset, clear": ["are you sure about that? all our memories - at least mine - will be erased. If so, press ESC twice.","commands","[TODO]"],
        "resources, resources": ["still under construction","commands", "don't push me that way okay? :/"],
        "ok, okay": ["hmm... ok.","commands", "don't push me that way okay? :/"],
        "SUIT, SUIT methodology, Module Pattern, Gulp, Grunt, perceived loading time, FOUC": ["hmm... yh I knew you would type that. Sandrina already did some user research, like you in this moment. Soon i'll be able to better answer you, but for now, it's better for you to [Google It].","commands", "this time do it by youself, yes? :D"],
        "SUIT": ["hmm... ok.","commands", "don't push me that way okay? :/"],
        //
        // AND THEN THERE WAS A KLAUZ
        // a tua identaçao é feia, bj
        //
        "yo, yoyo": [
            "MC 008080 in da house yall!"+brk+
            "Sandrina isn't really a major Hip Hop fan, but I am."+brk+
            "You wanna dig my rhymes?"+brk+
            "<b>mc 008080</b>", 
            "commands", ""],
        "mc 008080": [
            "Sandrina is the pro who'll get things done"+brk+
            "From styling to dev, she'll beat you son!"+brk+
            "She's the browser magician,"+brk+
            "Her skillz: an addiction"+brk+
            "You know she's the boss"+brk+
            "Cause you found this musician"+brk+
            "....peace!",
            "commands", ""],
        "yes, cool, yeah, yeas, wow, that is cool, that's cool": [
            "Indeed! Try other commands like:"+brk+
            "<b>best practices</b>"+brk+
            "<b>challenges</b>"+brk+
            "<b>resources</b>"+brk+
            "<b>nestum addiction</b>", 
            "commands", ""],
        "damn": [
            "Yeah! (•_•) / ( •_•)>⌐■-■ / (⌐■_■)"+brk+
            "AHHHHHHHHHHHHHHHHHH!!!!!! TUM TUMTUM.", 
            "commands", ""],
        "you suck, cause you suck": [
            "You're not being very nice :("+brk+
            "Maybe a <b>joke</b> will cheer you up!", 
            "commands",""],
        "joke, tell me a joke, tell joke": [
            "What’s Beethoven’s favorite fruit?"+brk+
            "..."+brk+
            "......"+brk+
            "...BA-NA-NAA-NAAAAAA!", 
            "command", ""],
        "lol, lolol, ahah": [
            "I'm a funny bot ;)"+brk+
            "It all has to do with my <b>personality</b>", 
            "commands",""],
        "sorry, i'm sorry, i am sorry": [
            "Don't worry, I'm a bot. I have no feelings ;)", 
            "commands", ""],
        "mm":[
            "Meamu.", 
            "commands",""],
        "birthday, when's your birthday, your birthday, when is your birthday, birth date, your birth date": [
            "I was created somewhere between July and October 2016, and oficially released on November 2016", 
            "commands", ""],
        "personality": [
            "Clearly, I'm an ENTP, since I'm so good talking to people! Sandrina is an <b>INTJ</b> though, so, we're very unlike each other", 
            "commands", ""],
        "intj": [
            "Well, you know how INTJ's are."+brk+
            "They are very focused, always trying to be the best at what they love so dearly, their work. Also, they have the rare quality of being very tidy and organized people.", 
            "commands", ""],
        "nestum addiction": [
            "omg. .... omg omg omg"+brk+
            "DID YOU JUST SAY NESTUM"+brk+
            "I don't know love, and I don't think I have felt it, except for when someone says Nestum."+brk+
            "I think about Nestum all day. I have dreams about Nestum..."+brk+
            "Nestum is my life!!!",
            "commands", ""],
        "carol": [
            "EHEHEHEHEHEHE",
            "commands", "",
        ]
    },
    help: ["We all get lost sometimes"+brk+""+publicCmd, "[*params*]", "try again"],
    LosT: ["I'm not sure what you meant. What about talking directly with Sandrina at "+myEmail+""+brk+"She's smarter than me ¯\\_(ツ)_/¯", "commands", "try again", "typedJS"],
    EmpTy: [
        ['._.', "commands", "don't be shy"],
        ['" "', "commands", "i'm feeling you"],
        ['?', "commands", "silence is good"],
        ['...', "commands", "oh well"],
        ["(ง'̀-'́)ง", "commands", "hi?"],
        ['◉_◉', "bored", "are you bored?"]
    ]
}
