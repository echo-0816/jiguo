// $('#btn').on('click',function(){

//     $.ajax({

//         url:'http://192.168.1.64:3000/users/login',
//         type:post,
//         data:{
//             username:$('#tel').val(),
//             password:$('#password').val()
//         },

<<<<<<< HEAD
//         success:function(res){
//             console(res);

=======
        success:function(res){
            console(res);
            if(res.msg == '登陆成功！'){
                window.open('../index.html');
            }
>>>>>>> 7a1a0bf3a3e6fc22a4644d342411ff4cba1c74c9
          
//         },

//         dataType:'json'
//     })

<<<<<<< HEAD
    
// })

//用户
if (localStorage.getItem('miss') == 'true') {
    $('#tel').val(localStorage.getItem('username'));
    $('#password').val(localStorage.getItem('password'));
    $('.loadGiet').is(':checked');
}
$('#loginform').on('submit', function () {
    $.ajax({
        url: 'http://192.168.1.64:3000/users/login',
        type: 'post',
        data: {
            username: $('#tel').val(),
            password: $('#password').val()
        },
        success: function (res) {
            console.log(res)
            if (res.msg == '登录成功！') {
                if ($('.loadGiet').is(':checked')) {
                    localStorage.setItem('username', $('#tel').val());
                    localStorage.setItem('password', $('#password').val());
                    localStorage.setItem('miss', $('.loadGiet').is(':checked'))
                } else {
                    localStorage.clear();
            
                }
                window.open('index.html');
            }
        },
        dataType: 'json'
    })
    return false;
=======

>>>>>>> 7a1a0bf3a3e6fc22a4644d342411ff4cba1c74c9
})