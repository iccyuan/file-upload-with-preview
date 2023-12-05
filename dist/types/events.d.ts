export interface FileAddedEventDetail {
    addedFilesCount: number;
    cachedFileArray: File[];
    files: FileList | File[];
    uploadId: string;
}
export interface FileAddedEvent {
    detail: FileAddedEventDetail;
}
export interface FileDeletedEventDetail {
    cachedFileArray: File[];
    currentFileCount: number;
    index: number;
    uploadId: string;
}
export interface FileDeletedEvent {
    detail: FileDeletedEventDetail;
}
export interface ClearButtonClickedEventDetail {
    uploadId: string;
}
export interface ClearButtonClickedEvent {
    detail: ClearButtonClickedEventDetail;
}
export interface FileMultiItemClickedEventDetail {
    cachedFileArray: File[];
    file: File;
    index: number;
    uploadId: string;
}
export interface FileMultiItemClickedEvent {
    detail: FileMultiItemClickedEventDetail;
}
//# sourceMappingURL=events.d.ts.map