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
</head>

<?php
    $loading = '';
    $loadingNav = 'jsLoading';
    // $loadingNav = '';
    //$loading = 'jsLoading';
?>
<body>
    <h1 class="sr-only">Sandrina Pereira</h1>
    <h2 class="sr-only">interaction designer, frontend developer, creative developer</h2>
    <div class="heyThere">
        <h2 class="heyThere-hey">Hey <br>there</h2>
        <!-- <script type="text/javascript">
            (function hT(){
                var elHt = document.getElementsByClassName('heyThere-hey')[0],
                    arr = ['H','e','y','<br>','t','h','e','r','e'],
                    text = "",
                    i = 0,
                    arrL = arr.length;

                function appendI() {
                    text += arr[i];
                    elHt.innerHTML = text;
                    i++;
                    if (i < arrL) {
                        setTimeout(function () {
                            appendI();
                        }, 30);
                    }
                }
                appendI();
            })();
        </script> -->
        <div class="heyThere-intro">
            <p>
                I would like to introduce you to someone.
                She's a frontend developer with a great passion for <span class="nowrap">interaction design.</span>
                <span class="heyThere-br"></span>
                Where do you like to start?
            </p>
        </div>
    </div>

    <div class="chat" id="chat">
        <!-- not so fast. it's javascript ¯\_(ツ)_/¯ -->
        <div class="chat-nav" id="chat-nav">
            <article class="chatSection jsOnNav <?php echo $loadingNav ?>" id="background">
                <div class="chatPart" id="background-intro">
                    <div class="chatPart-human">
                        <button type="button" name="background" id="btn-bg" class="chatPart-title js-chatOpt"></button>
                    </div>
                </div>
            </article>

            <article class="chatSection jsOnNav <?php echo $loadingNav ?>" id="theory">
                <div class="chatPart" id="theory-intro">
                    <div class="chatPart-human">
                        <button type="button" name="theory" id="btn-th" class="chatPart-title js-chatOpt"></button>
                    </div>
                </div>
            </article>

            <article class="chatSection jsOnNav <?php echo $loadingNav ?>" id="practice">
                <div class="chatPart" id="practice-intro">
                    <div class="chatPart-human">
                        <button type="button" name="practice" id="btn-pr" class="chatPart-title js-chatOpt"></button>
                    </div>
                </div>
            </article>
        </div>
    </div>

    <?php include 'index-parts/under-section.php';?>


    <button type="button" name="about" class="bot-trigger js-botTrigger">
        <span>0</span><span>0</span><span>8</span><span>0</span><span>8</span><span>0</span>
    </button>
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

</body>

</html>
