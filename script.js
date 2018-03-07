function hideExamples() {
  var x = document.getElementById("example1");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function hideExamples2() {
  var x = document.getElementById("example2");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

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
