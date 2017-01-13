jQuery(document).ready(function ($) {

  //Pages ao clicar
  $(".botaomore").click(function(){
      $(".pageone").removeClass("page_active");
    $(".pagetwo").addClass("page_active");
  });

  $(".botaoless").click(function(){
      $(".pagetwo").removeClass("page_active");
    $(".pageone").addClass("page_active");
  });
  //Fim Pages ao clicar

//Slideshow
  var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
//fIm slideshow

//hamburger
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".nav_items").toggleClass("open");
  });
//FIm hamburger
});
