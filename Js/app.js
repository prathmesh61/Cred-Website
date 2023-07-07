let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "5% 0%",
    end: "0% 0%",
    // markers: true,
    scrub: 2,
    delay: 2,
    duration: 4,
  },
});

tl1.to(".image-wrapper .img1 ", {
  duration: 3,

  ease: "power2.inOut",
  scrub: 2,
});
tl1.to(".image-wrapper .img2 ", {
  duration: 3,
  left: "20%",
  ease: "power2.inOut",
  scrub: 2,
});
tl1.to(".image-wrapper .img3 ", {
  duration: 3,
  left: "39%",
  ease: "power2.inOut",

  scrub: 2,
});
tl1.to(".image-wrapper .img4 ", {
  duration: 3,
  left: "54%",
  ease: "power2.inOut",

  scrub: 2,
});
tl1.to(".image-wrapper .img5 ", {
  duration: 3,
  left: "72%",
  ease: "power2.inOut",

  scrub: 2,
});

gsap.from("#navbar", {
  opacity: 0,
  duration: 2,
  scrub: 2,
});
gsap.from("#hero > h1", {
  opacity: 0,
  duration: 2,
  scrub: 2,
});
gsap.from("#hero > p", {
  x: -20,
  opacity: 0,
  duration: 2,
  scrub: 2,
});
gsap.from("#hero > button", {
  x: 20,
  opacity: 0,
  duration: 2,
  scrub: 2,
});

let specialBox = gsap.timeline({
  scrollTrigger: {
    trigger: "#mobile",
    start: "40% 0%",
    end: "0% 0%",
    scrub: 1,
    // markers: true,
    duration: 1,
  },
});

specialBox.from("#special ", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "power2.inOut",
});
let specialBox2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#special",
    start: "30% 0%",
    end: "0% 0%",
    scrub: 1,
    // markers: true,
    duration: 1,
  },
});

specialBox2.from("#special2 ", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "power2.inOut",
});

let st = ScrollTrigger.create({
  trigger: ".pin-wrapper",
  pin: ".right > img ",
  start: "0% top",
  end: "70%",
  // markers: true,
});

console.log(st.pin); // pin element (not selector text)

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#special2",
    start: "50% 0%",
    end: "0% 0%",
    scrub: 0.5,
    // markers: true,
    duration: 1,
  },
});

tl3.from(".left-wrapper  .left1 ", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "power2.inOut",
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".left1",
    start: "60% 0%",
    end: "0% 0%",
    scrub: 0.5,
    // markers: true,
    duration: 1,
  },
});

tl4.from(".left-wrapper  .left2 ", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "power2.inOut",
});
let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".left2",
    start: "60% 0%",
    end: "0% 0%",
    scrub: 0.5,
    // markers: true,
    duration: 1,
  },
});

tl5.from(".left-wrapper  .left3 ", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "power2.inOut",
});
let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#fixed-bg",
    start: "10% 0%",
    end: "0% 0%",
    scrub: 1,
    // markers: true,
    duration: 1,
  },
});

tl6.from("#Cta ", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "power2.inOut",
});
