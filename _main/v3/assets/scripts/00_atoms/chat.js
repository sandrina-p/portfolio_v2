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

var chatOptClick = function() {

    var $chatId = $('#chat'),
        botClass = '.chatPart-bot',
        section,
        $currentPart,
        text;

    // ------ define section or part ------ //
    function init(option) {
        section = option.closest('.chatSection').attr('id');
        $currentPart = option.closest('.chatPart');
        title = option.text();

        if (section) {
            // if (section == "practice") {
            //     console.log('not so fast. practice will be next lvl');
            // } else {
            var parent = option.parent();
            var siblings = parent.siblings('.chatPart-option');


            if (siblings.length > 0) {
                parent.animate({width:'toggle', duration: 500});
                siblings.children().removeClass('btnB');
                setTimeout(function () {
                    parent.remove();
                }, 250);
            } else {
                parent.animate({'padding-top':'0'});
                parent.slideUp();
                setTimeout(function () {
                    parent.remove();
                }, 250);
            }

            buildPart(section, title);
            // }
        } else {

            buildSection(title);
        }
    }

    function replaceLastPart(part) {
        $('.chatPart--jsLast').removeClass('chatPart--jsLast');
        if (part) {
            part.addClass('chatPart--jsLast');
        }
    }
    // ------ DOM strucure element ------ //
    function getElSection(trigger) {
        return $("<div class='chatSection' id='"+trigger+"'></div>");
    }

    function getElBtn(text) {
        var chatBtn =   "<div class='chatPart-option'>"
                            +"<button type='button' name='button' class='js-chatOpt btnB'>"+text+"</button>"
                        +"</div>";
        return chatBtn;
    }

    function getElPart(id, title, text) {
        var chatPart =  $("<div class='chatPart chatPart--jsLast' id='"+id+"'>"
                            +"<div class='chatPart-human'>"
                                +"<p>"+title+"</p>"
                            +"</div>"
                            +"<div class='chatPart-bot'>"
                                +"<p>"+text+"</p>"
                                // +"<div class='chatPart-option'>"
                                //     +"<button type='button' name='button'>"+obj.btn[0]+"</button>"
                                // +"</div>"
                                // +"<div class='chatPart-option'>"
                                //     +"<button type='button' name='button'>"+obj.btn[1]+"</button>"
                                // +"</div>"
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

                //if clicked doesn't exist, build it.
                var clicked;
                if(!objSection['clicked']) {
                    objSection['clicked'] = [];
                }

                clicked = objSection['clicked'];

                //if key isn't clicked && only first 2 keys && is not clicked itself
                if (clicked.indexOf(key) < 0 && chatOptions.length < 2 && key !== "clicked") {
                    chatBtn = getElBtn(key);
                    chatOptions.push(chatBtn);
                    objSection['clicked'].push(key);
                }

                // var value = objSection[key];
                // console.log(key, value);
            } else {
                // if (chatOptions.length == 0) {
                    console.log('acabou links. chama [behavior].');
                // }
            }
        }

        if (chatOptions.length == 0) {
            console.log('acabou links. chama [behavior].');
        }

        return chatOptions;
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

            $section = $chatId.find("#"+section)
            $section.hide().slideDown();

            replaceLastPart($section);

            var wHeight =  window.innerHeight;
            replaceLastPart($section.children('.chatPart:first-of-type'));
            $('body').animate({
                scrollTop: $section.offset().top - wHeight/2
            }, 500);
        } else {
            var wHeight =  window.innerHeight;
            replaceLastPart($section.children('.chatPart:first-of-type'));
            $('body').animate({
                scrollTop: $section.offset().top - wHeight/2
            }, 500);
        }
    }

    // ------ build a new part ------ //
    function buildPart(section, title) {
        //get intro text and remove it from chatContent.
        text = chatContent[section][title];
        var screenHeight, currentPartHeight;
        var id = title.split(' ').join('-');
        delete chatContent[section][title];

        replaceLastPart();

        var ElChatPart = getElPart(id, title, text),
            ElChatOptions = getOptions(section);

        ElChatPart.find(botClass).append(ElChatOptions);
        $currentPart.after(ElChatPart);
        var currentPartHeight =  $($currentPart).next().height(); //get its height before hide it.
        $currentPart.next().hide().slideDown();

        var scrolled = $(window).scrollTop();
        var wHeight = window.innerHeight;
        var aboveFold = scrolled + wHeight;
        var newContentEnd = $currentPart.next().offset().top + currentPartHeight;

        //if is too low, scroll a little to see its response
        //TODO add condition if response is bigger than screen, scroll until its beginning
        if (newContentEnd > aboveFold - 100 /*100 == nav height and some breathing */) {
            $('body').animate({
                scrollTop: aboveFold - wHeight + currentPartHeight + 40
            }, 500);
        }
    }


    // public function
    return {
        init
        // section: buildSection,
        // part: buildPart
    }

}();


$(document).on('click', '.js-chatOpt', function(){
    chatOptClick.init($(this));
});
