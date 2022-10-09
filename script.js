document.getElementById('notify-cross').style.display ="none";
document.getElementById('notify-right').style.display ="none";

document.getElementById('pin-btn').addEventListener('click',function(){
    let pin =1000+Math.random()*9000;
    document.getElementById('pin').value=Math.round(pin);
});

function displayNum(num){
    document.getElementById('pass').value = document.getElementById('pass').value + num;
}

document.getElementById('n0').addEventListener('click',function(){
    displayNum(0);
});
document.getElementById('n1').addEventListener('click',function(){
    displayNum(1);
});
document.getElementById('n2').addEventListener('click',function(){
    displayNum(2);
});
document.getElementById('n3').addEventListener('click',function(){
    displayNum(3);
});
document.getElementById('n4').addEventListener('click',function(){
    displayNum(4);
});
document.getElementById('n5').addEventListener('click',function(){
    displayNum(5);
});
document.getElementById('n6').addEventListener('click',function(){
    displayNum(6);
});
document.getElementById('n7').addEventListener('click',function(){
    displayNum(7);
});
document.getElementById('n8').addEventListener('click',function(){
    displayNum(8);
});
document.getElementById('n9').addEventListener('click',function(){
    displayNum(9);
});


document.getElementById('submit-btn').addEventListener('click',function(){
    document.getElementById('notify-cross').style.display ="none";
    document.getElementById('notify-right').style.display ="none";

    if(document.getElementById('pin').value ==document.getElementById('pass').value){
        document.getElementById('notify-right').style.display ="block";
    }
    else{
        document.getElementById('notify-cross').style.display ="block";
    }
});

document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('pass').value='';
});

document.getElementById('back').addEventListener('click',function(){
    let num = document.getElementById('pass').value;
    let newNum = num.slice(0, -1);
    document.getElementById('pass').value = newNum;
});