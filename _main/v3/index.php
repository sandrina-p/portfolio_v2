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

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,700|Roboto+Mono:100,300,400" rel="stylesheet">
    <!-- <link rel="icon" type="image/png" href="assets/media/brand/favicon16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="assets/media/brand/favicon32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="assets/media/brand/favicon180.png" sizes="180x180"> -->

    <style media="screen">
        .header
        .main
        .footer {
            display: none;
        }
    </style>
</head>

<body>
    <h1 class="sr-only">Sandrina Pereira's bot</h1>
    <h2 class="sr-only">interaction designer and frontend developer</h2>
    <div class="heyThere">
        <!-- <p class="heyThere-oh">oh!...</p> -->
        <p class="heyThere-hey jsLoading">Hey there</p> <!--jsLoading-->
        <p class="heyThere-intro jsLoading">  <!--jsLoading-->
            I would like to introduce you to someone.
            <br>She's a frontend developer with a great passion for interaction design.
            <br><br>Where do you like to start?
        </p>
    </div>
    <nav class="navSections jsLoading"> <!--jsLoading-->
        <h2 class="sr-only">chat navigation</h2>
        <div class="navSections-btn jsLoading"> <!--jsLoading-->
            <button type="button" name="background" class="btnNav js-chatOpt">background</button>
        </div>
        <div class="navSections-btn jsLoading"> <!--jsLoading-->
            <button type="button" name="theory" class="btnNav js-chatOpt">theory</button>
        </div>
        <div class="navSections-btn jsLoading"> <!--jsLoading-->
            <button type="button" name="practice" class="btnNav js-chatOpt">practice</button>
        </div>
    </nav>

    <div class="chat" id="chat"></div>

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

        <section class="under-section">
            <h2 class="sr-only">curriculum</h2>
            <article class="under-article js-underDotingTarget">
                <div class="under-article-in">
                    <h3 class="under-title">background</h3>
                    <button type="button"
                        name="background"
                        data-section="background"
                        data-title="background"
                        class="under-doting js-chatStart js-underDotingTrigger">
                        <span class="doting"></span>
                    </button>
                    <dl class="under-dl">
                        <dt class="under-dt">frontend developer</dt>
                        <dd class="under-dd">zaask - since 2015</dd>

                        <dt class="under-dt">freelancer frontend</dt>
                        <dd class="under-dd">learning health - 2016</dd>

                        <dt class="under-dt">post-graduation - digital experience design</dt>
                        <dd class="under-dd">fbaul - 2015'16</dd>

                        <dt class="under-dt">ux/ui designer </dt>
                        <dd class="under-dd">pure - 2015</dd>

                        <dt class="under-dt">degree - communication design</dt>
                        <dd class="under-dd">fbaul - 2012'15</dd>

                        <dt class="under-dt">eramus - communication design</dt>
                        <dd class="under-dd">fbaup - 2014'15</dd>
                    </dl>
                </div>
            </article>

            <article class="under-article js-underDotingTarget">
                <div class="under-article-in">
                    <h3 class="under-title">theory</h3>
                    <h4 class="under-liTitle">Web Development</h4>
                    <button type="button"
                        name="theory"
                        data-section="theory"
                        data-title="theory"
                        class="under-doting js-chatStart js-underDotingTrigger">
                        <span class="doting"></span>
                    </button>
                    <ul class="under-ul">
                        <li class="under-li">html5</li>
                        <li class="under-li">css3 / scss</li>
                        <li class="under-li">jquery</li>
                        <li class="under-li">javascript</li>

                        <li class="under-li">php</li>
                        <li class="under-li">angular 2</li>
                        <li class="under-li">ionic 2</li>
                    </ul>
                    <h4 class="under-liTitle">Assets</h4>
                    <ul class="under-ul">
                        <li class="under-li">daily exploration</li>
                        <li class="under-li">ambition</li>
                        <li class="under-li">perfectionism</li>
                    </ul>
                    <h4 class="under-liTitle">Tools</h4>
                    <ul class="under-ul">
                        <li class="under-li">Sketch</li>
                        <li class="under-li">Adobe tools <span class="nowrap">[ps id ai ae]</span></li>
                        <li class="under-li">Blender</li>
                    </ul>
                </div>
            </article>

            <article class="under-article js-underDotingTarget">
                <div class="under-article-in">
                    <h3 class="under-title">practice</h3>
                    <button type="button"
                        name="pracitce"
                        data-section="pracitce"
                        data-title="pracitce"
                        class="under-doting js-chatStart js-underDotingTrigger">
                        <span class="doting"></span>
                    </button>
                    <ul class="liIndex-ul liIndex--padding">
                        <li class="liIndex-liCateg other-www-projects">
                            <h4 class="liIndex-categ">similar www projects</h4>
                            <ul class="liIndex-dl">
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="rede expressos"
                                        class="btnB js-chatStart">rede expressos</button>
                                    <span class="liIndex-sub">transports website</span>
                                </li>
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="carolina machado"
                                        class="btnB js-chatStart">carolina machado</button>
                                    <span class="liIndex-sub">fashion website</span>
                                </li>
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="learning health"
                                        class="btnB js-chatStart">learning health</button>
                                    <span class="liIndex-sub">health website</span>
                                </li>
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="portfolio 15"
                                        class="btnB js-chatStart">portfolio 15</button>
                                    <span class="liIndex-sub">previous portfolio</span>
                                </li>
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="pistol shrimp"
                                        class="btnB js-chatStart">pistol shrimp</button>
                                    <span class="liIndex-sub">net label website</span>
                                </li>
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="moon"
                                        class="btnB js-chatStart">moon</button>
                                    <span class="liIndex-sub">movie website</span>
                                </li>
                            </ul>
                        </li>
                        <li class="liIndex-liCateg opening-other-doors">
                            <h4 class="liIndex-categ">opening other doors</h4>
                            <ul class="liIndex-dl">
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="N O X"
                                        class="btnB js-chatStart">N O X</button>

                                    <span class="liIndex-sub">video game concept video</span>
                                </li>
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="141205"
                                        class="btnB js-chatStart">141205</button>
                                    <span class="liIndex-sub">blender animation</span>
                                </li>
                                <li class="liIndex-liProj">
                                    <button type="button"
                                        name="button"
                                        data-initproject="DET"
                                        class="btnB js-chatStart">DET</button>
                                    <span class="liIndex-sub">digital magazine</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </article>
        </section>

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
</body>

</html>
