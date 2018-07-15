<?php $DEV = false; ?>

<!DOCTYPE html>
<html lang="en">

<?php include 'views/head.php';?>

<body>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-70069700-3', 'auto');
        ga('send', 'pageview');
    </script>

    <?php include 'views/header.php';?>

    <main>
        <?php include 'views/chat.php';?>

        <?php include 'views/cv.php';?>

        <?php include 'views/cli.php';?>
    </main>

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

    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script defer src="src/data.min.js" charset="utf-8"></script>
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

    <script>
    console.warn('%cPsst... yes, you!', 'color: #00e8e8; size: 15px; font-size: 1.5rem; font-weight: 600');
    console.warn(
        `
%cDon't judge Sandrina's technical skills only based on this code.
I was built during 2016 and a lot she's been learning since those times.
Module approach, Unit Testing, TDD, Type Checkers, Linters, etc...
All those tools and methods to have a more readable and solid code.

Still, I'm very accessible and that's something most of the developers (and designers) forget about!

Thank you and let's the debug begin, shall we? ʘ‿ʘ
        `,
        'font-size: 0.8rem; line-height: 1.5'
    );
    </script>
</body>

</html>
