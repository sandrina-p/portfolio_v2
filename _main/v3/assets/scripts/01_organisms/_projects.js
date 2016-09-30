var Projects = function() {
    var activeClass = "js-active",

        arrProjects = chatContent.practice.projects,

        $newActive, fPos, $projDir, //arrowsNavProj variables
        projActiveWidth, pivotPos, projActivePos, //alignPivot variables
        windowBotWidth = window.innerWidth*30/100;
        $pivot = $('.projNav-pivot'),
        $projLeft = $('.projNav-left'),
        $projRight = $('.projNav-right'),
        $projActive = $('button.'+activeClass);

    function arrowsNavProj(direction) {
        if (direction == 'left') {
            fPos = 'last';
            $projDir = $projLeft;
            $newActive = $projActive.prev();
            $siblingsAll = $projActive.prevAll();

        } else if (direction == 'right') {
            fPos = 'first';
            $projDir = $projRight;
            $newActive = $projActive.next();
            $siblingsAll = $projActive.nextAll();
        }

        $projActive.removeClass(activeClass);

        $newActive.length == 0 ? $newActive = $projDir.children(":"+fPos) : "";

        if($siblingsAll.length <= 6) {
            addProjIndex(direction);
        }

        setTimeout(function () {
            $newActive.addClass(activeClass);
            $projActive = $newActive;
            alignPivot(); //FIXME find a way to prevent offset on function (width differences)
            if($projActive.closest('.projNav-right').length == 1) {
                setTimeout(function () {
                    alignPivot($newActive);
                }, 150);
            }
        }, 150);
    }

    function addProjIndex(direction) {
        var addProjects = "",
            projI = arrProjects.indexOf($newActive.text()),
            addProject = arrProjects[projI-1] || arrProjects[arrProjects.length-1];

        // for (var i = 0, projI = 5; i < 6; i++, projI++) {
        //     if (arrProjects[projI] == null) {
        //         projI = 0;
        //     }
            addProjects += "<button>"+addProject+"</button>";
        // }

        if (direction == 'left') {
            $projLeft.prepend(addProjects);
        } else if (direction == 'right') {
            $projRight.append(addProjects);
        }
        console.log('chega aqui?');
    }

    function alignPivot($newProject) {
        $newProject = $newProject || $projActive;
        pivotX = $pivot.offset().left,
        projActiveX = $newProject.offset().left,
        projActiveWidth = $newProject.outerWidth(),
        transX = windowBotWidth + pivotX - projActiveX - projActiveWidth;

        $pivot.css({'transform':'translateX('+ (windowBotWidth + pivotX - projActiveX - projActiveWidth) + 'px)'});
    }

    setTimeout(function () {
        alignPivot();
    }, 500);

    var timer = 0;
    $(document).keydown(function(e) {
        if (e.keyCode == 37 || e.keyCode == 40) { // < v
            arrowsNavProj('left');
                timer ++;
        } else if (e.keyCode == 38 || e.keyCode == 39) { // > ^
            arrowsNavProj('right');
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
