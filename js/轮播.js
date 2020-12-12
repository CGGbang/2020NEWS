    var com = window.confirm("欢迎观看");
    if(com ||!com){
        var timerThree = null;
        var time = null;
        var mark = null;
        var Interval = function(){
            i = parseInt(dynamicPicture.style.left);
            timerThree = setInterval(function(){
                time = setInterval(function(){
                    dynamicPicture.style.left = i + "px";
                    if(i % 700 == 0 && mark){
                        for(var x = 0; x < switchList.length; ++x){
                            switchList[x].style.backgroundColor = "#777";
                        }
                        switchList[parseInt(-i/700)].style.backgroundColor = "white";
                        clearInterval(time);
                    }
                    i -= 10;
                    i = -(-i % 2800);
                    mark = true;
                },1);
            },5000);
        }
        var switchList = document.getElementsByClassName("switch");
        var pictureList = document.getElementsByClassName("picture");
        var dynamic = document.getElementById("dynamic");
        var dynamicPicture = document.getElementById("dynamicPicture");
        var i = 0;
        for(var y = 0; y < switchList.length; ++y){
            switchList[y].onclick = function(){
                var temp = this.title;
                for(var z = 0; z < switchList.length; ++z){
                    switchList[z].style.backgroundColor = "#777";
                }
                this.style.backgroundColor = "white";
                console.log(parseInt(parseInt(dynamicPicture.style.left)/700));
                if(parseInt(this.title) > parseInt(- parseInt(dynamicPicture.style.left)/700)){
                    clearInterval(timerThree);
                    var index = parseInt(dynamicPicture.style.left);
                    var timerOne = setInterval(function(){
                        dynamicPicture.style.left = index + "px";
                        if(-index >= parseInt(temp) * 700){
                            clearInterval(timerOne);
                            mark = false;
                            Interval();
                        }
                        index -= 10;
                    }, 1);
                } else{
                    clearInterval(timerThree);
                    var index = parseInt(dynamicPicture.style.left);
                    var timerTwo = setInterval(function(){
                        dynamicPicture.style.left = index + "px";
                        if(-index <= parseInt(temp) * 700){
                            clearInterval(timerTwo);
                            mark = false;
                            Interval();
                        } 
                        index += 10;
                    }, 1);
                }
            }
        }
        mark = false;// 第一次进入的时候不清除定时执行
        switchList[0].style.backgroundColor = "white";
        Interval();
        window.onblur = function () {
            document.title = "退出页面";
            clearInterval(timerThree);
        }
        window.onfocus = function () {
            document.title = "进入页面";
            mark = false;
            Interval();
        }
    }
