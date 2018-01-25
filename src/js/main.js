$(document).ready(function() {
  $(".js-manage__read-more").click(function(){
    $(this).parents(".manage__content").find(".manage__text").addClass("manage__text--open");
    $(this).hide();
  });

  $(".js-history__read-more").click(function(){
    $(this).parents(".history").find(".history__text p").addClass("history--open");
    $(this).hide();
  });

  $(".submenu__open").click(function(){
    $(this).parents(".header__menu_link").find(".header__submenu").toggleClass("header__submenu--open");
    $(this).toggleClass("submenu__open--active");
  });

  $(".butter").click(function(){
    $(".header__menu").toggleClass("header__menu--open");
  });
});


