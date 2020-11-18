
// $('.cli').on('click',function(){
//     $('.cli').html('正在加载');


//     $.ajax({

//         url:'http://192.168.1.64:3000/useing/public',
//         success:function(res){
//             $('.cli').hide();
//             console.log(res)
//             var dot = doT.template($('#list_template').text());

//             $('#list').html(dot(res));
//         },

//         dataType:'json'
//     })
// })


var btn = document.getElementsByClassName('cli')[0];

btn.onclick = function(){

    btn.style.display = 'none';
    if(window.XMLHttpRequest){
        var ajax_ = new XMLHttpRequest();
    }else{
        var ajax_ = new ActiveXObject('Microsoft.XMLHTTP');
    }


    ajax_.open('get','http://192.168.1.64:3000/useing/public',true);
    ajax_.send();
    ajax_.onreadystatechange = function(){
        if(ajax_.readyState == 4){
            if(ajax_.status == 200){

                var data = ajax_.responseText;

                data = eval('('+data+')');

                console.log(data);

                var ac = doT.template(document.getElementById('list_template').innerText);

                console.log(ac);

                list.innerHTML = ac(data);
            }
        }
    }
}