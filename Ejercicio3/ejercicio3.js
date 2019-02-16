window.onload = function() {
    divList = document.getElementsByTagName('div');
    for (let div of divList) {
        if (div.id !== 'wrapper') {
            console.log(div.id);
            document.getElementById(div.id).onmouseover = function() {footerText();}
        }
    } 
}

function footerText() {
    const elementId = event.srcElement.tagName === 'P' ? event.srcElement.parentNode.id : event.srcElement.id; 
    document.getElementById('footer').innerHTML = `This is the Footer - Mouse over: ${elementId}`;
}