import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { BASE_URL } from "../api/url";

const DiseaseForm = ({
  onSubmit,
  setIsModelOpen,
  initialData,
  setEditingDisease,
}) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initialData || {},
  });

  useEffect(() => {
    if (initialData) {
      Object.keys(initialData).forEach((key) => {
        setValue(key, initialData[key]);
      });
    }
  }, [initialData, setValue]);

  const handleFormSubmit = async (data) => {
    try {
      if (initialData) {
        await axios.put(
          `${BASE_URL}/api/update_disease/${initialData._id}`,
          data
        );
      } else {
        await axios.post(`${BASE_URL}/api/add_diseases`, data);
      }
      onSubmit();
      setEditingDisease(null);
      setIsModelOpen(false);
    } catch (error) {
      console.error("Error updating disease: ", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-black/40 z-20">
      <form
        className="bg-white flex flex-col w-[390px] p-6 py-7 rounded-md gap-3 relative"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="absolute -top-2 -right-2">
          <RxCross2
            onClick={() => {
              setIsModelOpen(false), setEditingDisease(null);
            }}
            className="bg-white text-red-500 rounded-full shadow-md text-xl p-[2px] cursor-pointer"
          />
        </div>
        <input
          placeholder="Disease name"
          type="text"
          {...register("name", { required: true })}
          className="border border-gray-300 p-2 px-3 rounded-md"
        />
        <input
          placeholder="Symptoms"
          type="text"
          {...register("symptoms")}
          className="border border-gray-300 p-2 px-3 rounded-md"
        />
        <input
          placeholder="Medicines"
          type="text"
          {...register("medicine")}
          className="border border-gray-300 p-2 px-3 rounded-md"
        />
        <input
          placeholder="Medical Store"
          type="text"
          {...register("medical_store")}
          className="border border-gray-300 p-2 px-3 rounded-md"
        />
        <input
          placeholder="Location"
          type="text"
          {...register("location")}
          className="border border-gray-300 p-2 px-3 rounded-md"
        />
        
        <button
          className="bg-[#354f52] hover:bg-[#2f3e46] text-white p-2 px-3 rounded-md"
          type="submit"
        >
          {initialData ? "Update Details" : "Add Details"}
        </button>
      </form>
    </div>
  );
};

export default DiseaseForm;
