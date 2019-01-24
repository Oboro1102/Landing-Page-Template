// 頁面讀取動畫
$(window).on("load", function () {
    $('#loading').hide("fade", 300);
})

// 回到頂端按鈕動畫
$(window).on("load scroll", function () {
    if ($(this).scrollTop() > 0) {
        $('#to-top').show("fade", 300);
        $('.main-warp__scroll').hide("fade", 300);
    } else {
        $('#to-top').hide("fade", 300);
        $('.main-warp__scroll').show("fade", 300);
    }
});

// 回到頂端按鈕
$("#to-top").on("click", function () {
    $("html,body").animate({
        scrollTop: 0
    }, 500);
});

// 平滑轉跳
$(".smooth--hash").on("click", function (e) {
    e.preventDefault;
    var navHeight = $(".navbar").height();
    var offsetHeight = $($(this).attr("href")).offset().top - navHeight;
    $('html,body').animate({
        scrollTop: offsetHeight
    }, 500);
});

// 產品切換顯示
$(".detail-warp__button").on("click", function () {
    $(this).addClass("detail-warp__button--active").siblings().removeClass("detail-warp__button--active");
    var itemContent = $(this).attr("data-name");
    $(itemContent).show().siblings().hide();
});
