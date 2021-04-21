//WELCOME
let show = true;

const appear = document.querySelector(".go");
const all =document.querySelector(".all")

function clear() {
    appear.classList.toggle("on", show)

    all.style.display = `block`
}

function begin() {
    setTimeout(() => {
        clear()
    }, 2300)
}

window.addEventListener("load", begin);

//ANIME SCROLL

const target = document.querySelectorAll("[data-anime]");
const animationClass = 'animate';

function animeScroll() {
    const windowTope = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(elemento) {
        if((windowTope) > elemento.offsetTop) {
            elemento.classList.add(animationClass);
        } else {
            elemento.classList.remove(animationClass);
        }
    })
}

animeScroll();

window.addEventListener("scroll", function() {
    animeScroll();
})

//CONTAINER WELCOME

let showtwo = true

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = showtwo ? "hidden" : "initial"

    menuSection.classList.toggle("on", showtwo);
    showtwo = !showtwo;
})

let time = 2000;
let currentOrbesIndex = 0;
let orbes = document.querySelectorAll(".marbles .circle")
let max = orbes.length;

function nextOrbe() {
    orbes[currentOrbesIndex].classList.remove("selected");
    currentOrbesIndex++;

    if(currentOrbesIndex >= max)
    currentOrbesIndex = 0;

    orbes[currentOrbesIndex]
    .classList.add("selected");
}

function start() {
    setInterval(() =>{
        nextOrbe()
    }, time);
};

window.addEventListener("load", start);

//CONTAINER FIVE
const formationcontent = document.querySelector(".formationcontent");
const formationslist = document.querySelector(".formationslist");
const formations = [
    {
        content: "Terapia Inteligente A Casa Saudável",
    },
    {
        content: "Técnica Botox Cristalino",
    },
    {
        content: "Terapia Reprogramação 4D com Áudios Frequenciais",
    },
    {
        content: "Terapia Inteligente Preenchimento de Sulcos e Rugas",
    },
    {
        content: "Terapia Inteligente Beleza 5D",
    },
    {
        content: "Terapia Inteligente Anti Celulite, Gorduras e Flacidez",
    },
    {
        content: "Terapia Inteligente de Emagrecimento",
    },
    {
        content: "Terapia Inteligente de Rejuvenescimento",
    },
    {
        content: "Técnica Water Healing",
    },
    {
        content: "Técnica Terapêutica Oráculo Dos Anjos",
    },
    {
        content: "Técnica Terapêutica Oráculo de Cristais",
    },
    {
        content: "Terapia Inteligente Capilar",
    },
    {
        content: "Constelação DNA do Amor",
    },
    {
        content: "Tratamento Bioenergético Integrativo",
    },
    {
        content: "Técnica Limpeza de Memórias e Registros",
    },
    {
        content: "Técnica Limpeza e Reprogramação Intra Uterina",
    },
    {
        content: "Técnica Limpeza e Reprogramação Anual",
    },
    {
        content: "Técnica Reprogramação e Limpeza Energética Total",
    },
    {
        content: "Técnica Reprogramação - Ativação de Energias e Comandos Positivos",
    },
    {
        content: "Terapia de Reprogramação Total - 5 Módulos",
    },
    {
        content: "Técnica Master Healing",
    },
    {
        content: "Técnica DNA Master",
    },
    {
        content: "Técnica Sintonia Taquiônica Iridescente",
    },
    {
        content: "Técnica de Harmonização Ancestralidade",
    },
    {
        content: "Técnica Cristal Healing 7D",
    },
    {
        content: "Técnica Alinhamento Energético 7D",
    },
    {
        content: "Técnica Anatomia Energética",
    },
    {
        content: "Terapia do Perdão Inteligente",
    },
    {
        content: "Terapia do Amor Inteligente",
    },
    {
        content: "Técnica Mandalas Terapêuticas",
    },
    {
        content: "Técnica Grades e Mandalas Cristalinas",
    },
    {
        content: "Técnicas Decretos Energéticos & Águas Energizantes",
    },
    {
        content: "Formação Terapêutica Terapia Integrativa para Animais e Plantas",
    },
    {
        content: "Formação Terapêutica Técnica Drone Energético",
    },
    {
        content: "Formação Terapêutica Técnica Estado de Não Matrix",
    },
    {
        content: "Formação Terapêutica Técnica Harmonização de Ancestralidade",
    },
    {
        content: "Formação Terapêutica Terapia Inteligente dos Chakras",
    },
    {
        content: "Formação Terapêutica Oráculo Terapêutico dos Raios e Mestres Sagrados",
    },
    {
        content: "Formação Terapêutica Técnica Mandalas Master e da Nova Era",
    },
    {
        content: "Formação Terapêutica Técnica Decretos Energéticos 5D",
    },
    {
        content: "Formação Terapêutica Terapia de Programação de Energia Vital, Campo Eletromagnético, Frequência Vibracional e Emoções Inconscientes",
    },
];

formations.map(formation => {
    const formationclone = formationslist.cloneNode(true);

    formationclone.querySelector(".textformation").innerHTML = formation.content;
    formationcontent.appendChild(formationclone);
});

let circles = document.querySelectorAll(".circlelist");
let maximum = circles.length;

function animeBall() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    circles.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add("select");
        } else {
            element.classList.remove("select");
        }
    })
}

animeBall();

if(maximum) {
    window.addEventListener('scroll', function() {
        animeBall();
    })
}

//SLIDER

let currentImageIndex = 0;
const images = document.querySelectorAll("#slider .image iframe");
const maxrange = images.length;

let currentBulletIndex = 0;
const bullets = document.querySelectorAll("#slider .image .bullets .bullet")

function nextImage() {
    images[currentImageIndex].classList.remove("selecionado");
    bullets[currentBulletIndex].classList.remove("select");

    currentImageIndex++;
    currentBulletIndex++;

    if(currentImageIndex >= maxrange) {
        currentImageIndex = 0;
        currentBulletIndex = 0;
    }

    images[currentImageIndex].classList.add("selecionado");
    bullets[currentBulletIndex].classList.add("select");
}

function downImage() {
    images[currentImageIndex].classList.remove("selecionado");
    bullets[currentBulletIndex].classList.remove("select");

    currentImageIndex--;
    currentBulletIndex--;

    if(currentImageIndex <= -1) {
        currentImageIndex = 11;
        currentBulletIndex = 11;
    }

    images[currentImageIndex].classList.add("selecionado");
    bullets[currentBulletIndex].classList.add("select");
}