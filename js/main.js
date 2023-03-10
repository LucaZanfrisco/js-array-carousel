'use strict';

// Selezione dell'elemento html slider
const slider = document.querySelector('.slider');

// Array di immagini
const images = ['01.webp','02.webp','03.webp','04.webp','05.webp'];
// Definzione della variabile contenitore delle immagini
let itemContent = '';

// Ciclo for per creare i 5 contenitori immagine
for(let i = 0; i < images.length; i++){
    itemContent = `<div class="item"><img src="img/${images[i]}" alt=""></div>`; 
    slider.innerHTML += itemContent;  
}

// Selezione dell'elemento html thumbnail
const thumbnail = document.querySelector('.thumbnail');
// Definizione della variabile contenitore della thumbnail
let thumbContent = '';

// Ciclo per creare i 5 contenitori delle thumbnail
for(let i = 0; i < images.length; i++){
     thumbContent = `<div class="t-img"><img src="img/${images[i]}" alt=""></div>`;
     thumbnail.innerHTML += thumbContent;
}

// Selezione degli elementi html per scorrere lo slider
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// Selezione di tutti gli elementi html con classe item
const itemList = document.querySelectorAll('.item');
// Selezione di tutti gli elementi html con classe t-img
const thumbList = document.querySelectorAll('.t-img');

// Definizione e assegnazione di una variabile 
let active = 0;
// Assegnazione al primo elemento html item la classe show
itemList[active].classList.add('show');
// Assegnazione al primo elementi html t-img la classe selected
thumbList[active].classList.add('selected');

// Creazione di un evento al click del bottone su
next.addEventListener(
    'click',
    function(){
        itemList[active].classList.remove('show');
        thumbList[active].classList.remove('selected');
        active++;
        if(active === images.length){
            active = 0;
        }
        itemList[active].classList.add('show');
        thumbList[active].classList.add('selected');
    }
)

// Creazione di un evento al click del bottono giu
prev.addEventListener(
    'click',
    function(){
        itemList[active].classList.remove('show');
        thumbList[active].classList.remove('selected');
        active--;
        if(active < 0){
            active = images.length - 1;
        }
        itemList[active].classList.add('show');
        thumbList[active].classList.add('selected');
    }
)