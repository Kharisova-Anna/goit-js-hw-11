const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46160899-12bbcf382b0949676f8e01c93";

export function fetchImages(params) {
    const urlParams = new URLSearchParams({
        key: API_KEY,
        q: params.query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    })

    return fetch(`${BASE_URL}?${urlParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Sorry, there are no images matching your search query. Please try again!");
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error:", error)
        })
}
