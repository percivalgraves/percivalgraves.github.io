var countDownDate =  new Date("July 16, 2018 14:44:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("CountdownTimer").innerHTML = seconds + "s";
    if(distance < 0){
        clearInterval(x);
        document.getElementById("CountdownTimer").innerHTML = "Wohoo";
        var audio = new Audio('audio/woohoo.mp3');
        audio.play();
    }
},1000)
