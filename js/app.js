const parallax_el = document.querySelectorAll(".parallax");

window.addEventListener("mousemove", (e) => {
    const xValue = e.clientX - window.innerWidth / 2;
    const yValueRaw = e.clientY - window.innerHeight / 2;

    const maxYOffset = 100; // limit in px
    const yValue = Math.max(-maxYOffset, Math.min(yValueRaw, maxYOffset));

    parallax_el.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || 0.05);
        el.style.transform = `translate(-50%, -50%) translate(${xValue * speed}px, ${yValue * speed}px)`;
    });
});

/* GSAP */



