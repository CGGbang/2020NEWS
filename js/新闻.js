var hotpoint = document.getElementsByClassName("hotpoint");
var newList = document.getElementsByClassName("news");
var newsList = document.getElementsByClassName("newsList");
var Ttime;
var Interal1 = function(){
    var n = parseInt(newsList[0].style.left);
    var z = parseInt(newsList[1].style.left);
    Ttime = setInterval(function(){
        newsList[0].style.left = n + "px";
        newsList[1].style.left = z + "px";
        if(n <= -2300){
            n = 2300;
        }
        if(z <= -2300){
            z = 2300;
        }
        n--;
        z--;
    },5);
}
Interal1();
for(var m = 0; m < newList.length; ++m){
    newList[m].onmouseover = function(){
        clearInterval(Ttime);
    }
    newList[m].onmouseout = function(){
        Interal1();
    }
}
