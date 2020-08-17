$(function(){
  
  $('.nav-link').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position 
    }, 500);
   
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".navbar").addClass("bg-light");
    } else {
      $(".navbar").removeClass("bg-light");
    }
  });
  
  
});
