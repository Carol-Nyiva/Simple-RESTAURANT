//CREATING A SELECT ELEMENT FUNCTION
//creating a clickable event 
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});