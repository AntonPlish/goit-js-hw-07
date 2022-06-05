import { galleryItems } from './gallery-items.js';
// Change code below this line

const palletteContainer = document.querySelector('.gallery');
palletteContainer.insertAdjacentHTML('beforeend', createCardsGallery(galleryItems))

palletteContainer.addEventListener('click', onPalletteContainerClick);

function createCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
        .join('');
};

function onPalletteContainerClick(event) {
    event.preventDefault();
        if (!event.target.classList.contains('gallery__image')) {
            return;
        } else {
            
            const instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}" width="800" height="600">
	`);
            instance.show();           
            document.addEventListener('keydown', escFunction);
            function escFunction(evt) {
                if (evt.key === 'Escape') {
                    instance.close();
                };
                document.removeEventListener('keydown', escFunction);
            };
    };
};