let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "10% 0%",
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
