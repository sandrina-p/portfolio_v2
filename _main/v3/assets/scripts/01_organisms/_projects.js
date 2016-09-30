var Projects = function() {
    var activeClass = "js-active",
        arrProjects = chatContent.practice.projects,
        direction,
        $newActive, fPos, $projDir, isParentLeft, //arrowsNavProj variables
        estimateFinalWidth, projActiveWidth, pivotPos, projActivePos, transX, //alignPivot variables

        windowBotWidth = window.innerWidth*30/100;

        $pivot = $('.projNav-pivot'),
        $projLeft = $('.projNav-left'), //In case you, sandrina, forget it, it's needed -left and -right to smooth things out when a new button cames out
        $projRight = $('.projNav-right'),
        $projActive = $('button.'+activeClass);

    function arrowsNavProj(direction) {
        if (direction == 'left') {
            fPos = 'last';
            $projDir = $projLeft;
            $newActive = $projActive.prev();
            $siblingsAll = $projActive.prevAll();

        } else {
            fPos = 'first';
            $projDir = $projRight;
            $newActive = $projActive.next();
            $siblingsAll = $projActive.nextAll();
        }

        isParentLeft = $projActive.closest('.projNav-left').length == 1;

        $newActive.length == 0 ? $newActive = $projDir.children(":"+fPos) : "";

        $projActive.removeClass(activeClass);

        if ($siblingsAll.length <= 6) {
            addProjIndex(direction);
        } else {
            isParentLeft
                ? $projLeft.children().first().remove()
                : $projRight.children().last().remove();
        }

        setTimeout(function () {
            estimateFinalWidth = !isParentLeft;  //calculate final +/- width before it happens - FIXME this is not the best solution, but it's the better i could get
            $newActive.addClass(activeClass);
            $projActive = $newActive;
            alignPivot(null, direction);

            setTimeout(function () {
                if (estimateFinalWidth) {
                    estimateFinalWidth = false;
                    alignPivot();
                }
            }, 150);
        }, 150);
    }

    function addProjIndex(direction) {
        var addProjects = "",
            projI = arrProjects.indexOf($newActive.text()),
            addProject = arrProjects[projI-1] || arrProjects[arrProjects.length-1];

        addProjects += "<button>"+addProject+"</button>";

        if (direction == 'left') {
            $projLeft.prepend(addProjects);
        } else if (direction == 'right') {
            $projRight.append(addProjects);
        }
    }

    function alignPivot($newProject) {
        $newProject = $newProject || $projActive,
        pivotX = $pivot.offset().left,
        projActiveX = $newProject.offset().left;

        if (estimateFinalWidth) {
            projActiveWidth = 
                direction == "right"
                    ? $newProject.outerWidth() * 0.49
                    : $newProject.outerWidth() * 1.49;
        } else {
            projActiveWidth = $newProject.outerWidth();
        }

        transX = windowBotWidth + pivotX - projActiveX - projActiveWidth;

        $pivot.css({'transform':'translateX('+ transX + 'px)'});
    }

    setTimeout(function () {
        alignPivot();
    }, 500);

    var timer = 0;
    $(document).keydown(function(e) {
        if (e.keyCode == 37) { // <
            direction = "left";
            arrowsNavProj(direction);
            timer ++;
        } else if (e.keyCode == 39) { // >
            direction = "right";
            arrowsNavProj(direction);
            timer ++;
        }

        if (timer == 2) {
            $('.bot-nav').css({
                'color':'black'
            });
            setTimeout(function () {
                $('.bot-nav').text("that's it. you are a natural");
                setTimeout(function () {
                    $('.bot-nav').css({
                        'color':'gray'
                    });
                }, 150);
            }, 150);
        }

        if (timer == 20) {
            $('.bot-nav').css({
                'color':'black'
            });
            setTimeout(function () {
                $('.bot-nav').text("you love loops don't you?");
                setTimeout(function () {
                    $('.bot-nav').css({
                        'color':'gray'
                    });
                }, 150);
            }, 150);
        }

        if (timer == 40) {
            $('.bot-nav').css({
                'color':'black'
            });
            setTimeout(function () {
                $('.bot-nav').text("[TILT] my head's spinning.");
                setTimeout(function () {
                    $('.bot-nav').css({
                        'color':'gray'
                    });
                }, 150);
            }, 150);
        }

        if (timer == 80) {
            $('.bot-nav').css({
                'color':'black'
            });
            setTimeout(function () {
                $('.bot-nav').text("you got the idea.");
                setTimeout(function () {
                    $('.bot-nav').css({
                        'color':'gray'
                    });
                }, 150);
            }, 150);
        }

        if (timer == 120) {
            $('.bot-nav').css({
                'color':'black'
            });
            setTimeout(function () {
                $('.bot-nav').text("....");
                setTimeout(function () {
                    $('.bot-nav').css({
                        'color':'gray'
                    });
                }, 150);
            }, 150);
        }

        if (timer == 200) {
            $('.bot-nav').css({
                'color':'black'
            });
            setTimeout(function () {
                $('.bot-nav').text(".let's have fun. huu huuu ._. .");
                setTimeout(function () {
                    $('.bot-nav').css({
                        'color':'gray'
                    });
                }, 150);
            }, 150);
        }

    });

    return {

    }

}();
