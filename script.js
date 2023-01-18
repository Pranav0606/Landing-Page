let clients = document.querySelectorAll('.client');
let clientImage = document.querySelectorAll('.client img');
let imageContainer = document.getElementById("imagePreviewer");
let list = document.querySelector('.listItems');
let srcs = new Array();
console.log(srcs);
let mainImageContainer = document.getElementsByClassName('imagePreviewerContainer');
console.log(clientImage);


// FontFace
for (let i = 0; i < clientImage.length; i++)
    srcs[i] = clientImage[i].src;

function previewImg(a) {
    let img = a.querySelector('img');
    imageContainer.setAttribute('src', img.src);
    mainImageContainer[0].style.opacity = '1';
    mainImageContainer[0].style.top = 50 + '%';
    console.log(a);
}

document.getElementById('delete').addEventListener('click', () => {
    mainImageContainer[0].style.opacity = '0';
    mainImageContainer[0].style.top = -100 + '%';
});


// list.style.left = (parseInt(window.outerWidth) + 100) + 'px';
document.getElementById("hamburger").addEventListener("click", () => {
    list.classList.toggle('isVisible');
    if (list.getAttribute('id') === 'isVisible')
        list.setAttribute("id", "");
    else
        list.setAttribute('id', 'isVisible');
});