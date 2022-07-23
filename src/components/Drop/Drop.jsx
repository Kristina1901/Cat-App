import { useState, useRef, useEffect } from 'react';
import s from './Drop.module.css';
import { register } from '../../services/cats-api';
import { nanoid } from 'nanoid';

function Drop() {
  const [photo, setPhoto] = useState(null);
  const [url, setUrl] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(null);
  const [button, setButton] = useState('');
  const [background, setBackground] = useState(null);
  const inputRef = useRef(null);
  useEffect(() => {
    if (photo === null && loading === false && notice === false) {
      return;
    }
    if (photo !== null && photo !== false) {
      previewFile(photo);
    }
    if (loading !== false) {
      register(updateFormInput(photo, nanoid())).then(data => {
        if (data.hasOwnProperty('message') === false) {
          setNotice(true);
          setButton(true);
          setBackground(true);
        }
        if (data.hasOwnProperty('message') !== false) {
          setNotice(false);
          setButton(true);
          setBackground(false);
        }
      });
    }
  });

  function updateFormInput(cat, id) {
    let formData = new FormData();
    formData.append('file', cat);
    formData.set('sub_id', id);

    return formData;
  }

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

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
  let status;
  if (notice === false) {
    status = (
      <div className={s.message}>
        <div className={s.noticeIcon}></div>
        <p className={s.notice}>No Cat found - try a different one</p>
      </div>
    );
  }
  if (notice === true) {
    status = (
      <div className={s.message}>
        <div className={s.noticeIconCorrect}></div>
        <p className={s.notice}>Thanks for the Upload - Cat found!</p>
      </div>
    );
  }
  return (
    <div className={s.main}>
      <div className={s.containerForm}>
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
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            multiple={true}
            onChange={handleChange}
            className={s.inputFileUpload}
            name="file"
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
          {photo !== null && (background === null || background === false) && (
            <div
              className={
                background === false ? s.containerimgWrong : s.containerimg
              }
            >
              <img
                src={url}
                alt="cat"
                width="559px"
                height="280px"
                className={s.loadedPhoto}
              />
            </div>
          )}
        </form>
      </div>

      {photo === null ? (
        <span className={s.noFile}>No file selected</span>
      ) : (
        <>
          <div className={s.containerPhotoInfo}>
            <span className={s.name}>
              Image File Name: <span>{photo.name}</span>
            </span>
            {button !== true && (
              <button className={s.upload} onClick={() => setLoading(true)}>
                {loading === true && <div className={s.loader}></div>}
                {loading === true ? 'Uploading' : 'Upload Photo'}
              </button>
            )}
          </div>
          {status}
        </>
      )}
    </div>
  );
}
export default Drop;
