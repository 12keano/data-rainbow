function generateChartData(type, seed) {
  const types = ['bar', 'line', 'pie', 'radar'];
  const selectedType = type || types[seed % types.length];
  const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  const data = labels.map((label, i) => ({ label, value: Math.floor(Math.random() * 100) }));

  return {
    type: selectedType,
    title: `Dynamic ${selectedType} Chart`,
    data
  };
}
