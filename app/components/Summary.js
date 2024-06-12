const Summary = ({ formData }) => {
  const totalContentsValue = formData.items
    .filter(item => item.cover === 'Contents')
    .reduce((total, item) => total + parseFloat(item.totalValue.replace('R', '')), 0);

  const totalAllriskValue = formData.items
    .filter(item => item.cover === 'Allrisk')
    .reduce((total, item) => total + parseFloat(item.totalValue.replace('R', '')), 0);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <div className="space-y-2">
        <div>
          <p><strong>Contents:</strong> R {totalContentsValue}</p>
          <p><strong>Allrisk:</strong> R {totalAllriskValue}</p>
        </div>
        <button type="button" onClick={() => window.location.href = '/'} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">Get Quote</button>
      </div>
    </div>
  );
};

export default Summary;
