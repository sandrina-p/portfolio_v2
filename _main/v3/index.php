<!DOCTYPE html>
<html>
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

    <link rel="stylesheet" href="assets/styles/04_templates/header.min.css">
</head>

<?php
    $loading = '';
    //$loading = 'jsLoading';
?>
<body>
    <h1 class="sr-only">Sandrina Pereira's conversational bot</h1>
    <h2 class="sr-only">interaction designer, frontend developer, creative developer</h2>
    <div class="heyThere">
        <h2 class="heyThere-hey">Hey <br>there</h2>
        <div class="heyThere-intro">
            <p>
                I would like to introduce you to someone.
                <br>She's a frontend developer with a great passion for <span class="nowrap">interaction design.</span>
                <span class="heyThere-br"></span>
                Where do you like to start?
            </p>
        </div>
    </div>

    <div class="chat" id="chat">
        <div class="chat-nav" id="chat-nav">
            <article class="chatSection jsOnNav jsLoading jsLoading2" id="background">
                <div class="chatPart" id="background-intro">
                    <div class="chatPart-human">
                        <button type="button" name="background" class="chatPart-title js-chatOpt">background</button>
                    </div>
                </div>
            </article>

            <article class="chatSection jsOnNav jsLoading jsLoading2" id="theory">
                <div class="chatPart" id="theory-intro">
                    <div class="chatPart-human">
                        <button type="button" name="theory" class="chatPart-title js-chatOpt">theory</button>
                    </div>
                </div>
            </article>

            <article class="chatSection jsOnNav jsLoading jsLoading2" id="practice">
                <div class="chatPart" id="practice-intro">
                    <div class="chatPart-human">
                        <button type="button" name="practice" class="chatPart-title js-chatOpt">practice</button>
                    </div>
                </div>
            </article>
        </div>
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

    <div class="bot" id="bot">
        <button type="button" name="about" class="bot-trigger js-botTrigger">
            <span>0</span><span>0</span><span>8</span><span>0</span><span>8</span><span>0</span>
        </button>
        <div class="bot-inner">
            <div class="bot-text"></div>
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
            // var h = document.getElementsByTagName('head')[0]; h.parentNode.appendChild(l, h);
            document.getElementsByTagName('head')[0].appendChild(l);
        };

        var raf = requestAnimationFrame || mozRequestAnimationFrame ||
        webkitRequestAnimationFrame || msRequestAnimationFrame;

        if (raf) raf(cb);
        else window.addEventListener('load', cb);
    </script>
    <script async src="assets/scripts/03_templates/index.min.js" charset="utf-8"></script>
</body>

</html>
