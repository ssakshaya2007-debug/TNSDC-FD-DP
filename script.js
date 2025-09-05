// Collapse navigation bar when scrolling
function collapsedNavbar() {
  if ($(".navbar").offset().top > 110) {
    $(".navbar-fixed-top").addClass("top-collapsed");
  } else {
    $(".navbar-fixed-top").removeClass("top-collapsed");
  }
}
$(window).scroll(collapsedNavbar);
$(document).ready(collapsedNavbar);

// Scrolling by using jQuery. Easing plugin for easing movement
$(function () {
  $("a.scrolling").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Closes the Responsive Menu on click
$(".navbar-collapse ul li a").click(function () {
  $(this).closest(".collapse").collapse("toggle");
});