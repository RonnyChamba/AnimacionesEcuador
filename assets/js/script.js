const $galleryItem = [...document.querySelectorAll(".gallery__item")];

$galleryItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.matches(".gallery__item button")) {
      let $titleGallery = item.firstElementChild;
      let estado = $titleGallery.dataset.value;
      let $imgGallery = item.lastElementChild;

      let accion = estado === "off";
      $titleGallery.classList[accion ? "add" : "remove"](
        "gallery__item__title--animation"
      );
      $imgGallery.classList[accion ? "add" : "remove"](
        "gallery__item__img--animation"
      );
      $titleGallery.dataset.value = accion ? "on" : "off";
      $imgGallery.dataset.value = accion ? "on" : "off";
      // event.target.textContent = accion ? "Detener" : "Iniciar";
      event.target.innerHTML = accion
        ? `<span class ="icon-pause"></span> Detener`
        : `<span class ="icon-play"></span> Iniciar`;
      event.target.classList[accion ? "add" : "remove"](
        "gallery__item__info__btn--danger"
      );
    }
  });
});
