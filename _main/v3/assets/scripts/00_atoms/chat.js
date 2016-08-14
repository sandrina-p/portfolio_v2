Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


Object.notClicked = function(obj, arrayName) {
    var size = 0, key;
    var array = obj[arrayName];
    if (!array) {
        return Object.size(obj);
    }

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (array.indexOf(key) < 0 ) size++;
        }
    }
    return size;
};

$.fn.extend({
    toggleText: function(a, b) {
        $.trim(this.html()) == a ? this.html(b) : this.html(a);
    }
});


// var heyThere = function() {
//     function init() {
//         setTimeout(function () {
//             $('.hiThere-hey, .hiThere-intro').show();
//         }, 1000);
//         setTimeout(function () {
//             $('.hiThere-hey').removeClass('jsLoading');
//             setTimeout(function () {
//                 $('.hiThere-intro').removeClass('jsLoading');
//                 setTimeout(function () {
//                     $('.navSections').removeClass('jsLoading');
//                     setTimeout(function () {
//                         $('.navSections-btn:nth-of-type(2)').removeClass('jsLoading');
//                         setTimeout(function () {
//                             $('.navSections-btn:nth-of-type(1)').removeClass('jsLoading');
//                             setTimeout(function () {
//                                 $('.navSections-btn:nth-of-type(3)').removeClass('jsLoading');
//                             }, 100);
//                         }, 100);
//                     }, 800);
//                 }, 800);
//             }, 300);
//         }, 1100);
//     }
//     return {
//         init
//     }
// }();


var chatOptClick = function() {
    var $chatId = $('#chat'),
        botClass = '.chatPart-bot',
        chatPClass = '.chatPart-',
        section,
        $currentPart,
        text,
        intervalLoadingDots,
        navSectionTop;


    // ------ define section or part ------ //
    function init(option) {
        section = option.closest('.chatSection').attr('id');
        $currentPart = option.closest('.chatPart');
        title = option.text(),
        $navSections = $(".navSections");

        fixChatNav(); //calling it here prevent to fix the nav without clicking anywhere;

        if (section) {
            animateClickedOption(option);
            if (section == "practice" && title != "practice") {
                buildProject(section, title)
            } else {
                buildPart(section, title);
            }
        } else {
            $('.js-chatOpt').removeClass('jsActive');
            option.addClass('jsActive');
            buildSection(title);
        }

    }

    function animateClickedOption(option) {
        var parent = option.parent();
        var siblings = parent.siblings('.chatPart-option');

        parent.animate({'margin-left':'-49%'});
        option.animate({'margin-left':'-100%'});
        if (siblings.length > 0) {
            //siblings.children().removeClass('btnB');
            setTimeout(function () {
                parent.remove();
            }, 500);

        } else {
            parent.slideUp();
            setTimeout(function () {
                parent.remove();
            }, 250);
            // parent.animate({'padding-top':'0'});
        }
    }

    function fixChatNav() {
        //prevent navSectionTop value being higher than original trigger
        if(!$navSections.hasClass('jsFixed') ) {
            navSectionTop = $(".navSections").offset().top;
        }
        $hiThere = $('.hiThere-intro');

        $(document).scroll(function(){
            if($(this).scrollTop() > navSectionTop) {
                $navSections.addClass('jsFixed');
                $hiThere.addClass('jsFixed');
            } else {
                $navSections.removeClass('jsFixed');
                $hiThere.removeClass('jsFixed');
                replaceLastPart();
            }
        });
    }


    // ------ DOM strucure element ------ //
    function getElSection(trigger) {
        return $("<div class='chatSection' id='"+trigger+"'></div>");
    }

    function getElBtn(text) {
        var chatBtn =   "<div class='chatPart-option'>"
                            +"<button type='button' name='button' class='btnB jsLoading js-chatOpt'>"+text+"</button>"
                        +"</div>";
        return chatBtn;
    }

    function getElPart(id, title, text) {
        var chatPart =  $("<div class='chatPart chatPart--jsLast' id='"+id+"'>"
                            +"<div class='chatPart-human'>"
                                +"<p class='chatPart-title jsLoading'>"+title+"</p>"
                            +"</div>"
                            +"<div class='chatPart-bot'>"
                                +"<p class='chatPart-text jsLoading'>"+text+"</p>"
                                // options
                            +"</div>"
                        +"</div>");

        return chatPart;
    }

    function getOptions(section) {
        var objSection = chatContent[section];
        var objI = 0;
        var chatOptions = [];
        // var objLength = Object.notClicked(objSection, 'clicked');

        for (var key in objSection) {
            if(objSection.hasOwnProperty(key)) {

                var clicked;  //to prevent show the same button twice
                //if clicked doesn't exist, build it.
                if(!objSection['clicked']) {
                    objSection['clicked'] = [];
                }

                clicked = objSection['clicked'];

                //if key isn't on clicked && only first 2 keys && key isn' clicked itself
                if (clicked.indexOf(key) < 0 && chatOptions.length < 2 && key !== "clicked") {
                    chatBtn = getElBtn(key);
                    chatOptions.push(chatBtn);
                    objSection['clicked'].push(key);
                }

                // var value = objSection[key];
                // console.log(key, value);
            } else {
                console.log('quase acabando.');
            }
        }

        if (chatOptions.length == 0) {
            console.log('acabou links. chama [behavior].');
        }

        return chatOptions;
    }

    function getElProject(id, title, sub, img, role, capt, more) {
        var chatProj =  $("<div class='chatPart chatPart--project chatPart--jsLast' id='"+id+"'>"
                            +"<div class='chatPart-human'>"
                                +"<h3 class='chatPart-title'>"+title+"</h3>"
                                +"<h4 class='chatPart-subtitle'>"+sub+"</h4>"
                            +"</div>"
                            +"<div class='chatPart-bot'>"
                                +"<div class='chatPart-project'>"
                                    // TODO Glidder glitch + slider
                                    +"<div class='chatPart-fs'>"
                                        +"<img src='"+img[0]+"'>"
                                    +"</div>"
                                    +"<h5 class='chatPart-role'>"+role+"</h5>"
                                    +"<p class='chatPart-capt'>"+capt+"</p>"
                                    +"<p class='chatPart-more jsLoading'>"+more+"</p>"

                                    +"<div class='chatPart-details'>"
                                        +"<button type='button' name='more' class='btnDetails'>_more info</button>"
                                        +"<div class='chatPart-www'>"
                                            +"<span class='chatPart-checkItOut js-checkItOut'></span>"
                                            //TODO links
                                            //+"<a href='"+links[0][0]+"' target='_blank' class='btnOut"+[1]+"' title='"+links[0][1]+"'><i class='fa fa-"+links[0][2]+"'></i></a>"
                                            //+"<a href='"+links[1][0]+"' target='_blank' class='btnOut"+[2]+"' title='"+links[1][1]+"'><i class='fa fa-"+links[1][2]+"'></i></a>"
                                        +"</div>"
                                    +"</div>"
                                +"</div>"
                                // options
                            +"</div>"
                        +"</div>");

        return chatProj;
    }

    function getLinks(links) {
        var elLinks = "";
        for (i = 0; i < links.length; i++) {
            (links[i][1] == "available soon")
                ? elLinks += "<i title='"+links[i][1]+" class='fa fa-"+links[i][2]+"'></i>"
                : elLinks += "<a href='"+links[i][0]+"' target='_blank' class='btnOut"+[i+1]+" js-linkswww' title='"+links[i][1]+"'><i class='fa fa-"+links[i][2]+"'></i></a>";
        }
        return elLinks;
    }


    // ------ loading / showing of the part ------ //
    function scrollSafe($currentPart) {
        //scroll to fit perfectly
        var wHeight =  window.innerHeight;
        var wScroll = $(window).scrollTop();
        var pHeight =  $currentPart.height();
        var pScroll = $currentPart.offset().top;
        var tooClose = pScroll - wScroll + pHeight > wHeight/2;

        if (tooClose) {
            $('body').animate({
                scrollTop: pScroll + pHeight - wHeight/2
            }, 500);
        }
    }

    function replaceLastPart(part) {
        $('.chatPart--jsLast').removeClass('chatPart--jsLast');
        if (part) {
            part.addClass('chatPart--jsLast');
        }
    }

    function loadingDots($elAfter) {
        $elAfter.after('<span class="js-loadingRetro"></span>');

        function dotdotdot(cursor, times, string) {
          return Array(times - Math.abs(cursor % (times * 2) - times) + 1).join(string);
        }

        var cursor = 0;
        intervalLoadingDots = setInterval(function () {
         $('.js-loadingRetro').text( dotdotdot(cursor++, 3, '.') );
        }, 100);
    }

    function finishLoading($element) {
        $element.removeClass('jsLoading');
    }

    function glitchIn($element) {
        $element.addClass('jsGlitchIn');
    }

    function scrollFinal($part) {
        var safeArea = 60,
            pHeight = $part.height(),
            pScroll = $part.offset().top,
            wHeight = window.innerHeight,
            wScroll = $(window).scrollTop(),
            diff = pScroll - wScroll,
            visibleOnScreen = diff + pHeight,
            wArea = wHeight - safeArea;

        if (visibleOnScreen < wArea) {
            console.log('está okay para ler i think');
        } else {
            console.log('too close');
            var diff2 = visibleOnScreen - wArea;
            $('body').animate({
                scrollTop: wScroll + diff2
            }, 500);
        }
    }


    function showingPartCommon($part, diffPartCallBack ) {
        var loadingTimeXtext = $part.find(chatPClass+"human").text().length;

        //if isn't 1st part guide on previous part (currentPart)
        //otherwise guide on parent
        if($part.is(':first-child') ) {
            scrollSafe($part.parent());
        } else {
            scrollSafe($part.prev());
        }

        // 1.show line title
        $part.find(chatPClass+"human").slideDown();

        // 2.show title and loading dots
        setTimeout(function () {
            $part.find(chatPClass+"title").removeClass('jsLoading');
            loadingDots($part.find(chatPClass+"human"));
            // 3. hide loading dots and show bigger line
            setTimeout(function () {
                $('.js-loadingRetro').slideUp();
                clearInterval(intervalLoadingDots);
                $part.find(chatPClass+"bot").slideDown();
                // 4. show text
                setTimeout(function () {
                    $('.js-loadingRetro').remove();
                    // focus this new part
                    replaceLastPart($part);

                    diffPartCallBack($part, chatPClass); //a talk or a project

                }, loadingTimeXtext);
            }, 1000);
        }, 250);
    }

    function showingPartTalk($part) {
        finishLoading($part.find(chatPClass+"text"));
        showingOptions($part);
    }

    function showingPartProject($part) {
        $part.find(chatPClass+"role").slideDown();
        setTimeout(function () {

            setTimeout(function () {
                $part.find(".btnDetails").show();
                glitchIn($part.find(chatPClass+"role"));

                setTimeout(function () {
                    $part.find(chatPClass+"details").show();

                    glitchIn($part.find(".btnDetails"));

                    setTimeout(function () {
                        $part.find(chatPClass+"fs").slideDown();
                        glitchIn($part.find(chatPClass+"details"));

                        setTimeout(function () {
                            glitchIn($part.find(chatPClass+"fs"));

                            setTimeout(function () {
                                $part.find(chatPClass+"capt").slideDown();

                                showingOptions($part);

                            }, 100);
                        }, 450);
                    }, 250);

                }, 250);
            }, 250);
        }, 250);
    }

    function showingOptions($part) {
        // 6. show 1st btn
        setTimeout(function () {
            finishLoading($part.find(chatPClass+"option:nth-last-of-type(2) .btnB"));
            scrollFinal($part);
            // 6. show 2nd btn
            setTimeout(function () {
                finishLoading( $part.find(chatPClass+"option:last-of-type .btnB") );
                setTimeout(function () {
                }, 10);
            }, 300);
        }, 400);
    }


    // ------ build a new section ------ //
    function buildSection(section) {
        var $section = $('#'+section);

        if($section.length != 1) {
            //get intro text and remove it from chatContent.
            text = chatContent[section]["intro"];
            delete chatContent[section]["intro"];

            //build section, part and options (buttons);
            var ElChatSection = getElSection(section),
                ElChatPart = getElPart(section+"-intro", title, text),
                ElChatOptions = getOptions(title);

            ElChatSection.append(ElChatPart);
            ElChatSection.find(botClass).append(ElChatOptions);
            $chatId.append(ElChatSection);

            // fancy loading
            $newPart = $('#'+section+'-intro');
            showingPartCommon($newPart, showingPartTalk);
        }

        $section = $('#'+section);

        // //scroll to fit perfectly
        // var wHeight =  window.innerHeight;
        // $('body').animate({
        //     scrollTop: $section.offset().top - wHeight/2
        // }, 500);
    }

    // ------ build a new part ------ //
    function buildPart(section, title) {

        //get text and remove it from chatContent.
        var id = title.split(' ').join('-');
            text = chatContent[section][title];

        delete chatContent[section][title];

        //build part
        var ElChatPart = getElPart(id, title, text),
            ElChatOptions = getOptions(section);
        ElChatPart.find(botClass).append(ElChatOptions);
        $currentPart.after(ElChatPart);

        $newPart = $currentPart.next();
        showingPartCommon($newPart, showingPartTalk);
    }

    // ------ build a new project ------ //
    function buildProject(section, project) {
        //get all info needed about project and delete it.
        var id = project.split(' ').join('-'),
            objProj = chatContent[section][project],
            title = objProj["title"],
            sub = objProj["sub"],
            role = objProj["role"],
            img = objProj["img"],
            capt = objProj["capt"],
            more = objProj["more"],
            links = objProj["links"];

        delete chatContent[section][project];

        // create project
        var ElChatPart = getElProject(id, title, sub, img, role, capt, more, links),
            ElChatOptions = getOptions(section, title),
            ElLinks = getLinks(links);

        ElChatPart.find('.chatPart-www').append(ElLinks);
        ElChatPart.find(botClass).append(ElChatOptions);
        $currentPart.after(ElChatPart);

        $newPart = $currentPart.next();
        showingPartCommon($newPart, showingPartProject);
    }



    // ------ interactivity clicks and hovers stuff ------ //

    //hover CTA btn on each project to show its cta text
    $(document)
        .on('mouseenter', '.js-linkswww', function(){
            var cta = $(this).attr('title'),
                $checkItOut = $(this).siblings('.js-checkItOut');
            $checkItOut.text(cta);
            $checkItOut.addClass('jsActive');
        })
        .on('mouseleave', '.js-linkswww', function(){
            var $checkItOut = $(this).siblings('.js-checkItOut');
            $checkItOut.text('');
            $checkItOut.removeClass('jsActive');
        });


    //show / hide more info each project
    $(document).on('click', '.btnDetails', function(){
        $more = $(this).closest('.chatPart').find('.chatPart-more');
        $more.toggleClass('jsLoading');
        $(this).toggleText("_more info", "_less info");
    });

    //show n o x project isolated
    $(document).on('click', '.js-checkNox', function(){
        $currentPart = $(this).closest('.chatPart');
        buildProject('practice', 'n o x', $currentPart);
        $(this).remove();

        //TODO change options links
    });



    // public function
    return {
        init
    }

}();


$(document).ready(function(){

    // heyThere.init();

    $(document).on('click', '.js-chatOpt', function(){
        chatOptClick.init($(this));
    });
});
