window.onload = function() {
    for (let a of document.getElementsByTagName('a')) {
        a.onclick = function() {hideOrDisplayContent(a.previousElementSibling.id)};
    }
}

function hideOrDisplayContent(id) {

    let content = document.getElementById(id);

    if (content.style.display === 'block') {
        content.style.display = 'none';
        content.nextElementSibling.innerHTML = 'Mostrar contenidos';
    } else {
        content.style.display = 'block';
        content.nextElementSibling.innerHTML = 'Ocultar contenidos';
    }  
}