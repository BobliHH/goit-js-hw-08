// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryItem = creategalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItem);

function creategalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class = "galllery__item">
        <a class = "gallery__link" href = "${original}">
        <img class = "gallery__image" src = "${preview}" 
        data-source = "${original}" alt = "${description}"/>
        </a>
        </div>`;
    })
    .join(' ');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// const instance = basicLightbox.create(
//   `
// <img width="100%" height="100%" src="">`,
//   {
//     onShow: (instance) => {
//       window.addEventListener("keydown", onEscKeyPress);
//     },
//     onClose: (instance) => {
//       window.removeEventListener("keydown", onEscKeyPress);
//     },
//   }
// );

console.log(galleryItems);
