import { useState } from "react";
import { MdOutlineFilterList } from "react-icons/md";

const FilterOptions = ({ onFilterChange, fetchStudents }) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;

    setLocation(selectedLocation);
    if (selectedLocation === "All") {
      onFilterChange({ location: ""});
      fetchDiseases();
    } else {
      onFilterChange({ location: selectedLocation });
    }
  };


  return (
    <div className="flex items-center justify-center gap-4 relative">
      <p className="flex items-center gap-1 font-medium text-gray-500">
        <MdOutlineFilterList size={20} /> Filter
      </p>

      {/* --------- Filter box------------ */}
      <div className="relative">
        <p className="text-[14px] absolute -top-[12px] bg-white left-1 text-gray-400">
          Location
        </p>
        <select
          className="border border-gray-300 p-2 px-3 rounded-md w-[200px]"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="">All</option>
          <option value="New York">New York</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Prayagraj">Prayagraj</option>
        </select>
      </div>

      {/* <div className=" relative">
        <p className="text-[14px] absolute -top-[12px] bg-white left-1 text-gray-400">
          Fee Status
        </p>
        <select
          className="border border-gray-300 p-2 px-3 rounded-md"
          value={paymentStatus}
          onChange={handlepaymentStatusChange}
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div> */}
      {/* --------- Filter box------------ */}
    </div>
  );
};

export default FilterOptions;
