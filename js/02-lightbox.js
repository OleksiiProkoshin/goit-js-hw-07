import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`)
  .join("");

galleryList.innerHTML = galleryMarkup;

galleryList.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
    });
  }
}
console.log(galleryItems);
