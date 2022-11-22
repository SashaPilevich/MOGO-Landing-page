$(document).ready(function () {
  $(function () {
    $("#backTop").hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#backTop").fadeIn();
      } else {
        $("#backTop").fadeOut();
      }
    });
    $("#backTop").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      $("#backTop").hide();
      return false;
    });
  });
});
let isOpen = false;
$(function () {
  $("#map").click(function () {
    if (!isOpen) {
      $(".mapShow").addClass("show");
      $(".map").addClass("hide");
      $("#map").text("Close Map");
      isOpen = true;
    } else {
      $(".mapShow").removeClass("show");
      $(".map").removeClass("hide");
      $("#map").text("Open Map");
      isOpen = true;
    }
  });
});

let viewport = $(".viewport").width();
let slider = $("div.slider");
let viewSliders = $(".dot");
let viewSlidersNotice = $(".dot-notice");
let viewSlide = 0;
viewSliders[viewSlide].style.backgroundColor = "gray";
viewSlidersNotice[viewSlide].style.backgroundColor = "gray";
$(".next").click(function () {
  if (viewSlide < 4) {
    viewSlide++;
  } else {
    viewSlide = 0;
  }
  slider.animate({ left: -viewSlide * viewport + "px" }, { duration: 500 });
});
$(".prev").click(function () {
  if (viewSlide > 0) {
    viewSlide--;
  } else {
    viewSlide = 4;
  }
  slider.animate({ left: -viewSlide * viewport + "px" }, { duration: 500 });
});
$(".dot").click(function () {
  if (viewSlide < 4) {
    viewSlide++;
    viewSliders[viewSlide].style.backgroundColor = "gray";
    viewSliders[viewSlide - 1].style.backgroundColor = "white";
  } else {
    viewSlide = 0;
  }
  if (viewSlide === 0) {
    viewSliders[4].style.backgroundColor = "white";
    viewSliders[0].style.backgroundColor = "gray";
  }

  slider.animate({ left: -viewSlide * viewport + "px" }, { duration: 500 });
});
$(".dot-notice").click(function () {
  if (viewSlide < 4) {
    viewSlide++;
    viewSlidersNotice[viewSlide].style.backgroundColor = "gray";
    viewSlidersNotice[viewSlide - 1].style.backgroundColor = "white";
  } else {
    viewSlide = 0;
  }
  if (viewSlide === 0) {
    viewSlidersNotice[4].style.backgroundColor = "white";
    viewSlidersNotice[0].style.backgroundColor = "gray";
  }

  slider.animate({ left: -viewSlide * viewport + "px" }, { duration: 500 });
});
