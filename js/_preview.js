/*------------------------------------------------------------------
Project:    Wolfram
Author:     Yevgeny Simzikov
URL:        http://simpleqode.com/
            https://twitter.com/YevSim
Version:    1.0
Created:        18/08/2014
Last change:    29/08/2014
-------------------------------------------------------------------*/

/*
 * Preview Setup
 */

// Toggling setup block

$(".setup__btn").on('click', function() {
    $(".setup__block").toggleClass("setup__block_show");
    return false;
});
$(".setup-block__close").on('click', function() {
    $(".setup__block").toggleClass("setup__block_show");
    return false;
});

// Toggling color options

$(".color-options > li").on('click', function() {
  var color = $(this).data('color');
  $("body").removeClass("global-color_sun global-color_confetti global-color_picton-blue global-color_yellow global-color_bittersweet");
  if (color != "white") {
    $("body").addClass("global-color_" + color);
  }
});

// Toggling navbar color options

$(".navbar-options > li").on('click', function() {
  var navbar = $(this).data('navbar');
  var faded = $(this).data('faded');
  $(".navbar").removeClass("navbar-default navbar-inverse navbar-faded");
  $(".navbar").addClass("navbar-" + navbar);
  if (faded == "1") {
    $(".navbar").addClass("navbar-faded");
  }
});

// Toggling menu position

$(".menu-options_topbar").on('click', function() {
  $(".navbar").removeClass("hidden show");
  $(".navbar").addClass("show");
  $(".sidebar-btn").removeClass("hidden show");
  $(".sidebar-btn").addClass("hidden");
});
$(".menu-options_sidebar").on('click', function() {
  $(".navbar").removeClass("hidden show");
  $(".navbar").addClass("hidden");
  $(".sidebar-btn").removeClass("hidden show");
  $(".sidebar-btn").addClass("show");
});

// Toggling background pattern

$(".background-options > li").on('click', function() {
  var pattern = $(this).data('pattern');
  $(".bg-pattern").removeClass("bg-pattern_vertical bg-pattern_horizontal bg-pattern_no");
  $(".bg-pattern").addClass("bg-pattern_" + pattern);
});