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