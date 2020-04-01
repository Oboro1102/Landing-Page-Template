// scroll event
$(window).on("load scroll", function () {
    if ($(this).scrollTop() > 0) {
        $('.toTop').show("fade");
        $('.scrollDown').hide("fade");
        $('.navbar').addClass('navbar--scroll');
    } else {
        $('.toTop').hide("fade");
        $('.scrollDown').show("fade");
        $('.navbar').removeClass('navbar--scroll');
    }
});

// to top button action
$(".toTop").on("click", function () {
    $("html,body").animate({
        scrollTop: 0
    }, 500);
});

// hash jump smooth
$(".smoothHash").on("click", function (e) {
    e.preventDefault;
    let navHeight = $(".navbar").outerHeight(true);
    let offsetHeight = $($(this).attr("href")).offset().top - navHeight;
    $('html,body').animate({
        scrollTop: offsetHeight
    }, 500);
});

// switch product tab
$(".product-wrap__nav__link").on("click", function () {
    let itemContent = $(this).attr("data-name");
    $(this).addClass("product-wrap__nav__link--active").siblings().removeClass("product-wrap__nav__link--active");
    $(itemContent).show().siblings().hide();
});

// cpoyright show current year
$('#nowTime').text(function () {
    let date = new Date();
    return date.getFullYear();
});
