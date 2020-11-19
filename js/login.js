$('#btn').on('click',function(){

    $.ajax({

        url:'http://192.168.1.64:3000/users/login',
        type:'post',
        data:{
            username:$('#tel').val(),
            password:$('#password').val()
        },

        success:function(res){
            console.log(res);
            if(res.msg == '登陆成功！'){
                window.open('../index.html');
            }
          
        },

        dataType:'json',
    })


})