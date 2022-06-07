const scrollToTopBtn = document.getElementById("scrolltotop");

document.addEventListener("scroll", handleScroll);

function handleScroll() {
    if (window.scrollY > 600) {
        scrollToTopBtn.style.display = "block";
    } else {
    scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}