/* Vanilla JS hide function - replaced by Jquery below
function hideExamples() {
  var x = document.getElementById("example1");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
} */

/* Vanilla JS hide function - had to copy the first because I couldn't figure out how to apply to seperate elements
function hideExamples2() {
  var x = document.getElementById("example2");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
} */


// Collapse function
$(document).ready(function() {
  $( ".button" ).click( function() {
      var self   = $(this),
      index  = self.index(),
      text   = self.text();
      if(index == 4) {
        index = 0;
      } else {
        index = 1;
      }

    console.log($(".glyphicon-chevron-down").eq(index).css('transform'));
    if ($(".glyphicon-chevron-down").eq(index).css('transform') == 'none') {
      $(".glyphicon-chevron-down").eq(index).css({'transform': 'rotate(-180deg)'});
    } else {
      $(".glyphicon-chevron-down").eq(index).css({'transform': ''});
    };
  });
});

$(function(){
  $(".typeType").typed({
    strings: [ "Hi!, I'm Bill", "former M+A consultant in Boston", " current software developer in Saint Paul, MN","I would love to hear from you! --->"],
    typeSpeed: 13,
    backDelay: 900, // pause before backspacing
    loop: false,
    backSpeed: .1,
    smartBackspace: true,

  });
});
