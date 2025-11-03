import React, { useEffect, useState } from "react";

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5231/api/Getmedicine") // replace with your .NET API endpoint
      .then((res) => res.json())
      .then((data) => setMedicines(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const today = new Date();

  const filteredMedicines = medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const getRowStyle = (medicine) => {
    const expiryDate = new Date(medicine.expiry);
    const daysLeft = (expiryDate - today) / (1000 * 60 * 60 * 24);

    if (daysLeft < 30) return { backgroundColor: "#ffcccc" }; // red
    if (medicine.quantity < 10) return { backgroundColor: "#fff5cc" }; // yellow
    return {};
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-5 text-center">💊 Medicine Inventory</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search medicine by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 w-full rounded shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>

      <table className="w-full border-collapse border border-gray-300 shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Brand</th>
            <th className="border p-2">Expiry</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicines.map((med, index) => (
            <tr key={index} style={getRowStyle(med)}>
              <td className="border p-2">{med.name}</td>
              <td className="border p-2">{med.brand}</td>
              <td className="border p-2">
                {new Date(med.expiry).toLocaleDateString()}
              </td>
              <td className="border p-2">{med.quantity}</td>
              <td className="border p-2">{med.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredMedicines.length === 0 && (
        <p className="text-center mt-4 text-gray-500">No medicines found.</p>
      )}
    </div>
  );
};

export default MedicineList;
