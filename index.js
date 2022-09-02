var imgArr = ["Images/Watch4.jpg","Images/img2.jpg","Images/img3.jpg"];
var bodyElement = document.getElementById("bodyTag");
var minIndex =0;
bodyElement.innerHTML = "<img src='"+imgArr[0]+"' height=660px width=100% >";
window.setInterval(function (){
    bodyElement.innerHTML = "<img src='"+imgArr[minIndex]+"' height=660px width=100% >";
    minIndex += 1;
    if(minIndex == imgArr.length){
        minIndex=0;
       }
}, 3000);

$(document).ready(function(){
  $("body").mousedown(function(){
    $("#Footer").fadeIn(2000);
  });
  $("body").mouseout(function(){
      $("#Footer").fadeOut(2000);
      $("#Footer").css("display", "none");
  });
});
