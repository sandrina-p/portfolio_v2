<section class="cv" id="cv">
    <h2 class="sr-only">About</h2>
    <span class="cv-lamp" id="xx"></span>
    <div class="cv-ascii">
        <?php include 'myself.php';?>
    </div>

    <script type="text/javascript">

    var tooltipSpan = document.getElementById('xx');
        window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        tooltipSpan.style.top = (y - window.innerWidth) + 'px';
        tooltipSpan.style.left = (x - window.innerWidth) + 'px';
        };


    </script>

    <?php // around ?>
    <article class="cv-article">
        <div class="cv-article-in">
            <div class="cv-article-header">
                <h3 class="cv-title">around</h3>
            </div>



            <dl class="cv-dl js-onWebAfter">
                <dt class="cv-dt">
                    <a href="mailto:a.sandrina.p4@gmail.com?subject=Hey%20there!" title="sandrina's e-mail" class="cv-link">a.sandrina.p@gmail.com</a>
                </dt>
                <dd class="cv-dd">waiting for your call</dd>

                <dt class="cv-dt js-onWeb-remove">
                    <a href="//codepen.io/sandrina-p" target="_blank" title="sandrina's stackoverflow" class="cv-link">
                        <i class="fa fa-codepen"></i> codepen
                    </a>
                </dt>
                <dd class="cv-dd js-onWeb-remove">because coding without fun is <span class="nowrap">just boring</span></dd>

                <dt class="cv-dt js-onWeb-remove">
                    <a href="//github.com/sandrina-p" target="_blank" title="sandrina's stackoverflow" class="cv-link">
                        <i class="fa fa-github"></i> github
                    </a>
                </dt>
                <dd class="cv-dd js-onWeb-remove">sharing is what make <span class="nowrap">us better</span></dd>

                <dt class="cv-dt js-onWeb-remove">
                    <a href="//stackoverflow.com/users/4737729/sandrina-pereira" target="_blank" title="sandrina's stackoverflow" class="cv-link">
                        <i class="fa fa-stack-overflow"></i> stackoverflow
                    </a>
                </dt>
                <dd class="cv-dd js-onWeb-remove">helping others is as important <span class="nowrap">as being</span> helped</dd>

                <dt class="cv-dt js-onWeb-remove">
                    <a href="//www.behance.net/sandrin4p" target="_blank" title="sandrina's stackoverflow" class="cv-link">
                        <i class="fa fa-behance"></i>
                        behance
                    </a>
                </dt>
                <dd class="cv-dd js-onWeb-remove">it can't be all <span class="nowrap">about coding</span></dd>
            </dl>
            <!-- those fancy links are JS loaded too. Why? Because I like fancy layouts as much as I want Google to better understand my website content -->
        </div>
    </article>

    <?php // superpowers ?>
    <article class="cv-article">
        <div class="cv-article-in">
            <div class="cv-article-header">
                <h3 class="cv-title">superpowers</h3>
            </div>

            <div class="cv-list">
                <h4 class="cv-list-title">new in town</h4>
                <ul class="cv-list-ul cv-list-ul--split">
                    <li>Google Firebase</li>
                    <li>React</li>
                    <li>Webpack</li>
                </ul>
            </div>

            <div class="cv-list">
                <h4 class="cv-list-title">rocking at</h4>
                <ul class="cv-list-ul">
                    <li>HTML5</li>
                    <li>CSS3 / SCSS</li>
                    <li>SUIT methologody</li>
                    <li>e-mails</li>
                    <li>SEO</li>
                </ul>
                <ul class="cv-list-ul">
                    <li>jQuery</li>
                    <li>Javascript</li>
                    <li>JS ES2015</li>
                    <li>JS Modular Pattern</li>
                    <li>Modernizr</li>
                </ul>
                <ul class="cv-list-ul">
                    <li>Ionic 2</li>
                    <li>Jekyll</li>
                    <li>PHP</li>
                    <li>SVG</li>
                    <li>Tumblr</li>
                </ul>
            </div>

            <div class="cv-list">
                <h4 class="cv-list-title">with the help of</h4>
                <ul class="cv-list-ul">
                    <li>Atom</li>
                    <li>Git</li>
                    <li>Gulp</li>
                    <li>Toggl</li>
                </ul>
                <ul class="cv-list-ul">
                    <li>Caniuse</li>
                    <li>Browserstack</li>
                    <li>Google Analytics</li>
                    <li>Mouseflow</li>
                </ul>
                <ul class="cv-list-ul">
                    <li>Sketch</li>
                    <li>Adobe Tools</li>
                    <li>Zeplin</li>
                    <li>Invision</li>
                </ul>
            </div>

            <div class="cv-list">
                <h4 class="cv-list-title">natural powers</h4>
                <ul class="cv-list-ul cv-list-ul--all">
                    <li>Daily exploration</li>
                    <li>Great retention</li>
                    <li><em>Less is more only when more is too much</em></li>
                </ul>
            </div>

        </div>
    </article>

    <?php // timeline ?>
    <article class="cv-article">
        <div class="cv-article-in">
            <div class="cv-article-header">
                <h3 class="cv-title">timeline</h3>
            </div>

            <div class="cv-list">
                <h4 class="cv-list-title">crossed paths with</h4>
                <dl class="cv-list-dl">
                    <dt><a href="https://www.farfetch.com" target="_blank" class="link">Farfetch</a></dt>
                    <dd class="cv-list-dl-date">since jan'17</dd>
                    <dd class="cv-list-dl-desc">ui developer</dd>

                    <dt><a href="https://www.zaask.pt" target="_blank" class="link">Zaask</a></dt>
                    <dd class="cv-list-dl-date">oct'15 - dez'16</dd>
                    <dd class="cv-list-dl-desc">front-end developer</dd>

                    <dt><a href="https://en.pure.dating/" target="_blank" class="link">Pure</a></dt>
                    <dd class="cv-list-dl-date">jul-sep'15</dd>
                    <dd class="cv-list-dl-desc">ui|ux designer</dd>
                </dl>

                <dl class="cv-list-dl">
                    <dt>Post-graduation <span class="at">@ <a href="http://www.belasartes.ulisboa.pt/" target="_blank" class="link">FBAUL</a></span></dt>
                    <dd class="cv-list-dl-date">2015'16</dd>
                    <dd class="cv-list-dl-desc">Digital Experience Design</dd>

                    <dt>Erasmus <span class="at">@ <a href="http://www.fba.up.pt/" target="_blank" class="link">FBAUP</a></span></dt>
                    <dd class="cv-list-dl-date">2014'15</dd>
                    <dd class="cv-list-dl-desc">Communication Design</dd>

                    <dt>Degree <span class="at">@ <a href="http://www.belasartes.ulisboa.pt/" target="_blank" class="link">FBAUL</a></span></dt>
                    <dd class="cv-list-dl-date">2012'15</dd>
                    <dd class="cv-list-dl-desc">Communication Design</dd>
                </dl>
            </div>

            <div class="cv-list">
                <h4 class="cv-list-title">shared bytes with</h4>
                <dl class="cv-list-dl">
                    <dt><a href="http://www.codeschool.com/" target="_blank" class="link">Code School</a></dt>
                    <dd class="cv-list-dl-desc">SCSS, JS, ES2015, jQuery, etc...</dd>
                </dl>

                <dl class="cv-list-dl">
                    <dt><a href="https://www.youtube.com/learncodeacademy/" target="_blank" class="link">LearnCode.academy</a></dt>
                    <dd class="cv-list-dl-desc">Modular JS, React, etc..</dd>
                </dl>
            </div>

        </div>
    </article>

    <?php // projects ?>
    <div class="cv-projs js-cvUnder">
        <div class="cv-article-header">
            <h3 class="cv-title">projects</h3>
        </div>

        <div class="cv-projs-proj">
            <span class="cv-projs-proj-sub js-cvProjSub"></span>
            <ul class="cv-projs-proj-ul js-cvProj">
                <li><a target="_blank" href="https://vimeo.com/176452854" class="cv-link" data-gaec="cvproj" data-sub="video game concept">N O X</a></li>
                <li><a target="_blank" href="https://vimeo.com/115483647" class="cv-link" data-gaec="cvproj" data-sub="3D animation">141205</a></li>
                <li><a target="_blank" href="https://sandrina-p.github.io/rede-expressos/" class="cv-link" data-gaec="cvproj" data-sub="web and app concept redesign">Rede Expressos</a></li>
                <li><a target="_blank" href="https://www.behance.net/gallery/26687261/Digital-Magazine-Dutch-experimental-typography" class="cv-link" data-gaec="cvproj" data-sub="digital magazine">DET</a></li>
                <li><a target="_blank" href="https://sandrina-p.github.io/portfolio-15/" class="cv-link" data-gaec="cvproj" data-sub="previous website">portfolio 15</a></li>
                <li><a target="_blank" href="https://sandrina-p.github.io/pistol-shrimp" class="cv-link" data-gaec="cvproj" data-sub="net label website">pistol shrimp</a></li>
                <li><a target="_blank" href="https://sandrina-p.github.io/moon/" class="cv-link" data-gaec="cvproj" data-sub="movie website">moon</a></li>
                <li><a target="_blank" href="http://carolina-machado.com/" target="_blank" class="cv-link" data-gaec="cvproj" data-sub="fashion website">carolina machado</a></li>
            </ul>
        </div>
    </div>

</section>


<div class="psst js-psst">
    <p class="psst-title">psst...</p>
    <p class="psst-parag"> Maybe now you want to talk about her.
        <br>I can tell you more about her projects.
        <br>What do you think?
    </p>
    <button type="button" name="true" class="chatPart-title js-botProjects" data-gaec='psst'>yh, sure</button>
    <button type="button" name="false" class="chatPart-title js-botTrigger" data-gaec='psst'>who are you?</button>
    <span class="js-scrolled"><!-- try me on mobile--></span>
</div>

<noscript>
    <div class="psst">
        <p class="psst-title">ಠ_ಥ</p>
        <p class="psst-parag">You came so far with that old browser.
            <br>Most of people don't care about users like you, but not Sandrina.
            <br>Ah yes, that's here name! Don't forget to talk about her and share me!
            <br><small><i>p.s. Ask your son or boss to install a better browser <span class="nowrap">¯\_(ツ)_/¯</span></i></small>
        </p>
    </div>
</noscript>
