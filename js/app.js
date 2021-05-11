// Aos
AOS.init({
  duration: 2000,
});

// typing
const typed = new Typed(".typed", {
  strings: ["¡Bienvenido!"],
  // stringsElement: "#cadena-texto",
  typeSpeed: 100,
  backSpeed: 50,
  smartBackspace: true,
  backDelay: 3500,
  loop: true,
  loopCount: false,
  showCursor: false,
});

// hero-styles
const likes = [
  "aprender cosas nuevas",
  "resolver problemas",
  "trabajar en equipo",
];
let i = 0;

const like = () => {
  if (i === likes.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("likes").innerHTML = likes[i];
};
like();

setInterval(() => {
  like();
}, 1500);

// Year
const span = document.getElementById("year");
const year = new Date();
span.innerHTML = `${year.getFullYear()}`;

// Menu Mobile
const barra = document.getElementById("btnMenu");
const menuSide = document.querySelector(".menu-side");
const menuMobile = document.querySelector(".menu-mobile");

barra.addEventListener("click", function () {
  menuSide.classList.toggle("active");
  menuMobile.classList.toggle("line");
});

const startMenu = document.getElementById("start-menu");
const aboutMeMenu = document.getElementById("about-me-menu");
const proyectsMenu = document.getElementById("proyects-menu");
const habilityMenu = document.getElementById("hability-menu");
const contactMenu = document.getElementById("contact-menu");

function scrollDistance(e, element) {
  e.preventDefault();
  let hash = element.getAttribute("href");
  let target = document.querySelector(hash);
  let headerOffset = 100;
  let elementPosition = target.offsetTop;
  let offsetPosition = elementPosition - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function scrollToReference(e, element) {
  scrollDistance(e, element);
  menuSide.classList.toggle("active");
  menuMobile.classList.toggle("line");
}

startMenu.addEventListener("click", (e) => {
  scrollToReference(e, startMenu);
});
aboutMeMenu.addEventListener("click", (e) => {
  scrollToReference(e, aboutMeMenu);
});
proyectsMenu.addEventListener("click", (e) => {
  scrollToReference(e, proyectsMenu);
});
habilityMenu.addEventListener("click", (e) => {
  scrollToReference(e, habilityMenu);
});
contactMenu.addEventListener("click", (e) => {
  scrollToReference(e, contactMenu);
});

//Scroll
const start = document.querySelectorAll(".start");
const aboutMe = document.querySelectorAll(".aboutMe");
const proyects = document.querySelectorAll(".proyects");
const hability = document.querySelectorAll(".hability");
const contact = document.querySelectorAll(".contact");

start.forEach((st) => {
  st.addEventListener("click", (e) => {
    scrollDistance(e, st);
  });
});

aboutMe.forEach((st) => {
  st.addEventListener("click", (e) => {
    scrollDistance(e, st);
  });
});

proyects.forEach((st) => {
  st.addEventListener("click", (e) => {
    scrollDistance(e, st);
  });
});

hability.forEach((st) => {
  st.addEventListener("click", (e) => {
    scrollDistance(e, st);
  });
});

contact.forEach((st) => {
  st.addEventListener("click", (e) => {
    scrollDistance(e, st);
  });
});

// Fixed Header

const fixedHeader = document.getElementById("fixed-header");

window.addEventListener("scroll", () => {
  let offsetHeader = 750;
  if (window.scrollY >= offsetHeader) {
    fixedHeader.style.marginTop = "0px";
  } else if (window.scrollY <= offsetHeader) {
    fixedHeader.style.marginTop = "-90px";
  }
});

// Particles
particlesJS({
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#fff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#fff",
      opacity: 0.6,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
});
