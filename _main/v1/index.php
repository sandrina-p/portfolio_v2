<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>sandrina.p</title>

    <!--description-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
    <meta property="og:url" content="//www.sandrina-p.com" />
    <meta property="og:image" content="data/share.png" />

    <!--favicon-->
    <link rel="icon" type="image/png" href="data/icon16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="data/icon32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="data/icon180.png" sizes="180x180">

    <link rel="apple-touch-icon" sizes="76x76" href="icon76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="icon120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="icon152.png">

    <!--source-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:,300,600,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Mono:400,300,500' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="assets/styles/02_templates/all.min.css">


    <!-- google analytics  -->
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-70069700-2', 'auto');
    ga('send', 'pageview');

    </script>
</head>

<body>
    <div class="loading-container">
        <div class="loading-square">
            <div class="loading-border"></div>
            <div class="loading-border-cover"></div>
            <h2>Loading...</h2>
            <br>
            <p class="san">I hope you have a decent browser</p>
        </div>
    </div>

    <!-- HEADER -->
    <header>
        <div class="header-click-area"></div>

        <article class="header-title">
            <h1>Sandrina Pereira</h1>
            <h2>Front End Developer<br>UX UI Designer</h2>
        </article>
    </header>

    <?php
    // <!-- NAV TOP -->
    // <nav class="navegacao-topo">
    //     <div class="nav-safearea"></div>
    //     <div class="the-square"></div>
    //
    //     <article class="nav-subTitles">
    //         <nav class="n-subTitles-container">
    //             <ul class="nav-subTitles-mobile">
    //                 <li>
    //                     <a href="#anchor-practice"><h3>Practice</h3></a>
    //                 </li>
    //                 <li>
    //                     <a href="#anchor-theory"><h3>Theory</h3></a>
    //                 </li>
    //                 <li>
    //                     <a href="#anchor-background"><h3>Background</h3></a>
    //                 </li>
    //             </ul>
    //             <ul class="nav-subTitles-desktop">
    //                 <li>
    //                     <h3><span>Practice</span></h3>
    //                 </li>
    //                 <li>
    //                     <h3><span>Theory</span></h3>
    //                 </li>
    //                 <li>
    //                     <h3><span>Background</span></h3>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </article>
    // </nav>
    ?>
    <!-- MAIN -->
    <main>
        <!-- NAV-PRESENTATION -->
        <nav class="navigation-square">
                <ul class="nav-ul">
                    <li class="nav-li-practice">
                        <div class="li-square square2">
                            <div class="li-title">
                                <a href="#practice"><span>Practice</span></a>
                            </div>
                        </div>
                    </li>

                    <li class="nav-li-theory">
                        <div class="li-square square1">
                            <div class="li-title">
                                <a href="#theory"><span>Theory</span></a>
                            </div>
                        </div>
                    </li>

                    <li class="nav-li-background">
                        <div class="li-square square3">
                            <div class="li-title">
                                <a href="#background"><span>Background</span></a>
                            </div>
                        </div>
                    </li>
                </ul>
            <div class="image-gif">
                <?php
                // <div class="image-gif" onmouseover="PlaySound('mySound')" onmouseout="StopSound('mySound')">
                // <audio id='mySound' src='assets/media/sound/glitch.ogg'></audio>
                // <img src="assets/media/images/myself.gif" alt="profile">
                ?>
                <img class="b-lazy"
                    src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                    data-src="assets/media/images/myself.gif"
                    alt="TODO"/>
            </div>

            <div class="mobile-welcome">
                <h3 id="typewriter-mob">
                    <?php
                    // Hey there cybertaute.<br>
                    // If you are here, <br>
                    // you are a lucky person.<br><br>
                    // You didn’t find me.<br>
                    // I found you.<br><br>
                    // Anything you need,<br>
                    // the black square <br>
                    ?>

                </h3>
            </div>
        </nav>

        <!-- WELCOME-DESKTOP -->
        <div class="help-trigger">
            <div class="h-welcome">
                 <p class="typewriter"><span id="typewriter-desk">
                    <?php
                    // Hey there cybertaute.<br>
                    // If you are here, you<br>
                    // are a lucky person.<br><br>
                    // You didn’t find me.<br>
                    // I found you.<br><br>
                    // I'm still under<br>
                    // construction,
                    // <br> so please, don't be<br>
                    // mad if you get lost.
                    ?>

                </span></p>
            </div>
            <div class="h-close">
                <p class="san-bold txt-squeeze"><span>{ x }</span></p>
            </div>
        </div>


        <div class="">


        <!-- PRACTICE -->
        <section class="section-practice" id="practice">

            <div class="practice-content scene">
                <!-- 8. CAROLINA MACHADO -->
                <div class="layer" data-depth="0.3">
                    <article class="p-project">
                        <img class="b-lazy"
                            src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                            data-src="assets/media/images/practice/project_carolina.png"
                            alt="TODO"/>
                        <div class="p-line-web"></div>
                        <h4 class="p-title laxyer">Carolina Machado</h4>
                        <div class="p-container-info">
                            <p class="p-field">Web Design & Development</p>
                            <p  class="p-data">08 Oct 2016</p>
                        </div>
                        <p class="p-caption" data-depth="0.3">This was born Against The Clock. <i>My partner in crime</i> asked me to build a website that could show her Fashion Design stuff before Lisbon Fashion Week <a target="_blank" class="link-under" href="//xx.co">Moda Lisboa - The Timers</a>  in which she participated. She asked me for it 3 months before the event. <i>"Something simple and minimal"</i>, she said. I did it in the night before the event. I designed it, coded it responsive and put it online in 6 hours. It was crazy. But I loved it.
                        <small>Prologue: Of course I spend the next days fixing minor bugs. No one noticed it x)</small>
                        </p>
                        <!-- <p class="san-bold"><span>Fashion Designer</span></p> -->
                        <a class="button-rectangle" href="//www.carolina-machado.com">
                            <span class="button-hover-fill"></span>
                            <p>launch website</p>
                        </a>
                    </article>
                </div>

                <!-- 7. PISTOL SHRIMP -->
                <div class="layer" data-depth="0.2">
                    <article class="p-project">
                        <img class="b-lazy"
                            src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                            data-src="assets/media/images/practice/project_pistolshrimp.png"
                            alt="TODO"/>
                        <div class="p-line-web"></div>
                        <h4>Pistol Shrimp</h4>
                        <p class="san-bold"><span>Record Label For Cybertauts</span></p>
                        <a class="button-rectangle" href="//www.pistolshrimp.net">
                            <div class="button-hover-fill"></div>
                            <p>launch website </p>
                        </a>
                    </article>
                </div>

                <!-- 6. MOON -->
                <div class="layer" data-depth="0.4">
                    <article class="p-project">
                        <img class="b-lazy"
                            src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                            data-src="assets/media/images/practice/project_moon.png"
                            alt="TODO"/>
                        <div class="p-line-web"></div>
                        <h4>Moon</h4>
                        <p class="san-bold"><span>A Duncan Jones's film</span></p>
                        <a class="button-rectangle" href="//www.googledrive.com/host/0Bx3MPS7bjIpfREZDci1FTXN0U0k/">
                            <div class="button-hover-fill"></div>
                            <p>launch website </p>
                        </a>
                    </article>
                </div>

                <!-- 5. PROFANO -->
                <div class="layer" data-depth="0.2">
                    <article class="p-project">
                        <img class="b-lazy"
                            src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                            data-src="assets/media/images/practice/project_profano.png"
                            alt="TODO"/>
                        <div class="p-line-web"></div>
                        <h4>O Profano</h4>
                        <p class="san-bold"><span>Digital newspaper - just an ideia</span></p>
                        <a class="button-rectangle" href="//www.o-profano.tumblr.com" >
                            <div class="button-hover-fill"></div>
                            <p>launch website </p>
                        </a>
                    </article>
                </div>

                <!-- 3. PORTFOLIO -->
                <div class="layer" data-depth="0.15">
                    <article class="p-project">
                        <img class="b-lazy"
                            src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                            data-src="assets/media/images/practice/project_portfolio.png"
                            alt="TODO"/>
                        <div class="p-line-web"></div>
                        <h4><span>Portfolio</span></h4>
                        <p class="san-bold">My first website </p>
                        <a class="button-rectangle" href="//www.googledrive.com/host/0Bx3MPS7bjIpfRG5qeWw2anhRSDQ" >
                            <div class="button-hover-fidll"></div>
                            <p>launch website </p>
                        </a>
                    </article>
                </div>

                <!-- 2. METRO -->
                <div class="layer" data-depth="0.3">
                    <article class="p-project">
                        <img class="b-lazy"
                            src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                            data-src="assets/media/images/practice/project_metro.png"
                            alt="TODO"/>
                        <div class="p-line-phone"></div>
                        <h4>App Lisbon Metro</h4>
                        <p class="san-bold">Concept of a app for Lisbon's subway</p>
                        <a class="button-rectangle" href="//www.behance.net/gallery/18543767/App-Metro-Lisboa" >
                            <div class="button-hover-fill"></div>
                            <p>see more</p>
                        </a>
                    </article>
                </div>

                <!-- 1. DET -->
                <div class="layer" data-depth="0.2">
                    <article class="p-project">
                        <img class="b-lazy"
                            src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                            data-src="assets/media/images/practice/project_det.png"
                            alt="dutch experimental typography"/>
                        <div class="p-line-tablet"></div>
                        <h4>Dutch Experimental Typography</h4>
                        <p class="san-bold"><span>Digital catalogue of 70's - 90's Netherlands typography.</span></p>
                        <a class="button-rectangle" href="//www.behance.net/gallery/26687261/Digital-Magazine-Dutch-experimental-typography" >
                            <div class="button-hover-fill"></div>
                            <p>see more</p>
                        </a>
                    </article>
                </div>
            </ol>

            <?php
            // <aside class="project-index">
            //
            //     <div id="index-thumb"></div>
            //
            //     <ol reversed>
            //         <!-- 7. PISTOL SHRIMP --><li><a href="#practice-project-pistolshrimp">Pistol Shrimp</a></li>
            //         <!-- 6. MOON --><li><a href="#practice-project-moon">Moon</a></li>
            //         <!-- 5. PROFANO --><li><a href="#practice-project-profanp">O Profano</a></li>
            //         <!-- 4. GALERIA --><li><a href="#practice-project-galeria">Galeria dos Leões</a></li>
            //         <!-- 3. PORTFOLIO --><li><a href="#practice-project-oldportfolio">Old Portfolio</a></li>
            //         <!-- 2. METRO --><li><a href="#practice-project-det">Dutch Experimental Typography</a></li>
            //         <!-- 1. DET --><li><a href="#practice-project-metro">App Metro</a></li>
            //     </ol>
            //
            // </aside>
            ?>


            <div class="bottom-fadeout" id="fadeout-practice"></div>

        </section>

        <!-- mobile -->
        <div class="button-expand-section" id="expand-practice">
            <div class="button-hover-fill"></div>
            <p> show more projects </p>
        </div>

        <!-- THEORY -->
        <section class="section-theory scene" id="theory">

            <article class="t-development layer" data-depth="0.3">
                <div class="X-article-vertical-content">
                    <h5>Web Development</h5>
                    <p class="topic">
                        html5<br>
                        css3 (scss)<br>
                        javascript<br>
                        jQuery
                    </p>
                </div>
            </article>

            <article class="t-uxui layer" data-depth="0.2">
                <div class="X-article-vertical-content">
                    <h5>UX UI Design</h5>
                    <p class="topic">
                        app / web design<br>
                        minimalist visual<br>
                        rich animation effects<br>
                        interactive design
                    </p>
                </div>
            </article>

            <article class="t-hobbies layer" data-depth="0.17">
                <div class="X-article-vertical-content">
                    <h5>Hobbies</h5>
                    <p class="topic">
                        Codeschool<br>
                        Millennium<br>
                        Ubisoft Games
                    </p>
                </div>
            </article>

            <article class="t-assets layer" data-depth="0.23">
                <div class="X-article-vertical-content">
                    <h5>Assets</h5>
                    <p class="topic">
                        Innovation<br>
                        Ambition<br>
                        Effort<br>
                        Perfectionism
                    </p>
                </div>
            </article>

            <article class="t-tools layer" data-depth="0.4">
                <div class="X-article-vertical-content">
                    <div class="tool">
                        <p class="inline"> Photoshop </p>
                        <img src="assets/media/images/theory/photoshop.svg " alt="photoshop">
                    </div>
                    <div class="tool">
                        <p class="inline"> Illustrator </p>
                        <img src="assets/media/images/theory/illustrator.svg " alt="illustrator">
                    </div>
                    <div class="tool">
                        <p class="inline"> InDesign </p>
                        <img src="assets/media/images/theory/indesign.svg " alt="indesign">
                    </div>
                    <div class="tool">
                        <p class="inline"> After Effects </p>
                        <img src="assets/media/images/theory/after.svg " alt="after effects">
                    </div>
                    <div class="tool">
                        <p class="inline"> Sketch </p>
                        <img src="assets/media/images/theory/sketch.svg " alt="sketch">
                    </div>
                    <div class="tool">
                        <p class="inline"> Principle </p>
                        <img src="assets/media/images/theory/principle.svg " alt="principle">
                    </div>
                    <div class="tool">
                        <p class="inline"> Blender </p>
                        <img src="assets/media/images/theory/blender.svg " alt="blender">
                    </div>
                </div>
            </article>

            <div class="bottom-fadeout" id="fadeout-theory"></div>

        </section>
        <!-- mobile -->
        <div class="button-expand-section" id="expand-theory">
            <div class="button-hover-fill"></div>
            <p> show more fields </p>
        </div>

        <!-- BACKGROUND -->
        <section class="section-background scene" id="background">

            <article class="b-profile layer" data-depth="0.3">
                <table class="table-std">
                    <thead>
                        <tr>
                            <th><h5>Profile</h5></th><th><!--empty--></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Place Of Birth</td>
                            <td>Genève, Switzerland</td>
                        </tr>
                        <tr>
                            <td>Nacionality</td>
                            <td>Portuguese</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>Lisbon, Portugal</td>
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
                            <th><h5>TimeLine</h5></th><th><!--empty--></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="time-section">
                            <td>Nowadays</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>Front End Developer</td>
                            <td>

                                <a target="_blank" class="link-under" href="//zaask.pt" alt="Zaask"><strong>Zaask</strong></a>
                                Start-up
                            </td>
                        </tr>
                        <tr>
                            <td>Postgraduate Studies</td>

                            <td>
                                <strong>Digital Experience Design</strong>
                                Faculty of Fine Arts of University of Lisbon
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td>Jan 2016</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>Front End Developer <br> and Web Designer</td>
                            <td>
                                <strong>Learning Health</strong>
                                Freelancer Project
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td>Aug - Sep 2015</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>UX UI Designer</td>
                            <td>
                                <strong>GetPure</strong>
                                Start-up
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td>Jul 2015</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>Online Course</td>
                            <td>
                                <strong>jQuery lvl 1/2<br>javascript lvl 2/4</strong>
                                codeschool.com
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td>May 2015</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>Contest</td>
                            <td>
                                <strong>Graphic Design Finalist</strong>
                                Galp Create 2015
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td>2014 - 15</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>Erasmus</td>
                            <td>
                                <strong>Comunication Design</strong>
                                Faculty of Fine Arts of University of Porto
                            </td>
                        </tr>

                        <tr class="time-section">
                            <td>2012 - 15</td> <td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>Degree</td>
                            <td>
                                <strong>Comunication Design</strong>
                                Faculty of Fine Arts of University of Lisbon
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="time-section">
                            <td>Soon<td><!--empty--></td>
                        </tr>
                        <tr>
                            <td>Learning something new</td>
                            <td>
                                <strong>Your Idea</strong>
                                Feel free to contact me. Maybe I'll have time for your project :)
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </article>

            <?php
            // <article class="b-description layer" data-depth="0.4">
            //     <p>I consider myself a self-taught person with potential in web design. Being updated in the digital world helps me innovate the technical and creative aspect in every project that I do. To produce a cohesive and functional website, as also to create an well thought user experience (UX) are some fundamental aspects in creating a good relationship between the client and the final product.</p>
            // </article>
            ?>

            <?php
            // <div class="bottom-fadeout" id="fadeout-background"></div>
            ?>

            <article class="b-contact layer" data-depth="0.2">
                <table class="table-std">
                    <thead>
                        <tr>
                            <th><h5>Contact</h5></th><th><!--empty--></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // <tr>
                        //     <td>Phone</td>
                        //     <td>(+351) 91 79 0 70 75</td>
                        // </tr>
                        ?>
                        <tr>
                            <td>e-mail</td>
                            <td>
                                <a class="link-under" alt="gmail" href="mailto:sandrin4pereir4@gmail.com?subject=You%20are%20awesome!">sandrin4pereir4@gmail.com</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Behance</td>
                            <td><a target="_blank" class="link-under" alt="Behance" title="Behance" href="//behance.com/sandrin4p">/sandrin4p</a></td>
                        </tr>
                        <tr>
                            <td>Facebook</td>
                            <td><a target="_blank" class="link-under" alt="facebook" title="Behance" href="//facebook.com/sandrin4p">/sandrin4p</a></td>
                        </tr>
                    </tbody>
                </table>
            </article>

        </section>

        <!-- mobile -->
        <div class="button-expand-section" id="expand-background">
            <div class="button-hover-fill"></div>
            <p> show more history </p>
        </div>

        </div>
        <!-- BOTTOM mobile -->
        <footer class="thank-you-for-reading-this">
            <p> That's it for now.<br>
                Thank you for reading this, <br>
                or at least, scrolling.<br>
                <br>
                Don't be shy and talk about me with human beings around you
            </p>
        </footer>
    </main>

    <!-- WIDGET INVERT -->
    <div class="widget-invert">
        <div class="button-hover-no"></div>
    </div>

    <!-- WIDGET RESOURCES -->
    <div class="widget-resources">
        <div class="button-hover-no"></div>
    </div>


    <!-- SCRIPTS -->

    <script src="assets/plugins/jquery/jquery.min.js"></script><!--jquery-->

    <script src="assets/scripts/01_templates/index.min.js"></script> <!--custom-->

    <script src="assets/plugins/blazy/blazy.min.js"></script> <!--blazy images-->
    <script type="text/javascript">
    	/*BE LAZY*/
    	;(function() {
    		var bLazy = new Blazy({
                container: '.section-practice, .practice-content',
    		});
    	})();
    </script>


    <script src="assets/plugins/others/typewriter.min.js"></script> <!--typewriter-->
    <script src="assets/scripts/00_organisms/index_typewriter.min.js"></script> <!--jquery custom-->

    <script src="assets/plugins/others/glitch.min.js"></script> <!--glitch (w/custom)-->

    <script src="assets/plugins/jquery/jquery.parallax.min.js"></script> <!--parallax (w/custom)-->
    <script>
        if (!matchMedia('screen and (min-width: 850px) and (min-height: 600px)').matches) {
        }else {
            $('.scene').parallax();
        }
    </script>


    </body>

</html>
