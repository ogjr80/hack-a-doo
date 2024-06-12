const ReviewForm = ({ nextStep, prevStep, formData }) => {
  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      console.log(result);
      // Handle success - navigate to success page or show message
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Details</h2>
      <div>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Surname:</strong> {formData.surname}</p>
        <p><strong>Cellphone Number:</strong> {formData.cellphone}</p>
        <div>
          <h3 className="font-semibold">Uploaded Images</h3>
          {Object.keys(formData.rooms).map((room) => (
            <div key={room}>
              <h4 className="capitalize">{room}</h4>
              {formData.rooms[room].map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Upload ${index}`} className="w-32 h-32 object-cover" />
              ))}
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold">Items</h3>
          {formData.items.map((item, index) => (
            <div key={index}>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Brand:</strong> {item.brand}</p>
              <p><strong>Serial No:</strong> {item.serialNo}</p>
              <p><strong>Quality:</strong> {item.quality}</p>
              <p><strong>Cover:</strong> {item.cover}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Total Value:</strong> {item.totalValue}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors">Previous</button>
        <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Submit</button>
      </div>
    </div>
  );
};

export default ReviewForm;
