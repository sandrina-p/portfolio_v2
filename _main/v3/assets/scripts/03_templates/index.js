// =include ../../plugins/jquery/jquery-2.1.4.min.js
// =include ../../plugins/modernizr/modernizr-flexbox.js
// =include ../../plugins/typedjs-master/dist/typed.min.js
// =include ../00_atoms/_custom-functions.js
// =include ../00_atoms/_chat-content.js
// =in//clude ../00_atoms/_hey-there.js
// =include ../00_atoms/_chat.js

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
