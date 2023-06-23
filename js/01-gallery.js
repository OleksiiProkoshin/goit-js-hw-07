import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join("");

galleryList.innerHTML = galleryMarkup;

galleryList.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const imageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${imageUrl}" alt="" />`);
    instance.show();

    document.addEventListener("keydown", handleEscapeKey);

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        instance.close();

        document.removeEventListener("keydown", handleEscapeKey);
      }
    }
  }
}

console.log(galleryItems);
