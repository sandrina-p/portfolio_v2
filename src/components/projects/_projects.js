/* global
    TalkChat:false,
    Util: false,
    Projects: false,
    Hashs: false,
    baffle: false,
    GAcustom: false,
    Swipped: false,
*/
/* exported Projects */

var Projects = function() {
    var activeClass = 'is-active',
        chatContent = TalkChat.conversation,
        arrProjects = chatContent.practice.projects,
        projLimit = 7, // min limit of projects on nav for each side
        initialProject = '', // start projects with a specific project

        classProjMedia = '.projCont-media',
        classProjSub = '.projCont-subtitle',
        classProjTitle = '.js-projCont-title',
        classProjLinks = '.projCont-links',
        classProjIntro = '.projCont-intro',
        classProjDetails = '.projCont-details',
        classProjRole = '.projCont-role',
        classProjDate = '.projCont-date',
        classProjTeam = '.projCont-team',
        classProjBotTip = '.bot-nav',
        classPivot = '.projNav-pivot',

        // -left and -right are needed to smooth nav transitions when a new button is added.
        classProjLeft = '.projNav-left',
        classProjRight = '.projNav-right',

        untilTablet = Util.untilTablet,

        direction,

        $pivot, $projsLeft, $projsRight, $projActive, // nav variables
        projData, $projTitle, $projMedia, $projTeam, $projLinks, $projBotTip, // getProjDomElements variables
        $newActive, fPos, $projDir, addProjNumb, isParentLeft, // moveNavTo variables
        estimateFinalWidth, projActiveWidth, pivotX, projActiveX, transX, // alignPivot variables
        baffleSub, baffleIntro, baffleRole, baffleDate, baffleDetails, // baffle variables

        windowBotWidth = window.innerWidth*40/100,
        numbOfGestures = 0,
        projectsVisible = false, // prevent use of keyboard < > before opening projects
        gael = ''; // used to GA


    // ------ build nav and project DOM ------ //
    function buildProj() {
        var elNav = buildNav();
        var elNavHidden = buildNav(true);

        return $('<div class="proj" id="projects">'
            +'<div class="bot-nav" aria-hidden="true"></div>'

            +'<div class="projNav">'
                +'<div class="projNav-pivot">'
                    +'<nav class="projNav-left" aria-labelledby="a11y-projNav">'
                        // W3C will not say "Untitled Nav" and at the same time Screen Readers will read correctly Nav without reading the h4 ;)
                        +'<h4 id="a11y-projNav" class="sr-only" aria-hidden="true">Projects in a carousel</h4>'
                        + elNav
                    +'</nav>'
                    +`<div class="projNav-right" aria-hidden="true">${elNavHidden}</div>`
                +'</div>'
            +'</div>'

            +'<article id="a11y-projCont" class="projCont">'
                +'<h4 class="sr-only js-projCont-title" aria-live="polite" aria-atomic="true" tabindex="0"> </h4>'
                +'<div class="projCont-left">'
                    +'<div class="projCont-media" aria-hidden="true">'
                        +'<div class="Glidder"> </div>'
                    +'</div>'
                +'</div>'

                +'<div class="projCont-right">'
                    +'<div class="projCont-links"></div>'
                    +'<div class="projCont-descript">'
                        +'<h5 class="projCont-intro"> </h5>'
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

    function buildNav(ariaHidden) {
        var elProjNav = '',
            projName,
            nameSlug;

        for (var i = 0, l = arrProjects.length; i < l; i++) {
            projName = arrProjects[i];
            nameSlug = Util.stringSlugLower(projName);
            elProjNav += getElBtn(nameSlug, projName, ariaHidden);
        }

        return elProjNav;
    }

    function addProjNav(numberOfProj) {
        var navProjects = '',
            nameSlug,
            projName = '',
            projLastIndex = arrProjects.length - 1,
            projI = isParentLeft
                ? arrProjects.indexOf($projsLeft.children(':first').text()) - 1
                : arrProjects.indexOf($projsRight.children(':last').text()) + 1;

        if (isParentLeft) {
            for (let i = 0; i < numberOfProj; i++) {
                if (arrProjects[projI]) {
                    projName = arrProjects[projI];
                } else {
                    projI = projLastIndex;
                    projName = arrProjects[projI];
                }
                nameSlug = Util.stringSlugLower(projName);
                navProjects = getElBtn(nameSlug, projName, true) + navProjects; // reverse order
                projI--;
            }

            $projsLeft.prepend(navProjects);

        } else {
            for (let i = 0; i < numberOfProj; i++) {
                if (arrProjects[projI]) {
                    projName = arrProjects[projI];
                } else {
                    projI = 0;
                    projName = arrProjects[projI];
                }
                nameSlug = Util.stringSlugLower(projName);
                navProjects += getElBtn(nameSlug, projName, true);
                projI++;
            }

            $projsRight.append(navProjects);
        }
    }

    function getElBtn(nameSlug, projName, ariaHidden) {
        if (ariaHidden) {
            return `<button type="button" name="${nameSlug}" class="projNav-btn" data-gaec="projNavClick" aria-hidden="true" tabindex="-1">${projName}</button>`;
        }
        return `<button type="button" name="${nameSlug}" class="projNav-btn" data-gaec="projNavClick" aria-expanded="false" aria-controls="a11y-projCont">${projName}</button>`;
    }


    // ------ get project content ------ //
    function getProjDomElements() {
        // get all the projects placeholders once they are on the DOM
        $projsLeft = $(classProjLeft);
        $projsRight = $(classProjRight);
        $pivot = $(classPivot);
        $projBotTip = $(classProjBotTip);

        $projTitle = $(classProjTitle);
        $projMedia = $(classProjMedia);
        $projTeam = $(classProjTeam);
        $projLinks = $(classProjLinks);
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
                                +links[i][1]
                            +'</a>'
                        +'</div>';
        }
        return elLinks;
    }

    function revealProject(projName) {
        projData = chatContent.practice[projName];

        $projTitle.text(projName);
        $projTitle.focus();
        $projMedia.html(getImages(projData.img));
        $projLinks.html(getProjectLinks(projData.links));
        $projTeam.html(projData.team);

        baffleSub.reveal(400, 150);
        baffleIntro.reveal(400, 0);
        baffleRole.reveal(400, 70);
        baffleDate.reveal(400, 250);
        baffleDetails.reveal(400, 300);

        /* eslint-disable no-unused-vars */
        baffleSub.text(currentText => projData.sub);
        baffleIntro.text(currentText => projData.capt);
        baffleRole.text(currentText => projData.role);
        baffleDate.text(currentText => projData.date);
        baffleDetails.text(currentText => projData.more);
        /* eslint-enable no-unused-vars */


        $('img').on('error', function () {
            $(this).remove();
        });

        setTimeout(function () {
            imgParallax();
        }, 250);

    }

    function imgParallax() {
        const windowH =  window.innerHeight;
        const safeMargin = 36;

        let elementOffset = $projMedia.offset().top,
            scrollTop,
            distanceFromTopScreen,
            distanceInPercentage,
            translateY;

        $(document).scroll(function() {
            scrollTop = $(window).scrollTop();
            distanceFromTopScreen = elementOffset - scrollTop;
            distanceInPercentage = 100 - distanceFromTopScreen * 100 / windowH;

            translateY = ((distanceInPercentage * safeMargin / 100 * -1 + 10) / 1.5 ).toFixed(2);

            if (translateY < 0) {
                if (!untilTablet) {
                    // its faster to apply the transform on each image than its parent because images have animations
                    $projMedia.find('img').each(function(){
                        $(this)[0].style.transform = `translateY(${translateY}%)`;
                    });
                }
            }
        });

    }


    // ------ deal with nav behavior ------ //

    function updateVarsOnNav(condition) {
        if (condition) {
            $projDir = $projsLeft;
            fPos = 'last';
        } else {
            $projDir = $projsRight;
            fPos = 'first';
        }

        // check how many projects should be added to the nav
        addProjNumb = isParentLeft ? projLimit - $projActive.prevAll().length : projLimit - $projActive.nextAll().length;
    }

    function alignPivot($newProject) {
        $newProject = $newProject || $projActive;
        pivotX = $pivot.offset().left;
        projActiveX = $newProject.offset().left;

        if (estimateFinalWidth) {
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
                : windowBotWidth + pivotX - projActiveX - projActiveWidth; // pixel perfect

        $pivot[0].style.transform = `translateX(${transX}px)`;
        console.log('pivot aligned');
    }

    function showNewProject() {
        const newActiveText = $newActive.text();

        baffleProj();
        revealProject(newActiveText);

        Hashs.set(newActiveText);

        $projActive.removeClass(activeClass).attr('aria-expanded', false);

        if (addProjNumb > 0) {
            addProjNav(addProjNumb);
        }

        // give ~ time to CSS transition ends
        setTimeout(function () {
            // calculate ~ final width before it happens - might not be the best solution, but it's the best i could do.
            estimateFinalWidth = !isParentLeft || untilTablet;

            $newActive.addClass(activeClass).attr('aria-expanded', true);
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
        setTimeout(function() { $projBotTip.html(text); }, 150);
        setTimeout(function() { $projBotTip.removeClass('.jsLoading'); }, 300);
    }

    function checkIsParentLeft() {
        return $newActive.closest('.projNav-left').length == 1;
    }

    function baffleProj() {
        baffleSub = baffle(classProjSub),
        baffleIntro = baffle(classProjIntro),
        baffleRole = baffle(classProjRole),
        baffleDate = baffle(classProjDate),
        baffleDetails = baffle(classProjDetails);

        baffleSub.start();
        baffleIntro.start();
        baffleRole.start();
        baffleDate.start();
        baffleDetails.start();
    }



    // ------ Public ------ //

    function setInitialProject(project) {
        if (typeof project === 'string') {
            return initialProject = project;
        }
        return false;
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
            revealProject(projName);

            $projActive = $(`.projNav-btn[name='${projNameSlugged}']`).first();

            $projActive.addClass(activeClass).attr('aria-expanded', true);

            alignPivot();

            setTimeout(() => alignPivot(), 150); // align Pivot again to pixel perfect
        }, 400);

        initialProject = false;
        projectsVisible = true;
        $('.js-cvUnder').remove(); // remove projects from CV section
    }

    function onNavProjClick($btn) {
        $newActive = $btn;

        // FIXME | BUG - if the current btn and new btn are not in the same parent, it's a false true
        direction =
            $newActive.prevAll($projActive).length
                ? 'right'
                : 'left';

        if (numbOfGestures === 0) {
            Util.hasTouchEvents
                ? changeBotNavText(chatContent.behaviour.navProjMob)
                : changeBotNavText(chatContent.behaviour.navProjDesk);
        }

        updateVarsOnNav(checkIsParentLeft());
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
            changeBotNavText("that's it. you're a natural");
            break;
        case 20:
            changeBotNavText("you love loops don't you?");
            break;
        case 40:
            changeBotNavText("my head's spinning.");
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

        if ($(this).hasClass(activeClass)) {
            $projTitle.focus();
            return true;
        }
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
            e.preventDefault(); // whoever doesn't have js, at least go to the original page
            Projects.setInitialProject($(this).text());
            $('.js-NavItem[data-section="practice"]').trigger('click');
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
