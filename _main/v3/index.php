<!DOCTYPE html>
<!--[if lt IE 8]>
    <html class="ie ie7 ie8">
<![endif]-->

<!--[if IE 9]>
    <html class="ie ie9">
<![endif]-->

<!--!(IE)]><!-->
    <html>
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>008080</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <meta name='keywords' content='keywords'>
    <meta name='description' content='[description]'>
    <meta name='subject' content='subject'>
    <meta name='copyright' content='xxxx'>
    <meta name='language' content='PT'>

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,700|Roboto+Mono:100,300,400,700" rel="stylesheet">
    <!-- <link rel="icon" type="image/png" href="assets/media/brand/favicon16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="assets/media/brand/favicon32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="assets/media/brand/favicon180.png" sizes="180x180"> -->

    <style media="screen">
        .chat,
        .void,
        .under {
            display: none;
        }
    </style>
</head>

<body>
    <h1 class="sr-only">Sandrina Pereira's bot</h1>
    <h2 class="sr-only">interaction designer and frontend developer</h2>
    <div class="heyThere">
        <!-- <p class="heyThere-oh">oh!...</p> -->
        <p class="heyThere-hey">Hey there</p> <!--jsLoading-->
        <p class="heyThere-intro">  <!--jsLoading-->
            I would like to introduce you to someone.
            <br>She's a frontend developer with a great passion for interaction design.
            <br><br>Where do you like to start?
        </p>
    </div>
    <nav class="navSections"> <!--jsLoading-->
        <h2 class="sr-only">chat navigation</h2>
        <div class="navSections-btn"> <!--jsLoading-->
            <button type="button" name="background" class="btnNav js-chatOpt">background</button>
        </div>
        <div class="navSections-btn"> <!--jsLoading-->
            <button type="button" name="theory" class="btnNav js-chatOpt">theory</button>
        </div>
        <div class="navSections-btn"> <!--jsLoading-->
            <button type="button" name="practice" class="btnNav js-chatOpt">practice</button>
        </div>
        <div class="navSections-about">
            <button type="button" name="about" class="btnNav js-aboutTrigger">
                <span>0</span><span>0</span><span>8</span><span>0</span><span>8</span><span>0</span>
            </button>
        </div>
    </nav>



    <div class="chat" id="chat">
    </div>

    <div class="void">
        [upside down]
    </div>

    <div class="under">
        <header class="under-header">
            <div class="under-ascii">
                <?php include 'index-parts/myself.php';?>
            </div>
            <span class="glitch" data-text="interaction Designer" data-sub="frontend developer">
                <span>creative developer</span>
            </span>
        </header>

        <?php include 'index-parts/under-section.php';?>

        <nav class="under-nav">
            <h2 class="sr-only">contacts</h2>
            <a href="//codepen.io/sandrina-p/" target="_blank" title="sandrina's codepen" class="btnB">
                <span class="under-nav-hover-1">coding without fun, it's just... boring</span>
                <i class="fa fa-codepen"></i>
            </a>
            <a href="mailto:sandrin4pereir4@gmail.com?subject=Hey%20there!" class="btnB">
                sandrin4pereir4@gmail.com
            </a>
            <a href="//stackoverflow.com/users/4737729/sandrina-pereira" target="_blank" title="sandrina's stackoverflow" class="btnB">
                <i class="fa fa-stack-overflow"></i>
                <span class="under-nav-hover-3">helping others is as important as being helped</span>
            </a>
        </nav>
    </div>

    <div class="bot">
        <div class="bot-inner">
            <div class="bot-text">
                Now that we talked enough about Sandrina...ah yes, that's her name, I forgot to tell you. Anyways, I think I could talk about me. Like, nerd talk... but before that just tell me one thing:
                <br><br>
                <br><br>
                1 + '2'
                <br><br>
                <br><br>
                You are a little crazy…
                <br><br>I was born inside the Atom editor.
                <br><br>HTML5, SCSS and javascript are my vital organs.
                <br><br>Eventually I evolved and started being built with [Koala] but as any good programmer knows, crashes happen and "Dry and not wet", so [Gulp] took its place!
                <br><br>Despite always being under construction I already have the ability to share some stuff that Sandrina taught me while I was growing up.
            </div>
            <div class="bot-options">
                <button type="button" name="bests" class="">[btn1]</button>
                <button type="button" name="challenges" class="">[btn2]</button>
            </div>
        </div>

    </div>


    <!-- SCRIPTS AND STYLES -->
    <noscript>
        <link rel="stylesheet" href="assets/styles/04_templates/index.min.css">
    </noscript>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <!--[if lt IE 9 || IE9]>
        <link rel="stylesheet" href="assets/styles/04_templates/index.min.css">
    <![endif]-->
    <script>
        var cb = function() {
            var l = document.createElement('link'); l.rel = 'stylesheet';
            l.href = 'assets/styles/04_templates/index.min.css';
            var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
        };

        var raf = requestAnimationFrame || mozRequestAnimationFrame ||
        webkitRequestAnimationFrame || msRequestAnimationFrame;

        if (raf) raf(cb);
        else window.addEventListener('load', cb);
    </script>

    <script async src="assets/scripts/03_templates/index.min.js" charset="utf-8"></script>

    <style media="screen">
        body {
            display: block;
        }
    </style>
</body>

</html>
