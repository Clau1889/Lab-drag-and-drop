function toDrag (){
    pic1= document.getElementById("pic_1");
    pic1.addEventListener("dragstart", starDrag, false);

    pic2= document.getElementById("pic_2");
    pic2.addEventListener("dragstart", starDrag, false);

    pic3= document.getElementById("pic_3");
    pic3.addEventListener("dragstart", starDrag, false);

    pic4= document.getElementById("pic_4");
    pic4.addEventListener("dragstart", starDrag, false);

    pic5= document.getElementById("pic_5");
    pic5.addEventListener("dragstart", starDrag, false);

    pic6= document.getElementById("pic_6");
    pic6.addEventListener("dragstart", starDrag, false);

    topBox= document.getElementById("bottom-box");
    topBox.addEventListener("dragenter",function(e){e.preventDefault();},false);
    topBox.addEventListener("dragover",function(e){e.preventDefault();},false);
    topBox.addEventListener("drop", dropped ,false);
}
window.addEventListener("load", toDrag, false);