window.onload = function() {
    document.body.onmousedown = function() {detectScreenZone();}
}

function detectScreenZone() {
    X = event.clientX < window.innerWidth/2 ? 'Izquierda' : 'Derecha';  
    Y = event.clientY < window.innerHeight/2 ? 'Arriba' : 'Abajo';  
    alert(`${X} - ${Y}`);
}