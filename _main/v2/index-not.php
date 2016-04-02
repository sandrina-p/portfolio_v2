<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>sandrina-p</title>

    <!--description-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <meta name='keywords' content='Web Design, Front End Development, UX, UI, Responsive Design'>
    <meta name='description' content='Here I show what I do and test new stuff and bugs'>
    <meta name='subject' content='Sandrina Pereira Website'/>
    <meta name='copyright' content='Sandrina Pereira'>
    <meta name='language' content='EN'>

    <!--TWITTER CARD-->
    <meta name="twitter:card" content="Front End Developer" />
    <meta name="twitter:site" content="Sandrina-p.net" />
    <meta name="twitter:title" content="Sandrina Pereira Website" />
    <meta name="twitter:description" content="Here I show what I do and test new stuff and bugs" />
    <meta name="twitter:image" content="data/share.png" />

    <!--Open Graph protocol-->
    <meta property="og:title" content="Front End Developer Designer" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.sandrina-p.net" />
    <meta property="og:image" content="assets/media/images/practice/project_lhealth.png" />

    <!--favicon-->
    <link rel="icon" type="image/png" href="data/icon16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="data/icon32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="data/icon180.png" sizes="180x180">

    <link rel="apple-touch-icon" sizes="76x76" href="icon76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="icon120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="icon152.png">

    <!-- google analytics  -->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-70069700-2', 'auto');
        ga('send', 'pageview');
    </script>

    <?php //"The future of loading css" https://jakearchibald.com/2016/link-in-body/?utm_campaign=Front%2BEnd%2BDev%2BWeekly&utm_medium=email&utm_source=Front_End_Dev_Weekly_86 ?>
    <style media="screen">

        <?php //loading.min.css compressed ?>
        html{width:100vw;max-width:100vw}.loading-container{display:block;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#000;z-index:999}.loading-container *{font-family:sans-serif!important;font-size:14px!important;color:#fff!important;line-height:1.5!important}.loading-container .loading-square{box-sizing:border-box;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;top:40vh;left:50vw;width:250px;height:250px;text-align:center;border:2px solid #fff;padding:12px}.loading-container .loading-square .loading-loading{display:block;padding-top:30%;line-height:1.2;-webkit-animation-name:blink;animation-name:blink;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.loading-container .loading-square .loading-browser{display:block;padding-top:10%;position:relative}.loading-move{width:30px;height:30px;background-color:#000;position:absolute;top:0;left:0;-webkit-animation-name:loading;animation-name:loading;-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes loading{0%{top:-25px;left:-25px}25%{top:-25px;left:100%}50%{top:100%;left:100%}75%{top:100%;left:-25px}100%{top:-25px;left:-25px}}@keyframes loading{0%{top:-25px;left:-25px}25%{top:-25px;left:100%}50%{top:100%;left:100%}75%{top:100%;left:-25px}100%{top:-25px;left:-25px}}@-webkit-keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}

        /*.loading-container,*/
        .mobile-not-responsive,
        .header,
        .main,
        .widget-resources,
        .widget-invert {
            display: none;
        }
    </style>

    <link rel="stylesheet" href="assets/styles/02_templates/all.min.css">

</head>

<body>
    <div role="loading-screen" class="loading-container">
        <div class="loading-square">
            <div class="loading-move"></div>
            <span class="loading-loading">Loading...</span>
            <span class="loading-browser">I hope you have<br>a decent browser</span>
            <span id="test"><noscript><br>With no javascript?! No worries,</br> I have stuff for you as well.</noscript></span>

            <?php //if console gives an error, it's because page was fast enough :D ?>
            <script>
                // if the loading starts to take too long...
                setTimeout(function() {
                    function slowInternet () {
                        document.getElementById('test').innerHTML = "Be Patient... I'm feeling your pain.";
                    }
                    slowInternet();
                }, 6000);
            </script>
        </div>
    </div>


    <?php //ALL THE REST - a better way would be split all.css in parts?>
    <?php // message for mobile users ?>
    <div class="mobile-not-responsive">
        <div class="mnr-header">
            <p class="f-h1">Sandrina Pereira</p>
            <p class="f-h2">Front End Developer</br> UX UI Designer</p>
        </div>
        <p class="f-txt-mono">Hey there cybernaut <i>with a little device<noscript> and without javascript</noscript></i>. </br>I'm sorry, but this website isn't completely prepared for you yet, so I'll make it easy for you:</p>
        <?php //Perdoem-me estes brs todos, o tempo é escasso. ?>

        <p class="mnr-link">Some of my <i>old</i> projects: <a target="_blank" class="f-link-under-mono" title="Behance account" href="//behance.com/sandrin4p">Behance</a></p>

        <p class="mnr-link">My e-mail: <a class="f-link-under-mono" title="Gmail e-mail" href="mailto:sandrin4pereir4@gmail.com?subject=You%20are%20awesome!">sandrin4pereir4@gmail.com</a></p>

        <p class="mnr-link">My facebook: <a target="_blank" class="f-link-under-mono" title="Facebook profile" href="//facebook.com/sandrin4p">/sandrin4p</a></p>

        <p class="f-txt-mono">Please, come back <i>on a bigger device</i> to see more experiments.</p>

        <p class="f-upcaseL">But you can give it a try. <br>It's all a matter of keeping scroll</p>

        <a href="#mobile-challenge" class="btn-on-fill">I'll take the challenge</a>
        </p>
    </div>

    <!-- header -->
    <div role="header" class="header">
        <div class="header-title">
            <h1 class="f-h1">Sandrina Pereira</h1>
            <h2 class="f-h2">Front End Developer</br> UX UI Designer</h2>
        </div>
    </div>

    <main class="main">
        <!-- NAV-PRESENTATION -->
        <?php  // thinkig about who doesn't have js enabled, the menu changes directly with no script no matter the doc.width ?>
        <noscript>
        <nav role="navigation" class="navigation-square js-nav-mini js-nav-mini-all">
        </noscript>

        <script>
        document.write('<nav role="navigation" class="navigation-square">');
        </script>

            <h3 class="sr-only">Navigation</h3>

            <ul class="nav-ul">
                <li class="nav-li-practice">
                    <a href="#practice">
                        <div class="nav-li-square js-square1" data-nav="practice">
                            <div class="nav-li-title">
                                <h4 class="f-nav-item">Practice</h4>
                            </div>
                        </div>
                    </a>
                </li>

                <li class="nav-li-theory">
                    <a href="#theory">
                        <div class="nav-li-square js-square2" data-nav="theory">
                            <div class="nav-li-title">
                                <h4 class="f-nav-item">Theory</h4>
                            </div>
                        </div>
                    </a>
                </li>

                <li class="nav-li-background">
                    <a href="#background">
                        <div class="nav-li-square js-square3" data-nav="background">
                            <div class="nav-li-title">
                                <h4 class="f-nav-item">Background</h4>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>

            <div class="nav-image-gif">
                <img src="assets/media/images/myself.gif" alt="myself"/>
            </div>
        </nav>

        <!-- WELCOME-DESKTOP -->
        <div role="presentation" class="presentation">
            <span class="f-upcaseL" id="js-typewriter-presentation"></span>
            <p class="f-txt-monoS">
                <noscript>Hey there cybernaut <i>without javascript</i>.</br></noscript>
                This website was born through reckless design and code experiments.
                It's in this mix of fields that I feel good in. Experimental. Nonsense. Challenged.
                Here everything is always under <s>construction</s> experiments,
                so please don't be mad if you get lost along the way.
                <noscript><br><i>Please, come back with a better browser to see more experiments.</i></noscript>
            </p>
        </div>


        <!-- PRACTICE -->
        <section class="section-practice js-parallax-scene" id="practice">

            <h3 class="sr-only" id="mobile-challenge">Practice - Projects</h3>

            <!-- 9. LEARNING HEALTH -->
            <div role="parallax-effect" class="layer p-first-project" data-depth="0.4">
                <article class="p-project">
                    <!-- <script>
                        document.write('<img class="p-image js-blazy"',
                        +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                        +' alt="Learning Health" title="Learning Health"'
                        +' data-src="assets/media/images/practice/project_lhealth.png"/>'
                    )
                    </script>
                    <noscript> -->
                        <img class="p-image"
                        src="assets/media/images/practice/project_lhealth.png"
                        alt="Learning Health" title="Learning Health"/>
                    <!-- </noscript> -->
                    <div class="p-line-web"></div>
                    <h4 class="f-article-title">Learning Health</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">Web Design & Web Development</p>
                        <p class="f-upcase">Jan 2016</p>
                    </div>
                    <p class="f-txt-mono p-description">Do you know that kind of 90's website with big painful Forms and Tables without any sense of design? Well, I was asked to redesign and rebuild some of those pages from scratch. It was really funny to have a deeper knowledge about <strong>Form Validations (Front End)</strong> and <strong>Responsive Tables</strong>. I did the Design, HTML5, CSS3 and Javascript part. It was a great opportunity to start learning <strong/>Ajax</strong> with the Back End team. A big thanks to <a target='_blank' class="f-link-under" href="//www.linkedin.com/in/raultavares">Raul Tavares</a>.</p>
                    <a target="_blank" class="btn-off">
                        online soon
                    </a>
                </article>
            </div>

            <!-- 8. CAROLINA MACHADO -->
            <div role="parallax-effect" class="layer" data-depth="0.3">
                <article class="p-project">
                    <!-- <script>
                        document.write('<img class="p-image js-blazy"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/practice/project_carolina.png" '
                            +' alt="Carolina Machado" title="Carolina Machado"/>'
                        )
                    </script>
                    <noscript> -->
                        <img class="p-image"
                        src="assets/media/images/practice/project_carolina.png"
                        alt="Carolina Machado" title="Carolina Machado"/>
                    <!-- </noscript> -->
                    <div class="p-line-web"></div>
                    <h4 class="f-article-title">Carolina Machado</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">Web Design & Development</p>
                        <p class="f-upcase">08 Oct 2015</p>
                    </div>
                    <p class="f-txt-mono p-description">This was born Against The Clock. <em>My partner in crime</em> asked me to build a website that could show her Fashion Design stuff before Lisbon Fashion Week <a target="_blank" class="f-link-under" href="//xx.co">Moda Lisboa - The Timers</a>  in which she participated. She asked me for it 3 months before the event. <em>"Something simple and minimal"</em>, she said. I did it in the night before the event. I designed it, coded it responsive and put it online in 6 hours. It was crazy. But I loved it.<small>Prologue: Of course I spend the next days fixing minor bugs. No one noticed it x)</small></p>
                    <a target="_blank" class="btn-on" href="//www.carolina-machado.com">
                        launch website
                    </a>
                </article>
            </div>

            <!-- 7. PISTOL SHRIMP -->
            <div role="parallax-effect" class="layer" data-depth="0.2">
                <article class="p-project">
                    <!-- <script>
                        document.write('<img class="p-image js-blazy"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/practice/project_pistolshrimp.png" '
                            +' alt="Pistol Shrimp" title="Pistol Shrimp"/>'
                        )
                    </script>
                    <noscript>  -->
                        <img class="p-image"
                        src="assets/media/images/practice/project_pistolshrimp.png"
                        alt="Pistol Shrimp" title="Pistol Shrimp"/>
                    <!-- </noscript> -->
                    <div class="p-line-web"></div>
                    <h4 class="f-article-title">Pistol Shrimp</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">Web Design & Development</p>
                        <p class="f-upcase">Apr - Jun 2015</p>
                    </div>
                    <p class="f-txt-mono p-description">Final Degree project in Communication Design. Website of an online record label that distributes music for free. In each release the record label creates an interactive experience, enhancing the download, so there is more to it than just a click. The website presents itself with a black and white visual by focusing on the user experience. My part was focused on coding <strong>HTML5, CSS3 and JQuery</strong>. This was a group project made with <a target='_blank' class="f-link-under" href="//www.facebook.com/luscooo/" title="Lusco profile">Lusco</a>, <a target='_blank' class="f-link-under" href="//www.facebook.com/bleiddwnnn/" title="Bleid profile">BLEID</a> and <a target='_blank' class="f-link-under" href="//mmbotelho.com/" title="Margarida Botelho website"> Margarida Botelho</a>.</p>
                    <a target="_blank" class="btn-on" href="//www.pistolshrimp.net">
                        launch website
                    </a>
                </article>
            </div>

            <!-- 6. MOON -->
            <div role="parallax-effect" class="layer" data-depth="0.4">
                <article class="p-project">
                    <!-- <script>
                        document.write('<img class="p-image js-blazy"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/practice/project_moon.png"'
                            +' alt="Movie Moon" title="Movie Moon"/>'
                        )
                    </script>
                    <noscript> -->
                        <img class="p-image"
                        src="assets/media/images/practice/project_moon.png"
                        alt="Movie Moon" title="Movie Moon"/>
                    <!-- </noscript> -->
                    <div class="p-line-web"></div>
                    <h4 class="f-article-title">Moon</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">Web Design & Development</p>
                        <p class="f-upcase">Feb - Mar 2015</p>
                    </div>
                    <p class="f-txt-mono p-description">Hope you know the movie <a target='_blank' class="f-link-under" href="#"><em>Moon</em> (2001) by Duncan Jones</a>. I did the website to try new stuff I was learning about Javascript and JQuery. The main focus of the website was not about how the film was made but the story and experience that the character lives along the narration. For this, the <strong>user’s interaction</strong> was fundamental on creating the website.</p>
                    <a target="_blank" class="btn-on" href="//sandrina-p.net/practice/moon/index.html">
                        launch website
                    </a>
                </article>
            </div>

            <!-- 5. PROFANO -->
            <div role="parallax-effect" class="layer" data-depth="0.2">
                <article class="p-project">
                    <!-- <script>
                        document.write('<img class="p-image js-blazy"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/practice/project_profano.png" '
                            +' alt="Profano" title="Profano"/>'
                        )
                    </script>
                    <noscript> -->
                        <img class="p-image"
                        src="assets/media/images/practice/project_profano.png"
                        alt="Profano" title="Profano"/>
                    <!-- </noscript> -->
                    <div class="p-line-web"></div>
                    <h4 class="f-article-title">Profano</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">Tumblr Design & Development</p>
                        <p class="f-upcase">Mar 2015</p>
                    </div>
                    <p class="f-txt-mono p-description">I was asked to create the newspaper’s website for the FBAUL. Unfortunately the project (the journalistic part of it) did not go through, so the website stood under construction. In this project I saw an opportunity to have a first contact with <strong>Tumblr API</strong> and to improve my knowledge in JQuery.</p>
                    <a target="_blank" class="btn-off" href="//www.o-profano.tumblr.com" >
                        off-line
                    </a>
                </article>
            </div>

            <!-- 4. GALERIA DOS LEÕES -->
            <!-- not good enough anymore -->

            <!-- 3. PORTFOLIO -->
            <div role="parallax-effect" class="layer" data-depth="0.15">
                <article class="p-project">
                    <!-- <script>
                        document.write('<img class="p-image js-blazy"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/practice/project_portfolio.png" '
                            +' alt="old portfolio" title="old portfolio"/>'
                        )
                    </script>
                    <noscript> -->
                        <img class="p-image"
                        src="assets/media/images/practice/project_portfolio.png"
                        alt="Old Portfolio" title="Old Portfolio"/>
                    <!-- </noscript> -->
                    <div class="p-line-web"></div>
                    <h4 class="f-article-title">First Portfolio</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">Web Design & Development</p>
                        <p class="f-upcase">Nov - Dec 2014</p>
                    </div>
                    <p class="f-txt-mono p-description">This was the first website that I built from scratch. There I show some of my best works that I had at the time. Back then I already had some skills on HTML5 and CSS3. I had my <strong>first approach with SASS</strong> and developing knowledges about Javascript and jQuery. Since then I'm always using SCSS.</p>
                    <a target="_blank" class="btn-off" href="//www.googledrive.com/host/0Bx3MPS7bjIpfRG5qeWw2anhRSDQ" >
                        come back later
                    </a>
                </article>
            </div>

            <!-- 2. METRO -->
            <div role="parallax-effect" class="layer" data-depth="0.3">
                <article class="p-project">
                    <!-- <script>
                        document.write('<img class="p-image js-blazy"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/practice/project_metro.png" '
                            +' alt="App Lisbon Metro" title="App Lisbon Metro"/>'
                        )
                    </script>
                    <noscript> -->
                        <img class="p-image"
                        src="assets/media/images/practice/project_metro.png"
                        alt="App Lisbon Metro" title="App Lisbon Metro"/>
                    <!-- </noscript> -->
                    <div class="p-line-phone"></div>
                    <h4 class="f-article-title">App Lisbon Metro</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">App Design, Concept Art</p>
                        <p class="f-upcase">May - Jun 2015</p>
                    </div>
                    <p class="f-txt-mono p-description">Mockup of a mobile app that works as a Carris pass, where is possible to buy tickets, check schedules, maps and also contains a travelling archive. Prototype developed in Illustrator, Photoshop and Marvel. This was an individual project.</p>
                    <a target="_blank" class="btn-on" href="//www.behance.net/gallery/18543767/App-Metro-Lisboa" >
                        see more
                    </a>
                </article>
            </div>

            <!-- 1. DET -->
            <div role="parallax-effect" class="layer" data-depth="0.2">
                <article class="p-project">
                    <!-- <script>
                        document.write('<img class="p-image js-blazy"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/practice/project_det.png" '
                            +' alt="dutch experimental typography" title="dutch experimental typography"/>'
                        )
                    </script>
                    <noscript> -->
                        <img class="p-image"
                        src="assets/media/images/practice/project_det.png"
                        alt="dutch experimental typography" title="dutch experimental typography"/>
                    <!-- </noscript> -->
                    <div class="p-line-tablet"></div>
                    <h4 class="f-article-title">Dutch Experimental Typography</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">App Design, Digital Magazine</p>
                        <p class="f-upcase">Mar - Apr 2014</p>
                    </div>
                    <p class="f-txt-mono p-description"><em>"Dutch Experimental Typography”</em> is a digital catalogue of typography, developed from the 70’s throughout the 90’s in the Netherlands. This app includes an interactive cover that the user can play with. It was developed using <strong>Mag+</strong> Software with InDesign. This was a group project made with <a target='_blank' class="f-link-under" href="//mmbotelho.com/" title="Margarida Botelho website">Margarida Botelho</a>.</p>
                    <a target="_blank" class="btn-on" href="//www.behance.net/gallery/26687261/Digital-Magazine-Dutch-experimental-typography" >
                        see more
                    </a>
                </article>
            </div>

        </section>


        <!-- THEORY -->
        <section class="section-theory js-parallax-scene" id="theory">
            <h3 class="sr-only">Theory - Knowledge</h3>

            <article class="t-development layer" data-depth="0.3">
                <div class="t-align">
                    <h4 class="f-article-title">Web Development</h4>
                    <ul>
                        <li class="f-txt-mono t-li-topic">HTML5</li>
                        <li class="f-txt-mono t-li-topic">CSS3 (always SCSS)</li>
                        <li class="f-txt-mono t-li-topic">javascript</li>
                        <li class="f-txt-mono t-li-topic">jQuery</li>
                        <li class="f-txt-mono t-li-topic">Basic sintax PHP</li>
                        <li class="f-txt-mono t-li-topic">Attention to SEO</li>
                    </ul>
                </div>
            </article>

            <article class="t-uxui layer" data-depth="0.2">
                <div class="t-align">
                    <h4 class="f-article-title">UX UI Design</h4>
                    <ul>
                        <li class="f-txt-mono t-li-topic">app web design</li>
                        <li class="f-txt-mono t-li-topic">dynamic design</li>
                        <li class="f-txt-mono t-li-topic">rich animation effects</li>
                        <li class="f-txt-mono t-li-topic">interactive design</li>
                    </ul>
                </div>
            </article>

            <article class="t-hobbies layer" data-depth="0.17">
                <div class="t-align">
                    <h4 class="f-article-title">Hobbies</h4>
                    <ul>
                        <li class="f-txt-mono t-li-topic">CodeSchool</li>
                        <li class="f-txt-mono t-li-topic">Ubisoft Games</li>
                        <li class="f-txt-mono t-li-topic">Chess</li>
                    </ul>
                </div>
            </article>

            <article class="t-assets layer" data-depth="0.23">
                <div class="t-align">
                    <h4 class="f-article-title">Assets</h4>
                    <ul>
                        <li class="f-txt-mono t-li-topic">Ambition</li>
                        <li class="f-txt-mono t-li-topic">Effort</li>
                        <li class="f-txt-mono t-li-topic">Innovation</li>
                        <li class="f-txt-mono t-li-topic">Perfectionism</li>
                    </ul>
                </div>
            </article>

            <article class="t-tools layer" data-depth="0.4">
                <ul class="t-align">
                    <h4 class="sr-only">Tools</h4>
                    <li class="t-tool">
                        <p class="f-txt-mono">Photoshop</p>
                        <script>
                            document.write('<img class="js-blazy t-tool-icon"'
                                +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                                +' data-src="assets/media/images/theory/photoshop.svg"'
                                +' alt="logo photoshop"/>'
                            )
                        </script>
                        <noscript>
                            <img class="js-blazy t-tool-icon" src="assets/media/images/theory/photoshop.svg" alt="logo photoshop">
                        </noscript>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Illustrator</p>
                        <script>
                            document.write('<img class="js-blazy t-tool-icon"'
                                +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                                +' data-src="assets/media/images/theory/illustrator.svg"'
                                +' alt="logo illustrator"/>'
                            )
                        </script>
                        <noscript>
                            <img class="js-blazy t-tool-icon" src="assets/media/images/theory/illustrator.svg" alt="logo illustrator"/>
                        </noscript>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">InDesign</p>
                        <script>
                            document.write('<img class="js-blazy t-tool-icon"'
                                +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                                +' data-src="assets/media/images/theory/indesign.svg"'
                                +' alt="logo indesign"/>'
                            )
                        </script>
                        <noscript>
                            <img class="js-blazy t-tool-icon" src="assets/media/images/theory/indesign.svg" alt="logo indesign"/>
                        </noscript>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">After Effects</p>
                        <script>
                            document.write('<img class="js-blazy t-tool-icon"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/theory/after.svg"'
                            +' alt="logo after"/>'
                        )
                        </script>
                        <noscript>
                            <img class="js-blazy t-tool-icon" src="assets/media/images/theory/after.svg" alt="logo after effects"/>
                        </noscript>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Sketch</p>
                        <script>
                        document.write('<img class="js-blazy t-tool-icon"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/theory/sketch.svg"'
                            +' alt="logo sketch"/>'
                        )
                        </script>
                        <noscript>
                            <img class="js-blazy t-tool-icon" src="assets/media/images/theory/sketch.svg" alt="logo sketch"/>
                        </noscript>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Principle</p>
                        <script>
                            document.write('<img class="js-blazy js-blazy t-tool-icon"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/theory/principle.svg"'
                            +' alt="logo principle"/>'
                        )
                        </script>
                        <noscript>
                            <img class="js-blazy t-tool-icon" src="assets/media/images/theory/principle.svg" alt="logo principle"/>
                        </noscript>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Blender</p>
                        <script>
                            document.write('<img class="js-blazy js-blazy t-tool-icon"'
                            +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                            +' data-src="assets/media/images/theory/blender.svg"'
                            +' alt="logo blender"/>'
                        )
                        </script>
                        <noscript>
                            <img class="js-blazy t-tool-icon" src="assets/media/images/theory/blender.svg" alt="logo blender"/>
                        </noscript>
                    </li>
                </ul>
            </article>
        </section>


        <!-- BACKGROUND -->
        <section class="section-background js-parallax-scene" id="background">

            <h3 class="sr-only">Background - Curriculum and Contact</h3>

            <article class="b-profile layer" data-depth="0.3">
                <table class="table-std">
                    <thead>
                        <tr>
                            <th><h4 class="f-article-title">Profile</h4></th><th><!--empty--></th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="f-upcase-gray">Place Of Birth</td>
                            <td class="f-txt-mono">Genève, Switzerland</td>
                        </tr>
                        <tr>
                            <td class="f-upcase-gray">Nacionality</td>
                            <td class="f-txt-mono">Portuguese</td>
                        </tr>
                        <tr>
                            <td class="f-upcase-gray">Address</td>
                            <td class="f-txt-mono">Lisbon, Portugal</td>
                        </tr>
                        <?php
                        // <tr>
                        //     <td>Personality</td>
                        //     <td>INTJ</td>
                        // </tr>
                        ?>
                    </tbody>
                </table>
            </article>

            <article class="b-timeline layer" data-depth="0.2">
                <table class="table-std">
                    <thead>
                        <tr>
                            <th><h4 class="f-article-title">TimeLine</h4></th><th><!--empty--></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="time-section">
                            <td class="f-upcase-space">Nowadays</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">Front End Developer</br>and Web Designer</td>
                            <td class="f-txt-mono">
                                <a target="_blank" class="f-link-under" href="//zaask.pt" title="Zaask site"><strong class="f-upcase-space">Zaask</strong></a>
                                Start-up
                            </td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">Postgraduate Studies</td>

                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">Digital Experience Design</strong>
                                Faculty of Fine Arts of University of Lisbon
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td class="f-upcase-space">Jan 2016</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-gray">Front End Developer </br> and Web Designer</td>
                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">Learning Health</strong>
                                Freelancer Project
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td class="f-upcase-space">Aug - Sep 2015</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">UX UI Designer</td>
                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">GetPure</strong>
                                Start-up
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td class="f-upcase-space">Jul 2015</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>Online Course</td>
                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">jQuery lvl 1/2</br>javascript lvl 2/4</strong>
                                codeschool.com
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td class="f-upcase-space">May 2015</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">Contest</td>
                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">Graphic Design Finalist</strong>
                                Galp Create 2015
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td class="f-upcase-space">2014 - 15</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">Erasmus</td>
                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">Comunication Design</strong>
                                Faculty of Fine Arts of University of Porto
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td class="f-upcase-space">2012 - 15</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">Degree</td>
                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">Comunication Design</strong>
                                Faculty of Fine Arts of University of Lisbon
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="time-section">
                            <td class="f-upcase-space">Soon<td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">Learning something new</td>
                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">Your Idea</strong>
                                Feel free to contact me. Maybe I'll have time for your project :)
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </article>

            <article class="b-contact layer" data-depth="0.2">
                <table class="table-std">
                    <thead>
                        <tr>
                            <th><h4 class="f-article-title">Contact</h4></th><th><!--empty--></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="f-upcase-gray">e-mail</td>
                            <td class="f-txt-mono"><a class="f-link-under" title="gmail" href="mailto:sandrin4pereir4@gmail.com?subject=You%20are%20awesome!">sandrin4pereir4@gmail.com</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="f-upcase-gray">Behance</td>
                            <td class="f-txt-mono"><a target="_blank" class="f-link-under-mono" title="Behance account" href="//behance.com/sandrin4p">/sandrin4p</a></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-gray">Facebook</td>
                            <td class="f-txt-mono"><a target="_blank" class="f-link-under-mono" title="facebook" href="//facebook.com/sandrin4p">/sandrin4p</a></td>
                        </tr>
                    </tbody>
                </table>
            </article>

        </section>

        <!-- FOOTER - SOME FINAL WORDS -->
        <footer class="final-words">
            <h6 class="sr-only">Some Final Words</h6>
            <p class="f-txt-monoXS final-words-txt">
                That's it for now.</br>
                Thank you for reading this, or at least, scrolling. </br>
                </br>
                Don't be shy, so go talk about me with human beings around you
            </p>
        </footer>

    </main>

    <!-- WIDGET INVERT -->
    <div class="widget-invert btn-off"></div>

    <!-- WIDGET RESOURCES -->
    <div class="widget-resources btn-off"></div>



    <!-- STYLES & SCRIPTS -->
    <!-- <script>
      var cb = function() {
        var l = document.createElement('link'); l.rel = 'stylesheet';
        l.href = 'assets/styles/02_templates/all.min.css';
        var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
      };
      var raf = requestAnimationFrame || mozRequestAnimationFrame ||
          webkitRequestAnimationFrame || msRequestAnimationFrame;
      if (raf) raf(cb);
      else window.addEventListener('load', cb);
    </script> -->

    <noscript>
        <!-- <link rel="stylesheet" href="assets/styles/02_templates/all.min.css"> -->

        <style media="screen">
            /*if there is no js, hide the loading on "document ready"*/
            .loading-container {
                display: none;
            }
        </style>
    </noscript>


    <script async src="assets/scripts/01_templates/index.min.js"></script>
    <!-- <script src="assets/plugins/blazy/blazyx.min.js" charset="utf-8"></script> -->
    <!-- <script type="text/javascript">

        /*BE LAZY*/
        ;(function() {
            var bLazy = new Blazy({
                selector: '.js-blazy'
            });
        })();

    </script> -->
</body>

</html>
