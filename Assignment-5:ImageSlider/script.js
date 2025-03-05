const images = [
    "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://static.vecteezy.com/system/resources/thumbnails/011/834/533/small_2x/mountain-landscape-at-sunset-photo.jpg",
];
let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function updateImage() {
    sliderImage.classList.remove("active");
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.classList.add("active");
    }, 100);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}


sliderImage.setAttribute("loading", "lazy");
updateImage();