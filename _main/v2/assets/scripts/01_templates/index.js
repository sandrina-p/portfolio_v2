// * Created by: Sandrina Pereira
// * sandrina-p.net
// * 14 fev 15

/// -----------------------
/// -----------------------
// HEY YOUR LITTLE SMART GUY !!!
/// -----------------------
/// -----------------------
// IF FOR SOME REASON, YOU REACHED THIS FILE,
// PLEASE, BE AWARE THIS ISN'T OPTIMIZED, CLEAN
// OR EVEN ORGANIZED. D:
// IF YOU ARE THINKING ABOUT CONTACT ME FOR SOME REASON,
// DON'T JUDGE THIS CODE. NOT THIS ONE.
// THIS IS ALREADY ABSOLETE FOR ME.
// I JUST DIDN'T HAVE TIME TO IMPROVE THIS.
/// -----------------------
/// -----------------------
/// -----------------------
// Well... have fun and feel free to use any code you want
// just don't forget to let me know :)
/// -----------------------
/// -----------------------


// @koala-prepend "../../plugins/jquery/jquery-2.1.4.min.js";

$(document).ready(function() {

   // smooth scroll
   $('a[href*=#]').click(function(event){
      $('*').animate({
           scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);

      $('.nav-subTitles').removeClass('js-nav-subTitles-full-open');

      // event.preventDefault();
   });


   // The function actually applying the offset
   function offsetAnchor() {
       if(location.hash.length !== 0) {
           window.scrollTo(window.scrollX, window.scrollY - 100);
       }
   }

   // This will capture hash changes while on the page
   $(window).on("hashchange", function () {
       offsetAnchor();
   });

   // This is here so that when you enter the page with a hash,
   // it can provide the offset in that case too. Having a timeout
   // seems necessary to allow the browser to jump to the anchor first.
   window.setTimeout(function() {
       offsetAnchor();
   }, 1);

   // if (!matchMedia('screen and (min-width: 850px) and (min-height: 600px)').matches) {
   //     $('.navigation-square').addClass('js-nav-mini js-nav-mini-all');
   // };

   // SCROLL TO CHANGE NAV
   $(document).scroll(function () {
       var a_begin = $(this).scrollTop();
       var a_begin_scroll = 100;
       var a_offset = 450;
       var a_theory = $("#theory").offset().top;
       var a_background = $("#background").offset().top;

       // if is smaller than desktop
       if (!matchMedia('screen and (min-width: 850px) and (min-height: 500px)').matches) {
           if (a_begin > a_begin_scroll) {
               $('.final-words').show();
               $('.js-trigger-menu').addClass('js-menu-mobile-corner');
           } else {
               $('.final-words').hide();
               $('.js-trigger-menu').removeClass('js-menu-mobile-corner');
           }
       } else {
             if (a_begin > a_begin_scroll) {
                 $('.navigation-square').addClass('js-nav-mini js-nav-practice');
                 $('.final-words, .widget-invert').show();
             } else {
                 $('.navigation-square').removeClass('js-nav-mini js-nav-practice');
                 $('.final-words, .widget-invert').hide();
             }
         }

       if($(this).scrollTop() + a_offset > a_theory)
       {
         $('.navigation-square').addClass('js-nav-theory').removeClass('js-nav-practice');
       } else {
          $('.navigation-square').removeClass('js-nav-theory');
       }

       if($(this).scrollTop() + a_offset > a_background)
       {
         $('.navigation-square').addClass('js-nav-background').removeClass('js-nav-practice, js-nav-theory');
       } else {
          $('.navigation-square').removeClass('js-nav-background');
       }
   });

   // CHANGE NAV ON MOUSEENTER
   $(document).on({
       mouseenter: function () {
           var data = $(this).attr('data-nav');
           $('.navigation-square').removeClass('js-nav-theory js-nav-background js-nav-practice').addClass('js-nav-'+data);
       },
   }, '.js-nav-mini .nav-li-square');


   //--------- MOBILE STUFF --------- //
   if (!matchMedia('screen and (min-width: 650px) and (min-height: 600px)').matches) {



   } else {

      //--------- DESKTOP STUFF --------- //

      ///------------------ glitch text
    //   $(function(){
    //     $('span').glitch();
    //   });


      // RANDOM CHANGE POSITION .SQUARE DIV
      // next level: put this 3 functions in one... hmmm codeschool will help me
      var intRand1 = Math.round(Math.random() * (5000 - 1500)) + 500; // generate new time
      var intRand2 = Math.round(Math.random() * (5000 - 1000)) + 500; // generate new time
      var intRand3 = Math.round(Math.random() * (5000 - 1500)) + 500; // generate new time
      var intRand4 = Math.round(Math.random() * (5000)) + 500; // generate new time

      function square1() {

         var intsquare1 = function() {

            var intRand = Math.round(Math.random() * (14000 - 6500)) + 500; // intervale glitchs

            var sTop1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sTop1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sLeft1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sLeft1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sFill1a = ["black","white","transparent"];
            var sFillchosen1b = sFill1a[Math.floor(Math.random() * sFill1a.length)]; //(change background color)


            $('.js-square1').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('.js-square1').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('.js-square1').css({marginTop:'', marginLeft:''}).dequeue();
            }, 200);

            setTimeout(intsquare1, intRand);
         }

         intsquare1();
      }

      function square2() {

         var intsquare2 = function() {

            var intRand = Math.round(Math.random() * (9000 - 5000)) + 500; // intervale glitchs

            var sTop1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sTop1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sLeft1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sLeft1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sFill1a = ["black","white","transparent"];
            var sFillchosen1b = sFill1a[Math.floor(Math.random() * sFill1a.length)]; //(change background color)


            $('.js-square2').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('.js-square2').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('.js-square2').css({marginTop:'0px', marginLeft:'0px'}).dequeue();
            }, 200);

            setTimeout(intsquare2, intRand);
         }

         intsquare2();
      }

      function square3() {

         var intsquare3 = function() {

            var intRand = Math.round(Math.random() * (12000 - 6000)) + 500; // intervale glitchs)

            var sTop1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sTop1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sLeft1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sLeft1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sFill1a = ["black","white","transparent"];
            var sFillchosen1b = sFill1a[Math.floor(Math.random() * sFill1a.length)]; //(change background color)


            $('.js-square3').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('.js-square3').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('.js-square3').css({marginTop:'0px', marginLeft:'0px'}).dequeue();
            }, 200);

            setTimeout(intsquare3, intRand);
         }

         intsquare3();
      }

      function invertglitch() {

            var intbgglitch = function() {

               var intRand5 = Math.round(Math.random() * (35500 - 5000)) + 500; // intervale glitchs)

               $('body *').addClass('js-invert');

               setTimeout(function () {
                     $('body *').removeClass('js-invert');
               }, 150);

               setTimeout(intbgglitch, intRand5);
            }

            intbgglitch();
         }

         // CALL FUNCTIONS OF GLITCH SQUARE
          $(function() {
              setTimeout(square1, intRand1);
              setTimeout(square2, intRand2);
              setTimeout(square3, intRand3);
              setTimeout(invertglitch, intRand4);
          });
   };

});


// ACTIVE SOUND WAKE UP ON HOVER  -- ATTENTION OUT OF JQUERY DOCUMENT.READY
var click = 0;

$('.js-trigger-menu').on('click', function(){
    $('.menu-mobile').toggleClass('js-menu-mobile-open');
});


$('.nav-li-title').on('click', function(){
    $('.menu-mobile').removeClass('js-menu-mobile-open');
});


$(document).ready(function() {
   // target touch or small devices
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || !matchMedia('screen and (min-width: 850px) and (min-height: 600px)').matches) {

   } else {
       // parallax effect
       $('.js-parallax-scene').parallax();
   }

   // loading screen shut down
   // window.onload=function() {
   //     console.log('xx');

   setTimeout(function () {
       $('.loading-container').addClass('js-loading-finished');
   }, 1250);
   setTimeout(function () {
       $('.loading-container').remove();
   }, 1750);
   // }
});


// @koala-append "../../plugins/others/typewriter.min.js";
// @koala-append "..//00_organisms/index_typewriter.js";
// @koala-append "../../plugins/others/glitch.min.js";
// @koala-append "../../plugins/jquery/jquery.parallax.js";
