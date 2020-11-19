$('section>div>p').on('click', function () {
    // 隐藏p
    $(this).hide();

    $(function () {
        $.ajax({
            url: 'http://192.168.1.64:3000/guid/new',
            success: function (res) {
                inHtml(res[0]);
            }
        });
    })

    function inHtml(date) {
        var dot_tem = doT.template($('#list_template').text());
        $('section>div>ul').html(dot_tem(date));
        console.log(date);
    }
})