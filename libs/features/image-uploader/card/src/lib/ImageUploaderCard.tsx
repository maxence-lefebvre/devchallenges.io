import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const ImageUploaderCard = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <section>
      <h1>Upload your image</h1>
      <h2>File should be Jpeg, Png, ...</h2>
      <div {...getRootProps()} data-cy="dropzone">
        <input {...getInputProps()} />
        <p>Drag & Drop your image here</p>
      </div>
    </section>
  );
};

export default ImageUploaderCard;
