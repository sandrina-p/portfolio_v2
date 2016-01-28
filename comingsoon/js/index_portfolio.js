$(document).ready(function() {

////----------- FUNCTIONS TO ALL DEVICES / DESKTOP

 //HOVER/CLICK SQUARE INVERT
    var hovers = 1;
    $('#m-color').bind( "mouseenter click", function() {
       hovers += 1;

       if (hovers == 2 ) {

          $('h1, h2, h3, h4, p, .m-title, #no-enter, #m-perfil, .m-square, .m-title, .m-square-mobile').css({color:'white'}); // change all text and border color
          $('body, .hey-v1, .hey-v2, .hey-v3').css({backgroundColor:'black'}); // change all bgColor areas
          $('.m-square, #d-barra').css({backgroundColor:'white'}); // change all bgColor boxes

       } else {
          hovers = 1;

          $('h1, h2, h3, h4, p, .m-title, #no-enter, #m-perfil, .m-square, .m-title, .m-square-mobile').css({color:'black'}); // change all text color
          $('body, .hey-v1, .hey-v2, .hey-v3').css({backgroundColor:'white'}); // change all bgColor areas
          $('.m-square, #d-barra').css({backgroundColor:'black'}); // change all bgColor boxes
       }
    });

    //GLITCH TEXT
     $(function(){
      $('p').glitch();
     });

////----------- FUNCTIONS TO DESKTOP

   if (matchMedia('screen and (min-width: 900px)').matches) {


   // RANDOM CHANGE POSITION .SQUARE DIV
   // I CAN DO IT :DDDDD FINALLYY

      function square1() {

         var intSquare1 = function() {

            var intRand = Math.round(Math.random() * (14000 - 6500)) + 500; // intervale glitchs

            var sTop1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sTop1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sLeft1a = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)
            var sLeft1b = Math.floor(Math.random() * 11) - 5; //(between -5 and 5)

            var sFill1a = ["black","white","transparent"];
            var sFillchosen1b = sFill1a[Math.floor(Math.random() * sFill1a.length)]; //(change background color)


            $('#square1').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('#square1').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('#square1').css({marginTop:'0px', marginLeft:'0px'}).dequeue();
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


            $('#square2').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('#square2').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('#square2').css({marginTop:'0px', marginLeft:'0px'}).dequeue();
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


            $('#square3').css({marginTop: sTop1a+'px', marginLeft: sLeft1a+'px', backgroundColor: sFillchosen1b});

            setTimeout(function () {
               $('#square3').css({marginTop: sTop1b+'px', marginLeft: sLeft1b+'px'}).dequeue();
            }, 50);

            setTimeout(function () {
               $('#square3').css({marginTop:'0px', marginLeft:'0px'}).dequeue();
            }, 200);

            setTimeout(intSquare3, intRand);
         }

         intSquare3();
      }

      function bgglitch() {

         var intbgglitch = function() {

            var intRand5 = Math.round(Math.random() * (35000 - 20000)) + 500; // intervale glitchs)

            $('h1, h2, h3, h4, p, .m-title, #no-enter, #m-perfil, .m-square').css({color:'white'}); // change all text color
            $('body, .hey-v1, .hey-v2, .hey-v3').css({backgroundColor:'black'}); // change all bgColor areas
            $('.m-square, #d-barra').css({backgroundColor:'white'}); // change all bgColor boxes

            setTimeout(function () {
               $('h1, h2, h3, h4, p, .m-title, #no-enter, #m-perfil, .m-square').css({color:'black'}); // change all text color
               $('body, .hey-v1, .hey-v2, .hey-v3').css({backgroundColor:'white'}); // change all bgColor areas
               $('.m-square, #d-barra').css({backgroundColor:'black'}); // change all bgColor boxes
            }, 150);

            // if ( $("body").css("background-color","white") ) { // white
            //    // $('h1, h2, h3, h4, p, .m-title, #no-enter, #m-perfil, .m-square').css({color:'white'}); // change all text color
            //    // $('body, .hey-v1, .hey-v2, .hey-v3').css({backgroundColor:'black'}); // change all bgColor areas
            //    // $('.m-square, #d-barra').css({backgroundColor:'white'}); // change all bgColor boxes
            //    //
            //    // setTimeout(function () {
            //    //    $('h1, h2, h3, h4, p, .m-title, #no-enter, #m-perfil, .m-square').css({color:'black'}); // change all text color
            //    //    $('body, .hey-v1, .hey-v2, .hey-v3').css({backgroundColor:'white'}); // change all bgColor areas
            //    //    $('.m-square, #d-barra').css({backgroundColor:'black'}); // change all bgColor boxes
            //    // }, 150);
            //
            // } else if ( $("body").css("background-color","black") ) { // black
            //    $('h1, h2, h3, h4, p, .m-title, #no-enter, #m-perfil, .m-square').css({color:'red'}); // change all text color
            //    $('body, .hey-v1, .hey-v2, .hey-v3').css({backgroundColor:'red'}); // change all bgColor areas
            //    $('.m-square, #d-barra').css({backgroundColor:'red'}); // change all bgColor boxes
            //
            //    setTimeout(function () {
            //       $('h1, h2, h3, h4, p, .m-title, #no-enter, #m-perfil, .m-square').css({color:'red'}); // change all text color
            //       $('body, .hey-v1, .hey-v2, .hey-v3').css({backgroundColor:'red'}); // change all bgColor areas
            //       $('.m-square, #d-barra').css({backgroundColor:'green'}); // change all bgColor boxes
            //    }, 150);
            //
            // } else {}

            setTimeout(intbgglitch, intRand5);
         }

         intbgglitch();
      }

   // CALL FUNCTIONS OF GLITCH SQUARE
      $(function() {
         var intRand1 = Math.round(Math.random() * (5000 - 1500)) + 500; // generate new time
         var intRand2 = Math.round(Math.random() * (5000 - 1000)) + 500; // generate new time
         var intRand3 = Math.round(Math.random() * (5000 - 1500)) + 500; // generate new time
         var intRand4 = Math.round(Math.random() * (10000)) + 500; // generate new time

          setTimeout(square1, intRand1);
          setTimeout(square2, intRand2);
          setTimeout(square3, intRand3);
          setTimeout(bgglitch, intRand4);
      });

   function introAnimDesk(){
      $('header').css({ opacity: '1'});


      setTimeout(function () {
         $('#d-barra').css({
            width: '277px',
            marginLeft: '1px'
         });
      }, 200);

      setTimeout(function () {
         $('#description').css({ visibility: 'visible'});
         $('#d-barra').css({ width: '142px' });
      }, 1200);

      setTimeout(function () {
         $('main').css({ opacity: '1'});
         $('#d-barra').css({ width: '142px', 'background-color':'black' });
      }, 2200);
   }

   setTimeout(introAnimDesk);

   //HOVER SQUARE ABOUT
      $('#m-about').hover(function() {

         $(this).find('.m-title').css({marginLeft:'0px'})
         $(this).find('.m-hidden').css({ width:'120px'}).dequeue().delay(200).queue(function(){
            $(this).css({ height:'260px'}).dequeue().delay(100).queue(function(){
               $(this).css({ width:'360px'}).dequeue();
            });
         });

      }, function() {
         // //out of SQUARE
         $(this).find('.m-hidden').css({width:'120px'})
         $(this).find('.m-hidden').css({height:'30px'})
         $(this).find('.m-hidden').css({ width:'0px'})
         $(this).find('.m-title').css({marginLeft:''});
      });


   //HOVER SQUARE CONTACT
      $('.m-square').mouseenter(function() {
         $(this).parent().find('#hidden-left').css({ width:'190px'});
         $(this).parent().find('#m-title-left').css({marginRight:'-5px'}).dequeue().delay(200).queue(function(){
            $(this).parent().css({height:'200px'}).dequeue(); //.m-hidden
         });

      });
   //OUT #M-CONTACT
      $('#m-contact').mouseleave(function() {
         // out of SQUARE
         $(this).find('#hidden-left').css({height:'30px'});
         $(this).find('#m-title-left').css({marginRight:'-190px'});

      });
   };

////----------- FUNCTIONS TO MOBILE

   if (matchMedia('screen and (max-width: 899px)').matches) {

      function introAnimMob(){
         $('header').css({ opacity: '1'});

         setTimeout(function () {
            $('#d-barra').css({
               width: '277px',
               marginLeft: '1px'
            });
         }, 200); // final 200

         setTimeout(function () {
            $('#description').css({ visibility: 'visible'});
            $('#d-barra').css({ width: '142px' });
         }, 1200); // final 1200

         setTimeout(function () {
            $('main').css({ opacity: '1'});
            $('#d-barra').css({ width: '142px', 'background-color':'black' });
         }, 2200); // final 2200

         setTimeout(function () {
            $('header').css({ marginTop: '50px', marginBottom: '50px'});
            $('section#mobileHey').css({ height: '0px', margin:'0px auto' });
         }, 9000); // final 8000
      }

      setTimeout(introAnimMob);
   };


   //anchors - smooth scroll
   $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
               $('html,body').animate({
                  scrollTop: target.offset().top
               }, 1000);
               return false;
            }
         }
      });
   });
});


// ACTIVE SOUND WAKE UP ON HOVER  -- ATTENTION OUT OF JQUERY DOCUMENT.READY
var click = 0;

function PlaySound(soundobj) {
    click += 1;
    var thissound=document.getElementById(soundobj);

    thissound.play();

    if (click == 1) {
      $('#sound-tip').show();
    } else {
      //nothing
   }

}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
    $('#sound-tip').hide();
}
