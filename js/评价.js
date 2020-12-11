var btn = document.getElementById("btn");
var choiceList = document.getElementsByClassName("choice");

btn.onclick = function(){
    if(choiceList[0].checked){
        alert("谢谢好评");
    }
    else if(choiceList[1].checked){
        alert("我们会继续努力改善您的体验");
    }
    else if(choiceList[2].checked){
        alert("对于您的差评我们感到十分抱歉，我们会努力改善");
    }
    else{
        alert("您还没有评价");
    }

}