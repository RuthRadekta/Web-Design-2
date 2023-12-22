$(document).ready(function() {
    $('#myTabs a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
});


$(document).ready(function(){
    $('#testimonialsCarousel').carousel();
});

$(document).ready(function() {
    var header = $("#header");
    var scrollPosition = $(window).scrollTop();

    // Check scroll position on scroll
    $(window).scroll(function() {
      scrollPosition = $(window).scrollTop();

      // Add or remove the 'scrolled' class based on scroll position
      if (scrollPosition > 0) {
        header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
    });
  });
