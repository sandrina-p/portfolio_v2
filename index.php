<?php $DEV = false; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet">

    <title>Sandrina Pereira - front-end developer | UX / Interaction Design</title>

    <meta name='copyright' content='@2016 Mariana Freitas and Sandrina Pereira'>
    <meta name='description' content='I want to introduce you to someone who spends her time exploring new ways to connect people like you with websites like me'>
    <meta name="Designer" CONTENT="Sandrina Pereira">
    <meta name='language' content='en-US'>
    <meta name='subject' content='internet, design, web development'>

    <meta name="DC.title" content="Sandrina Pereira" />
    <meta name="DC.creator " content="Sandrina Pereira" />
    <meta name="DC.creator.address" content="a.sandrina.p@gmail.com" />

    <link rel="icon" type="image/png" href="src/media/metatags/favicon16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="src/media/metatags/favicon32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="src/media/metatags/favicon64.png" sizes="64x64">
    <link rel="icon" type="image/png" href="src/media/metatags/favicon180.png" sizes="180x180">

    <meta name="twitter:card" content="Psst.. Hey there" />
    <meta name="twitter:site" content="sandrina-p.net" />
    <meta name="twitter:title" content="sandrina pereira website" />
    <meta name="twitter:description" content="I want to introduce you to someone who spends her time exploring new ways to connect people like you with websites like me" />
    <meta name="twitter:image" content="src/media/metatags/card.png" />

    <meta property="og:title" content="Psst... Hey there" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.sandrina-p.net" />
    <meta property="og:image" content="src/media/metatags/card.png" />

    <?php // in production inline the critical css to faster DOM render.
    echo $DEV
        ? '<link rel="stylesheet" href="src/critical.min.css">'
        : '<style>' . file_get_contents('src/critical.min.css') . '</style>';
    ?>
</head>

<body>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-70069700-3', 'auto');
        ga('send', 'pageview');
    </script>

    <h1 class="sr-only">Sandrina Pereira - Interaction Design and front-end developer</h1>
    <div class="heyThere">

        <p class="heyThere-hey" aria-hidden="true"><span>H</span><span>e</span><span>y</span><br><span>t</span><span>h</span><span>e</span><span>r</span><span>e</span></p>
        <div class="heyThere-intro">
            <p>
                <span class="sr-only">Hey There!</span>
                I want to introduce you to someone.
                <span class="nowrap">She is a</span> <strong>front-end developer</strong> with a great passion for <strong class="nowrap">interaction design</strong>.
                <span class="heyThere-br"></span>
                <span class="noscript">Where would you like to start?</span>
            </p>
        </div>
    </div>

    <noscript>
        <style media="screen">
            .noscript, .navCV, .chat, .js-psst {display:none!important;}
        </style>
    </noscript>

    <div class="chat jsLoading" id="chat">
        <!-- js -->
        <nav class="chat-nav" id="chat-nav" aria-label="I confess right now this can be hard for who is only listening me. I'm being improved in order for you to use me easily!">
            <div class="chatSection jsOnNav jsLoading js-chatBtn" id="practice">
                <div class="chatPart" id="practice-intro">
                    <div class="chatPart-human">
                        <button type="button" name="practice" id="btn-pr" class="chatPart-title js-chatOpt" data-gaec="chatNavL" aria-label="Projects - here you have a navigation in loop that toggles each project at the time"></button>
                    </div>
                </div>
            </div>
            <div class="chatSection jsOnNav jsLoading js-chatBtn" id="journey">
                <div class="chatPart" id="journey-intro">
                    <div class="chatPart-human">
                        <button type="button" name="journey" id="btn-jr" class="chatPart-title js-chatOpt" data-gaec="chatNavL" aria-label="Journey - Each time a new topic shows up, it will show 2 buttons to choose another topic about my journey"></button>
                    </div>
                </div>
            </div>

            <div class="chatSection jsOnNav js-ignoreBot jsLoading">
                <div class="chatPart">
                    <div class="chatPart-human">
                        <button type="button" name="bot" id="btn-bot" class="chatPart-title js-botTrigger" data-gaec="chatNavL" aria-label="About - This is a chat with me where I explain how I was built technically. Despite being the part that most of users love more, unfortunately it's the worse part of me for users like you. I'm sorry about that, I'm working on it!"></button>
                    </div>
                </div>
            </div>
        </nav>
    </div>


    <div class="navCV">
        <a href="#cv" class="navCV-link" data-gaec="navCV" aria-hidden="true">Let's cut the bullshit. Who is she?</a>
    </div>

    <?php include 'views/cv.php';?>

    <div class="bot jsLoading" id="bot"><!-- ◉_◉ js --></div>

    <div class="cv-ascii" aria-hidden="true">
        <?php include 'views/myself.php';?>
    </div>

    <noscript>
        <link rel="stylesheet" href="src/index.min.css">
    </noscript>
    <!--[if lt IE 9 || IE9]>
        <link rel="stylesheet" href="src/index.min.css">
    <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script>
        var cb = function() {
            var l = document.createElement('link'); l.rel = 'stylesheet';
            l.href = 'src/index.min.css';
            document.getElementsByTagName('head')[0].appendChild(l);
        };
        var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
        if (raf) raf(cb);
        else window.addEventListener('load', cb);
    </script>

    <script defer src="src/vendor.min.js" charset="utf-8"></script>
    <script defer src="src/index.min.js" charset="utf-8"></script>

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
