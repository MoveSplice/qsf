$(function(){
   "use strict";
   var qsf = function(){
      // var timer = null;
      //  var i = 0;
      //  timer = setInterval(function(){
      //      i++;
      //      if(i>3){
      //          i=0;
      //      }
      //      $("#carousel li").eq(i).show().siblings("#carousel li").hide();
      //      console.log(i)
      //  },3000);
      // $("#carousel li").mouseover(function(){
      //    clearInterval(timer)
      // }).mouseout(function(){
      //     timer = setInterval(function(){
      //         i++;
      //         if(i>3){
      //             i=0;
      //         }
      //         $("#carousel li").eq(i).show().siblings("#carousel li").hide();
      //     },3000);
      // })
   };
    qsf();

    $('.qsf-adn').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

});