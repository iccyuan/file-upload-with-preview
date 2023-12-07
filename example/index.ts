import './index.scss';
import '../src/index.scss';

import {
  ClearButtonClickedEvent,
  Events,
  FileAddedEvent,
  FileDeletedEvent,
  FileMultiItemClickedEvent,
  FileUploadWithPreview,
} from '../src/index';

const secondUpload = new FileUploadWithPreview('mySecondImage', {
  maxFileCount: 5,
  multiple: true,
  showSelectFileButton: true,
});

const secondUploadInfoButton = document.querySelector('.upload-info-button-second');

if (secondUploadInfoButton) {
  secondUploadInfoButton.addEventListener('click', () => {
    console.log('Second upload:', secondUpload, secondUpload.cachedFileArray);
  });
}

window.addEventListener(Events.FILE_ADDED, (e: Event) => {
  const { detail } = e as unknown as FileAddedEvent;

  console.log('detail', detail);
});

window.addEventListener(Events.FILE_DELETED, (e: Event) => {
  const { detail } = e as unknown as FileDeletedEvent;

  console.log('detail', detail);
});

window.addEventListener(Events.CLEAR_BUTTON_CLICKED, (e: Event) => {
  const { detail } = e as unknown as ClearButtonClickedEvent;

  console.log('detail', detail);
});

window.addEventListener(Events.IMAGE_MULTI_ITEM_CLICKED, (e: Event) => {
  const { detail } = e as unknown as FileMultiItemClickedEvent;

  console.log('detail', detail);
});
