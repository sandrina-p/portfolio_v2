/*Copyright (c) 2013 Fardjad Davari
Click to check my projectsglobal RealisticTypewriter, document*/
$( document ).ready(function() {

// window.onload=function() {
//    setTimeout(function () {
   // if (!matchMedia('screen and (min-width: 850px) and (min-height: 600px)').matches) {

      "use strict";

    //   function prompt(element, text) {
    //      var span = document.createElement("span");
    //      span.innerHTML = text;
    //      element.appendChild(span);
    //   }
      //
    //   function startmob() {
    //      var realisticTypewriter = new RealisticTypewriter(),
    //      typeWriterElement = document.getElementById("typewriter-mob");
      //
    //      setTimeout(function () {
    //         realisticTypewriter.type("Hey there cybernaut.", typeWriterElement, function () {
    //         prompt(typeWriterElement, "<br/>");
      //
    //            setTimeout(function () {
    //               realisticTypewriter.type("If you are here,", typeWriterElement, function () {
    //               prompt(typeWriterElement, "<br/>");
    //                  setTimeout(function () {
    //                     realisticTypewriter.type("you are a lucky person.", typeWriterElement, function () {
    //                     prompt(typeWriterElement, "<br/>");
      //
    //                     setTimeout(function () {
    //                        realisticTypewriter.type("You didn't find me.", typeWriterElement, function () {
    //                        prompt(typeWriterElement, "<br/>");
    //                        setTimeout(function () {
    //                           realisticTypewriter.type("I found you.", typeWriterElement, function () {
    //                           setTimeout(function () {
    //                              prompt(typeWriterElement, "<br/>");
    //                              prompt(typeWriterElement, "<br/>");
    //                              realisticTypewriter.type("Anything you need", typeWriterElement, function () {
    //                              prompt(typeWriterElement, "<br/>");
    //                              setTimeout(function () {
    //                                 realisticTypewriter.type("the black square", typeWriterElement, function () {
    //                                 prompt(typeWriterElement, "<br/>");
    //                                 setTimeout(function () {
    //                                    realisticTypewriter.type("is your best friend.", typeWriterElement, function () {
    //                                    });
    //                                 }, 50);
    //                                 });
    //                              }, 50);
    //                              });
    //                           }, 1000);
    //                           });
    //                        }, 200);
    //                        });
    //                     }, 500);
    //                     });
    //                  }, 100);
    //               });
    //            }, 100);
    //         });
    //      }, 100);
    //   }
      //
    //   var readyStateCheckInterval = setInterval(function () {
    //      if (document.readyState === "complete") {
    //         startmob();
    //         clearInterval(readyStateCheckInterval);
    //      }
    //   }, 0);

   // } else {

      "use strict";

      function prompt(element, text) {
         var span = document.createElement("span");
         span.innerHTML = text;
         element.appendChild(span);
      }

      function startdesk() {
         var realisticTypewriter = new RealisticTypewriter(),
         typeWriterElement = document.getElementById("js-typewriter-presentation");
         setTimeout(function () {
            realisticTypewriter.type("Hey there cybernaut.", typeWriterElement, function () {
            prompt(typeWriterElement, "<br/>");
            });
        }, 1000);
      }

      var readyStateCheckInterval = setInterval(function () {
         if (document.readyState === "complete") {
            startdesk();
            clearInterval(readyStateCheckInterval);
         }
     }, 100);
   // }

});
