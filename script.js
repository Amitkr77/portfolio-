console.clear(); // Start with a clean console on refesh 
const stagger = 1;
const tl = gsap.timeline({
  repeat: -1
});

tl.from('h1 span', {
  duration: 1.5,
  yPercent: 100,
  ease: "power4",
  stagger: stagger
});

tl.to('h1 span', {
  duration: 1.5,
  yPercent: -100,
  ease: "power4",
  stagger: stagger
}, stagger);

