const PersonalDetailsForm = ({ nextStep, handleChange, formData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input type="text" value={formData.name} onChange={handleChange('name')} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Surname:</label>
          <input type="text" value={formData.surname} onChange={handleChange('surname')} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Cellphone Number:</label>
          <input type="text" value={formData.cellphone} onChange={handleChange('cellphone')} className="w-full p-2 border rounded" />
        </div>
        <button type="button" onClick={nextStep} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">Next</button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
