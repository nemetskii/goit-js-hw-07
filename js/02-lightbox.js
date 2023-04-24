import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = createGalleryMarkup(galleryItems);

galleryList.addEventListener("click", onOpenModal);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});
function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
}
