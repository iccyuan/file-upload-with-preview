<p align="center"><a href="" target="_blank"><img src="public/file-upload-with-preview.jpg"></a></p>

# file-upload-with-preview

🖼 Simple file-upload utility that shows a preview of the uploaded image. Written in TypeScript. No dependencies. Works well with or without a framework.

<p align="left">
  <a href="https://www.npmjs.com/package/file-upload-with-preview"><img src="https://img.shields.io/npm/v/file-upload-with-preview.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/file-upload-with-preview"><img src="https://img.shields.io/npm/dm/file-upload-with-preview.svg" alt="NPM Downloads"></a>
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%johndatserakis%2Ffile-upload-with-preview&text=Check%20out%20file-upload-with-preview%20on%20GitHub&via=johndatserakis">
  <img src="https://img.shields.io/twitter/url/https/github.com/johndatserakis/file-upload-with-preview.svg?style=social" alt="Tweet"></a>
</p>

## Links

- [Demo](https://johndatserakis.github.io/file-upload-with-preview)
- [npm](https://www.npmjs.com/package/file-upload-with-preview)
- [GitHub](https://github.com/johndatserakis/file-upload-with-preview#readme)
- [CodeSandbox](https://codesandbox.io/s/file-upload-with-preview-4ypil8?file=/src/index.ts)

## Install

```bash
yarn add file-upload-with-preview
```

Or, you can include it through the browser.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/file-upload-with-preview/dist/file-upload-with-preview.min.css"
/>

<script src="https://unpkg.com/file-upload-with-preview/dist/file-upload-with-preview.iife.js"></script>
```

## About

This is a simple frontend utility meant to help the file-upload process on your website.

It is written in pure JavaScript and has no dependencies. You can check out the live demo [here](https://johndatserakis.github.io/file-upload-with-preview).

For the most part, browsers do a good job of handling image-uploads. That being said - I find the ability to show our users a preview of their upload can go a long way in increasing the confidence in their upload.

**file-upload-with-preview** aims to address the issue of showing a preview of a user's uploaded image in a simple to use package.

## Features

- Shows the actual image preview in the case of a single uploaded .jpg, .jpeg, .gif, or .png image. Shows a _success-image_ in the case of an uploaded .pdf file, uploaded video, or other un-renderable file - so the user knows their image was collected successfully. In the case of multiple selected files, the user's selected images will be shown in a grid.
- Shows the image name in the input bar. Shows the count of selected images in the case of multiple selections within the same input.
- Allows the user to clear their upload and clear individual images in the `multiple` grid
- Looks great
- Framework agnostic - to access the uploaded file/files just use the `cachedFileArray` (always will be an array) property of your `FileUploadWithPreview` object.
- For every file-group you want just initialize another `FileUploadWithPreview` object with its own `uniqueId` - this way you can have multiple file-uploads on the same page. You also can just use a single input designated with a `multiple` property to allow multiple files on the same input.

## Usage

```javascript
import { FileUploadWithPreview } from 'file-upload-with-preview';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';

const upload = new FileUploadWithPreview('myFirstImage');
```

The JavaScript looks for a specific of HTML element to display the file input, label, image preview, and clear-button.

Make sure to populate the `custom-file-container` element with your unique id in the `data-upload-id` attribute.

```html
<div class="custom-file-container" data-upload-id="myFirstImage"></div>
```

Then when you're ready to use the user's file for an API call or whatever, just access the user's uploaded file/files in the `cachedFileArray` property of your initialized object like this:

```javascript
upload.cachedFileArray;
```

You can optionally trigger the image browser and clear selected images programmatically. There are additional methods on the class if you'd like to take a look.

```javascript
upload.emulateInputSelection(); // to open image browser
upload.resetPreviewPanel(); // clear all selected images
```

You may also want to capture the event when an image is selected.

```javascript
import { Events, ImageAddedEvent } from 'file-upload-with-preview';

window.addEventListener(Events.IMAGE_ADDED, (e: Event) => {
  const { detail } = e as unknown as ImageAddedEvent;

  console.log('detail', detail);
});
```

### Note

The `cachedFileArray` property is always an array. So if you are only allowing the user to upload a single file, you can access that file at `cachedFileArray[0]` - otherwise just send the entire array to your backend to handle it normally.

Make sure to pass in `multiple: true` in your options if you want to allow the user to select multiple images.

## Properties

| name                               | type             | default                          | description                                                                                                                      |
| ---------------------------------- | ---------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| cachedFileArray                    | File[]           | `[]`                             | Currently selected files                                                                                                         |
| clearButton                        | Element          | -                                | Button to reset the instance                                                                                                     |
| el                                 | Element          | -                                | Main container for the instance                                                                                                  |
| imagePreview                       | HTMLDivElement   | -                                | Display panel for the images                                                                                                     |
| inputHidden                        | HTMLInputElement | -                                | Hidden input                                                                                                                     |
| inputVisible                       | Element          | -                                | Visible input                                                                                                                    |
| options.accept                     | String           | `*`                              | Type of files to accept in your input                                                                                            |
| options.images.backgroundImage     | String           | `DEFAULT_BACKGROUND_IMAGE`       | Background image for image grid                                                                                                  |
| options.images.baseImage           | String           | `DEFAULT_BASE_IMAGE`             | Placeholder image                                                                                                                |
| options.images.successFileAltImage | String           | `DEFAULT_SUCCESS_FILE_ALT_IMAGE` | Alternate file upload image                                                                                                      |
| options.images.successPdfImage     | String           | `DEFAULT_SUCCESS_PDF_IMAGE`      | PDF upload image                                                                                                                 |
| options.images.successVideoImage   | String           | `DEFAULT_SUCCESS_VIDEO_IMAGE`    | Video upload image                                                                                                               |
| options.maxFileCount               | Number           | `0`                              | Set a maximum number of files you'd like the component to deal with. Must be `> 0` if set. By default there is no limit.         |
| options.multiple                   | Number           | `false`                          | Set to `true` if you want to allow the user to selected multiple images. Will use grid view in the image preview if set.         |
| options.presetFiles                | Array            | `[]`                             | Provide an array of image paths to be automatically uploaded and displayed on page load (can be images hosted on server or URLs) |
| options.showDeleteButtonOnImages   | Boolean          | `true`                           | Show a delete button on images in the grid                                                                                       |
| options.text.browse                | String           | `Browse`                         | Browse button text                                                                                                               |
| options.text.chooseFile            | String           | `Choose file...`                 | Placeholder text                                                                                                                 |
| options.text.label                 | String           | `Upload`                         | Main input label text                                                                                                            |
| options.text.selectedCount         | String           | `files selected`                 | Count descriptor text. Defaults to `${ n } files selected`.                                                                      |
| uploadId                           | String           | -                                | The `id` you set for the instance                                                                                                |

## Events

```ts
export enum Events {
  IMAGE_ADDED = 'fileUploadWithPreview:imagesAdded',
  IMAGE_DELETED = 'fileUploadWithPreview:imageDeleted',
  CLEAR_BUTTON_CLICKED = 'fileUploadWithPreview:clearButtonClicked',
  IMAGE_MULTI_ITEM_CLICKED = 'fileUploadWithPreview:imageMultiItemClicked',
}
```

## Full Example

See the full example in the `./example/index.ts` folder.

## Browser Support

If you are supporting a browser like IE11, one way to add a polyfill for `fetch` and `promise` is by adding the following in the bottom of your `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.js"></script>
```

## Development

```bash
# Install dependencies
yarn

# Watch changes during local development
yarn dev

# Run tests
yarn test

# Build library
yarn build
```

## Other

Go ahead and fork the project! Submit an issue if needed. Have fun!

## License

[MIT](http://opensource.org/licenses/MIT)
