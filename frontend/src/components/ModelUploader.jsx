// import React, { useState } from 'react';
// import axios from 'axios';

// const ModelUploader = () => {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const handleUpload = async () => {
//     if (!file) return alert('Please select a .glb file');

//     const formData = new FormData();
//     formData.append('model', file);

//     try {
//       setUploading(true);
//       await axios.post('http://localhost:5000/api/models/upload', formData);
//       alert('Model uploaded successfully');
//       window.location.reload();
//     } catch (error) {
//       alert('Upload failed');
//       console.error(error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload 3D Model (.glb)</h2>
//       <input
//         type="file"
//         accept=".glb"
//         onChange={(e) => setFile(e.target.files[0])}
//       />
//       <button onClick={handleUpload} disabled={uploading}>
//         {uploading ? 'Uploading...' : 'Upload'}
//       </button>
//     </div>
//   );
// };

// export default ModelUploader;







import React, { useState } from 'react';
import axios from 'axios';

const ModelUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert('Please select a .glb file');

    const formData = new FormData();
    formData.append('model', file);

    try {
      setUploading(true);
      await axios.post('http://localhost:5000/api/models/upload', formData);
      alert('Model uploaded successfully');
      window.location.reload();
    } catch (error) {
      alert('Upload failed');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload 3D Model (.glb)</h2>
      <input
        type="file"
        accept=".glb"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default ModelUploader;
