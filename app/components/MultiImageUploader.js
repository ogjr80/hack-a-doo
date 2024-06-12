import { useState } from 'react';

const MultiImageUploader = ({ handleImageUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    const newSelectedFiles = [...selectedFiles, ...files];
    setSelectedFiles(newSelectedFiles);
    handleImageUpload(newSelectedFiles);
  };

  const removeImage = (index) => {
    const newSelectedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newSelectedFiles);
    handleImageUpload(newSelectedFiles);
  };

  return (
    <div>
      <label className="block mb-2">Upload Images:</label>
      <input
        type="file"
        multiple
        onChange={handleFilesChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
      <div className="mt-4 grid grid-cols-3 gap-4">
        {selectedFiles.map((file, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt={`Upload Preview ${index}`}
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageUploader;
