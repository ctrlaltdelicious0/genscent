// LOAD CHECK
console.log("lenis.js loaded!");

// LENIS

// INITIALIZE LENIS
const lenis = new Lenis();

// USE RAF TO CONTINUOUSLY UPDATE THE SCROLL
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);