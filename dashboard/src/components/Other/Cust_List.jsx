import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { RiLoader2Line } from "react-icons/ri";
import { BASE_URL } from "../../api/url";
import { ImFileEmpty } from "react-icons/im";
import DiseaseForm from "../DiseaseForm";

const Cust_List = ({
  isLoading,
  diseases,
  fetchDiseases,
  isModelOpen,
  setIsModelOpen,
}) => {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [editingDisease, setEditingDisease] = useState(null);

  const actionBoxRef = useRef();

  const handleEdit = (disease) => {
    setSelectedDisease(disease._id);
    setEditingDisease(disease);
  };

  const handleDelete = async (diseaseId) => {
    try {
      alert(`deleted ${diseaseId.name}`);
      await axios.delete(`${BASE_URL}/api/delete_disease/${diseaseId._id}`); 
      console.log("deleted");
      fetchDiseases();
    } catch (error) {
      console.error("Error deleting disease: ", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionBoxRef.current &&
        !actionBoxRef.current.contains(event.target)
      ) {
        setSelectedDisease(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedDisease]);

  return (
    <div className="table-container mt-8 px-3 h-[450px] overflow-y-auto mb-6">
      <table className="relative">
        <thead className="sticky top-0 bg-white shadow-sm z-10">
          <tr className="text-gray-400 sticky text-start border-b">
            <th
              className="font-medium   text-start  p-3"
              style={{ width: "250px", overflow: "hidden" }}
            >
              Name
            </th>
            <th
              className="font-medium   text-start  p-3"
              style={{ width: "300px", overflow: "hidden" }}
            >
              Symptoms
            </th>
            <th
              className="font-medium   text-start  p-3"
              style={{ width: "300px", overflow: "hidden" }}
            >
              Medicines
            </th>
            <th
              className="font-medium   text-start  p-3"
              style={{ width: "300px", overflow: "hidden" }}
            >
              Medical Store
            </th>
            <th
              className="font-medium   text-start  p-3"
              style={{ width: "300px", overflow: "hidden" }}
            >
              Location
            </th>
          </tr>
        </thead>

        {diseases?.length === 0 ? (
          <div className="h-full absolute w-full flex items-center justify-center top-[200px] gap-2 text-[14px] text-gray-400">
            {isLoading ? (
              <>
                <RiLoader2Line size={20} className="animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <ImFileEmpty /> No data Found
              </>
            )}
          </div>
        ) : (
          <tbody className="">
            {diseases.map((disease) => (
              <tr
                className={` ${
                  selectedDisease === disease._id && "bg-gray-100"
                } hover:bg-gray-100 cursor-pointer rounded-md`}
                key={disease._id}
              >
                <td
                  className="font-normal pr-4 text-gray-700   text-start  p-3 text-[15px]"
                  style={{ maxWidth: "250px", overflow: "hidden" }}
                >
                  {disease.name}
                </td>
                <td
                  className="font-normal pr-4 text-gray-700   text-start  p-3 text-[15px]"
                  style={{ maxWidth: "300px", overflow: "hidden" }}
                >
                  {disease.symptoms}
                </td>
                <td
                  className="font-normal pr-4 text-gray-700   text-start  p-3 text-[15px]"
                  style={{ maxWidth: "300px", overflow: "hidden" }}
                >
                  {disease.medicine}
                </td>
                <td
                  className="font-normal pr-4 text-gray-700   text-start  p-3 text-[15px]"
                  style={{ maxWidth: "300px", overflow: "hidden" }}
                >
                  {disease.medical_store}
                </td>
                <td
                  className="font-normal pr-4 text-gray-700   text-start  p-3 text-[15px]"
                  style={{ maxWidth: "300px", overflow: "hidden" }}
                >
                  {disease.location}
                </td>
                {/* <td>
                  <div className="relative">
                    <HiOutlineDotsVertical
                      className="cursor-pointer"
                      onClick={() => setSelectedDisease(disease._id)}
                    />
                    {selectedDisease === disease._id && (
                      <div
                        ref={actionBoxRef}
                        className="absolute z-[8] right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      >
                        <button
                          onClick={() => {
                            handleEdit(disease), setIsModelOpen(true);
                          }}
                          className=" px-4 py-2 text-sm hover:bg-gray-100 w-full text-left flex items-center gap-1 text-gray-500"
                        >
                          <MdEdit /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(disease)}
                          className=" px-4 py-2 text-sm hover:bg-gray-100 w-full text-left flex items-center gap-1 text-gray-500"
                        >
                          <MdDeleteOutline /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {isModelOpen && (
        <DiseaseForm
          onSubmit={fetchDiseases}
          setIsModelOpen={setIsModelOpen}
          initialData={editingDisease}
          setEditingDisease={setEditingDisease}
        />
      )}
    </div>
  );
};

export default Cust_List;
