"use strict";$("img._lazy").lazyload({effect:"fadeIn"}),$(document).ready(function(){$("._scene").parallax(),$("._slider.owl-carousel").owlCarousel({items:1,dots:!1,nav:!0,navSpeed:1e3,animateOut:"fadeOut",loop:!0,navText:["<i class='fa fa-chevron-circle-left'></i>","<i class='fa fa-chevron-circle-right'></i>"]}),$("._faq_wrap ._faq ._toggle").on("click",function(e){e.preventDefault(),$("._toggle").not(this).removeClass("-active"),$(this).toggleClass("-active"),$("._toggle").not(this).find("._hidden").slideUp(),$(this).find("._hidden").slideToggle()}),(new WOW).init()});