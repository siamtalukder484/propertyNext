$(function(){
//Find Properties part Slider
$('.find_properties_slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'.find_prev',
    nextArrow:'.find_next',
  });
  
//Hot Properties part Slider
$('.hot_property_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'.hot_prev',
    nextArrow:'.hot_next',
    speed: 1000,
    asNavFor: '.hot_details_main'
  });

  $('.hot_details_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    asNavFor: '.hot_property_main',
  });




});