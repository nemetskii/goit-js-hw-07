import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = createGalleryMarkup(galleryItems);

galleryList.addEventListener("click", onOpenModal);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link modal" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  galleryList.addEventListener("keydown", onCloseEscModal);

  function onCloseEscModal(e) {
    if (e.code === "Escape") {
      instance.close();
      galleryList.removeEventListener("keydown", onCloseEscModal);
    }
  }
}
