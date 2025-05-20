import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModelViewer from './ModelViewer';

const ModelList = () => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      const res = await axios.get('http://localhost:5000/api/models');
      setModels(res.data);
    };
    fetchModels();
  }, []);

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Uploaded Models</h2>
      {models.map((model) => (
        <div key={model._id} style={{ margin: '10px 0' }}>
          <span>{model.filename}</span>
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => setSelectedModel(model.filepath)}
          >
            View
          </button>
        </div>
      ))}

      {selectedModel && (
        <div style={{ height: '500px', marginTop: '20px' }}>
          <ModelViewer url={`http://localhost:5000/${selectedModel}`} />
        </div>
      )}
    </div>
  );
};

export default ModelList;
