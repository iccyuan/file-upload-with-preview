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
export declare class FileUploadWithPreview {
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
    options: RequiredOptions;
    /**
     * The `id` you set for the instance
     */
    uploadId: string;
    constructor(uploadId: string, options?: Options);
    bindClickEvents(): void;
    addImagesFromPath(presetFiles: PresetFiles): Promise<void>;
    addFiles(files: FileList | File[]): void;
    addFileToPreviewPanel(file: File): void;
    replaceFiles(files: File[]): void;
    replaceFileAtIndex(file: File, index: number): void;
    deleteFileAtIndex(index: number): void;
    refreshPreviewPanel(): void;
    emulateInputSelection(): void;
    reset(): void;
    updateProgressBar(file: File, progress: number): void;
}
//# sourceMappingURL=file-upload-with-preview.d.ts.map