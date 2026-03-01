import React, { useState } from 'react';
import axios from 'axios';
import { Car, Gauge, Fuel, Users, Calendar, RockingChair, Cog } from 'lucide-react';

const App = () => {
  const [formData, setFormData] = useState({
    year: null,
    km_driven: null,
    owner: null,
    mileage: null,
    engine: null,
    max_power: null,
    seats: null,
    fuel: null,
    seller_type: null,
    transmission: null
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', formData);
      setPrediction(response.data.predicted_price);
    } catch (error) {
      console.error("Error predicting price:", error);
      alert("Failed to connect to the backend server.");
    } finally {
      setLoading(false);
    }
  };
  return (<>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="flex items-center gap-3 mb-8 border-b pb-4">
        <Car className="text-blue-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-gray-800">Car Price Estimator</h2>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Numerical Input Group */}
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Calendar size={16}/> Manufacture Year
          </label>
          <input 
            type="number" name="year" value={formData.year} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Gauge size={16}/> KM Driven
          </label>
          <input 
            type="number" name="km_driven" value={formData.km_driven} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Fuel size={16}/> Mileage(km/liter)
          </label>
          <input 
            type="number" name="mileage" value={formData.mileage} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Car size={16}/> Engine(CC)
          </label>
          <input 
            type="number" name="engine" value={formData.engine} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Gauge size={16}/> Max Power(bhp)
          </label>
          <input 
            type="number" name="max_power" value={formData.max_power} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <RockingChair size={16}/> Seats
          </label>
          <input 
            type="number" name="seats" value={formData.seats} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Categorical Dropdowns */}
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Fuel size={16}/> Fuel Type
          </label>
          <select 
            name="fuel" value={formData.fuel} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option>--Select Option--</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="LPG">LPG</option>
            <option value="CNG">CNG</option>
          </select>

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Users size={16}/> Owner
          </label>
          <select 
            name="owner" value={formData.owner} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option>--Select Option--</option>
            <option value="First Owner">First Owner</option>
            <option value="Second Owner">Second Owner</option>
            <option value="Third Owner">Third Owner</option>
          </select>

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Users size={16}/> Seller Type
          </label>
          <select 
            name="seller_type" value={formData.seller_type} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option>--Select Option--</option>
            <option value="Individual">Individual</option>
            <option value="Dealer">Dealer</option>
            <option value="Trustmark Dealer">Trustmark Dealer</option>
          </select>

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Cog size={16}/> Transmission
          </label>
          <select 
            name="transmission" value={formData.transmission} onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option>--Select Option--</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50"
        >
          {loading ? "Calculating..." : "Predict Car Value"}
        </button>
      </form>

      {prediction && (
        <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-center animate-bounce-short">
          <p className="text-green-800 font-medium">Estimated Market Price</p>
          <h3 className="text-4xl font-black text-green-900 mt-1">
            LKR {prediction.toLocaleString()}
          </h3>
        </div>
      )}
    </div>
    </>)
}

export default App;