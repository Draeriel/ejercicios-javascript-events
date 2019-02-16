window.onload = function() {
    pList = document.getElementsByTagName('p');
    document.getElementById('info').onmousemove = function() {onMouseMove()};
    document.getElementById('info').onmouseup = function() {onMouseUp()};
    document.getElementById('info').onmousedown = function() {onMouseDown()};
    document.body.onkeydown = function() {onKeyDown()};
    document.body.onkeyup = function() {onKeyUp()};
}

function onMouseMove() {
    pList[0].innerHTML = `Navegador [${event.clientX}, ${event.clientY}]`;   
    pList[1].innerHTML = `Pàgina [${event.screenX}, ${event.screenY}]`;  
}

function onMouseDown() {
    this.changeColor('yellow');
    if (event.which === 1) {
        pList[2].innerHTML = "Clic esquerre Sí";
    }
    if (event.which === 2) {
        pList[3].innerHTML = "Clic centre Sí";
    }
    if (event.which === 3) {
        pList[4].innerHTML = "Clic dret Sí";
    }
}

function onMouseUp() {
    this.changeColor('white');
    if (event.which === 1) {
        pList[2].innerHTML = "Clic esquerre No";
    }
    if (event.which === 2) {
        pList[3].innerHTML = "Clic centre No";
    }
    if (event.which === 3) {
        pList[4].innerHTML = "Clic dret No";
    }
}

function onKeyDown() {
    this.changeColor('blue');
    pList[5].innerHTML = `Caràcter [${event.key}]`;
    pList[6].innerHTML = `Codi [${event.keyCode}]`;
    this.hideMouseDisplay(true);
}

function onKeyUp() {
    this.changeColor('white');
    this.hideMouseDisplay(false);
}

function changeColor(color) {
    document.getElementById('info').style['background-color'] = color;
}

function hideMouseDisplay(hideMouse) {
    for (let p of pList) {
        document.getElementsByTagName('h1')[0].innerHTML = hideMouse ? 'Teclat' : 'Ratolí';
        p.style.display = hideMouse ? 'none' : 'block';
        pList[5].style.display = hideMouse ? 'block' : 'none';
        pList[6].style.display = hideMouse ? 'block' : 'none';
    }
}