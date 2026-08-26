const thumbnail = document.querySelector(".thumbnail");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".header-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

const thumbnails = [
    { src: "coriolis.png", alt: "Coriolis Effect" },
    { src: "beadOnHooop.png", alt: "Bead on Hoop" },
    { src: "chargeInField.png", alt: "Charge in Electric and Magnetic Fields" },
    { src: "projectile.png", alt: "Projectile Motion" },
    { src: "springIntro.png", alt: "Spring - Introductory simulation" },
    { src: "springInter.png", alt: "Spring - Intermediate simulation" }
];

// Preload the images so each transition appears immediately.
thumbnails.forEach(({ src }) => {
    const image = new Image();
    image.src = src;
});

let currentThumbnail = 0;

setInterval(() => {
    thumbnail.classList.add("is-changing");

    setTimeout(() => {
        currentThumbnail = (currentThumbnail + 1) % thumbnails.length;
        thumbnail.src = thumbnails[currentThumbnail].src;
        thumbnail.alt = thumbnails[currentThumbnail].alt;
        thumbnail.classList.remove("is-changing");
    }, 800);
}, 3000);
