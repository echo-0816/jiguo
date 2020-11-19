var btn = document.getElementsByClassName('bottom')[0];
var lis = document.getElementsByClassName('scroll');

console.log(btn , lis);

var timer = null, timer1 = null;
var num = 1;

btn.scrollLeft = lis[0].offsetWidth;

function auto(){

    timer = setInterval(function(){
        clearInterval(timer1);
        num++;

        if(num >= lis.length){
            num = 1;
            btn.scrollLeft = 0;

        }

        var step = 0 ;
        var maxstep = 40;
        var start = btn.scrollLeft;
        var end = lis[0].offsetWidth*num;
        var event = (end - start) / maxstep;

        timer1 = setInterval(function(){
            step++;
            if(step >= maxstep){
                step = 0;
                clearInterval(timer1);
            }

            start +=  event;
            btn.scrollLeft = start;
        },20)

        for(var m=0;m<lis.length;m++){
            lis[m].onmouseenter = function(){
                clearInterval(timer);
                clearInterval(timer1);
                
            }

            lis[m].onmouseleave = function(){
                auto();
            }
        }
    },2000)
}

auto();


var blo = document.getElementsByClassName('back-top')[0];

window.onscroll = function(){
    if(window.documentElement == 0){
        blo.style.display = 'none';

    }else{
        blo.style.display = 'block';
    }
}

blo.onclick = function(){
    document.documentElement.scrollTop = 0;
}