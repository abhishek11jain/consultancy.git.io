// navbar code 
$(document).ready(function () {
    if ($(window).width() > 992) {
  
        var navbar_height = $('.navbar').outerHeight();
  
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#navbar-section').css('height', navbar_height + 'px');
                $('#navbar_top').addClass("fixed-top");
  
            } else {
                $('#navbar_top').removeClass("fixed-top");
                $('#navbar-section').css('height', 'auto');
            }
        });
    }
  });


// cAROUSEL sLIDER cODE
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// loader start
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2300);
}

function showPage() {
  document.getElementById("page-loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// loader end

