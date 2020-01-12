current = 0;
imgArray=["./images/to.jpg","./images/fika.jpg","./images/morberg.jpg"];
imgDesc=["En bra bok!","En ännu bättre bok!!","Bästa boken!!!"];
function next(){ //alert("next\n"+document.getElementById("bild").getAttribute("src"));
    if(current < 2){ 
        document.getElementById("bild").setAttribute("src",imgArray[++current]);
        document.getElementById("caption").innerText= imgDesc[current];
    }
    else{
        current = 0;
        document.getElementById("bild").setAttribute("src",imgArray[current]);
        document.getElementById("caption").innerText = imgDesc[current];
    } 
}

function prev(){ //alert("next\n"+document.getElementById("bild").getAttribute("src"));
    if(current == 0){ 
        current = 2;
        document.getElementById("bild").setAttribute("src",imgArray[2]);
        document.getElementById("caption").innerText = imgDesc[2];
    }
    else{
        document.getElementById("bild").setAttribute("src",imgArray[--current]);
        document.getElementById("caption").innerText = imgDesc[current];
    } 
}
