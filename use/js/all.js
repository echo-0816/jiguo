$(function () {

    // 头部
    $('header ul:nth-of-type(1) li:nth-of-type(2)').on('click', function () {
        window.open('../index.html', '_self');
    });
    $('header ul:nth-of-type(1) li:nth-of-type(3)').on('click', function () {
        window.open('../play/play-new.html', '_self');
    });
    $('header ul:nth-of-type(1) li:nth-of-type(4)').on('click', function () {
        window.open('../guid/guid-new.html', '_self');
    });
    $('header ul:nth-of-type(1) li:nth-of-type(5)').on('click', function () {
        window.open('../use/use-all.html', '_self');
    });
    $('header ul:nth-of-type(1) li:nth-of-type(6)').on('click', function () {
        window.open('../report/report-new.html', '_self');
    });

    $('header ul:nth-of-type(2) button').on('click', function () {
        window.open('../regist.html', '_self');
    });


    // 尾部
    $('footer .right dl:nth-of-type(1) dd:nth-of-type(1)').on('click', function () {
        window.open('../report/help.html', '_self');
    });
    $('footer .right dl:nth-of-type(1) dd:nth-of-type(2)').on('click', function () {
        window.open('../report/affairs.html', '_self');
    });


    // 自己页面 2
    $('.use .use-top .text a:nth-of-type(1)').on('click', function () {
        window.open('use-all.html', '_self');
    });
    $('.use .use-top .text a:nth-of-type(2)').on('click', function () {
        window.open('use-dig.html', '_self');
    });

    // 自己页面 4
    $('.use .use-top ul li:nth-of-type(1)').on('click', function () {
        window.open('use-all.html', '_self');
    });
    $('.use .use-top ul li:nth-of-type(2)').on('click', function () {
        window.open('use-apply.html', '_self');
    });
    $('.use .use-top ul li:nth-of-type(3)').on('click', function () {
        window.open('use-con.html', '_self');
    });
    $('.use .use-top ul li:nth-of-type(4)').on('click', function () {
        window.open('use-over.html', '_self');
    });

    // detail
    $('.use-bottom #ace li').on('click', function () {
        window.open('use-detail.html', '_self');
    });
})