var images = [];
images.length = 25;

async function getData(){
    for(var i = 1 ; i < images.length ; i++){
        images[i] = new Image();
      await  fetch('https://furkanergocen.github.io/Advance-Programming-Languages/HW_3/Sprite-Images/'+'cat (' + i + ').png').then(res=>res.blob())
                                                 .then(blob => {
                                                    let objectURL = URL.createObjectURL(blob);
                                                    images[i].src = objectURL;
                                                 });
    }

}
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

getData();

var i = 1;
var y = 0;
var test;

var temp=0;

btnPause.addEventListener("click", function(){
    if(temp==0){
    clearInterval(test);
        temp=1;
    }
    else{
        test = setInterval(function(){
            i++;
            if( i >= 10){
                i = 1;
            }
            c.clearRect(275,275,275,275);
            c.drawImage(images[i],275,275,275,275);
        },150)
        temp=0;
    }
});

btnStop.addEventListener("click", function(){
    clearInterval(test);
});

btnNext.addEventListener("click", function(){
    i++;
    if(i == 10){
        i =1;
    }
    c.clearRect(275,275,275,275);
    c.drawImage(images[i],275,275,275,275);
});

btnPrev.addEventListener("click", function(){
    i--;
    if(i == 0){
        i = 10;
    }
    c.clearRect(275,275,275,275);
    c.drawImage(images[i],275,275,275,275);
});

btnStart.addEventListener("click", function(){
    i=1;
    test = setInterval(function(){
        i++;
        y++;
        if( i >= 10){
            i = 1;
        }
        c.clearRect(275,275,275,275);
        c.drawImage(images[i],275,275,275,275);
    },150)
});

