var x = document.getElementsByClassName("img-con");

Array.from(x).forEach(e => {
    e.addEventListener('mouseover', () => {
        e.style.opacity = "0.7";
        e.style.transition = "0.5s";
    });
    e.addEventListener('mouseout', () => {
        e.style.transition = "0.2s";
        e.style.opacity = "";
        setTimeout(() => {
            e.style.transition = "";
        }, 300);
    });
    window.addEventListener("resize", function () {
        e.style.opacity = "";
        e.style.transition = "";

    });
});
