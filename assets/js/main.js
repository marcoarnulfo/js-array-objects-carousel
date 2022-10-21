
const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];




const slidesElement = document.querySelector(".slides")
const containerElement = document.querySelector(".title")
const descriptionElement = document.querySelector(".description")




// mi creo una variabile per monitorare la slide attiva e manipolarla

let immagineAttiva = 0

for (let index = 0; index < images.length; index++) {
    const element = images[index];
    const slideHtml =
        ` <img class="${index === immagineAttiva ? 'active' : ''}" src="${element.image}" alt=""> `
    slidesElement.insertAdjacentHTML("beforeend", slideHtml)
    const titleElement = `<h1 class="${index === immagineAttiva ? 'active' : ''}">${element.title}</h1>`
    containerElement.insertAdjacentHTML("beforeend", titleElement)
    const textElement = `<p class="fst-italic ${index === immagineAttiva ? 'active' : ''}">${element.text}</p>`
    descriptionElement.insertAdjacentHTML("beforeend", textElement)
}



// ${index === 0 ? 'active' : ""}
// se index è uguale a 0 ? allora aggiungi "active"
// : altrimenti "" (non aggiungere niente)


// selezionare pulsati precedente e prossimo

const before_left = document.querySelector(".before_top")

const next_right = document.querySelector(".next_bot")


next_right.addEventListener("click", function () {
    console.log("prossima img");
    const slides = document.querySelectorAll(".slides > img");
    console.log(slides);
    const titles = document.querySelectorAll("h1")
    const description = document.querySelectorAll("p")

    const slideCorrente = slides[immagineAttiva]; // 0
    const currentTitle = titles[immagineAttiva]; 
    const currentDescription = description[immagineAttiva]
    console.log(slideCorrente);
    // rimuovo classe "active"
    currentTitle.classList.remove("active")
    slideCorrente.classList.remove("active") // rimuovi classe attiva
    currentDescription.classList.remove("active")

    if (immagineAttiva < 4) {
        immagineAttiva++
    } else {
        immagineAttiva = 0
    }
    // seleziono seconda immagine
    let nextTitle = titles[immagineAttiva]
    let prossimaSlide = slides[immagineAttiva]; // slide numero 1
    let nextDescription = description[immagineAttiva]
    console.log(prossimaSlide, immagineAttiva);
    // aggiungo classe attiva
    nextDescription.classList.add("active")
    nextTitle.classList.add("active")
    prossimaSlide.classList.add("active")
})
//creo evento al click del bottone before_top

before_left.addEventListener("click", function () {
    // 
    console.log(" img precedente");
    const slides = document.querySelectorAll(".slides > img");
    const titles = document.querySelectorAll("h1")
    const description = document.querySelectorAll("p")

    const currentTitle = titles[immagineAttiva]; 
    const currentDescription = description[immagineAttiva]
    const slideCorrente = slides[immagineAttiva];
    // rimuovo classe "active"
    slideCorrente.classList.remove("active")
    currentTitle.classList.remove("active")
    currentDescription.classList.remove("active")
    // incremento immagine attiva

    if (immagineAttiva === 0) {
        immagineAttiva = 4
    } else {
        immagineAttiva--
    }
    // seleziono seconda immagine
    const prossimaSlide = slides[immagineAttiva];
    let nextDescription = description[immagineAttiva]
    let nextTitle = titles[immagineAttiva]
    console.log(prossimaSlide);
    // aggiungo classe attiva
    prossimaSlide.classList.add("active")
    nextDescription.classList.add("active")
    nextTitle.classList.add("active")

})
