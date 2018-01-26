$("#man1").css("opacity",0);
$("#man2").css("opacity",0);
$("#man3").css("opacity",0);
$("#man4").css("opacity",0);
window.onload = function() {
    var t,l,t2,l2,t3,l3,t4,l4;
    setTimeout(function() {
        anim();
    },10);
    
     t = $("#dot1").css("top");
      l = $("#dot1").css("left");
      document.getElementById("man1").style.height = $("#man1").height()*($("#header-img").width()/2000) + "px";
      $("#man1").animate({rotate: "-45deg"}, 0);
      document.getElementById("man1").style.top = parseFloat(t) - ($("#man1").height()*0.6377) + "px";
      document.getElementById("man1").style.left = parseFloat(l) - $("#man1").width() + "px";
  
      t2 = $("#dot9").css("top");
      l2 = $("#dot9").css("left");
      document.getElementById("man2").style.height = $("#man2").height()*($("#header-img").width()/2000) + "px";
      $("#man2").animate({rotate: "15deg"}, 0);
      document.getElementById("man2").style.top = parseFloat(t2) - ($("#man2").height()*0.1377) + "px";
      document.getElementById("man2").style.left = parseFloat(l2) - ($("#man2").width()*0.1) + "px";
      
      
      t3 = $("#dot14").css("top");
      l3 = $("#dot14").css("left");
      document.getElementById("man3").style.height = $("#man3").height()*($("#header-img").width()/2000) + "px";
      $("#man3").animate({rotate: "-50deg"}, 0);
      document.getElementById("man3").style.top = parseFloat(t3) - ($("#man3").height()*0.60) + "px";
      document.getElementById("man3").style.left = parseFloat(l3) - $("#man3").width() + "px";
      
      t4 = $("#dot21").css("top");
      l4 = $("#dot21").css("left");
      document.getElementById("man4").style.height = $("#man4").height()*($("#header-img").width()/2000) + "px";
      $("#man4").animate({rotate: "15deg"}, 0);
      document.getElementById("man4").style.top = parseFloat(t4) - ($("#man4").height()*0.99) + "px";
      document.getElementById("man4").style.left = parseFloat(l4) - $("#man4").width()*0.4 + "px";
  
    
    
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
   

};

function anim() {
    $("#man1").css("opacity",1);
$("#man2").css("opacity",1);
$("#man3").css("opacity",1);
$("#man4").css("opacity",1);
  
  t = $("#dot2").css("top");
  l = $("#dot2").css("left");
  $("#man1").animate({left: parseFloat(l) - $("#man1").width(), top: parseFloat(t) - ($("#man1").height()*0.6977), rotate: "-35deg"}, 300,"linear");
  t = $("#dot3").css("top");
  l = $("#dot3").css("left");
  $("#man1").animate({left: parseFloat(l) - $("#man1").width(), top: parseFloat(t) - ($("#man1").height()*0.8102), rotate: "-22deg"}, 350,"linear");
  t = $("#dot4").css("top");
  l = $("#dot4").css("left");
  $("#man1").animate({left: parseFloat(l) - $("#man1").width(), top: parseFloat(t) - ($("#man1").height()*0.9102), rotate: "-9deg"}, 350,"linear");
  t = $("#dot5").css("top");
  l = $("#dot5").css("left");
  $("#man1").animate({left: parseFloat(l) - $("#man1").width(), top: parseFloat(t) - ($("#man1").height()), rotate: "2deg"}, 400,"linear");
  t = $("#dot6").css("top");
  l = $("#dot6").css("left");
  $("#man1").animate({left: parseFloat(l) - $("#man1").width(), top: parseFloat(t) - ($("#man1").height()*1.05), rotate: "8deg"}, 600,"linear");
  t = $("#dot7").css("top");
  l = $("#dot7").css("left");
  $("#man1").animate({left: parseFloat(l) - $("#man1").width(), top: parseFloat(t) - ($("#man1").height()*0.96), rotate: "-4deg"}, 300,"linear");
  t = $("#dot8").css("top");
  l = $("#dot8").css("left");
  $("#man1").animate({left: parseFloat(l) - $("#man1").width(), top: parseFloat(t) - ($("#man1").height()*0.87), rotate: "-14deg"}, 250,"linear");




  t2 = $("#dot10").css("top");
  l2 = $("#dot10").css("left");
  $("#man2").animate({left: parseFloat(l2) - ($("#man2").width()*0.1), top: parseFloat(t2) - ($("#man2").height()*0.1977), rotate: "5deg"}, 400,"linear");
  t2 = $("#dot11").css("top");
  l2 = $("#dot11").css("left");
  $("#man2").animate({left: parseFloat(l2) - ($("#man2").width()*0.1), top: parseFloat(t2) - ($("#man2").height()*0.3477), rotate: "-7deg"}, 400,"linear");
  t2 = $("#dot12").css("top");
  l2 = $("#dot12").css("left");
  $("#man2").animate({left: parseFloat(l2) - ($("#man2").width()*0.1), top: parseFloat(t2) - ($("#man2").height()*0.4477), rotate: "-25deg"}, 300,"linear");
  t2 = $("#dot13").css("top");
  l2 = $("#dot13").css("left");
  $("#man2").animate({left: parseFloat(l2) - ($("#man2").width()*0.1), top: parseFloat(t2) - ($("#man2").height()*0.4777), rotate: "-38deg"}, 300,"linear");
  t2 = $("#dot13").css("top");
  l2 = "-300px";
  $("#man2").animate({left: parseFloat(l2) - ($("#man2").width()*0.1), top: parseFloat(t2) - ($("#man2").height()*0.4477), rotate: "-113deg"}, 1000,"linear");
  

  t3 = $("#dot15").css("top");
  l3 = $("#dot15").css("left");
  $("#man3").animate({left: parseFloat(l3) - $("#man3").width(), top: parseFloat(t3) - ($("#man3").height()*0.64), rotate: "-45deg"}, 300,"linear");
  t3 = $("#dot16").css("top");
  l3 = $("#dot16").css("left");
  $("#man3").animate({left: parseFloat(l3) - $("#man3").width(), top: parseFloat(t3) - ($("#man3").height()*0.72), rotate: "-39deg"}, 300,"linear");
  t3 = $("#dot17").css("top");
  l3 = $("#dot17").css("left");
  $("#man3").animate({left: parseFloat(l3) - $("#man3").width(), top: parseFloat(t3) - ($("#man3").height()*0.80), rotate: "-30deg"}, 300,"linear");
  t3 = $("#dot18").css("top");
  l3 = $("#dot18").css("left");
  $("#man3").animate({left: parseFloat(l3) - $("#man3").width(), top: parseFloat(t3) - ($("#man3").height()*0.90), rotate: "-20deg"}, 300,"linear");
  t3 = $("#dot19").css("top");
  l3 = $("#dot19").css("left");
  $("#man3").animate({left: parseFloat(l3) - $("#man3").width(), top: parseFloat(t3) - ($("#man3").height()*1), rotate: "-12deg"}, 300,"linear");
  t3 = $("#dot20").css("top");
  l3 = $("#dot20").css("left");
  $("#man3").animate({left: parseFloat(l3) - $("#man3").width(), top: parseFloat(t3) - ($("#man3").height()*1.1), rotate: "-5deg"}, 400,"linear");
  

  t4 = $("#dot22").css("top");
  l4 = $("#dot22").css("left");
  $("#man4").animate({left: parseFloat(l4) - $("#man4").width()*0.4, top: parseFloat(t4) - ($("#man4").height()*0.99), rotate: "15deg"}, 300,"linear");
  t4 = $("#dot23").css("top");
  l4 = $("#dot23").css("left");
  $("#man4").animate({left: parseFloat(l4) - $("#man4").width()*0.4, top: parseFloat(t4) - ($("#man4").height()*0.99), rotate: "15deg"}, 300,"linear");
  t4 = $("#dot24").css("top");
  l4 = $("#dot24").css("left");
  $("#man4").animate({left: parseFloat(l4) - $("#man4").width()*0.4, top: parseFloat(t4) - ($("#man4").height()*0.99), rotate: "15deg"}, 300,"linear");
  t4 = $("#dot25").css("top");
  l4 = $("#dot25").css("left");
  $("#man4").animate({left: parseFloat(l4) - $("#man4").width()*0.4, top: parseFloat(t4) - ($("#man4").height()*0.99), rotate: "10deg"}, 300,"linear");
  t4 = $("#dot26").css("top");
  l4 = $("#dot26").css("left");
  $("#man4").animate({left: parseFloat(l4) - $("#man4").width()*0.4, top: parseFloat(t4) - ($("#man4").height()*0.99), rotate: "5deg"}, 300,"linear");
  t4 = $("#dot27").css("top");
  l4 = $("#dot27").css("left");
  $("#man4").animate({left: parseFloat(l4) - $("#man4").width()*0.4, top: parseFloat(t4) - ($("#man4").height()*0.99), rotate: "0deg"}, 300,"linear");
  
}
