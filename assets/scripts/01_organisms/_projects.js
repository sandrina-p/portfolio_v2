var Projects = function() {
    var activeClass = "js-active",
        chatContent = TalkChat.conversation,
        arrProjects = chatContent.practice.projects,
        direction,
        projLimit = 7,

        classProjSub = ".projCont-subtitle",
        classProjMedia = ".projCont-media",
        classProjRole = ".projCont-role",
        classProjDate = ".projCont-date",
        classProjIntro = ".projCont-intro",
        classProjDetails = ".projCont-details",
        classProjLinks = ".projCont-links",
        classProjBotTip = ".bot-nav",
        classPivot = ".projNav-pivot",
        classProjLeft = ".projNav-left", //In case you, sandrina, forget it, it's needed -left and -right to smooth things out when a new button cames out
        classProjRight = ".projNav-right",

        mediaQHeight = 550,
        untilTablet = UtilFuncs.untilTablet,
        wHeight,

        $pivot, $projsLeft, $projsRight, $projActive, // ???() variables
        $projSub, $projMedia, $projRole, $projDate, $projIntro, $projDetails, $projLinks, $projBotTip, // getProjDomElements variables
        $newActive, fPos, $projDir, addProjNumb, isParentLeft, //onNavMoved variables
        estimateFinalWidth, projActiveWidth, pivotPos, projActivePos, transX, //alignPivot variables
        baffle0, baffle1, baffle2, baffle3, baffle4, //baffle variables

        windowBotWidth = window.innerWidth*40/100,
        numbOfGestures = 0
        projectsVisible = false,
        gael = ""; //google analytics order of projects viewed


    // ------ build nav and project DOM ------ //
    function buildProj() {
        var sub, role, date, title, more, botTip, elImgs, ElLinks,
            elProjNav = buildProjNav('left'),
            $ElProj =  $(`<div class='proj' id='projects'>
                            <div class='bot-nav'></div>
                            <div class='projNav'>
                                <div class='projNav-pivot'>
                                    <div class='projNav-left'>
                                        ${elProjNav}
                                    </div>
                                    <div class='projNav-right'>
                                        ${elProjNav}
                                    </div>
                                </div>
                            </div>

                            <div class='projCont'>
                                <div class='projCont-left'>
                                    <p class='projCont-subtitle'>${sub}</p>

                                    <div class='projCont-media'>
                                        <div class='Glidder'>
                                            ${elImgs}
                                        </div>
                                    </div>

                                    <div class='projCont-about'>
                                        <p class='projCont-role'>${role}</p>
                                        <p class='projCont-date'>${date}</p>
                                    </div>
                                </div>

                                <div class='projCont-right'>
                                    <div class='projCont-descript'>
                                        <p class='projCont-intro'>${title}</p>
                                        <div class='projCont-links'>
                                            ${ElLinks}
                                        </div>
                                        <p class='projCont-details'>${more}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`);

        return $ElProj;
    }

    function buildProjNav() {
        var elProjNav = "";

        for (var i = 0, projName, nameSlug, projLength = arrProjects.length; i < projLength; i++) {
            projName = arrProjects[i];
            nameSlug = UtilFuncs.stringSlugLower(projName);
            elProjNav += getElBtn(nameSlug, projName);
        }

        return elProjNav;
    }

    function getElBtn(nameSlug, projName) {
        return "<button type='button' name='"+nameSlug+"' class='projNav-btn' data-gaec='projNavClick'>"+projName+"</button>"
    }

    function addProjNav(quantity) {
        var addProjects = "",
            nameSlug,
            projI =
                isParentLeft
                    ? arrProjects.indexOf($projsLeft.children(":first").text())
                    : arrProjects.indexOf($projsRight.children(":last").text());


        if (isParentLeft) {
            var projRestart = arrProjects[arrProjects.length-1],
                r = 2;
        } else {
            var projRestart = arrProjects[0],
                r = 0;
        }

        for (var i = 1; i <= quantity; i++) {
            projName = arrProjects[projI+i+r] || projRestart;
            nameSlug = UtilFuncs.stringSlugLower(projName),
            addProjects += getElBtn(nameSlug, projName);
        }

        $projsRight.append(addProjects);
    }


    // ------ get project content ------ //

    function getProjDomElements() {
        //get all the projects placeholders once they are ready to be manipulated
        $projSub = $(classProjSub),
        $projMedia = $(classProjMedia),
        $projRole = $(classProjRole),
        $projDate = $(classProjDate),
        $projIntro = $(classProjIntro),
        $projDetails = $(classProjDetails),
        $projLinks = $(classProjLinks),
        $projBotTip = $(classProjBotTip),

        $pivot = $('.projNav-pivot'),
        $projsLeft = $('.projNav-left'), //In case you, sandrina, forget it, it's needed -left and -right to smooth things out when a new button cames out
        $projsRight = $('.projNav-right');
    }

    function getProjectImgs(imgArray) {
        var $glidder = $("<div class='Glidder'></div>");
        var elImgs = "";
        var desktop = window.innerWidth >= 940;
        for (var i = 0; i < imgArray.length; i++) {
            if(desktop) {
                var newImg;
                var imgRet = imgArray[i].split('.');
                imgRet.splice(1, 0, "@2x");
                imgRet.splice(2, 0, ".");
                var newImg = imgRet.join("");
                elImgs += "<img src='"+newImg+"'>";
            } else {
                elImgs += "<img src='"+imgArray[i]+"'>";
            }

        }
        return $glidder.append(elImgs);
    }

    function getProjectLinks(links) {
        var elLinks = "";
        for (i = 0; i < links.length; i++) {
            (links[i][1] == "available soon")
                ? elLinks += "<div class='projCont-links-option'><p class='btnCheck'><i class='fa fa-"+links[i][2]+"'></i>"+links[i][1]+"</p></div>"
                : elLinks += "<div class='projCont-links-option'><a href='"+links[i][0]+"' target='_blank' class='btnCheck'><i class='fa fa-"+links[i][2]+"'></i>"+links[i][1]+"</a></div>";
        }
        return elLinks;
    }

    function getProjectData(projName) {
        //FIXME take out var from here.
        var projSlug = UtilFuncs.stringSlugLower(projName),
            projData = chatContent.practice[projName],

            elImgs = getProjectImgs(projData.img),
            elLinks = getProjectLinks(projData.links);

        $projMedia.html(elImgs);
        $projLinks.html(elLinks);

        baffleSub.reveal(400, 150);
        baffleIntro.reveal(400, 0);
        baffleRole.reveal(400, 70);
        baffleDate.reveal(400, 250);
        baffleDet.reveal(400, 300);

        //FIXME is there any way to create a loop/for on these?
        baffleSub.text(currentText => projData.sub);
        baffleIntro.text(currentText => projData.capt);
        baffleRole.text(currentText => projData.role);
        baffleDate.text(currentText => projData.date);
        baffleDet.text(currentText => projData.more);

        $("img").error(function () {
            $(this).hide();
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

        //check how many projects should we add to the nav
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
            //is this a good identation? I think it's beautiful :3
            projActiveWidth =
                direction == "right"
                    ? $newProject.outerWidth() * 0.49
                    : $newProject.outerWidth() * 1.49;
        } else {
            projActiveWidth = $newProject.outerWidth();
        }

        transX =
            untilTablet
                ? 16 + pivotX - projActiveX
                : windowBotWidth + pivotX - projActiveX - projActiveWidth; //i think i'm overcomplicating.

        $pivot.css({'transform':'translateX('+ (transX) + 'px)'});
    }

    function showNewProject() {
        baffleProj();
        getProjectData($newActive.text());

        $projActive.removeClass(activeClass).removeAttr('disabled');

        //remove or add buttons on nav to mantain the balance on the DOM.
        if (addProjNumb > 0) {
            addProjNav(addProjNumb);
        } else {
            isParentLeft
                ? $projsLeft.children().first().remove()
                : $projsRight.children().last().remove();
        }

        setTimeout(function () {
            estimateFinalWidth = !isParentLeft || untilTablet;  //calculate final +/- width before it happens - FIXME this is not the best solution, but it's the better i could get
            $newActive.addClass(activeClass).prop('disabled', true);
            $projActive = $newActive;
            alignPivot();

            //align Pivot again to pixel perfect
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
        $(classProjBotTip).addClass('.jsLoading')
        setTimeout(() => $(classProjBotTip).html(text), 150);
        setTimeout(() => $(classProjBotTip).removeClass('.jsLoading'), 300);
    }

    function checkIsParentLeft() {
        return $newActive.closest('.projNav-left').length == 1;
    }

    function baffleProj() {
        var arrBuffle = [classProjSub, classProjIntro, classProjRole, classProjDate, classProjDetails],
            arrBuffleLength = arrBuffle.length;

        baffleSub = baffle(arrBuffle[0]),
        baffleIntro = baffle(arrBuffle[1]),
        baffleRole = baffle(arrBuffle[2]),
        baffleDate = baffle(arrBuffle[3]),
        baffleDet = baffle(arrBuffle[4]);

        //TODO is there any way to create a loop/for on these?
        baffleSub.start();
        baffleIntro.start();
        baffleRole.start();
        baffleDate.start();
        baffleDet.start();
    }


    // ------ DOM Interactions ------ //
    if (Modernizr.touchevents) {
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

                        //FIXME a class here please.
    $(document).on('click', '.projNav-pivot button', function() {
        onNavProjClick($(this));
    });


    // ------ Public ------ //

    function startIt(section) {
        var elProj = buildProj(),
            wHeight =  window.innerHeight, //FIXME strange bug with safari isn't always right
            untilTablet = window.innerWidth < 750,
            i = UtilFuncs.randomNumb(arrProjects.length - 1) + 1, //between 1 and arrProjects.length
            projName = arrProjects[i];

        $('#'+section).append(elProj);
        $('#projects').slideDown();
        getProjDomElements();
        baffleProj();

        setTimeout(function () {
            var projNameSlugged = UtilFuncs.stringSlugLower(projName);

            getProjectData(projName);

            $(`.projNav-btn[name='${projNameSlugged}']`)
                .first()
                .addClass(activeClass)
                .attr('disabled', true);

            $projActive = $('button.'+activeClass);
            alignPivot();

            setTimeout(() => alignPivot(), 150); //align Pivot again to pixel perfect
        }, 400);

        projectsVisible = true;
        $('.js-cvUnder').remove(); //remove projects on CV
    }

    function onNavProjClick($btn) {
        $newActive = $btn;
        isParentLeft = checkIsParentLeft();

        //FIXME
        //bug : if the buttons current and new are not in the same parent, it's a false true
        direction =
            $newActive.prevAll($projActive).length
                ? "right"
                : "left";

        if(numbOfGestures == 0) {
            Modernizr.touchevents
                ? changeBotNavText(chatContent.behaviour.navProjMob)
                : changeBotNavText(chatContent.behaviour.navProjDesk);
        }

        updateVarsOnNav(isParentLeft);
        showNewProject();
    }

    function onNavMoved(direction) {
        $newActive = direction == 'left' ? $projActive.prev() : $projActive.next();
        isParentLeft = checkIsParentLeft();

        // //i need a draw to explain this ._.
        // //if the direction is left <-, get the prev project.
        // if (direction == "left") {
        //     $newActive = $projActive.prev();
        //     // if there is no project it's because you are between .projNav-*.
        //     // So get the last project of the .projNav-left ($projsLeft).
        //     if ($newActive.length == 0) {
        //         $newActive = $projsLeft.children(":last");
        //     }
        //
        // } else { //do the same condition but for the other side.
        //     $newActive = $projActive.next();
        //     if ($newActive.length == 0) {
        //         $newActive = $projsRight.children(":first");
        //     }
        // }

        updateVarsOnNav(direction == 'left');

        $newActive.length == 0
            ? $newActive = $projDir.children(":"+fPos)
            : "";

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
                changeBotNavText("you got the idea.");
                break;
            case 120:
                changeBotNavText("._.");
                break;
            case 200:
                changeBotNavText("what a kid ¯\\_(ツ)_/¯");
                break;
            default:
                changeBotNavText("");
                break;
        }

        numbOfGestures ++;

        (function toGA() {
            var ec = 'projNavMoved';
                inm = $newActive.text().replace(/[^a-zA-Z ]/g, ""); //item name without especial characters
                ea = inm; //action
                gael += inm+"|"; //label REVIEW save all path clicks to know the jorney

            GAcustom.sendToGA(`&ec=${ec}&in=${inm}&ea=${ea}&el=${gael}`);
        })();
    }

    return {
        startIt,
        onNavProjClick,
        onNavMoved
    }
}();



$(function cvProjects(){

    var cvProjects = function(){

        var $cvProjUl = $('.js-cvProj'),
            $cvProjects = $cvProjUl.find('.cv-link'),
            $sub = $('.js-cvProjSub'),
            ArrProj = $cvProjects.toArray(),
            maxChild = ArrProj.length,
            projI = 0,
            iR,
            keepLooping = true,
            $child; //var on hightlightProject();

        function hightlightProject(child) {

            if(keepLooping) { // active next project and call itself with next child index,
                $child = $(child);
                removeActive();
                $child.addClass('active');
                setNewSub($child.data('sub'));

                setTimeout(function () {
                    iR = UtilFuncs.randomNumb(ArrProj);
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

        hightlightProject(ArrProj[projI]);

        $cvProjects.on('mouseenter', function(){
            removeActive();
            setNewSub($(this).data('sub'));
            keepLooping = false;
        }).on('mouseleave', function(){
            keepLooping = true;
        });

    }();
});
