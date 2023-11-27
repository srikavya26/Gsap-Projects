document.addEventListener("DOMContentLoaded", function () {
    const background = document.querySelector(".background");
    const content = document.querySelector(".content");

    gsap.fromTo(
        background,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );
});
