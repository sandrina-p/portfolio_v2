/*Copyright (c) 2013 Fardjad Davari
Click to check my projectsglobal RealisticTypewriter, document*/
$( document ).ready(function() {

// --------- DESKTOP --------- //
if (matchMedia('screen and (min-width: 900px)').matches) {

   "use strict";

   function prompt(element, text) {
      var span = document.createElement("span");
      span.innerHTML = text;
      element.appendChild(span);
   }

   function start() {
      var realisticTypewriter = new RealisticTypewriter(),
      typeWriterElement = document.getElementById("typewriter");

      setTimeout(function () {

         realisticTypewriter.type("Hey there cybernaute!", typeWriterElement, function () {
         prompt(typeWriterElement, "<br/>");

            setTimeout(function () {
               realisticTypewriter.type("Press <Enter> to check my projects", typeWriterElement, function () {
               prompt(typeWriterElement, "<br/>");
               // add more line
               });
            }, 500);
         });
      }, 3500);
   }

   var readyStateCheckInterval = setInterval(function () {
      if (document.readyState === "complete") {
         start();
         clearInterval(readyStateCheckInterval);
      }
   }, 10);


   // SHOW DIV NO-ENTER
   setTimeout(function () {
      $('#no-enter').show();
   }, 6000);


   //--------//
   //FUNCTION ENTER - ACTIVAR DIALOGO

   function enter() {
      // SHOW DIV ERROR 404
      $('.hey-v2').show();

      // SHOW CONTENT ERROR 404
      // "use strict";
      function prompt2(element, text) {
         var span = document.createElement("span");
         span.innerHTML = text;
         element.appendChild(span);
      }

      function start2() {
         var realisticTypewriter = new RealisticTypewriter(),
         typeWriter2Element = document.getElementById("typewriter2");

         setTimeout(function () {
            realisticTypewriter.type("Loading...", typeWriter2Element, function () {
            prompt(typeWriter2Element, "<br/>");

               setTimeout(function () {

                  realisticTypewriter.type("ERROR 404 not found!", typeWriter2Element, function () {
                  prompt(typeWriter2Element, "<br/>");

                     setTimeout(function () {
                        realisticTypewriter.type("It seems i'm under construction", typeWriter2Element, function () {
                        prompt(typeWriter2Element, "<br/>");
                        prompt(typeWriter2Element, "<br/>");

                        setTimeout(function () {
                           realisticTypewriter.type("Shutting down...", typeWriter2Element, function () {
                           prompt(typeWriter2Element, "<br/>");
                           // add more lines
                           });
                        }, 250);
                        });
                     }, 250);
                  });
               }, 2000);
            });
         }, 100);
      }

      var readyStateCheckInterval = setInterval(function () {
         if (document.readyState === "complete") {
            start2();
            clearInterval(readyStateCheckInterval);
         }
      }, 10);


      // SHOW FINAL STATE
      setTimeout(function () {
         $('.hey-v3').css({'z-index':'1'});
      }, 10000);
   }


   //CLICK DIV ENTER
   $('#no-enter').click ( function() {
      enter();
   });

   //PRESS KEY ENTER (activo 3500ms após loading da pagina )
   var enterclick = 0
   setTimeout(function () {
      $('body').keydown(function( event1 ) {
         if ( event1.which == 13 ) { //ENTER

         enterclick += 1; // aumenta 1 a variavel

            if (enterclick == 1 && $(".hey-v2").is(":visible") ){
               // se é 1º click e div já está visible nao chama function
            } else if(enterclick == 1) {
               enter();  // se é 1º click e div ainda está hidden chama function
            } else {
               // 0 || >1 nada faz
            }
         }
      });
   }, 3500);

}


// --------- MOBILE --------- //
if (matchMedia('screen and (max-width: 899px)').matches) {


 // HEYMOBILE FUNCTION
   function prompt(element, text) {
      var span = document.createElement("span");
      span.innerHTML = text;
      element.appendChild(span);
   }

   function start3() {
      var realisticTypewriter = new RealisticTypewriter(),
      typeWriterElement = document.getElementById("typewriter3");

      setTimeout(function () {

         realisticTypewriter.type("Hey there cybernaute!", typeWriterElement, function () {
         prompt(typeWriterElement, "<br/>");

            setTimeout(function () {
               realisticTypewriter.type("It seems i'm under construction,", typeWriterElement, function () {
               prompt(typeWriterElement, "<br/>");

                  setTimeout(function () {
                     realisticTypewriter.type("but do not hurry!", typeWriterElement, function () {
                     prompt(typeWriterElement, "<br/>");
                     // add more line
                     });
                  }, 10);

               });
            }, 200);
         });
      }, 2800);
   }

   var readyStateCheckInterval = setInterval(function () {
      if (document.readyState === "complete") {
         start3();
         clearInterval(readyStateCheckInterval);
      }
   }, 10);


// SHOW MOBILE BYE WHEN REACH BOTTOM PAGE


      // function prompt2(element, text) {
      //    var span = document.createElement("span");
      //    span.innerHTML = text;
      //    element.appendChild(span);
      // }
      //
      // function mobileBye() {
      //    var realisticTypewriter = new RealisticTypewriter(),
      //    typeWriter2Element = document.getElementById("typewriter4");
      //
      //    setTimeout(function () {
      //       realisticTypewriter.type("Come back later to the full website", typeWriter2Element, function () {
      //       prompt(typeWriter2Element, "<br/>");
      //
      //          setTimeout(function () {
      //
      //             realisticTypewriter.type("Thank you and see you soon!", typeWriter2Element, function () {
      //             prompt(typeWriter2Element, "<br/>");
      //
      //                setTimeout(function () {
      //                   realisticTypewriter.type("One last thing......", typeWriter2Element, function () {
      //                   prompt(typeWriter2Element, "<br/>");
      //                   prompt(typeWriter2Element, "<br/>");
      //
      //                   setTimeout(function () {
      //                      realisticTypewriter.type("Click on the button bellow :D", typeWriter2Element, function () {
      //
      //                      });
      //                   }, 500);
      //
      //                   });
      //                }, 500);
      //             });
      //          }, 100);
      //       });
      //    }, 100);
      // }
      //
      // var readyStateCheckInterval = setInterval(function () {
      //    if (document.readyState === "complete") {
      //       start2();
      //       clearInterval(readyStateCheckInterval);
      //    }
      // }, 10);
      //
      // setTimeout(mobileBye, 8000);
}

});
