'use client'; 

import { useState } from 'react';

const AddItemForm = ({ nextStep, prevStep, addItem }) => {
  const [item, setItem] = useState({
    description: '',
    brand: '',
    serialNo: '',
    quality: '',
    cover: '',
    quantity: 1,
    totalValue: ''
  });

  const handleChange = (input) => (e) => {
    setItem({ ...item, [input]: e.target.value });
  };

  const handleSubmit = () => {
    addItem(item);
    setItem({
      description: '',
      brand: '',
      serialNo: '',
      quality: '',
      cover: '',
      quantity: 1,
      totalValue: ''
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add Item</h2>
      <form className="space-y-4">
        {['description', 'brand', 'serialNo', 'quality', 'cover', 'totalValue'].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field}:</label>
            <input type={field === 'quantity' ? 'number' : 'text'} value={item[field]} onChange={handleChange(field)} className="w-full p-2 border rounded" />
          </div>
        ))}
        <div className="flex justify-between">
          <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors">Previous</button>
          <button type="button" onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">Add Item</button>
          <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Next</button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
