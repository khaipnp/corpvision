

//<!-- tắt cuộn nội dung mà thanh điều hướng đang hoạt động -->

$(function () {
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
    })
});

//<!-- disable body scroll which navbar is in active -->

// <!--MENU-JS-->

$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});


$(".navbar-toggler").on("click", function () {
    $("header").toggleClass("active");
});
$(document).on("ready", function () {
    if ($(window).width() > 991) {
        $("header").removeClass("active");
    }
    $(window).on("resize", function () {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
    });
});

//<!-- Search -->

$('.control').click(function () {
    $('body').addClass('search-active');
    $('.input-search').focus();
});

$('.icon-close').click(function () {
    $('body').removeClass('search-active');
});

//<!-- //Search -->


// light-moon
document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
};
