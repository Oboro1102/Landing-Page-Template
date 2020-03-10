// 起始頁面讀取動畫
$(window).on("load", function () {
    setTimeout(() => {
        $('#loading').hide("fade", 300);
    }, 1);
})

// 視窗滾動事件
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

// 回到頂端按鈕
$(".toTop").on("click", function () {
    $("html,body").animate({
        scrollTop: 0
    }, 500);
});

// 錨點平滑轉跳
$(".smoothHash").on("click", function (e) {
    e.preventDefault;
    let navHeight = $(".navbar").outerHeight(true);
    let offsetHeight = $($(this).attr("href")).offset().top - navHeight;
    $('html,body').animate({
        scrollTop: offsetHeight
    }, 500);
});

// 產品切換顯示
$(".product-wrap__nav__link").on("click", function () {
    $(this).addClass("product-wrap__nav__link--active").siblings().removeClass("product-wrap__nav__link--active");
    let itemContent = $(this).attr("data-name");
    $(itemContent).show().siblings().hide();
});

// 頁腳顯示現在年度
$('#nowTime').text(function () {
    let date = new Date();
    return date.getFullYear();
});