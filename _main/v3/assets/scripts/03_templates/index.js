// @koala-prepend "../../plugins/jquery/jquery-2.1.4.min.js";
// @koala-prepend "../00_atoms/customFunctions.js";
// @koala-prepend "../00_atoms/objContent.js";
// @koala-prepend "../00_atoms/chat.js";

$(document).ready(function(){


    $(function SmoothScroll() {
        $('a[href*=#]').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top -150
        }, 500);
            event.preventDefault();
        });
    });
});
