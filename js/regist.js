// 注册验证

// 手机号
// 关联手机号
$('#tell').on('blur', function () {
    var tel_reg = /^1[3-9]\d{9}$/g;
    if (tel_reg.test(tell.value) == false) {
        tel.innerText = '×';
        tel.style.color = 'red';
        return false;
    } else {
        tel.innerText = '√';
        tel.style.color = 'green';
        // return true;
    }
})

// 效验码
$('#tu').on('blur', function () {
    if (tu.value != 'r2b7') {
        tupian.innerText = '×';
        tupian.style.color = 'red';
        return false;
    } else {
        tupian.innerText = '√';
        tupian.style.color = 'green';
        // return true;
    }
})


// 4位数字效验码
$('#num').on('blur', function () {
    if (num.value.length != 4) {
        number.innerText = '×';
        number.style.color = 'red';
        return false;
    } else {
        number.innerText = '√';
        number.style.color = 'green';
        // return true;
    }
})


// 用户名
$('#us').on('blur', function () {
    var us_reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/g;
    if (us_reg.test(us.value) == false) {
        user.innerText = '×';
        user.style.color = 'red';
        return false;
    } else {
        user.innerText = '√';
        user.style.color = 'green';
        // return true;
    }
})


// 登录密码
$('#password1').on('blur', function () {

    if (password1.value.length < 6 || password1.value.length > 14) {
        pwd1.innerText = '×';
        pwd1.style.color = 'red';
        return false;
    } else {
        pwd1.innerText = '√';
        pwd1.style.color = 'green';
        // return true;
    }
})

$('#password2').on('blur', function () {

    // 重复登陆密码
    if (password1.value != password2.value) {
        pwd2.innerText = '×';
        pwd2.style.color = 'red';
        return false;
    } else {
        pwd2.innerText = '√';
        pwd2.style.color = 'green';
        // return true;
    }
})


// 获取验证码
var num = 60;
var timer = null;
$('#huo').on('click', fa())

function fa() {
    timer = setInterval(function () {
        $('#huo').css('pointer-events', 'none');
        num--;
        if (num <= 0) {
            clearInterval(timer);
            $('#huo').html('重新发送');
            $('#huo').css('pointer-events', 'auto')
        } else {
            $('#huo').html(num + 's后获取验证码')
        }
    }, 1000)
}


// 注册
$('#button').on('click', function () {
    $.ajax({
        url: 'http://192.168.1.64:3000/users/register',
        type: 'post',
        data: {
            phone: $('#tell').val(),
            // code: $('section .enroll form input:nth-of-type(2)').val(r2b7),
            username: $('#us').val(),
            password: $('#password1').val(),
            password: $('#password2').val(),
        },
        success: function (res) {
            console.log(res);
            $('#regist').find('#button').attr('disabled', true)
            if (res.msg = '注册成功') {
                window.open('index.html');
                $('#regist input').val('');
                $('#regist span').text('');
            }
        },
        dataType: 'json'
    });
    return false;
})