const bg = document.querySelector(".main__bg");
const mainTxt = document.querySelector(".main__title")
const girl = document.querySelector(".girl__img");
const rocks = document.querySelector(".rock__img");
const faders = document.querySelectorAll(".fade__in");
const imgFaders = document.querySelectorAll(".fade__left");
const sectionTwo = document.querySelector(".container__content")
const navTitle = document.querySelector(".left__title")
const navBtn = document.querySelector(".btn")

const textObserver = new IntersectionObserver(
    (entries, appearOnScroll) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove("appear");
            } else {
                entry.target.classList.add("appear");
                // appearOnScroll.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 1,
        rootMargin: "0px 0px -20px 0px",
    }
);
faders.forEach((fader) => {
    textObserver.observe(fader);
});

const imgObserver = new IntersectionObserver(
    (entries, appearOnScroll) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove("move");
                // return;
            } else {
                entry.target.classList.add("move");
                // appearOnScroll.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 1,
        rootMargin: "0px 0px -20px 0px",
    }
);
imgFaders.forEach((imgFader) => {
    imgObserver.observe(imgFader);
});

const navTitleObserver = new IntersectionObserver(
    (entries, appearOnScroll) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                navTitle.classList.remove("text-black")
                navBtn.classList.remove("btn__light")
            } else {
                navTitle.classList.add("text-black")
                navBtn.classList.add("btn__light")
                // appearOnScroll.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.7,
        rootMargin: "0px 0px -10px 0px"
    }
)
navTitleObserver.observe(sectionTwo)

window.addEventListener("scroll", () => {
    var value = window.scrollY;
    girl.style.cssText = `top: ${value * 0.5}px;`;
    rocks.style.cssText = `top: -${value * 0.001}px;`;
    mainTxt.style.cssText = `left: ${48 + (value * 0.1)}vw;${value <= 280 ? "opacity: 1;" : "opacity: 0;"}`
    console.log(value);
});