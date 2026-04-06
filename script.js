// Select all images
const images = document.querySelectorAll(".image-box img");

// Click event on each image
images.forEach((img) => {
    img.addEventListener("click", () => {
        openPopup(img.src);
    });
});

// Create popup function
function openPopup(src) {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Create image
    const popupImg = document.createElement("img");
    popupImg.src = src;

    overlay.appendChild(popupImg);
    document.body.appendChild(overlay);

    // Close on click
    overlay.addEventListener("click", () => {
        overlay.remove();
    });
}
