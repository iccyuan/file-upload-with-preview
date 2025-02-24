import { Events } from './constants/events';
import {
  DEFAULT_BACKGROUND_IMAGE,
  DEFAULT_BASE_IMAGE,
  DEFAULT_SUCCESS_EXCEL_IMAGE,
  DEFAULT_SUCCESS_FILE_ALT_IMAGE,
  DEFAULT_SUCCESS_PDF_IMAGE,
  DEFAULT_SUCCESS_VIDEO_IMAGE,
  DEFAULT_SUCCESS_WORD_IMAGE,
} from './constants/images';
import { MULTI_ITEM_CLEAR_ANIMATION_CLASS } from './constants/style';
import {
  ClearButtonClickedEvent,
  FileAddedEvent,
  FileDeletedEvent,
  FileMultiItemClickedEvent,
} from './types/events';

export interface Images {
  /**
   * Background image for image grid
   *
   * @default DEFAULT_BACKGROUND_IMAGE
   */
  backgroundImage?: string;
  /**
   * Placeholder image
   *
   * @default DEFAULT_BASE_IMAGE
   */
  baseImage?: string;
  /**
   * Alternate file upload image
   *
   * @default DEFAULT_SUCCESS_FILE_ALT_IMAGE
   */
  successFileAltImage?: string;
  /**
   * PDF upload image
   *
   * @default DEFAULT_SUCCESS_PDF_IMAGE
   */
  successPdfImage?: string;
  /**
   * WORD upload image
   *
   * @default DEFAULT_SUCCESS_WORD_IMAGE
   */
  successWordImage?: string;
  /**
   * EXCEL upload image
   *
   * @default DEFAULT_SUCCESS_EXCEL_IMAGE
   */
  successExcelImage?: string;
  /**
   * Video upload image
   *
   * @default DEFAULT_SUCCESS_VIDEO_IMAGE
   */
  successVideoImage?: string;
}

export type PresetFiles = string[];

/**
 * Options to customize the library
 */
export interface Options {
  /**
   * Type of files to accept in your input
   *
   * @default '*'
   */
  accept?: HTMLInputElement['accept'];
  /**
   * Configurable images for the library
   */
  images?: Images;
  /**
   * Set a maximum number of files you'd like the component to deal with. Must be `> 0` if set. By default there is no limit.
   *
   * @default 0
   */
  maxFileCount?: number;
  /**
   * Set to `true` if you want to allow the user to selected multiple images. Will use grid view in the image preview if set.
   *
   * @default false
   */
  multiple?: boolean;
  /**
   * Provide an array of image paths to be automatically uploaded and displayed on page load (can be images hosted on server or URLs)
   *
   * @default []
   */
  presetFiles?: PresetFiles;
  /**
   * Show a delete button on images in the grid
   *
   * @default true
   */
  showDeleteButtonOnImages?: boolean;
  /**
   * Show a select file button
   *
   * @default true
   */
  showSelectFileButton?: boolean;
}

export type RequiredOptions = Required<Options> & {
  images: Required<Images>;
};

export class FileUploadWithPreview {
  /**
   * Currently selected files
   *
   * @default []
   */
  cachedFileArray: File[];
  /**
   * Main container for the instance
   */
  el: Element;
  /**
   * Display panel for the images
   */
  imagePreview: HTMLDivElement;
  /**
   * Hidden input
   */
  inputHidden: HTMLInputElement;

  options: RequiredOptions = {
    accept: '*',
    images: {
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      baseImage: DEFAULT_BASE_IMAGE,
      successExcelImage: DEFAULT_SUCCESS_EXCEL_IMAGE,
      successFileAltImage: DEFAULT_SUCCESS_FILE_ALT_IMAGE,
      successPdfImage: DEFAULT_SUCCESS_PDF_IMAGE,
      successVideoImage: DEFAULT_SUCCESS_VIDEO_IMAGE,
      successWordImage: DEFAULT_SUCCESS_WORD_IMAGE,
    },
    maxFileCount: 0,
    multiple: false,
    presetFiles: [],
    showDeleteButtonOnImages: true,
    showSelectFileButton: true,
  };
  /**
   * The `id` you set for the instance
   */
  uploadId: string;

  constructor(uploadId: string, options: Options = {}) {
    if (!uploadId) {
      throw new Error(
        'No uploadId found. You must initialize file-upload-with-preview with a unique uploadId.',
      );
    }

    this.uploadId = uploadId;
    this.cachedFileArray = [];

    // Base options
    const {
      accept,
      maxFileCount,
      multiple,
      presetFiles,
      showDeleteButtonOnImages,
      showSelectFileButton,
    } = options;
    this.options.showDeleteButtonOnImages = showDeleteButtonOnImages ?? true;
    this.options.maxFileCount = maxFileCount ?? 0;
    this.options.presetFiles = presetFiles ?? [];
    this.options.multiple = multiple ?? false;
    this.options.accept = accept ?? this.options.accept;
    this.options.showSelectFileButton = showSelectFileButton ?? true;

    // Elements
    const el = document.querySelector(`.custom-file-container[data-upload-id="${this.uploadId}"]`);

    if (!el) {
      throw new Error(`Could not find a 'custom-file-container' with the id of: ${this.uploadId}`);
    }

    this.el = el;
    this.el.innerHTML += `
      <label class="input-container">
        <input
          accept="${this.options.accept}"
          aria-label="Choose File"
          class="input-hidden"
          id="file-upload-with-preview-${uploadId}"
          ${this.options.multiple ? 'multiple' : ''}
          type="file"
        />
      </label>
      <div class="image-preview"></div>
    `;

    const inputContainer = this.el.querySelector('.input-container') as HTMLElement;
    const inputHidden = this.el.querySelector('.custom-file-container .input-hidden');
    const imagePreview = this.el.querySelector('.custom-file-container .image-preview');
    const allRequiredElementsFound = inputHidden != null && imagePreview != null;
    if (options.showSelectFileButton) {
      inputContainer.style.display = 'block'; // 显示
    } else {
      inputContainer.style.display = 'none'; // 隐藏
    }
    if (allRequiredElementsFound) {
      this.inputHidden = inputHidden as HTMLInputElement;
      this.imagePreview = imagePreview as HTMLDivElement;
    } else {
      throw new Error(`Cannot find all necessary elements for the id: ${this.uploadId}`);
    }

    // Images
    const {
      backgroundImage,
      baseImage,
      successFileAltImage,
      successPdfImage,
      successExcelImage,
      successWordImage,
      successVideoImage,
    } = options.images || {};
    this.options.images.baseImage = baseImage ?? this.options.images.baseImage;
    this.options.images.successPdfImage = successPdfImage ?? this.options.images.successPdfImage;
    this.options.images.successExcelImage =
      successExcelImage ?? this.options.images.successExcelImage;
    this.options.images.successWordImage = successWordImage ?? this.options.images.successWordImage;
    this.options.images.successVideoImage =
      successVideoImage ?? this.options.images.successVideoImage;
    this.options.images.successFileAltImage =
      successFileAltImage ?? this.options.images.successFileAltImage;
    this.options.images.backgroundImage = backgroundImage ?? this.options.images.backgroundImage;

    this.addImagesFromPath(this.options.presetFiles);
    this.imagePreview.style.backgroundImage = `url("${this.options.images.baseImage}")`;
    this.bindClickEvents();
  }

  bindClickEvents() {
    this.inputHidden.addEventListener(
      'change',
      (e) => {
        const target = e.target as HTMLInputElement;
        const { files } = target;
        if (files == null) return;

        this.addFiles(files);

        // Handle issue with the same file being selected
        // https://stackoverflow.com/a/54633061/8014660
        target.value = '';
      },
      true,
    );

    this.imagePreview.addEventListener('click', (e) => {
      const target = e.target as HTMLDivElement;

      if (!target) return;

      if (target.matches('.custom-file-container .image-preview-item-clear-icon')) {
        const fileName = target.getAttribute('data-upload-name');
        const selectedFileIndex = this.cachedFileArray.findIndex(({ name }) => name === fileName);
        this.deleteFileAtIndex(selectedFileIndex);
      }

      if (target.matches('.custom-file-container .image-preview-item')) {
        const clearIcon = target.querySelector('.image-preview-item-clear-icon');
        const fileName = clearIcon?.getAttribute('data-upload-name');
        const fileIndex = this.cachedFileArray.findIndex(({ name }) => name === fileName);

        if (fileIndex < 0) return;

        const eventPayload: FileMultiItemClickedEvent = {
          detail: {
            cachedFileArray: this.cachedFileArray,
            file: this.cachedFileArray[fileIndex],
            index: fileIndex,
            uploadId: this.uploadId,
          },
        };
        const imageClickedEvent = new CustomEvent(Events.IMAGE_MULTI_ITEM_CLICKED, eventPayload);
        window.dispatchEvent(imageClickedEvent);
      }
    });

    this.inputHidden.addEventListener('click', (_e) => {
      this.inputHidden.accept = this.options.accept;
      this.inputHidden.multiple = this.options.multiple;
    });
  }

  async addImagesFromPath(presetFiles: PresetFiles) {
    presetFiles.forEach(async (path) => {
      try {
        const defaultType = 'image/jpeg';
        const response = await fetch(path, { mode: 'cors' });
        const blob = await response.blob();
        const file = new File([blob], 'preset-file', {
          type: blob.type || defaultType,
        });
        this.addFiles([file]);
      } catch (error) {
        if (error instanceof Error) {
          console.warn(`${error.message.toString()}`);
        }

        console.warn('Image cannot be added to the cachedFileArray.');
      }
    });
  }

  addFiles(files: FileList | File[]) {
    if (!files.length) return;

    let fileArray = Array.from(files);

    let isExists = false;
    fileArray.forEach((file) => {
      if (this.cachedFileArray.some((cachedFile) => cachedFile.name === file.name)) {
        isExists = true;
      }
    });

    if (isExists) return;

    if (this.options.multiple && this.options.maxFileCount > 0) {
      const totalFileCount = this.cachedFileArray.length + fileArray.length;
      const differenceFromMax = totalFileCount - this.options.maxFileCount;

      if (differenceFromMax > 0) {
        fileArray = fileArray.slice(0, fileArray.length - differenceFromMax);
      }
    }

    if (!this.options.multiple) {
      this.cachedFileArray = [];
    }

    fileArray.forEach((file) => {
      const fileWithUniqueName = new File([file], `${file.name}`, {
        type: file.type,
      });

      this.cachedFileArray.push(fileWithUniqueName);
      this.addFileToPreviewPanel(fileWithUniqueName);
    });

    const eventPayload: FileAddedEvent = {
      detail: {
        addedFilesCount: fileArray.length,
        cachedFileArray: this.cachedFileArray,
        file: this.cachedFileArray[
          this.cachedFileArray.length - 1 < 0 ? 0 : this.cachedFileArray.length - 1
        ],
        uploadId: this.uploadId,
      },
    };
    const imagesAddedEvent = new CustomEvent(Events.FILE_ADDED, eventPayload);

    window.dispatchEvent(imagesAddedEvent);
  }

  addFileToPreviewPanel(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (!this.options.multiple) {
        let image = this.options.images.successFileAltImage;

        if (
          file.type.match('image/png') ||
          file.type.match('image/jpeg') ||
          file.type.match('image/webp') ||
          file.type.match('image/gif')
        ) {
          image = `url("${reader.result}")`;
        } else if (file.type.match('application/pdf')) {
          image = `url("${this.options.images.successPdfImage}")`;
        } else if (file.type.match('application/text/csv')) {
          image = `url("${this.options.images.successExcelImage}")`;
        } else if (file.type.match('application/msexcel')) {
          image = `url("${this.options.images.successExcelImage}")`;
        } else if (file.type.match('application/msword')) {
          image = `url("${this.options.images.successWordImage}")`;
        } else if (
          file.type.match('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        ) {
          image = `url("${this.options.images.successWordImage}")`;
        } else if (file.type.match('video/*')) {
          image = `url("${this.options.images.successVideoImage}")`;
        }

        this.imagePreview.style.backgroundImage = image;

        return;
      }

      this.imagePreview.style.backgroundImage = `url("${this.options.images.backgroundImage}")`;

      const imageClearContent = (name: string) => `
        <span class="image-preview-item-clear">
          <span class="image-preview-item-clear-icon" data-upload-name="${name}">
            &times;
          </span>
        </span>
      `;

      let backgroundImage: string | ArrayBuffer | null | undefined =
        this.options.images.successFileAltImage;
      console.log('file.type', file.type);
      if (
        file.type.match('image/png') ||
        file.type.match('image/jpeg') ||
        file.type.match('image/webp') ||
        file.type.match('image/gif')
      ) {
        backgroundImage = reader.result;
      } else if (file.type.match('application/pdf')) {
        backgroundImage = this.options.images.successPdfImage;
      } else if (file.type.match('text/csv')) {
        backgroundImage = this.options.images.successExcelImage;
      } else if (file.type.match('application/msexcel')) {
        backgroundImage = this.options.images.successExcelImage;
      } else if (file.type.match('application/msword')) {
        backgroundImage = this.options.images.successWordImage;
      } else if (
        file.type.match('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
      ) {
        backgroundImage = this.options.images.successWordImage;
      } else if (file.type.match('video/*')) {
        backgroundImage = this.options.images.successVideoImage;
      }

      const progressContent = `
    <svg class="image-preview-item-progress hide" width="30" height="30">
     <circle class="image-preview-item-progress-bar" r="10" cx="15" cy="15"></circle>
    </svg>
`;

      this.imagePreview.innerHTML += `
      <div
        class="image-preview-item"
        data-upload-name="${file.name}"
        style="background-image: url('${backgroundImage}'); "
      >
        ${this.options.showDeleteButtonOnImages ? imageClearContent(file.name) : undefined}
        ${progressContent}
      </div>
    `;
    };
  }

  replaceFiles(files: File[]) {
    if (!files.length) {
      throw new Error('Array must contain at least one file.');
    }

    this.cachedFileArray = files;
    this.refreshPreviewPanel();
  }

  replaceFileAtIndex(file: File, index: number) {
    if (!this.cachedFileArray[index]) {
      throw new Error(`There is no file at index: ${index}`);
    }

    this.cachedFileArray[index] = file;
    this.refreshPreviewPanel();
  }

  deleteFileAtIndex(index: number) {
    if (!this.cachedFileArray[index]) {
      throw new Error(`There is no file at index ${index}`);
    }

    // 从缓存数组中移除文件
    const [deletedFile] = this.cachedFileArray.splice(index, 1);

    // 找到对应文件索引的图片元素，并从DOM中移除
    const imagePreviewItem = this.imagePreview.querySelector(
      `.image-preview-item[data-upload-name="${deletedFile.name}"]`,
    );
    if (imagePreviewItem) {
      this.imagePreview.removeChild(imagePreviewItem);
    }

    // 更新可见输入以反映新的文件计数
    if (this.cachedFileArray.length === 0) {
      this.imagePreview.style.backgroundImage = `url("${this.options.images.baseImage}")`;
    }
    // 分发图片删除事件
    const eventPayload: FileDeletedEvent = {
      detail: {
        cachedFileArray: this.cachedFileArray,
        currentFileCount: this.cachedFileArray.length,
        index,
        uploadId: this.uploadId,
      },
    };

    const imageDeletedEvent = new CustomEvent(Events.FILE_DELETED, eventPayload);
    window.dispatchEvent(imageDeletedEvent);
  }

  refreshPreviewPanel() {
    const timeoutWait = 200; // Match the opacity animation on the MULTI_ITEM_CLEAR_ANIMATION_CLASS
    const imagePreviewItems = this.imagePreview.querySelectorAll('.image-preview-item');
    const imagePreviewItemsArray = Array.from(imagePreviewItems);
    imagePreviewItemsArray.forEach((item) => item.classList.add(MULTI_ITEM_CLEAR_ANIMATION_CLASS));

    // Use the setTimeout to process images after the MULTI_ITEM_CLEAR_ANIMATION_CLASS is done
    setTimeout(() => {
      this.imagePreview.innerHTML = '';

      // Reset the panel if there are no files
      if (!this.cachedFileArray.length) {
        this.reset();
        return;
      }

      this.cachedFileArray.forEach((file) => this.addFileToPreviewPanel(file));
    }, timeoutWait);
  }

  emulateInputSelection() {
    this.inputHidden.click();
  }

  reset() {
    this.inputHidden.value = '';
    this.imagePreview.style.backgroundImage = `url("${this.options.images.baseImage}")`;
    this.imagePreview.innerHTML = '';
    this.cachedFileArray = [];
    const eventPayload: ClearButtonClickedEvent = {
      detail: {
        uploadId: this.uploadId,
      },
    };
    const resetEvent = new CustomEvent(Events.CLEAR_BUTTON_CLICKED, eventPayload);
    window.dispatchEvent(resetEvent);
  }

  updateProgressBar(file: File, progress: number): void {
    // Find the container for the progress bar based on the file name
    const progressBarContainer = this.imagePreview.querySelector(
      `.image-preview-item[data-upload-name="${file.name}"] .image-preview-item-progress`,
    ) as SVGSVGElement;

    // If the progress bar container exists, proceed with the update
    if (progressBarContainer) {
      // Find the progress bar element itself
      const progressBar = progressBarContainer.querySelector(
        '.image-preview-item-progress-bar',
      ) as SVGCircleElement;

      // If the progress bar element is found, calculate the circumference and update the stroke properties
      if (progressBar) {
        const radius = progressBar.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
        progressBar.style.strokeDashoffset = `${circumference - (progress / 100) * circumference}`;

        // Show or hide the progress bar based on the progress value
        progressBarContainer.style.display = progress === 100 || progress === 0 ? 'none' : 'block';
      }
    }
  }
}
