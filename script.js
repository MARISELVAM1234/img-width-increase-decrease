var imgElement = document.querySelectorAll("img") [0];
var firstBtnElement;
var realWidth ;
function btnFunction (){
    firstBtnElement = document.getElementById("btn1");  
  realWidth = imgElement.clientWidth;
   imgElement.style.width = realWidth +  20 + 'px';
}


var secBtnElement;
function btnFunction2(){
    secBtnElement = document.getElementById("btn2");  
   imgElement.style.width =  realWidth - 20 +"px" ;  
   btnFunction() 
}