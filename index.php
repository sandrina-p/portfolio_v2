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
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet">
    <link rel="icon" type="image/png" href="assets/media/brand/favicon16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="assets/media/brand/favicon32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="assets/media/brand/favicon180.png" sizes="180x180">

    <link rel="stylesheet" href="assets/styles/04_templates/header.min.css">

    <style>
        /*just the needed css to display the intro*/
        <?php //echo file_get_contents('assets/styles/04_templates/header.min.css') ?>
    </style>
</head>

<?php
    $loadingNav = 'jsLoading';
?>
<body>

    <h1 class="sr-only">Sandrina Pereira</h1>
    <h2 class="sr-only">interaction designer, frontend developer, creative developer</h2>
    <div class="heyThere">
                                    <!-- I know that's not very beautiful but this is how I made that intro animation with CSS only -->
        <h2 class="heyThere-hey"><span>H</span><span>e</span><span>y</span><br><span>t</span><span>h</span><span>e</span><span>r</span><span>e</span></h2>
        <div class="heyThere-intro">
            <p>
                I would like to introduce you to someone.
                She is a <strong>frontend developer</strong> with a great passion for <strong class="nowrap">interaction design</strong>.
                <span class="heyThere-br"></span>
                Where do you like to start?
            </p>
        </div>
    </div>

    <div class="navCV">
        <a href="#cv" class="navCV-link">cv</a>
    </div>

    <div class="chat jsLoading" id="chat">
        <!-- not so fast. it's javascript ¯\_(ツ)_/¯ -->

        <div class="chat-nav" id="chat-nav">
            <article class="chatSection jsOnNav <?php echo $loadingNav ?>" id="background" style="translateX(0px);">
                <div class="chatPart" id="background-intro">
                    <div class="chatPart-human">
                        <button type="button" name="background" id="btn-bg" class="chatPart-title js-chatOpt"></button>
                    </div>
                </div>
            </article>

            <article class="chatSection jsOnNav <?php echo $loadingNav ?>" id="theory" style="translateX(83px);">
                <div class="chatPart" id="theory-intro">
                    <div class="chatPart-human">
                        <button type="button" name="theory" id="btn-th" class="chatPart-title js-chatOpt"></button>
                    </div>
                </div>
            </article>

            <article class="chatSection jsOnNav <?php echo $loadingNav ?>" id="practice" style="translateX(185px);">
                <div class="chatPart" id="practice-intro">
                    <div class="chatPart-human">
                        <button type="button" name="practice" id="btn-pr" class="chatPart-title js-chatOpt"></button>
                    </div>
                </div>
            </article>
        </div>
    </div>

    <!-- <div class="chat-newnav" id="chat-nav">
        <button type="button" name="background" id="btn-bg" class="chatPart-title js-chatOpt">history</button>
        <button type="button" name="theory" id="btn-th" class="chatPart-title js-chatOpt">knowledge</button>
        <button type="button" name="practice" id="btn-pr" class="chatPart-title js-chatOpt">projects</button>
    </div> -->

    <?php include 'index-parts/under-section.php';?>

    <div class="js-scrollForFun"></div>

    <div class="psst js-psst">
        <p class="psst-title">psst...</p>
        <p class="psst-parag"> Maybe now you want to talk about her.
            <br>I can tell you more about her projects.
            <br>What do you think?
        </p>
        <button type="button" name="true" class="chatPart-title">yh, sure</button>
        <button type="button" name="false" class="chatPart-title js-botTrigger">not really</button>
        <span class="js-scrolled">xx</span>
    </div>

    <div class="bot jsLoading" id="bot">
        <!-- ◉_◉ for the last time, it's javascript -->
        <div class="bot-inner">
            <div class="bot-text"></div>
        </div>
    </div>

    <noscript>
        <link rel="stylesheet" href="assets/styles/04_templates/index.min.css">
    </noscript>
    <!--[if lt IE 9 || IE9]>
        <link rel="stylesheet" href="assets/styles/04_templates/index.min.css">
    <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script>
        var cb = function() {
            var l = document.createElement('link'); l.rel = 'stylesheet';
            l.href = 'assets/styles/04_templates/index.min.css';
            document.getElementsByTagName('head')[0].appendChild(l);
        };
        var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
        if (raf) raf(cb);
        else window.addEventListener('load', cb);
    </script>
    <script src="assets/scripts/03_templates/index.min.js" charset="utf-8"></script>

    <script type="text/javascript">
        var _mfq = _mfq || [];
        (function() {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.async = true;
            mf.src = "//cdn.mouseflow.com/projects/8e1f3c91-ff33-46ac-8fe9-a35fab3ea005.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
        })();
    </script>
</body>

</html>
