var Projects = function() {
    var activeClass = 'js-active',
        chatContent = TalkChat.conversation,
        arrProjects = chatContent.practice.projects,
        projLimit = 7, // limit of projects on nav for each side
        initialProject = '', // if you want to open a specific project
        classbtnNav = '.projNav-btn',
        classProjSub = '.projCont-subtitle',
        classProjMedia = '.projCont-media',
        classProjRole = '.projCont-role',
        classProjDate = '.projCont-date',
        classProjTeam = '.projCont-team',
        classProjIntro = '.projCont-intro',
        classProjDetails = '.projCont-details',
        classProjLinks = '.projCont-links',
        classProjBotTip = '.bot-nav',
        classPivot = '.projNav-pivot',
        classProjLeft = '.projNav-left', // In case you, sandrina, forget it, it's needed -left and -right to smooth things out when a new button cames out
        classProjRight = '.projNav-right',

        mediaQHeight = 550,
        untilTablet = Util.untilTablet,
        wHeight = Util.wHeight,

        direction,
        $pivot, $projsLeft, $projsRight, $projActive, // nav variables
        $projSub, $projMedia, $projRole, $projDate, $projTeam, $projRole, $projIntro, $projDetails, $projLinks, $projBotTip, // getProjDomElements variables
        $newActive, fPos, $projDir, addProjNumb, isParentLeft, // onNavMoved variables
        estimateFinalWidth, projActiveWidth, pivotPos, projActivePos, transX, // alignPivot variables
        baffle0, baffle1, baffle2, baffle3, baffle4, baffle5, // baffle variables

        windowBotWidth = window.innerWidth*40/100,
        numbOfGestures = 0;
    projectsVisible = false, // prevent use of keyboard < > before opening projects
        gael = ''; // used to GA


    // ------ build nav and project DOM ------ //
    function buildProj() {
        var sub, role, date, team, title, more, botTip, elImgs, ElLinks,
            elProjNav = buildProjNav('left'),
            $ElProj =  $(`<div class='proj' id='projects'>
                            <div class='bot-nav'></div>
                            <div class='projNav'>
                                <div class='projNav-pivot'>
                                    <div class='projNav-left'>${elProjNav}</div>
                                    <div class='projNav-right'>${elProjNav}</div>
                                </div>
                            </div>

                            <div class='projCont'>
                                <div class='projCont-left'>`
                                    /* <p class='projCont-subtitle'>${sub}</p> */

                                    +`<div class='projCont-media'>
                                        <div class='Glidder'>${elImgs}</div>
                                    </div>
                                </div>

                                <div class='projCont-right'>
                                    <div class='projCont-links'>${ElLinks}</div>

                                    <div class='projCont-descript'>
                                        <p class='projCont-intro'>${title}</p>
                                        <p class='projCont-details'>${more}</p>
                                    </div>

                                    <div class='projCont-about'>
                                        <p class='projCont-role'>${role}</p>
                                        <p class='projCont-date'>${date}</p>
                                        <p class='projCont-team'>${team}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`);

        return $ElProj;
    }

    function buildProjNav() {
        var elProjNav = '';

        for (var i = 0, projName, nameSlug, projLength = arrProjects.length; i < projLength; i++) {
            projName = arrProjects[i];
            nameSlug = Util.stringSlugLower(projName);
            elProjNav += getElBtn(nameSlug, projName);
        }

        return elProjNav;
    }

    function getElBtn(nameSlug, projName) {
        return '<button type=\'button\' name=\''+nameSlug+'\' class=\'projNav-btn\' data-gaec=\'projNavClick\'>'+projName+'</button>';
    }

    function addProjNav(quantity) {
        var addProjects = '',
            nameSlug,
            projsIndexs = arrProjects.length - 1,
            projI =
                isParentLeft
                    ? arrProjects.indexOf($projsLeft.children(':first').text()) - 1
                    : arrProjects.indexOf($projsRight.children(':last').text()) + 1;


        if (isParentLeft) {

            for (var i = 0; i < quantity; i++) {
                if (arrProjects[projI]) {
                    projName = arrProjects[projI];
                } else {
                    projI = projsIndexs;
                    projName = arrProjects[projI];
                }
                nameSlug = Util.stringSlugLower(projName);
                addProjects = getElBtn(nameSlug, projName) + addProjects; // reverse order
                projI--;
            }

            $projsLeft.prepend(addProjects);

        } else {

            for (var i = 0; i < quantity; i++) {
                if (arrProjects[projI]) {
                    projName = arrProjects[projI];
                } else {
                    projI = 0;
                    projName = arrProjects[projI];
                }
                nameSlug = Util.stringSlugLower(projName);
                addProjects += getElBtn(nameSlug, projName);
                projI++;
            }

            $projsRight.append(addProjects);
        }
    }


    // ------ get project content ------ //

    function getProjDomElements() {
        // get all the projects placeholders once they are ready to be manipulated
        $projSub = $(classProjSub),
        $projMedia = $(classProjMedia),
        $projRole = $(classProjRole),
        $projDate = $(classProjDate),
        $projTeam = $(classProjTeam),
        $projRole = $(classProjRole),
        $projIntro = $(classProjIntro),
        $projDetails = $(classProjDetails),
        $projLinks = $(classProjLinks),
        $projBotTip = $(classProjBotTip),

        $pivot = $('.projNav-pivot'),
        $projsLeft = $('.projNav-left'), // In case you, sandrina, forget it, it's needed -left and -right to smooth things out when a new button cames out
        $projsRight = $('.projNav-right');
    }

    function getProjectImgs(imgArray) {
        var $glidder = $('<div class=\'Glidder\'></div>'),
            elImgs = '',
            newImg, imgRet,
            screenM = window.innerWidth >= 650,
            screenL = window.innerWidth >= 1250,
            { isRetina } = Util;

        function fetchRes(res) {
            if (res) {
                for (let i = 0, arr = imgArray.length; i < arr; i++) {
                    imgRet = imgArray[i].split('.');
                    imgRet.splice(1, 0, res);
                    imgRet.splice(2, 0, '.');
                    newImg = imgRet.join('');
                    elImgs += '<img src=\''+newImg+'\'>';
                }
                return elImgs;
            }

            for (let i = 0, arr = imgArray.length; i < arr; i++) {
                elImgs += '<img src=\''+imgArray[i]+'\'>';
            }

            return elImgs;
        }

        // check screen resolution to fetch the best images

        if (screenM && !screenL) { // ~ tablet
            // if ~tablet retina
            elImgs = isRetina ? fetchRes('@3x') : fetchRes('@2x');

        } else if (screenL) { // ~ desktop
            elImgs = fetchRes('@3x');

        } else {  // ~ mobile
            // if ~mobile retina
            elImgs = isRetina ? fetchRes('@2x') : fetchRes();
        }

        return $glidder.append(elImgs);
    }

    function getProjectLinks(links) {
        var elLinks = '';
        for (i = 0; i < links.length; i++) {
            (links[i][1] == 'available soon')
                ? elLinks += '<div class=\'projCont-links-option\'><p class=\'btnCheck\'><i class=\'fa fa-'+links[i][2]+'\'></i>'+links[i][1]+'</p></div>'
                : elLinks += '<div class=\'projCont-links-option\'><a href=\''+links[i][0]+'\' target=\'_blank\' class=\'btnCheck\'><i class=\'fa fa-'+links[i][2]+'\'></i>'+links[i][1]+'</a></div>';
        }
        return elLinks;
    }

    function getProjectData(projName) {
        // FIXME take out var from here.
        var projSlug = Util.stringSlugLower(projName),
            projData = chatContent.practice[projName],

            elImgs = getProjectImgs(projData.img),
            elLinks = getProjectLinks(projData.links);

        $projMedia.html(elImgs);
        $projLinks.html(elLinks);
        $projTeam.html(projData.team);

        baffleSub.reveal(400, 150);
        baffleIntro.reveal(400, 0);
        baffleRole.reveal(400, 70);
        baffleDate.reveal(400, 250);
        baffleDet.reveal(400, 300);

        // REVIEW is there any way to create a loop/for on these?
        baffleSub.text(currentText => projData.sub);
        baffleIntro.text(currentText => projData.capt);
        baffleRole.text(currentText => projData.role);
        baffleDate.text(currentText => projData.date);
        baffleDet.text(currentText => projData.more);

        $('img').on('error', function () {
            $(this).hide(); // prevent displaying 404 images
        });


        setTimeout(function () {
            imgParallax();
        }, 250);

    }

    function imgParallax() {
        // REVIEW this could be much better

        var windowH =  window.innerHeight,
            elementOffset = $projMedia.offset().top,
            $bg1 = $('.js-cvBg'),
            scrollTop,
            distance,
            topperc,
            topfinal;

        $(document).scroll(function() {

            scrollTop = $(window).scrollTop();
            distance = elementOffset - scrollTop;
            topperc = 100 - distance * 100 / windowH;
            topfinal = ((topperc * 36 / 100 * -1 + 10) / 1.5 ).toFixed(2);

            if (topfinal < 0) {

                if (!untilTablet) {
                    $projMedia.find('img').css({
                        'transform' : 'translateY('+topfinal+'%)'
                    });
                }

                // TODO this shoudn't be here...

                $bg1.addClass('is-js').css({
                    'transform' : 'translateY('+topfinal*2+'%)'
                });
            }

        });

    }


    // ------ deal with nav behavior ------ //

    function updateVarsOnNav(condition) {
        if (condition) {
            $projDir = $projsLeft,
            fPos = 'last';
        } else {
            $projDir = $projsRight,
            fPos = 'first';
        }

        // check how many projects should be added to the nav
        addProjNumb =
            isParentLeft
                ? projLimit - $projActive.prevAll().length
                : projLimit - $projActive.nextAll().length;
    }

    function alignPivot($newProject) {
        console.log('pivot aligned');
        $newProject = $newProject || $projActive,
        pivotX = $pivot.offset().left,
        projActiveX = $newProject.offset().left,
        firstProjectShown = true;

        if (estimateFinalWidth) {
            // is this a good identation? I think it's beautiful :3
            projActiveWidth =
                direction == 'right'
                    ? $newProject.outerWidth() * 0.49
                    : $newProject.outerWidth() * 1.49;
        } else {
            projActiveWidth = $newProject.outerWidth();
        }

        transX =
            untilTablet
                ? 24 + pivotX - projActiveX
                : windowBotWidth + pivotX - projActiveX - projActiveWidth; // i think i'm overcomplicating.

        $pivot.css({'transform':'translateX('+ (transX) + 'px)'});
    }

    function showNewProject() {
        baffleProj();
        getProjectData($newActive.text());

        Hashs.set( $newActive.text() );

        $projActive.removeClass(activeClass).removeAttr('disabled');

        // remove or add buttons on nav to mantain the balance on the DOM.
        if (addProjNumb > 0) {
            addProjNav(addProjNumb);
        } else {
            isParentLeft
                ? $projsLeft.children().first().remove()
                : $projsRight.children().last().remove();
        }

        setTimeout(function () {
            estimateFinalWidth = !isParentLeft || untilTablet;  // calculate final +/- width before it happens - FIXME this is not the best solution, but it's the better i could get
            $newActive.addClass(activeClass).prop('disabled', true);
            $projActive = $newActive;
            alignPivot();

            // align Pivot again to pixel perfect
            if (estimateFinalWidth) {
                setTimeout(function () {
                    estimateFinalWidth = false;
                    alignPivot();
                }, 150);
            }
        }, 150);
    }


    // ------ util functions ------ //

    function changeBotNavText(text) {
        $(classProjBotTip).addClass('.jsLoading');
        setTimeout(() => $(classProjBotTip).html(text), 150);
        setTimeout(() => $(classProjBotTip).removeClass('.jsLoading'), 300);
    }

    function checkIsParentLeft() {
        return $newActive.closest('.projNav-left').length == 1;
    }

    function baffleProj() {
        var arrBuffle = [classProjSub, classProjIntro, classProjRole, classProjDate, classProjTeam, classProjDetails],
            arrBuffleLength = arrBuffle.length;

        baffleSub = baffle(arrBuffle[0]),
        baffleIntro = baffle(arrBuffle[1]),
        baffleRole = baffle(arrBuffle[2]),
        baffleDate = baffle(arrBuffle[3]),
        baffleDet = baffle(arrBuffle[5]);

        // TODO is there any way to create a loop/for on these?
        baffleSub.start();
        baffleIntro.start();
        baffleRole.start();
        baffleDate.start();
        baffleDet.start();
    }



    // ------ Public ------ //

    function setInitialProject(project) {
        if (typeof project == 'string') {
            return initialProject = project;
        } else {
            console.log('it has to be a string');
        }
    }

    function startIt(section) {
        var elProj = buildProj(),
            projName = initialProject || arrProjects[ Util.randomNumb(arrProjects.length - 1) + 1 ];

        $('#'+section).append(elProj);
        $('#projects').slideDown();
        getProjDomElements();
        baffleProj();

        setTimeout(function () {
            var projNameSlugged = Util.stringSlugLower(projName);
            getProjectData(projName);

            $(`.projNav-btn[name='${projNameSlugged}']`)
                .first()
                .addClass(activeClass)
                .attr('disabled', true);

            $projActive = $('button.'+activeClass);
            alignPivot();

            setTimeout(() => alignPivot(), 150); // align Pivot again to pixel perfect
        }, 400);

        if (initialProject) {
            $('body').animate({ scrollTop: $('#projects').offset().top - 60 }, 1500, 'swing');
            initialProject = false;
        }

        projectsVisible = true;
        $('.js-cvUnder').remove(); // remove projects on CV
    }

    function onNavProjClick($btn) {
        $newActive = $btn;
        isParentLeft = checkIsParentLeft();

        // FIXME
        // bug : if the current btn and new btn are not in the same parent, it's a false true
        direction =
            $newActive.prevAll($projActive).length
                ? 'right'
                : 'left';

        if(numbOfGestures == 0) {
            Util.hasTouchEvents
                ? changeBotNavText(chatContent.behaviour.navProjMob)
                : changeBotNavText(chatContent.behaviour.navProjDesk);
        }

        updateVarsOnNav(isParentLeft);
        showNewProject();
    }

    function onNavMoved(direction) {
        $newActive =
            direction == 'left'
                ? $projActive.prev()
                : $projActive.next();

        isParentLeft = checkIsParentLeft();

        updateVarsOnNav(direction == 'left');

        if ($newActive.length == 0) {
            $newActive = $projDir.children(':'+fPos);
        }

        showNewProject();

        switch (numbOfGestures) {
        case 2:
            changeBotNavText('that\'s it. you\'re a natural');
            break;
        case 20:
            changeBotNavText('you love loops don\'t you?');
            break;
        case 40:
            changeBotNavText('my head\'s spinning.');
            break;
        case 80:
            changeBotNavText('you got the idea.');
            break;
        case 120:
            changeBotNavText('._.');
            break;
        case 200:
            changeBotNavText('such a kid ¯\\_(ツ)_/¯');
            break;
        default:
            changeBotNavText('');
            break;
        }

        numbOfGestures ++;

        (function toGA() {
            var ec = 'projNavMoved';
            inm = $newActive.text().replace(/[^a-zA-Z]/g, '');
            ea = inm; // action
            gael += inm+'|';

            GAcustom.sendToGA(`&ec=${ec}&in=${inm}&ea=${ea}&el=${gael}`);
        })();
    }


    // ------ DOM Interactions ------ //
    if (Util.hasTouchEvents) {
        $(document).on('swipeleft', '#projects', function() {
            onNavMoved('right');
        });

        $(document).on('swiperight', '#projects', function() {
            onNavMoved('left');
        });
    }

    $(document).keydown(function(e) {
        if (projectsVisible) {
            if (e.keyCode == 37) { // [ < ]
                onNavMoved('left');
            } else if (e.keyCode == 39) { // [ > ]
                onNavMoved('right');
            }
        }

    });

    $(document).on('click', classbtnNav, function(e){
        e.stopPropagation(); // prevent scroll to top
        onNavProjClick($(this));
    });


    return {
        setInitialProject,
        startIt,
        onNavProjClick,
        onNavMoved
    };
}();


var cvProjects = function(){

    var $cvProjUl,
        $cvProjects,
        $sub,
        ArrProj,
        maxChild,
        projI = 0,
        iR,
        keepLooping = false, // triggered _onweb.js
        $child; // var on hightlightProject();


    function hightlightProject(child) {

        if(keepLooping) { // active next project and call itself with next child index,
            $child = $(child);
            removeActive();
            $child.addClass('active');
            setNewSub($child.data('sub'));

            setTimeout(function () {
                iR = Util.randomNumb(ArrProj);
                hightlightProject(ArrProj[iR]);
            }, 2500);

        } else { // otherwise call () itself again in 1000ms;
            setTimeout(() => hightlightProject(child), 1000);
        }
    }

    function removeActive() {
        $cvProjects.removeClass('active');
    }

    function setNewSub(text) {
        $sub.html(`<span>${text}<span>`);
    }


    $(function cvProjects(){
        (function updateVars() {
            $cvProjUl = $('.js-cvProj');
            $cvProjects = $cvProjUl.find('.cv-link');
            $sub = $('.js-cvProjSub');
            ArrProj = $cvProjects.toArray();
            maxChild = ArrProj.length;
        })();

        hightlightProject(ArrProj[projI]);

        $cvProjects.on('mouseenter focus', function(){
            removeActive();
            setNewSub($(this).data('sub'));
            setProjLoop(false);
        }).on('mouseleave', function(){
            setProjLoop(true);
        });

        $cvProjects.on('click', function(e){
            e.preventDefault(); // whoever doesn't have js, go to original page.
            Projects.setInitialProject($(this).text());
            $('#btn-pr').trigger('click');
        });
    });



    // ------ publicCmd  ------ //
    function setProjLoop(status = false) {
        keepLooping = status;
    }

    return {
        setProjLoop
    };

}();
