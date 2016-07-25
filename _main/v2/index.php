<?php
    header("Cache-Control: max-age=31536000"); // HTTP/1.1
    $stylesFolder = 'styles20160415';
    //$stylesFolder = 'styles20160405';
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>sandrina-p</title>

    <!--description-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <meta name='keywords' content='Web Design, Front End Development, UX, UI, Responsive Design'>
    <meta name='description' content='Here I show what I do and test new stuff and bugs'>
    <meta name='subject' content='sandrina-p front end developer website'/>
    <meta name='copyright' content='Sandrina Pereira'>
    <meta name='language' content='EN'>

    <!--TWITTER CARD-->
    <meta name="twitter:card" content="Front End Developer" />
    <meta name="twitter:site" content="sandrina-p.net" />
    <meta name="twitter:title" content="sandrina-p front end developer website" />
    <meta name="twitter:description" content="Here I show what I do and test new stuff and bugs" />
    <meta name="twitter:image" content="data/share.png" />

    <!--Open Graph protocol-->
    <meta property="og:title" content="Front End Developer Designer" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.sandrina-p.net" />
    <meta property="og:image" content="assets/media/share.png" />

    <!--favicon-->
    <link rel="icon" type="image/png" href="assets/media/favicons/icon16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="assets/media/favicons/icon32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="assets/media/favicons/icon180.png" sizes="180x180">

    <link rel="apple-touch-icon" sizes="76x76" href="assets/media/favicons/icon76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="assets/media/favicons/icon120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/media/favicons/icon152.png">


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

        /*.loading-container,*/
        .header,
        .main,
        .widget-resources,
        .widget-invert {
            display: none;
        }
        <?php //loading.min.css compressed ?>
        html{width:100%;max-width:100%}.loading-container{display:block;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#000;z-index:999}.loading-container *{font-family:sans-serif!important;font-size:14px!important;color:#fff!important;line-height:1.5!important}.loading-container .loading-square{box-sizing:border-box;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;top:40vh;left:50vw;width:250px;height:250px;text-align:center;border:2px solid #fff;padding:12px}.loading-container .loading-square .loading-loading{display:block;padding-top:30%;line-height:1.2;-webkit-animation-name:blink;animation-name:blink;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.loading-container .loading-square .loading-browser{display:block;padding-top:10%;position:relative}.loading-move{width:30px;height:30px;background-color:#000;position:absolute;top:0;left:0;-webkit-animation-name:loading;animation-name:loading;-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes loading{0%{top:-25px;left:-25px}25%{top:-25px;left:100%}50%{top:100%;left:100%}75%{top:100%;left:-25px}100%{top:-25px;left:-25px}}@keyframes loading{0%{top:-25px;left:-25px}25%{top:-25px;left:100%}50%{top:100%;left:100%}75%{top:100%;left:-25px}100%{top:-25px;left:-25px}}@-webkit-keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}
        main{position:relative;min-height:100vh;width:100%;overflow-x:hidden}.header{position:fixed;top:0;left:0;width:100vw;height:100px;z-index:0;background-color:#fff}.header-title{padding:12px;width:100%;text-align:right}@media (min-width:1100px){.header-title{padding:24px}}.X-square{position:relative;width:24px;height:24px;background-color:#000;border:2px solid;color:#000;cursor:pointer}.presentation{position:fixed;border-left:2px solid;padding-left:6px;margin-left:6px;top:120px}@media (min-width:500px){.presentation{top:30vh;max-width:50vw}}@media (min-width:850px){.presentation{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;max-width:20vw;top:50vh;padding-left:1vw;margin-left:1vw;width:270px}}@media (min-width:1100px){.presentation{top:40vh}}.navigation-square{left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:fixed;top:-40vh;width:150px;height:150px;border:2px solid;opacity:0}@media (min-width:500px){.navigation-square{top:40vh;left:50%;opacity:1}}@media (min-width:500px){.navigation-square{right:0;left:auto}}@media (min-width:850px){.navigation-square{left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:fixed;top:40vh}}@media (min-width:1100px){.navigation-square{width:250px;height:250px}}.nav-image-gif{position:relative;width:100%;height:100%}.nav-image-gif:after{position:absolute;content:'';top:50%;left:221%;width:1px;height:142%;background:#000;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 -121%;-ms-transform-origin:0 -121%;transform-origin:0 -121%}.nav-image-gif:hover:after{opacity:0}.nav-image-gif:hover img{opacity:1}.nav-image-gif img{position:relative;width:100%;height:100%;opacity:0}.nav-ul{position:absolute;top:0;left:0;width:100%;height:100%}.nav-li-square{position:relative;width:24px;height:24px;background-color:#000;border:2px solid;color:#000;cursor:pointer}.nav-li-title{position:absolute;bottom:100%;left:0;width:168px;border-bottom:2px solid;cursor:pointer;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out}.nav-li-title>*{-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out}.nav-li-title:hover>*{letter-spacing:2pt;font-weight:100}.nav-li-practice{position:absolute;z-index:2;top:-12px;left:calc(100% - 12px + 1px)}.nav-li-practice .nav-li-title{text-align:right}.nav-li-theory{z-index:2;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:calc(100% - 6px - 4px)}.nav-li-theory .nav-li-title{right:0;left:auto}.nav-li-background{position:absolute;z-index:2;bottom:calc(-12px - 1px);right:-2px}.nav-li-background .nav-li-square{width:96px}.nav-li-background .nav-li-title{left:-2px;top:22px;height:96px;padding-left:6px;border-bottom:0;border-left:2px solid}.nav-li-background .nav-li-title>*{position:absolute;bottom:0}.header,.main{display:block!important};

    </style>

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


                setTimeout(function() {
                    function slowInternet_two () {
                        document.getElementById('test').innerHTML = "Maybe a refresh can help...";
                    }
                    slowInternet_two();
                }, 10000);
            </script>
        </div>
    </div>


    <style media="screen">
    body{background:#fff;width:100%;max-width:100%}main{position:relative;min-height:100vh;width:100%;overflow-x:hidden}.header{position:fixed;top:0;left:0;width:100vw;height:100px;z-index:0;background-color:#fff}.header-title{padding:12px;width:100%;text-align:right}@media (min-width:1100px){.header-title{padding:24px}}.X-square{position:relative;width:24px;height:24px;background-color:#000;border:2px solid;color:#000;cursor:pointer}.presentation{position:fixed;border-left:2px solid;padding-left:6px;margin-left:6px;top:120px}@media (min-width:500px){.presentation{top:30vh;max-width:50vw}}@media (min-width:850px){.presentation{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;max-width:20vw;top:50vh;padding-left:1vw;margin-left:1vw;width:270px}}@media (min-width:1100px){.presentation{top:40vh}}.navigation-square{left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:fixed;top:-40vh;width:150px;height:150px;border:2px solid;opacity:0}@media (min-width:500px){.navigation-square{top:40vh;left:50%;opacity:1}}@media (min-width:500px){.navigation-square{right:0;left:auto}}@media (min-width:850px){.navigation-square{left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:fixed;top:40vh}}@media (min-width:1100px){.navigation-square{width:250px;height:250px}}.nav-image-gif{position:relative;width:100%;height:100%}.nav-image-gif:after{position:absolute;content:'';top:50%;left:221%;width:1px;height:142%;background:#000;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 -121%;-ms-transform-origin:0 -121%;transform-origin:0 -121%}.nav-image-gif:hover:after{opacity:0}.nav-image-gif:hover img{opacity:1}.nav-image-gif img{position:relative;width:100%;height:100%;opacity:0}.nav-ul{position:absolute;top:0;left:0;width:100%;height:100%}.nav-li-square{position:relative;width:24px;height:24px;background-color:#000;border:2px solid;color:#000;cursor:pointer}.nav-li-title{position:absolute;bottom:100%;left:0;width:168px;border-bottom:2px solid;cursor:pointer;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out}.nav-li-title>*{-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out}.nav-li-title:hover>*{letter-spacing:2pt;font-weight:100}.nav-li-practice{position:absolute;z-index:2;top:-12px;left:calc(100% - 12px + 1px)}.nav-li-practice .nav-li-title{text-align:right}.nav-li-theory{z-index:2;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:calc(100% - 6px - 4px)}.nav-li-theory .nav-li-title{right:0;left:auto}.nav-li-background{position:absolute;z-index:2;bottom:calc(-12px - 1px);right:-2px}.nav-li-background .nav-li-square{width:96px}.nav-li-background .nav-li-title{left:-2px;top:22px;height:96px;padding-left:6px;border-bottom:0;border-left:2px solid}.nav-li-background .nav-li-title>*{position:absolute;bottom:0}.header,.main{display:block!important}
    </style>

    <!-- header -->
    <div role="header" class="header">
        <div class="header-title">
            <h1 class="f-h1">Sandrina Pereira</h1>
            <h2 class="f-h2">Front End Developer</br> UX UI Designer</h2>
        </div>
    </div>

    <main class="main">

        <!-- WELCOME -->
        <div role="presentation" class="presentation">
            <span class="f-upcaseL" id="js-typewriter-presentation"></span>
            <p class="f-txt-monoM">
                <noscript>Hey there cybernaut <i>without javascript</i>.</br></noscript>
                This website was born through reckless design and code experiments.
                It's in this mix of fields that I feel good in. Experimental. Nonsense. Challenged.
                Here everything is always under <s>construction</s> experiments,
                so please don't be mad if you get lost along the way.
                <noscript><br><i>Please, come back with a better browser to see more experiments.</i></noscript>
            </p>
        </div>

        <div class="menu-mobile">

            <button type="button" name="button" class="js-trigger-menu"></button>

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

        </div>


        <script>
            var cb = function() {
                var l = document.createElement('link'); l.rel = 'stylesheet';
                l.href = 'assets/<?php echo $stylesFolder ?>/02_templates/all.min.css';
                var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
            };

            var raf = requestAnimationFrame || mozRequestAnimationFrame ||
            webkitRequestAnimationFrame || msRequestAnimationFrame;

            if (raf) raf(cb);
            else window.addEventListener('load', cb);
        </script>


        <!-- PRACTICE -->
        <section class="section-practice js-parallax-scene" id="practice">

            <h3 class="sr-only" id="mobile-challenge">Practice - Projects</h3>

            <!-- 8. 10. CAROLINA MACHADO -->
            <div role="parallax-effect" class="layer p-project-container" data-depth="0.3">
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
                        src="assets/media/images/practice/project_carolina-v2.png"
                        alt="Carolina Machado" title="Carolina Machado"/>
                    <!-- </noscript> -->
                    <div class="p-line-web"></div>
                    <h4 class="f-article-title">Carolina Machado</h4>
                    <div class="p-container-info">
                        <p class="f-italicL">Web Development & Tumblr Design _v2</p>
                        <p class="f-upcase">02 Apr 2016</p>
                    </div>
                    <p class="f-txt-mono p-description">After 6 months, Carolina Machado presented her collection for the second time in <a target="_blank" class="f-link-under" href="//modalisboa.pt/sanguenovo/marco-2016_6">ModaLisboa - Lisboa Fashion</a>. So I decided to give an upgrade to this website as well as adding some CMS, to make the content dynamic (and of course more easier for her to update it). I chose Tumblr to rebuild the website, and now <strong>all the navigation is through Ajax</strong>. This way I could have almost full control over the Tumblr standart API and improve the User Experience.</p>
                    <div class="p-container-info">
                        <p class="f-italicL">Web Design & Development _v1</p>
                        <p class="f-upcase">08 Oct 2015</p>
                    </div>
                    <p class="f-txt-mono p-description">This was born Against The Clock. <em>My partner in crime</em> asked me to build a website that could show her Fashion Design stuff before Lisbon Fashion Week <a target="_blank" class="f-link-under" href="//modalisboa.pt/sanguenovo/outubro-2015_5">Moda Lisboa - The Timers</a>  in which she participated. She asked me for it 3 months before the event. <em>"Something simple and minimal"</em>, she said. I did it in the night before the event. I designed it, coded it responsive and put it online in 6 hours. It was crazy. But I loved it.<br><small>Prologue: Of course I spend the next days fixing minor bugs. No one noticed it x)</small></p>
                    <a target="_blank" class="btn-on" href="//carolina-machado.com">
                        launch website
                    </a>
                </article>
            </div>

            <!-- 9. LEARNING HEALTH -->
            <div role="parallax-effect" class="layer p-project-container p-first-project" data-depth="0.4">
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

            <!-- 7. PISTOL SHRIMP -->
            <div role="parallax-effect" class="layer p-project-container" data-depth="0.2">
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
                    <div class="btn-pistol-shrimp-bonus">
                        <a target="_blank" class="btn-on js-trigger-btn-pistol-shrimp-bonus" href="//practice/pistolshrimp">
                            launch website
                        </a>
                        <div class="btn-bonus">
                            <br>
                            <p class="f-txt-monoXS">Please, use FireFox for a better experience. No, Chrome isn't the best this time.</p>
                            <a target='_blank' class="f-txt-monoS f-link-under" href="//practice/pistolshrimp/comingsoon" title="Pistol Shrimp Invitation">Bonus: coming soon</a>
                            <br><br>
                            <a target='_blank' class="f-txt-monoS f-link-under" href="//practice/pistolshrimp/presentation/pres_0.html" title="Pistol Shrimp Invitation">Bonus: presentation</a>
                            <br><br>
                            <a target='_blank' class="f-txt-monoS f-link-under" href="//practice/pistolshrimp/invitation/areyouinvited.html" title="Pistol Shrimp Invitation">Bonus: invitation</a>

                        </div>
                    </div>

                </article>
            </div>

            <!-- 6. MOON -->
            <div role="parallax-effect" class="layer p-project-container" data-depth="0.4">
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
                    <a target="_blank" class="btn-on" href="//sandrina-p.net/practice/moon">
                        launch website
                    </a>
                </article>
            </div>

            <?php
            //<!-- 5. PROFANO -->
            // <div role="parallax-effect" class="layer p-project-container" data-depth="0.2">
            //     <article class="p-project">
            //         <!-- <script>
            //             document.write('<img class="p-image js-blazy"'
            //                 +' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            //                 +' data-src="assets/media/images/practice/project_profano.png" '
            //                 +' alt="Profano" title="Profano"/>'
            //             )
            //         </script>
            //         <noscript> -->
            //             <img class="p-image"
            //             src="assets/media/images/practice/project_profano.png"
            //             alt="Profano" title="Profano"/>
            //         <!-- </noscript> -->
            //         <div class="p-line-web"></div>
            //         <h4 class="f-article-title">Profano</h4>
            //         <div class="p-container-info">
            //             <p class="f-italicL">Tumblr Design & Development</p>
            //             <p class="f-upcase">Mar 2015</p>
            //         </div>
            //         <p class="f-txt-mono p-description">I was asked to create the newspaper’s website for the FBAUL. Unfortunately the project (the journalistic part of it) did not go through, so the website stood under construction. In this project I saw an opportunity to have a first contact with <strong>Tumblr API</strong> and to improve my knowledge in JQuery.</p>
            //         <a target="_blank" class="btn-off" href="//www.o-profano.tumblr.com" >
            //             off-line
            //         </a>
            //     </article>
            // </div>
            ?>

            <!-- 3. PORTFOLIO -->
            <div role="parallax-effect" class="layer p-project-container" data-depth="0.15">
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
                    <p class="f-txt-mono p-description">This was the first website that I built from scratch. There I show some of my best works that I had at the time. Back then I already had some skills on HTML5 and CSS3. I had my <strong>first approach with SASS</strong> and developing knowledges about Javascript and jQuery. Since then I always use SCSS.</p>
                    <a target="_blank" class="btn-on" href="//sandrina-p.net/practice/portfoliofirst">
                        launch website
                    </a>
                </article>
            </div>

            <!-- 2. METRO -->
            <div role="parallax-effect" class="layer p-project-container" data-depth="0.3">
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
            <div role="parallax-effect" class="layer p-project-container" data-depth="0.2">
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
                        <li class="f-txt-mono t-li-topic">Code Pen</li>
                        <li class="f-txt-mono t-li-topic">PC Gamer</li>
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
                        <p class="f-txt-mono">Atom</p>
                        <svg class="t-tool-icon" id="svg-atom" width="32px" height="29px" viewBox="0 0 32 29" version="1.1" >
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="atom" transform="translate(1.000000, 1.000000)">
                                    <path d="M24.0871063,6.24502441 C24.5861646,3.70501228 24.3070772,1.77731693 23.1274606,1.01126459 C22.7342549,0.755913803 22.2628394,0.644173583 21.7322835,0.664315772 C18.867282,0.773083583 14.2444911,4.71787654 10.4675197,10.5339024 C5.99110913,17.42697 4.40031402,24.3351898 6.91683071,25.9694339 C8.11138488,26.7451866 10.0148969,26.1952701 12.1653543,24.6628394" id="Shape" stroke="#000000"></path>
                                    <path d="M26.382874,17.5171701 C28.5075283,16.6929522 29.8139858,15.564805 29.8818898,14.2691386 C30.0389291,11.2726486 23.5178173,8.49850252 15.3100394,8.06835118 C14.5405604,8.02802457 13.7839162,8.00680535 13.0437992,8.00929606 C5.88933449,8.03337331 0.304718528,9.99599079 0.162401575,12.7115598 C0.094631811,14.0046839 1.27275203,15.2585794 3.29232283,16.2991583" id="Shape" stroke="#000000"></path>
                                    <path d="M12.992126,1.7789811 C11.5384547,0.572865236 10.175091,-0.0748259055 9.07972441,0.00732758268 C8.78808425,0.0292008661 8.51836252,0.101073827 8.26771654,0.228784276 C5.59416047,1.59102914 6.44825953,8.63637236 10.179626,15.9595913 C13.9109924,23.282811 19.1030187,28.1141598 21.7765748,26.7519142 C24.3476929,25.4418638 23.6537386,18.8768542 20.2780512,11.8626425" id="Shape" stroke="#000000"></path>
                                    <path d="M16.8897638,13.7007874 C16.8897638,14.6792446 16.0965675,15.4724409 15.1181102,15.4724409 C14.139653,15.4724409 13.3464567,14.6792446 13.3464567,13.7007874 C13.3464567,12.7223302 14.139653,11.9291339 15.1181102,11.9291339 C16.0965675,11.9291339 16.8897638,12.7223302 16.8897638,13.7007874 L16.8897638,13.7007874 Z" id="Shape" fill="#000000"></path>
                                </g>
                            </g>
                        </svg>

                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Koala</p>
                        <svg class="t-tool-icon" id="svg-koala-app" width="37px" height="20px" viewBox="0 0 37 20" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="koala-app" transform="translate(1.000000, 1.000000)" stroke-width="1" stroke="#000000" fill="#FFFFFF">
                                    <g id="Page-1">
                                        <g id="Koala-app">
                                            <path d="M7.66528926,13.5950413 C11.8987116,13.5950413 15.3305785,10.5863163 15.3305785,6.87486583 C15.3305785,3.16341538 11.8987116,0.154690318 7.66528926,0.154690318 C3.43186689,0.154690318 0,3.16341538 0,6.87486583 C0,10.5863163 3.43186689,13.5950413 7.66528926,13.5950413 L7.66528926,13.5950413 Z" id="Oval-3" fill="black"></path>
                                            <!-- <path d="M8.95848606,2.28051429 C4.59220393,1.99581446 0.719774254,6.0945356 0.900726562,10.1106841" id="Oval-3-Copy"></path> -->
                                            <path d="M27.3347107,13.5950413 C31.5681331,13.5950413 35,10.5863163 35,6.87486583 C35,3.16341538 31.5681331,0.154690318 27.3347107,0.154690318 C23.1012884,0.154690318 19.6694215,3.16341538 19.6694215,6.87486583 C19.6694215,10.5863163 23.1012884,13.5950413 27.3347107,13.5950413 L27.3347107,13.5950413 Z" id="Oval-3" transform="translate(27.334711, 6.874866) scale(-1, 1) translate(-27.334711, -6.874866)" fill="black"></path>
                                            <!-- <path d="M34.1053722,2.28051429 C29.7390901,1.99581446 25.8666604,6.0945356 26.0476127,10.1106841" id="Oval-3-Copy" transform="translate(30.073443, 6.188587) scale(-1, 1) translate(-30.073443, -6.188587) "></path> -->
                                            <path d="M4.91735537,10.0069984 C4.91735537,6.48771868 6.89344293,0.289256178 17.0105315,0.289256198 C27.12762,0.289256219 30.4469669,5.26825496 30.4469683,9.36472189 C30.6467026,13.1561633 31.4759501,18.6523661 18.5353399,18.6523653 C5.59472955,18.6523646 4.96489596,15.5462741 4.91735537,10.0069984 L4.91735537,10.0069984 Z" id="Path-1-Copy" fill="black"></path>
                                            <ellipse id="Oval-1-Copy-3" cx="10.8471074" cy="10.5578512" rx="3.03719008" ry="3.03719008" fill="white"></ellipse>
                                            <ellipse id="Oval-1-Copy-6" cx="10.7024793" cy="9.83471074" rx="1.73553719" ry="1.73553719" fill="black" stroke="white"></ellipse>
                                            <path d="M17.7180254,15.3305785 C19.3279074,15.3305785 20.6329746,14.0255113 20.6329746,12.4156294 C20.6329746,10.8057474 20.6329746,0.867768595 17.3991925,0.867768595 C14.1654105,0.867768595 14.8030763,10.8057474 14.8030763,12.4156294 C14.8030763,14.0255113 16.1081435,15.3305785 17.7180254,15.3305785 L17.7180254,15.3305785 Z" id="Oval-1-Copy-4" fill="white"></path>
                                            <ellipse id="Oval-1-Copy-5" cx="24.731405" cy="10.5578512" rx="3.03719008" ry="3.03719008" fill="white"></ellipse>
                                            <circle id="Oval-1-Copy-7" cx="24.5867769" cy="9.83471074" r="1.73553719" fill="black" stroke="white"></circle>
                                            <!-- <path d="M15.0413223,16.4353902 C15.0413223,16.4353902 15.9222393,17.4211822 16.7272883,16.4353902 C17.3460225,15.6777428 18.2360747,15.79189 18.7567889,16.4353902 C19.2961195,17.1018966 20.4017541,16.4353902 20.4017541,16.4353902" id="Path-2-Copy" fill="black" ></path> -->
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">MAMP</p>
                        <svg class="t-tool-icon" id="svg-mamp" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
                            <g id="mamp" transform="translate(1.000000, 1.000000)">
                                <circle id="Oval-17" stroke="#000000" fill="#FFFFFF" cx="15" cy="15" r="15"></circle>
                                <path d="M6.43006631,15.0547704 C6.33486946,15.7952035 6.23967261,16.5356366 6.12687733,17.4128413 C6.0099482,17.1748492 5.93423954,17.0648885 5.8991608,16.943235 C4.46010568,11.9622901 7.68829466,7.80197516 11.8339639,7.26610902 C14.3093183,6.9462665 16.4616411,7.91181768 18.4291214,9.33646335 C18.6959324,9.52969169 18.9381765,9.75669957 19.1918773,9.968235 C18.5447513,10.5400067 17.9343576,11.0861484 17.3159324,11.6230775 C16.9579403,11.9338256 16.9332553,12.2638256 17.1712474,12.6649279 C17.6510112,13.4738649 18.2875072,14.0601641 19.2211687,14.2611878 C19.2797513,14.2009515 19.338334,14.1408334 19.3969167,14.0807153 C19.2780978,14.0341799 19.1341214,14.0157547 19.0448301,13.9361484 C18.7378616,13.6620145 18.4132946,13.3950854 18.1625466,13.0729988 C17.6471135,12.4109909 17.6301057,12.2044161 18.2777041,11.70292 C19.266523,10.9369752 20.3243183,10.2597311 21.3562474,9.54977043 C21.7913655,9.25047909 22.1319954,9.39209327 22.4960112,9.73815626 C24.6842395,11.8183137 25.3475466,15.1457153 24.1467198,18.2026444 C23.6432159,19.4844948 22.9141214,20.6179988 21.8618773,21.5249673 C21.7282946,21.6402429 21.5897513,21.8063059 21.4359718,21.8287468 C21.1869954,21.8650067 20.8945545,21.8595736 20.6799482,21.7525657 C20.5917198,21.7085106 20.6031765,21.3385893 20.6622317,21.1452429 C21.0464443,19.8893767 21.4867592,18.6499279 21.8379009,17.3853216 C21.9353419,17.0345342 21.896838,16.5637468 21.7326647,16.2447311 C21.5547907,15.8992586 21.1867592,15.4948492 20.8467198,15.4367389 C20.5475466,15.3855972 20.0132159,15.6936287 19.8600269,15.9876051 C19.3174285,17.0285106 18.8298694,18.1092193 18.4444757,19.2174476 C18.1166017,20.1599673 17.9793576,21.1673295 17.7084128,22.132172 C17.6516017,22.3343767 17.3979009,22.5913846 17.2021923,22.6236287 C16.6445939,22.7154004 16.0702238,22.7234319 15.5022317,22.72792 C15.0173891,22.7316996 14.7651057,22.5258334 14.7812868,21.9685893 C14.8067986,21.0858334 14.7625072,20.1994161 14.7100663,19.3167783 C14.689397,18.9688256 14.6009324,18.6152035 14.4843576,18.2848492 C14.2884128,17.7294948 13.997271,17.1968177 13.3169561,17.1995342 C12.6400663,17.2022507 12.3186883,17.7319752 12.1508537,18.2882744 C11.9764049,18.866424 11.8717592,19.4759909 11.8225072,20.0788256 C11.769712,20.7234712 11.8012474,21.3769752 11.8271135,22.0254004 C11.841523,22.3836287 11.7230584,22.628235 11.3606962,22.6350854 C10.5818773,22.6497311 9.79892458,22.6584712 9.02553875,22.5851248 C8.86372773,22.5697704 8.66778285,22.2088256 8.6037671,21.9752035 C8.02703481,19.8716602 7.47864899,17.7602035 6.91384584,15.653235 C6.85620804,15.4381563 6.74577497,15.2373689 6.65979072,15.0298492 C6.58325529,15.0381169 6.50660174,15.0465027 6.43006631,15.0547704" id="Fill-8" fill="#000000"></path>
                            </g>
                        </svg>                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Sketch</p>
                        <svg class="t-tool-icon" id="svg-sketch" width="32px" height="29px" viewBox="0 0 32 29" version="1.1" >
                            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="theory" sketch:type="MSArtboardGroup" transform="translate(-962.000000, -352.000000)" stroke="#000000">
                                    <g id="Group" sketch:type="MSLayerGroup" transform="translate(963.000000, 150.000000)">
                                        <g id="skect" transform="translate(0.000000, 202.000000)" sketch:type="MSShapeGroup">
                                            <path d="M0.349718626,8.17067317 L4.550051,3.19534415 L9.73594337,0.688661318 L20.66713,0.688661318 L25.7300097,3.2177586 L29.9153991,8.08746801 L15.3707973,28.0916868 L0.349718626,8.17067317 Z" id="Path-27"></path>
                                            <path d="M4.62798381,3.23186656 L9.75598168,5.53699418 L20.7860725,5.53699418 L25.7747425,3.23186656" id="Path-31"></path>
                                            <path d="M15.4039552,28.0618373 L7.04001487,12.9710388 L9.74008185,5.60915798" id="Path-30"></path>
                                            <path d="M23.4039552,28.0618373 L15.0400149,12.9710388 L17.7400818,5.60915798" id="Path-30" transform="translate(19.221985, 16.835498) scale(-1, 1) translate(-19.221985, -16.835498) "></path>
                                            <path d="M0.367126458,8.17848427 L7.12069082,12.9687242 L23.3933468,12.9687242 L29.906189,8.07385254" id="Path-28"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Photoshop</p>
                        <svg class="t-tool-icon" id="svg-adobe-ps" width="31px" height="30px" viewBox="0 0 31 30" version="1.1" >
                            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="theory" sketch:type="MSArtboardGroup" transform="translate(-964.000000, -150.000000)">
                                    <g id="Group" sketch:type="MSLayerGroup" transform="translate(963.000000, 150.000000)">
                                        <g id="photoshop" transform="translate(1.500000, 0.000000)" sketch:type="MSShapeGroup">
                                            <rect id="Rectangle-15-Copy" stroke="#000000" fill="#FFFFFF" x="0" y="0" width="30" height="30"></rect>
                                            <path d="M5.7018958,22.374 L8.8728958,22.374 L8.8728958,17.313 C9.1668958,17.355 9.5448958,17.376 9.9648958,17.376 C11.8548958,17.376 13.4718958,16.914 14.5638958,15.885 C15.4038958,15.087 15.8658958,13.911 15.8658958,12.525 C15.8658958,11.139 15.2568958,9.963 14.3538958,9.249 C13.4088958,8.493 12.0018958,8.115 10.0278958,8.115 C8.0748958,8.115 6.6888958,8.241 5.7018958,8.409 L5.7018958,22.374 Z M8.8728958,10.656 C9.1038958,10.593 9.5448958,10.53 10.1958958,10.53 C11.7918958,10.53 12.6948958,11.307 12.6948958,12.609 C12.6948958,14.058 11.6448958,14.919 9.9438958,14.919 C9.4818958,14.919 9.1458958,14.898 8.8728958,14.835 L8.8728958,10.656 Z M17.2098958,21.87 C17.9868958,22.29 19.1838958,22.584 20.5278958,22.584 C23.4678958,22.584 24.9798958,21.177 24.9798958,19.266 C24.9588958,17.754 24.1398958,16.767 22.1868958,16.095 C20.9268958,15.654 20.5278958,15.402 20.5278958,14.919 C20.5278958,14.394 20.9688958,14.079 21.7458958,14.079 C22.6278958,14.079 23.5098958,14.415 23.9718958,14.667 L24.5388958,12.462 C23.9088958,12.147 22.8378958,11.874 21.6408958,11.874 C19.0998958,11.874 17.4618958,13.323 17.4618958,15.234 C17.4408958,16.452 18.2598958,17.607 20.3808958,18.321 C21.5778958,18.72 21.8928958,18.972 21.8928958,19.497 C21.8928958,20.022 21.4938958,20.358 20.5278958,20.358 C19.5828958,20.358 18.3648958,19.938 17.7768958,19.581 L17.2098958,21.87 Z" id="Ps" fill="#000000"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Illustrator</p>
                        <svg class="t-tool-icon" id="svg-adobe-ai" width="31px" height="30px" viewBox="0 0 31 30" version="1.1" >
                            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="theory" sketch:type="MSArtboardGroup" transform="translate(-964.000000, -200.000000)">
                                    <g id="Group" sketch:type="MSLayerGroup" transform="translate(963.000000, 150.000000)">
                                        <g id="illustrator" transform="translate(1.500000, 50.000000)" sketch:type="MSShapeGroup">
                                            <rect id="Rectangle-15" stroke="#000000" fill="#FFFFFF" x="0" y="0" width="30" height="30"></rect>
                                            <path d="M13.971,18.741 L15.063,22.374 L18.507,22.374 L14.118,8.22 L9.918,8.22 L5.592,22.374 L8.91,22.374 L9.918,18.741 L13.971,18.741 Z M10.38,16.347 L11.22,13.344 C11.451,12.525 11.661,11.454 11.871,10.614 L11.913,10.614 C12.123,11.454 12.375,12.504 12.627,13.344 L13.509,16.347 L10.38,16.347 Z M23.484,22.374 L23.484,12.105 L20.292,12.105 L20.292,22.374 L23.484,22.374 Z M21.888,7.632 C20.859,7.632 20.187,8.325 20.208,9.249 C20.187,10.131 20.859,10.845 21.867,10.845 C22.917,10.845 23.589,10.131 23.589,9.249 C23.568,8.325 22.917,7.632 21.888,7.632 L21.888,7.632 Z" id="Ai" fill="#000000"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">InDesign</p>
                        <svg class="t-tool-icon" id="svg-adobe-in" width="31px" height="30px" viewBox="0 0 31 30" version="1.1" >
                            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="theory" sketch:type="MSArtboardGroup" transform="translate(-964.000000, -250.000000)">
                                    <g id="Group" sketch:type="MSLayerGroup" transform="translate(963.000000, 150.000000)">
                                        <g id="indesign" transform="translate(0.500000, 100.000000)" sketch:type="MSShapeGroup">
                                            <rect id="Rectangle-15-Copy-2" stroke="#000000" fill="#FFFFFF" x="0.973395795" y="0" width="30" height="30"></rect>
                                            <path d="M8.08229159,8.22 L8.08229159,22.374 L11.2952916,22.374 L11.2952916,8.22 L8.08229159,8.22 Z M20.7242916,7.464 L20.7242916,13.029 L20.6822916,13.029 C20.2202916,12.315 19.2332916,11.874 17.9732916,11.874 C15.5162916,11.874 13.3532916,13.869 13.3742916,17.334 C13.3742916,20.526 15.3272916,22.605 17.7632916,22.605 C19.0862916,22.605 20.3252916,22.017 20.9762916,20.862 L21.0182916,20.862 L21.1652916,22.374 L24.0002916,22.374 C23.9582916,21.681 23.9162916,20.463 23.9162916,19.308 L23.9162916,7.464 L20.7242916,7.464 Z M20.7242916,17.796 C20.7242916,18.069 20.7032916,18.3 20.6402916,18.531 C20.4512916,19.434 19.7162916,20.064 18.7922916,20.064 C17.4692916,20.064 16.6082916,18.972 16.6082916,17.229 C16.6082916,15.612 17.3642916,14.31 18.8132916,14.31 C19.8002916,14.31 20.4932916,15.024 20.6822916,15.885 C20.7032916,16.053 20.7242916,16.284 20.7242916,16.452 L20.7242916,17.796 Z" id="Id" fill="#000000"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">After Effects</p>
                        <svg class="t-tool-icon" id="svg-adobe-ae" width="31px" height="30px" viewBox="0 0 31 30" version="1.1" >
                            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="theory" sketch:type="MSArtboardGroup" transform="translate(-964.000000, -300.000000)">
                                    <g id="Group" sketch:type="MSLayerGroup" transform="translate(963.000000, 150.000000)">
                                        <g id="after-effects" transform="translate(0.500000, 150.000000)" sketch:type="MSShapeGroup">
                                            <rect id="Rectangle-15-Copy-3" stroke="#000000" fill="#FFFFFF" x="0.94679159" y="0" width="30" height="30"></rect>
                                            <path d="M12.2241874,18.741 L13.3161874,22.374 L16.7601874,22.374 L12.3711874,8.22 L8.17118739,8.22 L3.84518739,22.374 L7.16318739,22.374 L8.17118739,18.741 L12.2241874,18.741 Z M8.63318739,16.347 L9.47318739,13.344 C9.70418739,12.525 9.91418739,11.454 10.1241874,10.614 L10.1661874,10.614 C10.3761874,11.454 10.6281874,12.504 10.8801874,13.344 L11.7621874,16.347 L8.63318739,16.347 Z M27.6171874,18.258 C27.6591874,18.027 27.7221874,17.544 27.7221874,16.998 C27.7221874,14.457 26.4621874,11.874 23.1441874,11.874 C19.5741874,11.874 17.9571874,14.751 17.9571874,17.355 C17.9571874,20.568 19.9521874,22.584 23.4381874,22.584 C24.8241874,22.584 26.1051874,22.374 27.1551874,21.954 L26.7351874,19.791 C25.8741874,20.064 24.9921874,20.211 23.9001874,20.211 C22.4091874,20.211 21.1071874,19.581 21.0021874,18.258 L27.6171874,18.258 Z M20.9811874,16.074 C21.0651874,15.213 21.6111874,13.995 22.9551874,13.995 C24.4251874,13.995 24.7611874,15.297 24.7611874,16.074 L20.9811874,16.074 Z" id="Ae" fill="#000000"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Blender</p>
                        <svg class="t-tool-icon" id="svg-blender" width="30px" height="25px" viewBox="0 0 30 25" version="1.1" >
                            <g id="theory" sketch:type="MSArtboardGroup" transform="translate(-963.000000, -443.000000)" fill="#000000">
                                <g id="Group" sketch:type="MSLayerGroup" transform="translate(963.000000, 150.000000)">
                                    <g id="blender" transform="translate(0.000000, 293.000000)" sketch:type="MSShapeGroup">
                                        <path d="M15.8234541,13.9905681 C15.8794613,12.9531912 16.3741098,12.038301 17.1190563,11.3896696 C17.8509923,10.7525093 18.8347132,10.3637638 19.9090124,10.3636364 C20.9826919,10.3637638 21.9665368,10.7525093 22.6984728,11.3896696 C23.4436671,12.038301 23.9381916,12.9530638 23.9948185,13.9901858 C24.051817,15.0572603 23.6353558,16.0487525 22.9039154,16.7827805 C22.1585972,17.5305739 21.096813,18 19.9091363,18 C18.7210878,18 17.6586841,17.5305739 16.9133658,16.7827805 C16.1819255,16.0490074 15.7659598,15.0573878 15.8234541,13.9905681" id="Fill-1"></path>
                                        <path d="M9.18828166,15.8385942 C9.1949142,16.2317392 9.32093228,16.9972463 9.50762574,17.597479 C9.90140155,18.8631388 10.5689535,20.0356461 11.4989817,21.0689817 C12.4528379,22.1291619 13.6255676,22.9823782 14.9819202,23.5874355 C16.4084056,24.2232962 17.9531711,24.5485254 19.5559099,24.5454327 C21.1588944,24.5424637 22.7034143,24.2121625 24.1295312,23.5714771 C25.4846555,22.9607292 26.6575081,22.1055336 27.6106273,21.042137 C28.5388131,20.0049665 29.2053825,18.8306035 29.5995268,17.5638303 C29.7986255,16.9232687 29.9228012,16.2745423 29.9737735,15.6223521 C30.0235174,14.9806771 30.0022688,14.336899 29.9119927,13.6947291 C29.7356165,12.4421825 29.3049933,11.2672009 28.6430913,10.1952684 C28.0358462,9.21129247 27.2552956,8.34954036 26.3271098,7.6238674 L26.328338,7.62263031 L16.957923,0.374560258 C16.9496938,0.368003717 16.9420787,0.361447176 16.9339722,0.355014344 C16.3176382,-0.119654453 15.2838231,-0.118169953 14.6081648,0.358478177 C13.9235402,0.840322056 13.8467748,1.63626134 14.4543883,2.1401253 L14.4525459,2.1416098 L18.3610718,5.34342836 L6.44658995,5.35629402 C6.44081719,5.35629402 6.43578138,5.3560466 6.43025427,5.3560466 C5.44581474,5.35666515 4.49981933,6.00860795 4.31152915,6.83027857 C4.12053682,7.66840239 4.78943984,8.36314828 5.8124463,8.36710694 L5.81195501,8.37057077 L11.8500145,8.35894219 L1.07387151,16.68946 C1.06023798,16.6999752 1.04599032,16.7098719 1.03247961,16.7205108 C0.0173339185,17.5044504 -0.311958954,18.8085834 0.327711796,19.6338415 C0.978191114,20.4730787 2.35923142,20.4736973 3.38702805,19.6375528 L9.26750356,14.7906611 C9.26750356,14.7906611 9.18226326,15.4453255 9.18877296,15.8385942 L9.18828166,15.8385942 L9.18828166,15.8385942 Z M24.3002575,18.0286025 C23.0883467,19.2734792 21.3932438,19.9781218 19.5564012,19.9810908 C17.7186989,19.9849257 16.0226134,19.2856026 14.8105798,18.044066 C14.2181965,17.4385138 13.7830288,16.7437679 13.5145341,16.0012706 C13.2518122,15.2729998 13.1496221,14.5006888 13.2166844,13.7205842 C13.2822727,12.9569328 13.5060592,12.2303938 13.866918,11.5716471 C14.2207758,10.9246526 14.7076527,10.3402545 15.3087565,9.84529757 C16.4865221,8.87789857 17.9852284,8.35523094 19.5548045,8.3531279 C21.1245035,8.35090115 22.6233326,8.8694864 23.8010981,9.83317416 C24.4017106,10.3254095 24.8880962,10.907952 25.2421997,11.5537094 C25.6028128,12.2114665 25.826845,12.9370157 25.8928018,13.7007909 C25.9597412,14.4801532 25.857674,15.2530828 25.5948292,15.9819721 C25.3265802,16.7249643 24.8919038,17.4208235 24.3002575,18.0286025 L24.3002575,18.0286025 Z" id="Fill-2"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li class="t-tool">
                        <p class="f-txt-mono">Principle</p>
                        <svg class="t-tool-icon" id="svg-principle" width="30px" height="31px" viewBox="0 0 30 31" version="1.1" >
                            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="theory" sketch:type="MSArtboardGroup" transform="translate(-964.000000, -396.000000)">
                                    <g id="Group" sketch:type="MSLayerGroup" transform="translate(963.000000, 150.000000)">
                                        <g id="principle" transform="translate(1.500000, 247.000000)" sketch:type="MSShapeGroup">
                                            <circle id="Oval-1" stroke="#000000" fill="#FFFFFF" cx="14.5" cy="14.5" r="14.5"></circle>
                                            <g id="Principle" transform="translate(6.500000, 8.000000)">
                                                <path d="M8.75,10.0244609 C11.5114237,10.0244609 13.75,7.78588463 13.75,5.02446088 C13.75,2.26303713 11.5114237,0.0244608792 8.75,0.0244608792 C5.98857625,0.0244608792 3.75,2.26303713 3.75,5.02446088 L3.75,13.9755391" stroke="#000000" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="bevel"></path>
                                                <path d="M8.762146,11.3459473 C9.50773042,11.3459473 10.112146,10.7415317 10.112146,9.99594724 C10.112146,9.25036282 9.50773042,8.64594722 8.762146,8.64594722 C8.01656157,8.64594722 7.41214597,9.25036282 7.41214597,9.99594724 C7.41214597,10.7415317 8.01656157,11.3459473 8.762146,11.3459473 Z" id="Oval-4" fill="#FFFFFF"></path>
                                                <path d="M1.44997561,16.2 C2.19556004,16.2 2.79997563,15.5955844 2.79997563,14.85 C2.79997563,14.1044156 2.19556004,13.5 1.44997561,13.5 C0.704391184,13.5 0.0999755859,14.1044156 0.0999755859,14.85 C0.0999755859,15.5955844 0.704391184,16.2 1.44997561,16.2 Z" id="Oval-4" fill="#FFFFFF"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
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
                            <td class="f-upcase-space">Mar 2016</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">Online Course</td>
                            <td class="f-txt-mono">
                                <strong class="f-upcase-space">Ajax lvl 4/6</strong>
                                codeschool.com
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
                            <td class="f-upcase-space">JUL 2015</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td class="f-upcase-space-gray">Online Course</td>
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
                            <td class="f-upcase-gray">Code Pen</td>
                            <td class="f-txt-mono"><a target="_blank" class="f-link-under-mono" title="Code Pen account" href="//codepen.io/sandrina-p/">/sandrin4p</a></td>
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
            <p class="f-txt-monoM final-words-txt">
                That's it for now.</br>
                Thank you for reading this, or at least, scrolling. </br>
                Don't be shy, go talk about me with other human beings around you.
            </p>
        </footer>

    </main>

    <!-- WIDGET INVERT -->
    <div class="widget-invert btn-off"></div>

    <!-- WIDGET RESOURCES -->
    <div class="widget-resources btn-off"></div>




    <?php
    // <script type="text/javascript">
    //
    //     /*BE LAZY*/
    //     ;(function() {
    //         var bLazy = new Blazy({
    //             selector: '.js-blazy'
    //         });
    //     })();
    //
    // </script>
     ?>


    <!-- SCRIPTS AND STYLES -->

    <noscript>
        <link rel="stylesheet" href="'assets/<?php echo $stylesFolder ?>/02_templates/all.min.css';">
    </noscript>

    <noscript>
        <style media="screen">
            /*if there is no js, hide the loading on "document ready"*/
            .loading-container {
                display: none;
            }
        </style>
    </noscript>

    <script async src="assets/scripts/01_templates/index.min.js" charset="utf-8"></script>

</body>

</html>
