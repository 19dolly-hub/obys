const tl = gsap.timeline();

tl.from("#loader p", {
  y: 150,
  stagger: 0.3,
  delay: 0.5,
  duration: 0.5,
});

tl.from("#counter, #now", {
  opacity: 0,
  onStart: function () {
    const counter = document.querySelector("#counter span");
    let count = 0;

    const loadCounter = setInterval(function () {
      if (count < 100) {
        counter.innerHTML = count++;
      } else {
        counter.innerHTML = count;
        clearInterval(loadCounter);
      }
    }, 35);
  },
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 4,
});

tl.from("#page1", {
  delay: 0.2,
  y: 1600,
  opacity: 0,
  ease: Power4,
});

tl.to("#loader", {
  display: "none",
});
