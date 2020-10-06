// GET SOME ANIMATIONS IN HERE!!!!
window.onload(animations());

function animations(){
    const tl = gsap.timeline({defaults: {ease: "power1.out"}});

    tl.to(".intro", {y: "-100%", duration: 1, delay: 1});
    tl.fromTo(".intro", {opacity: 1}, {opacity: 0, duration: 1}, "-=1");
    tl.fromTo(".card", {y: "100%"}, {y: "0%", duration: 1, stagger: 0.25}, "-=1");
    tl.fromTo("#logo-blk", {y: "-400%", rotation: "-30"}, {y: "-100%", rotation: "0", duration: 0.5}, "-=0.5");
}
    
