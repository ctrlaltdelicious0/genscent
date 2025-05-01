// LOAD CHECK
console.log("index.js loaded");

// ANIMATIONS

// ANIMATIONS - HEADER
const titleElement = document.querySelector(".title");
const subTitleElement = document.querySelector(".sub_title");

const titleSplit = new SplitText(titleElement, { type: "chars" });
const subTitleSplit = new SplitText(subTitleElement, { type: "chars" });

gsap.from(titleSplit.chars, {
    opacity: 0,
    y: 10,
    ease: "power4.out",
    delay: 1,
    duration: 1,
    stagger: 0.08,
});

gsap.from(subTitleSplit.chars, {
    opacity: 0,
    y: 20,
    ease: "power4.out",
    delay: 1.3,
    duration: 0.5,
    stagger: 0.03,
});

// ANIMATIONS - MAIN CONTENT
document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".main_animation_container",
            start: "top 100%",
            end: "top 40%",
            scrub: 1,
            toggleActions: "play none none none",
        }
    });

    tl.fromTo(".main_animation_container",
        {
            opacity: 0,
            y: 100,
        },
        {
            opacity: 1,
            y: 0,

            delay: 0.5,
            duration: 1,
            stagger: 0.3,
        });
});

// SWIPER CAROUSEL
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 500,
    pagination: {
        el: ".swiper-pagination",
    },
    simulateTouch: true,
    grabCursor: true,
});