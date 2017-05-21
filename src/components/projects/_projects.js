/* global
    TalkChat:false,
    Util: false,
    Projects: false,
    Hashs: false,
*/
/* exported Projects */

var Projects = function() {
    var activeClass = 'js-active',
        chatContent = TalkChat.conversation,
        arrProjects = chatContent.practice.projects,
        projLimit = 7, // min limit of projects on nav for each side
        initialProject = '', // start projects with a specific project

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

        // -left and -right are needed to smooth nav transitions when a new button is added.
        classProjLeft = '.projNav-left',
        classProjRight = '.projNav-right',

        untilTablet = Util.untilTablet,

        direction,
        $pivot, $projsLeft, $projsRight, $projActive, // nav variables
        $projMedia, $projDate, $projTeam, $projRole, $projIntro, $projDetails, $projLinks, $projBotTip, // getProjDomElements variables
        $newActive, fPos, $projDir, addProjNumb, isParentLeft, // moveNavTo variables
        estimateFinalWidth, projActiveWidth, pivotPos, projActivePos, transX, // alignPivot variables
        baffle0, baffle1, baffle2, baffle3, baffle4, baffle5, // baffle variables

        windowBotWidth = window.innerWidth*40/100,
        numbOfGestures = 0,
        projectsVisible = false, // prevent use of keyboard < > before opening projects
        gael = ''; // used to GA


    // ------ build nav and project DOM ------ //
    function buildProj() {
        var elNav = buildNav();

        return $('<div class="proj" id="projects">'
            +'<div class="bot-nav"></div>'

            +'<div class="projNav">'
                +'<div class="projNav-pivot">'
                    +`<div class="projNav-left">${elNav}</div>`
                    +`<div class="projNav-right">${elNav}</div>`
                +'</div>'
            +'</div>'

            +'<div class="projCont">'
                +'<div class="projCont-left">'
                    +'<div class="projCont-media">'
                        +'<div class="Glidder"> </div>'
                    +'</div>'
                +'</div>'

                +'<div class="projCont-right">'
                    +'<div class="projCont-links"></div>'
                    +'<div class="projCont-descript">'
                        +'<p class="projCont-intro"> </p>'
                        +'<p class="projCont-details"> </p>'
                    +'</div>'
                    +'<div class="projCont-about">'
                        +'<p class="projCont-role"> </p>'
                        +'<p class="projCont-date"> </p>'
                        +'<p class="projCont-team"> </p>'
                    +'</div>'
                +'</div>'
            +'</div>'
        +'</div>');
    }

    function buildNav() {
        var elProjNav = '';

        for (var i = 0, projName, nameSlug, projLength = arrProjects.length; i < projLength; i++) {
            projName = arrProjects[i];
            nameSlug = Util.stringSlugLower(projName);
            elProjNav += getElBtn(nameSlug, projName);
        }

        return elProjNav;
    }

    function getElBtn(nameSlug, projName) {
        return `<button type="button" name="${nameSlug}" class="projNav-btn" data-gaec="projNavClick">${projName}</button>`;
    }

    function addProjNav(numberOfProj) {
        var navProjects = '',
            nameSlug,
            projName = '',
            projsIndexs = arrProjects.length - 1,
            projI = isParentLeft
                ? arrProjects.indexOf($projsLeft.children(':first').text()) - 1
                : arrProjects.indexOf($projsRight.children(':last').text()) + 1;


        if (isParentLeft) {
            for (let i = 0; i < numberOfProj; i++) {
                if (arrProjects[projI]) {
                    projName = arrProjects[projI];
                } else {
                    projI = projsIndexs;
                    projName = arrProjects[projI];
                }
                nameSlug = Util.stringSlugLower(projName);
                navProjects = getElBtn(nameSlug, projName) + navProjects; // reverse order
                projI--;
            }

        } else {
            for (let i = 0; i < numberOfProj; i++) {
                if (arrProjects[projI]) {
                    projName = arrProjects[projI];
                } else {
                    projI = 0;
                    projName = arrProjects[projI];
                }
                nameSlug = Util.stringSlugLower(projName);
                navProjects += getElBtn(nameSlug, projName);
                projI++;
            }
        }

        $projsLeft.prepend(navProjects);
    }


    // ------ get project content ------ //

    function getProjDomElements() {
        // get all the projects placeholders once they are on the DOM
        $projMedia = $(classProjMedia),
        $projTeam = $(classProjTeam),
        $projRole = $(classProjRole),
        $projIntro = $(classProjIntro),
        $projDetails = $(classProjDetails),
        $projLinks = $(classProjLinks),
        $projBotTip = $(classProjBotTip),

        $pivot = $(classPivot),

        $projsLeft = $(classProjLeft),
        $projsRight = $(classProjRight);
    }

    function getImages(imgArray) {
        var elImgs = '',
            newImg,
            imgRet,
            screenM = window.innerWidth >= 650, // TODO: add support to convert REM in PX
            screenL = window.innerWidth >= 1250, // TODO: add support to convert REM in PX
            { isRetina } = Util;

        if (screenL) {
            elImgs = fetchRes('@3x');
        } else if (screenM) {
            elImgs = isRetina ? fetchRes('@3x') : fetchRes('@2x');
        } else {
            elImgs = isRetina ? fetchRes('@2x') : fetchRes();
        }

        return $('<div/>', { 'class': 'Glidder'}).html(elImgs);

        function fetchRes(res) {
            if (res) {
                for (let i = 0, arr = imgArray.length; i < arr; i++) {
                    imgRet = imgArray[i].split('.');
                    imgRet.splice(1, 0, res);
                    imgRet.splice(2, 0, '.');
                    newImg = imgRet.join('');
                    elImgs += `<img src="${newImg}">`;
                }
            } else {
                for (let i = 0, arr = imgArray.length; i < arr; i++) {
                    elImgs += `<img src="${imgArray[i]}">`;
                }
            }

            return elImgs;
        }
    }

    function getProjectLinks(links) {
        var elLinks = '';
        for (let i = 0, l = links.length; i < l; i++) {
            elLinks += '<div class="projCont-links-option">'
                            +`<a href="${links[i][0]}" target="_blank" class="btnCheck">`
                                +`<i class="fa fa-${links[i][2]}"></i>${links[i][1]}`
                            +'</a>'
                        +'</div>';
        }
        return elLinks;
    }

    function getProjectData(projName) {
        // FIXME take out var from here.
        var projSlug = Util.stringSlugLower(projName),
            projData = chatContent.practice[projName],

            elLinks = getProjectLinks(projData.links);

        $projMedia.html(getImages(projData.img));
        $projLinks.html(elLinks);
        $projTeam.html(projData.team);

        baffleSub.reveal(400, 150);
        baffleIntro.reveal(400, 0);
        baffleRole.reveal(400, 70);
        baffleDate.reveal(400, 250);
        baffleDetails.reveal(400, 300);

        // REVIEW is there any way to create a loop/for on these?
        baffleSub.text(currentText => projData.sub);
        baffleIntro.text(currentText => projData.capt);
        baffleRole.text(currentText => projData.role);
        baffleDate.text(currentText => projData.date);
        baffleDetails.text(currentText => projData.more);

        $('img').on('error', function () {
            $(this).remove(); // prevent displaying 404 images
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
        $projBotTip.addClass('.jsLoading');
        setTimeout(() => $projBotTip.html(text), 150);
        setTimeout(() => $projBotTip.removeClass('.jsLoading'), 300);
    }

    function checkIsParentLeft() {
        return $newActive.closest('.projNav-left').length == 1;
    }

    function baffleProj() {
        var arrBuffle = [classProjSub, classProjIntro, classProjRole, classProjDate, classProjTeam, classProjDetails],
            arrBuffleLength = arrBuffle.length;

        baffleSub = baffle(classProjSub),
        baffleIntro = baffle(classProjIntro),
        baffleRole = baffle(classProjRole),
        baffleDate = baffle(classProjDate),
        baffleDetails = baffle(classProjDetails);

        // TODO is there any way to create a loop/for on these?
        baffleSub.start();
        baffleIntro.start();
        baffleRole.start();
        baffleDate.start();
        baffleDetails.start();
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
        listenForSwipes();
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

    function moveNavTo(direction) {
        console.log('moveNavTo()', direction);

        if (direction === 'left') {
            $newActive = $projActive.prev();
        } else if (direction === 'right') {
            $newActive = $projActive.next();
        } else {
            return false;
        }

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
            var inm = $newActive.text().replace(/[^a-zA-Z]/g, '');
            var ea = inm; // action
            gael += inm+'|';

            GAcustom.sendToGA(`&ec=${ec}&in=${inm}&ea=${ea}&el=${gael}`);
        })();
    }


    // ------ DOM Interactions ------ //
    function listenForSwipes() {
        if (Util.hasTouchEvents) {
            var elProjects = document.getElementById('projects');

            console.log(elProjects);

            Swipped.right(elProjects, moveNavTo, 'left');
            Swipped.left(elProjects, moveNavTo, 'right');
        }
    }

    $(document).keydown(function(e) {
        if (projectsVisible) {
            if (e.keyCode == 37) { // [ < ]
                moveNavTo('left');
            } else if (e.keyCode == 39) { // [ > ]
                moveNavTo('right');
            }
        }

    });

    $(document).on('click', '.projNav-btn', function(e){
        e.stopPropagation(); // prevent scroll to top
        onNavProjClick($(this));
    });


    return {
        setInitialProject,
        startIt,
        onNavProjClick,
        moveNavTo
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
