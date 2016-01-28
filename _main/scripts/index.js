// * Created by: Sandrina Pereira
// * sandrina-p.net
// * 14 nov 15

// note: it is very important that u don't change .js- order in scss


$(document).ready(function() {

   window.onload=function() {
      setTimeout(function () {
         $('.loading-container').addClass('js-loading-finished');
         setTimeout(function () {
            $('.loading-container').css({display:'none'});
         }, 1000);
      }, 2500);
   }

   // CLICK ON BLACK SQUARE - OPEN MENU
   $('.the-square').on('click', function() {

      if ( $('.nav-subTitles').hasClass('js-nav-subTitles-full-open') ) {
         $('.nav-subTitles').removeClass('js-nav-subTitles-full-open');

      } else {
         $('.nav-subTitles').addClass('js-nav-subTitles-full-open');
      }

   });

   // smooth scroll
   $('a[href*=#]').click(function(event){
      $('main').animate({
           scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);

      $('.nav-subTitles').removeClass('js-nav-subTitles-full-open');

      // event.preventDefault();
   });

   //--------- MOBILE STUFF --------- //
   if (!matchMedia('screen and (min-width: 850px) and (min-height: 600px)').matches) {

      // CHANGE TITLE WHEN SCROLL
      var titlepractice = $("#anchor-practice").offset().top;
      var titleTheory = $("#anchor-theory").offset().top;
      var titleBackground = $("#anchor-background").offset().top;

      // bug if one of the section are open solution: nested conditional
      $('main').scroll(function(){

         if( ( $(this).scrollTop() + 35) < titlepractice) {
            // prevent scroll back
            $('.nav-subTitles').removeClass('js-nav-subTitles-visible');
            $('.n-subTitles-container ul').removeClass('align-title-practice');

         } else if ( ($(this).scrollTop() + 50) < titleTheory ) {
            $('.nav-subTitles').addClass('js-nav-subTitles-visible');
            $('.n-subTitles-container ul').addClass('align-title-practice');
            // prevent scroll back
            $('.n-subTitles-container ul').removeClass('align-title-theory');
            $('.nav-subTitles').removeClass('js-invert');

         } else if ( ($(this).scrollTop() + 50) < titleBackground) {
            $('.n-subTitles-container ul').addClass('align-title-theory');
            $('.nav-subTitles').addClass('js-invert');
            // prevent scroll back
            $('.n-subTitles-container ul').removeClass('align-title-background');

         } else {   //last one show Background
            $('.n-subTitles-container ul').addClass('align-title-background');
            // prevent scroll back
            $('.nav-subTitles').removeClass('js-invert');
         }
      });

      // toogleText show and hide contents
      jQuery.fn.extend({
         toggleText: function (a, b){
            var that = this;
            if (that.text() != a && that.text() != b){
               that.text(a);
            }
            else
            if (that.text() == a){
               that.text(b);
            }
            else
            if (that.text() == b){
               that.text(a);
            }
            return this;
         }
      });

      // EXPAND SECTION practice
      $('#expand-practice').on('click', function() {
         //$('.js-m-section-open').toggle();
         $('.section-practice').toggleClass('js-m-section-open');
         $('#fadeout-practice').toggle();
         $(this).find('p').toggleText("hide projects", "show more projects");
         $(this).toggleClass('js-invert');
         return false;
      });

      // EXPAND SECTION THEORY
      $('#expand-theory').on('click', function() {
         $('.section-theory').toggleClass('js-m-section-open');
         $('#fadeout-theory').toggle();
         $(this).find('p').toggleText("hide fields", "show more fields");
         $(this).toggleClass('js-invert');
         return false;
      });

      // EXPAND SECTION BACKGROUND
      $('#expand-background').on('click', function() {
         $('.section-background').toggleClass('js-m-section-open');
         $('#fadeout-background').toggle();
         $(this).find('p').toggleText("hide history", "show more history");
         $(this).toggleClass('js-invert');
         return false;
      });


      //RANDOM CHANGE OPACITY GIF
      function profileGif() {

         var profileGif = function() {

            var intRand = Math.round(Math.random() * (5000 - 1500)) + 500; // intervale glitchs

            $('.presentation img').css({'opacity':'1'});

            setTimeout(function () {
               $('.presentation img').css({'opacity':'0'}).dequeue();
            }, 250);

            setTimeout(profileGif, intRand);
         }

         profileGif();
      }
      // CALL FUNCTIONS OF GLITCH OPACITY GIF
      $(function() {
         var intRand1 = Math.round(Math.random() * (5000 - 1500)) + 500; // generate new time
         setTimeout(profileGif, intRand1);
      });


   } else {

      //--------- DESKTOP STUFF --------- //

      ///------------------ glitch text
      $(function(){
        $('span').glitch();
      });

      //------------------ HEADER - CLICK TO GO OUT
      $('.header-click-area, .header-title').on('click', function(){
         $('.section-practice, .section-background, .section-theory').removeClass('js-bigSection-visible');
         $('.n-subTitles-container > ul').removeClass('align-title-practice align-title-theory align-title-background');
         $('.n-subTitles-container > ul').addClass('align-title-nothing');
      });


      //------------------ NAVIGATION BAR - HOVER
      $('.the-square, .nav-subTitles, .nav-safearea').on({
         mouseenter: function() {
            $(this).parent().find('.nav-subTitles').addClass('js-nav-subTitles-full-open');
         }, mouseleave: function() {
            $('.nav-subTitles').removeClass('js-nav-subTitles-full-open');
         }
      });

      //------------------ NAVIGATION BAR - CLICK

      var alignTitle = {};
      var openSection = {};

      function selectSection (){
         $('.nav-subTitles').removeClass('js-nav-subTitles-full-open');
         $('.n-subTitles-container > ul').removeClass('align-title-theory');
         $('.n-subTitles-container > ul').removeClass('align-title-practice');
         $('.n-subTitles-container > ul').removeClass('align-title-background');

         $('.n-subTitles-container > ul').addClass(alignTitle);

         $('.section-practice, .section-theory, .section-background').removeClass('js-bigSection-visible');

         $(openSection).addClass('js-bigSection-visible');
      }

      // //Sub-title practice
      $('.n-subTitles-container').find('li:nth-child(1)').on('click', function() {
         alignTitle = 'align-title-practice';
         openSection = '.section-practice';
         selectSection();
      });

      // //Sub-title Theory
      $('.n-subTitles-container').find('li:nth-child(2)').on('click', function() {
         alignTitle = 'align-title-theory';
         openSection = '.section-theory';
         selectSection();
      });

      // //Sub-title Background
      $('.n-subTitles-container').find('li:nth-child(3)').on('click', function() {
         alignTitle = 'align-title-background';
         openSection = '.section-background';
         selectSection();
      });


      //------------------ PRESENTATION - CLICK
      $('.practice-trigger').on('click', function(){
         $('.section-practice').addClass('js-bigSection-visible');
         $('.n-subTitles-container > ul').removeClass('align-title-nothing align-title-background align-title-theory');
         $('.n-subTitles-container > ul').addClass('align-title-practice');
      });

      $('.theory-trigger').on('click', function(){
         $('.section-theory').addClass('js-bigSection-visible');
         $('.n-subTitles-container > ul').removeClass('align-title-nothing align-title-practice align-title-background');
         $('.n-subTitles-container > ul').addClass('align-title-theory');
      });

      $('.background-trigger').on('click', function(){
         $('.section-background').addClass('js-bigSection-visible');
         $('.n-subTitles-container > ul').removeClass('align-title-nothing align-title-practice align-title-theory');
         $('.n-subTitles-container > ul').addClass('align-title-background');
      });


      //------------------ BUTTON - HOVER / CLICK
      $('.button-rectangle, .widget-resources, .widget-invert').on({
         mouseenter: function() {
            $(this).find('.button-hover-fill').parent().find('p').css({'color':'white'}); // change color only p for hover-fill
            $(this).find('.button-hover-fill').addClass('js-button-hover-fill-yes');
            // $(this).css({'cursor':'not-allowed'});

            // for red button
            var div = $(this).find('.button-hover-no');
              div.animate({width: '10px', opacity: '1'}, "0");
              div.animate({opacity: '0'}, "0");
              div.animate({opacity: '1'}, "fast");
              div.animate({opacity: '0'}, "0");
              div.animate({opacity: '1'}, "fast");


         }, mouseleave: function() {
            $(this).find('p').css({'color':''});
            $(this).find('.button-hover-fill').removeClass('js-button-hover-fill-yes');

            var div = $(this).find('.button-hover-no');
              div.animate({width: '0px', opacity: '1'}, "0");
         }
      });

      //------------------ CLOSE WELCOME
      $('.h-close').on('click', function(){
         $(this).css({'display':'none'});
         $('.h-welcome').slideUp('fast');
      });

      /////////

      // RANDOM CHANGE POSITION .SQUARE DIV
      // next level: put this 3 functions in one... hmmm codeschool will help me
      var intRand1 = Math.round(Math.random() * (5000 - 1500)) + 500; // generate new time
      var intRand2 = Math.round(Math.random() * (5000 - 1000)) + 500; // generate new time
      var intRand3 = Math.round(Math.random() * (5000 - 1500)) + 500; // generate new time
      var intRand4 = Math.round(Math.random() * (5000)) + 500; // generate new time

      function square1() {

         var intSquare1 = function() {

            var intRand = Math.round(Math.random() * (14000 - 6500)) + 500; // intervale glitchs

            var sTop1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sTop1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sLeft1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sLeft1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sFill1a = ["black","white","transparent"];
            var sFillchosen1b = sFill1a[Math.floor(Math.random() * sFill1a.length)]; //(change background color)


            $('.square1').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('.square1').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('.square1').css({marginTop:'', marginLeft:''}).dequeue();
            }, 200);

            setTimeout(intSquare1, intRand);
         }

         intSquare1();
      }

      function square2() {

         var intSquare2 = function() {

            var intRand = Math.round(Math.random() * (9000 - 5000)) + 500; // intervale glitchs

            var sTop1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sTop1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sLeft1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sLeft1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sFill1a = ["black","white","transparent"];
            var sFillchosen1b = sFill1a[Math.floor(Math.random() * sFill1a.length)]; //(change background color)


            $('.square2').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('.square2').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('.square2').css({marginTop:'0px', marginLeft:'0px'}).dequeue();
            }, 200);

            setTimeout(intSquare2, intRand);
         }

         intSquare2();
      }

      function square3() {

         var intSquare3 = function() {

            var intRand = Math.round(Math.random() * (12000 - 6000)) + 500; // intervale glitchs)

            var sTop1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sTop1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sLeft1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sLeft1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sFill1a = ["black","white","transparent"];
            var sFillchosen1b = sFill1a[Math.floor(Math.random() * sFill1a.length)]; //(change background color)


            $('.square3').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('.square3').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('.square3').css({marginTop:'0px', marginLeft:'0px'}).dequeue();
            }, 200);

            setTimeout(intSquare3, intRand);
         }

         intSquare3();
      }

      function invertglitch() {

            var intbgglitch = function() {

               var intRand5 = Math.round(Math.random() * (30000 - 5000)) + 500; // intervale glitchs)

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

function PlaySound(soundobj) {
   click += 1;
   var thissound=document.getElementById(soundobj);

   thissound.play();

   if (click == 1) {
      $('.sound-tip').show();
   } else {
      //nothing
   }
}

function StopSound(soundobj) {
   var thissound=document.getElementById(soundobj);
   thissound.pause();
   thissound.currentTime = 0;
   $('.sound-tip').hide();
}
