const parallax_el = document.querySelectorAll(".parallax");
const main=document.querySelector("main")

 if(window.innerWidth>=725){
    main.style.maxHeight= `$(window.innerWidth * 0.6)px`;
 }
 else{
    main.style.maxHeight= `$(window.innerWidth * 1.6)px`;

 }


window.addEventListener("mousemove", (e) => {
    if(timeline.isActive()) return;
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

let timeline = gsap.timeline();

    Array.from(parallax_el)
    .filter(el=>!el.classList.contains("text"))
    .forEach(el => {
        timeline.from(el, {
            top: `${el.offsetHeight / 2 + Number(el.dataset.distance)}px`,
            duration: 3.5,
            ease:"power3.out",
        }, "1");
    });

    timeline
    .from(".text h1",{
        y:window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top +200 ,
        duration:2,
    },
    "2.5")
    .from(".text h2",{
        y:-150,
        opacity:0,
        duration:1.5,
    },
    "3")
    .from(".hide",{
        opacity:0,
        duration:1.5

    },"3")
    

window.dispatchEvent(new MouseEvent("mousemove", {
    clientX: window.innerWidth / 2,
    clientY: window.innerHeight / 2
  }));
