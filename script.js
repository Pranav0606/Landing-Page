
let list = document.querySelector('.listItems');

document.getElementById("hamburger").addEventListener("click", () => {
    if (list.getAttribute('id') === 'isVisible')
        list.setAttribute("id", "");
    else
        list.setAttribute('id', 'isVisible');
});