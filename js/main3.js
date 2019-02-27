$(document).ready(function() {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      //console.log(document.getElementById("navbar").style.padding);
       $("#navbar").css({"top":"0px","padding":"18px 0px","position":"fixed","border-bottom":"2px solid #6905b5","background":"white","overflow":"hidden", "clear":"both"});
       $(".nvlink").css({"color":"black"});
      //document.getElementById("logo").style.fontSize = "25px";
    } else {
      $("#navbar").css({"padding":"20px 0px","position":"relative","background": "#6905b5",});
      $(".nav-link").css({"color":"white !important"});
    //	document.getElementById("logo").style.fontSize = "35px";
    }
  };

  //search select2
//   $('.js-example-basic-single1').select2({
//   placeholder: 'Select an option'
// });
//   $('.js-example-basic-single2').select2({
//   placeholder: 'Select an option'
// });
//   $('.js-example-basic-single3').select2({
//   placeholder: 'Select an option'
// });
// {
// placeholder: 'Select an option'
// $('.filter-basic-single1').select2();
// $('.filter-basic-single2').select2();
// $('.filter-basic-single3').select2();
// $('.filter-basic-single4').select2();

  $('#imageGallery').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:9,
      slideMargin:0,
      enableDrag: false,
      currentPagerPosition:'left',
      onSliderLoad: function(el) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      }
  });

//



//

});
//$("p").css("background-color", "yellow");
