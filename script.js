let clients = document.querySelectorAll('.client');
let clientImage = document.querySelectorAll('.client img');
let imageContainer = document.getElementById("imagePreviewer");
let srcs = new Array();
console.log(srcs);
let mainImageContainer = document.getElementsByClassName('imagePreviewerContainer');
console.log(clientImage);


// FontFace
for(let i = 0; i<clientImage.length; i++)
    srcs[i] = clientImage[i].src;

function previewImg(a)
{
    let img = a.querySelector('img');
    imageContainer.setAttribute('src', img.src);
    mainImageContainer[0].style.opacity = '1';
    mainImageContainer[0].style.top = 50 + '%';
    console.log(a);
}

document.getElementById('delete').addEventListener('click', ()=>{
    mainImageContainer[0].style.opacity = '0';
    mainImageContainer[0].style.top = -100 + '%'; 
    // mainImageContainer[0].style.left = 0 + '%';
});
