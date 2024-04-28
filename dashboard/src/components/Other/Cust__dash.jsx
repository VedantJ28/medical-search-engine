import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DiseaseForm from "../DiseaseForm";
import Cust_List from "./Cust_List";
import SearchBar from "../SearchBar";
import { FiPlus } from "react-icons/fi";
import { PiExport } from "react-icons/pi";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import FilterOptions from "../FilterOptions";

const Cust_dash = () => {
  const { reset } = useForm();
  const [diseases, setDiseases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    fetchDiseases();
  }, []);

  const fetchDiseases = async () => {
    setIsLoading(true);
    try {
      // Fetch diseases data
      const response = await axios.get(`${BASE_URL}/api/get_diseases`);
      const data = await response.data;
      setDiseases(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Apply search and filters to student data
  let filteredDiseases = diseases.filter(
    (disease) =>
      disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.symptoms.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.medicine.toLowerCase().includes(searchQuery.toLowerCase())||
      disease.medical_store.toLowerCase().includes(searchQuery.toLowerCase())||
      disease.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filters.location) {
    filteredDiseases = filteredDiseases.filter(
      (disease) => disease.location === filters.location
    );
  }

  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/add_disease`, data);
      const newDisease = response.data;
      setDiseases([...diseases, newDisease]);
      reset();
      setIsModelOpen(false);
    } catch (error) {
      console.error("Error adding disease: ", error);
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Symptoms",
      "Medicine",
      "Medical Store",
      "Location"
    ];
    const csvData = [headers.join(",")];

    filteredDiseases.forEach((disease) => {
      const row = [
        disease.name,
        disease.symptoms,
        disease.medicine,
        disease.medical_store,
        disease.location
      ];
      csvData.push(row.join(","));
    });

    const csvContent = csvData.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "diseases.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full  border bg-[#fff] rounded-md px-3 shadow-lg">
      {/* <div className="w-full border-b border-gray-200 py-4 px-3 flex items-center gap-2">
        <img src="/logo.png" className="w-[25px]" alt="" />
        <h1 className="font-medium text-[1.1rem]">Disease Dashboard</h1>
      </div> */}
      <div className="flex items-center mt-8 px-3 justify-between">
        <div className=" flex items-center justify-center gap-6 text-gray-700">
          <SearchBar onSearch={handleSearch} />

          <FilterOptions
            onFilterChange={handleFilterChange}
            fetchDiseases={fetchDiseases}
          />
          
          <button
            className=" flex items-center gap-2 ml-3 border bg-gray-100 p-2 px-3 rounded-md"
            onClick={exportToCSV}
          >
            <PiExport size={20} />
            Export
          </button>
        </div>

        {/* <button
          className="bg-[#007aff] text-white p-2 px-3 rounded-md flex items-center justify-center gap-1"
          onClick={() => setIsModelOpen(true)}
        >
          <FiPlus /> Add New
        </button> */}

        {isModelOpen && (
          <DiseaseForm
            onSubmit={handleFormSubmit}
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
          />
        )}
      </div>
      <Cust_List
        isLoading={isLoading}
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        fetchDiseases={fetchDiseases}
        diseases={filteredDiseases}
      />
    </div>
  );
};

export default Cust_dash;
