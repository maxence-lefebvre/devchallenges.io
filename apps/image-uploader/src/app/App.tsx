import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

export function App() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <main>
      <div>Upload your image</div>
      <div>File should be Jpeg, Png, ...</div>
      <section {...getRootProps()} data-cy="dropzone">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </section>
    </main>
  );
}

export default App;
