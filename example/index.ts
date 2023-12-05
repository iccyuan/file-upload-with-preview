import './index.scss';
import '../src/index.scss';

import {
  ClearButtonClickedEvent,
  Events,
  FileUploadWithPreview,
  ImageAddedEvent,
  ImageDeletedEvent,
  ImageMultiItemClickedEvent,
} from '../src/index';
import importedBaseImage from './custom-image.svg';


const secondUpload = new FileUploadWithPreview('mySecondImage', {
  images: {
    baseImage: importedBaseImage,
  },
  maxFileCount: 5,
  multiple: true,

});

const secondUploadInfoButton = document.querySelector('.upload-info-button-second');


if (secondUploadInfoButton) {
  secondUploadInfoButton.addEventListener('click', () => {
    console.log('Second upload:', secondUpload, secondUpload.cachedFileArray);
  });
}

window.addEventListener(Events.IMAGE_ADDED, (e: Event) => {
  const { detail } = e as unknown as ImageAddedEvent;

  console.log('detail', detail);
});

window.addEventListener(Events.IMAGE_DELETED, (e: Event) => {
  const { detail } = e as unknown as ImageDeletedEvent;

  console.log('detail', detail);
});

window.addEventListener(Events.CLEAR_BUTTON_CLICKED, (e: Event) => {
  const { detail } = e as unknown as ClearButtonClickedEvent;

  console.log('detail', detail);
});

window.addEventListener(Events.IMAGE_MULTI_ITEM_CLICKED, (e: Event) => {
  const { detail } = e as unknown as ImageMultiItemClickedEvent;

  console.log('detail', detail);
});
