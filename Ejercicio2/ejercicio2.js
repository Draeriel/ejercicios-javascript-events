window.onload = function() {
    pList = document.getElementsByTagName('p');
    document.getElementById('info').onmousemove = function() {
        pList[0].innerHTML = `Navegador [${event.clientX}, ${event.clientY}]`;   
        pList[1].innerHTML = `Pàgina [${event.screenX}, ${event.screenY}]`;  
    }
    document.getElementById('info').onmouseup = function() {
        if (event.which === 1) {
            pList[2].innerHTML = "Clic esquerre No";
        }
        if (event.which === 3) {
            pList[3].innerHTML = "Clic dret No";
        }
    }
    document.getElementById('info').onmousedown = function() {
        if (event.which === 1) {
            pList[2].innerHTML = "Clic esquerre Sí";
        }
        if (event.which === 3) {
            pList[3].innerHTML = "Clic dret Sí";
        }
    }
}
