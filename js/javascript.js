/**
 * Created by Vikram on 2015-10-14.
 */

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('nav').addClass("unpadded");
    }
    else{
        $('nav').removeClass("unpadded");
    }
});


$(document).ready(function() {

  function close_accordion_section() {
    // Close everything up
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(500).removeClass('open');
  }

  $('.accordion-section-title').click(function(e) {
      // Grab current anchor value
      var currentAttrValue = $(this).attr('href');
      //Change the icon
      $(this).find('span').toggleClass('fa-chevron-circle-right fa-chevron-circle-down')
      // Open and close here

    if($(this).is('.active')) {
      close_accordion_section();
    }
    else {
      close_accordion_section();
      $(this).addClass('active');
      $('.accordion ' + currentAttrValue).slideDown(500).addClass('open');
    }

    e.preventDefault();

  });
});