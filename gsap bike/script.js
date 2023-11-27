document.addEventListener("DOMContentLoaded", function () {
    gsap.from("header", { opacity: 0, duration: 1, y: -50 });
    gsap.from(".bike", {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        y: 50,
    });
    gsap.from("footer", { opacity: 0.5, duration: 1, y: 50 });
    const bike = document.querySelectorAll('.bike');

});
