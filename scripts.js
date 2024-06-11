function addContent(id) {
    const box = document.getElementById(id);
    const newImage = document.createElement('img');
    newImage.src = 'taça.jpg'; 
    box.appendChild(newImage);
}
