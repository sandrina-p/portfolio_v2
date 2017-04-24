<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700" rel="stylesheet">
    <link rel="preload" href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet">

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

    <?php // inline the critical css to speed up DOM render
    echo $DEV
        ? '<link rel="stylesheet" href="src/critical.min.css">'
        : '<style>' . file_get_contents('src/critical.min.css') . '</style>';
    ?>

    <!--[if lt IE 9 || IE9]>
        <link rel="stylesheet" href="src/index.min.css">
    <![endif]-->

    <noscript>
        <link rel="stylesheet" href="src/index.min.css">
        <style>
            .noscript, .navCV, .chat, .js-psst { display:none!important; }
        </style>
    </noscript>
</head>
