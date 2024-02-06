gsap.to(".lid", { rotationX: 180, duration: 0.5, onComplete: slideEnvelope });

function slideEnvelope() {
  gsap.to(".envelope, .cover, .lid, .shadow", {
    y: "80vmin",
    duration: 3,
    delay: 1,
  });
}
