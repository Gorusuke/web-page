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
// console.info(document.documentElement.scrollHeight);
// console.info(window.innerHeight);
// console.info(window.pageYOffset);

function scrollDistance(e, distance) {
  e.preventDefault();
  window.scroll(0, distance);
  // let bar =
  //   document.documentElement.scrollHeight -
  //   (window.innerHeight + window.pageYOffset);
  menuSide.classList.toggle("active");
  menuMobile.classList.toggle("line");
}

startMenu.addEventListener("click", (e) => {
  scrollDistance(e, 0);
});
aboutMeMenu.addEventListener("click", (e) => {
  scrollDistance(e, 600);
});
proyectsMenu.addEventListener("click", (e) => {
  scrollDistance(e, 1430);
});
habilityMenu.addEventListener("click", (e) => {
  scrollDistance(e, 3700);
});
contactMenu.addEventListener("click", (e) => {
  scrollDistance(e, 4450);
});

//Scroll
const start = document.querySelectorAll(".start");
const aboutMe = document.querySelectorAll(".aboutMe");
const proyects = document.querySelectorAll(".proyects");
const hability = document.querySelectorAll(".hability");
const contact = document.querySelectorAll(".contact");

start.forEach((st) => {
  st.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0, 0);
  });
});

aboutMe.forEach((st) => {
  st.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0, 890);
  });
});

proyects.forEach((st) => {
  st.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0, 1800);
  });
});

hability.forEach((st) => {
  st.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0, 3800);
  });
});

contact.forEach((st) => {
  st.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0, 4500);
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
  // interactivity: {
  //   detect_on: "canvas",
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "repulse",
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: "push",
  //     },
  //     resize: true,
  //   },
  //   modes: {
  //     grab: {
  //       distance: 400,
  //       line_linked: {
  //         opacity: 1,
  //       },
  //     },
  //     bubble: {
  //       distance: 400,
  //       size: 40,
  //       duration: 2,
  //       opacity: 8,
  //       speed: 3,
  //     },
  //     repulse: {
  //       distance: 200,
  //       duration: 0.4,
  //     },
  //     push: {
  //       particles_nb: 4,
  //     },
  //     remove: {
  //       particles_nb: 2,
  //     },
  //   },
  // },
  retina_detect: true,
});
