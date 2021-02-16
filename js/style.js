
document.querySelector(".header .navbar .open-toggler").onclick = () => {
    if (document.querySelector(".header .navbar .info ul").classList.contains("active")) {
        document.querySelector(".header .navbar .info ul").classList.replace("active", "show");
        document.querySelector(".header .navbar .open-toggler").src = ('./imgs/icon-close.svg');
        document.querySelector(".header .slider .image").style.display = "none";
        document.querySelector(".header .overlay").classList.remove("active");

    } else {
        document.querySelector(".header .navbar .info ul").classList.replace("show", "active");
        document.querySelector(".header .navbar .open-toggler").src = ('./imgs/icon-hamburger.svg');
        document.querySelector(".header .slider .image").style.display = "block";
        document.querySelector(".header .overlay").classList.add("active");
    }
} 