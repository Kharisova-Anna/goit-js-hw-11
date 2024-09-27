import { fetchImages } from "./js/pixabay-api.js"
import { renderGallery, clearGallery } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector(".search-form");
const galleryElement = document.querySelector(".gallery");
const loader = document.querySelector(".loader"); 
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
});

function showError(message) {
    iziToast.error({
        title: "Error",
        message,
    });
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchQuery.value.trim();

    if (!searchQuery) {
        showError("Please enter a search term.");
        loader.style.display = "none";
        return;
    }
    loader.style.display = "block";
    galleryElement.innerHTML = ""; 

    fetchImages({ query: searchQuery })
        .then(data => {
            if (data.hits.length === 0) {
                showError("Sorry, there are no images matching your search query. Please try again!");
            } else {
                renderGallery(data.hits, galleryElement);
                lightbox.refresh();
            }
        })
        .catch(error => {
            showError(error.message);
        })
        .finally(() => {
                loader.style.display = "none";
            });
})



