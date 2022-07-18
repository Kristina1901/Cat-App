import { useState, useRef, useEffect } from 'react';
import s from './Drop.module.css';

function Drop() {
  const [photo, setPhoto] = useState(null);
  // const [dragPhoto, setDragPhoto] = useState(null);
  const [url, setUrl] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (photo === null) {
      return;
    }
    if (photo !== null) {
      previewFile(photo);
    }
    // if (dragPhoto !== null) {
    //   previewFile(dragPhoto);
    // }
  });

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setPhoto(e.dataTransfer.files[0]);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };
  function previewFile(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      let img = document.createElement('img');
      img.src = reader.result;
      setUrl(reader.result);
    };
  }

  return (
    <div className={s.main}>
      <div className={s.drop}>
        <p className={s.title}>Upload a .jpg or .png Cat Image</p>
        <p className={s.text}>
          Any uploads must comply with the{' '}
          <span className={s.assignment}>upload guidelines</span> or face
          deletion.
        </p>

        <form
          id="form-file-upload"
          onDragEnter={handleDrag}
          onSubmit={e => e.preventDefault()}
          className={s.dropArea}
        >
          <div className={s.m}>
            <img
              src={url}
              alt="cat"
              width="559px"
              height="280px"
              className={photo === null ? s.loadedPhotoNone : s.loadedPhoto}
            />
          </div>
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            multiple={true}
            onChange={handleChange}
            className={s.inputFileUpload}
          />
          <label
            id="label-file-upload"
            htmlFor="input-file-upload"
            className={dragActive ? 'drag-active' : ''}
          >
            <div>
              <button
                className={photo === null ? s.uploadButton : s.uploadButtonNone}
                onClick={onButtonClick}
              >
                Drag here{' '}
                <span className={s.buttonAssignment}>your file or </span>Click
                here <span className={s.buttonAssignment}>to upload</span>
              </button>
            </div>
          </label>
          {dragActive && (
            <div
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={s.dragFileElement}
            ></div>
          )}
        </form>

        {photo === null ? (
          <span className={s.noFile}>No file selected</span>
        ) : (
          <div className={s.containerPhotoInfo}>
            <span className={s.name}>
              Image File Name: <span>{photo.name}</span>
            </span>
            <button className={s.upload}>Upload Photo</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Drop;
