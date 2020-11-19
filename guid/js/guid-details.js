$(function () {
    // 喜欢
    $('section .middle .right>div:nth-of-type(1) img:nth-of-type(1)').on('click', function () {
        $(this).next().show();
        $(this).hide();
        $(this).siblings("p").text('喜欢16');
    })
    $('section .middle .right>div:nth-of-type(1) img:nth-of-type(2)').on('click', function () {
        $(this).prev().show();
        $(this).hide();
        $(this).siblings("p").text('喜欢15');
    })


    // 分享
    $('section .middle .right>div:nth-of-type(2) img:nth-of-type(1)').on('click', function () {
        $(this).next().show();
        $(this).siblings(".bshare-custom").show();
        $(this).hide();
    })
    $('section .middle .right>div:nth-of-type(2) img:nth-of-type(2)').on('click', function () {
        $(this).prev().show();
        $(this).siblings(".bshare-custom").hide();
        $(this).hide();
    })
})