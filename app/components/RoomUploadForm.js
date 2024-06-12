import { useState } from 'react';

const RoomUploadForm = ({ nextStep, prevStep, handleImageUpload }) => {
  const [selectedTab, setSelectedTab] = useState('lounge');
  const [selectedFiles, setSelectedFiles] = useState({
    lounge: [],
    kitchen: [],
    bedroom: [],
    bathroom: [],
    bedroom2: []
  });

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles({
      ...selectedFiles,
      [selectedTab]: files
    });
    handleImageUpload(selectedTab, files);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload Room Images</h2>
      <div className="flex justify-center mb-6">
        {['lounge', 'kitchen', 'bedroom', 'bathroom', 'bedroom2'].map((room) => (
          <button
            key={room}
            className={`px-4 py-2 mx-2 rounded-t ${selectedTab === room ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleTabChange(room)}
          >
            {room.charAt(0).toUpperCase() + room.slice(1)}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white rounded-b shadow-md">
        <label className="block mb-1 capitalize">{selectedTab}:</label>
        <input type="file" multiple onChange={handleFilesChange} className="w-full p-2 border rounded mb-4" />
        <div className="flex justify-between">
          <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors">Previous</button>
          <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
};

export default RoomUploadForm;
