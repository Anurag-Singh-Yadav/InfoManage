import React from "react";
import "./PersonForm.css";
import hero from "../assets/cms.png";
import { MdCancel } from "react-icons/md";

function PersonForm({
  handleAddPerson,
  handleUpdatePerson,
  formData,
  id,
  isUpdate,
  setOpen,
  setFormData,
  error,
  setError,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.dateOfBirth
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    if (isUpdate) {
      handleUpdatePerson(id, formData);
      setOpen(false);
    } else {
      handleAddPerson(formData);
    }
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      dateOfBirth: "",
    });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {isUpdate && (
        <div className="absolute text-black top-0 right-2 m-2">
          <MdCancel
            className="text-2xl cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      )}
      <div className="text-center my-4 font-bold text-black text-2xl mb-3">
        {isUpdate ? "Update Person" : "Enter Details"}
      </div>
      <div className="p-6 border rounded-sm w-full max-w-[450px]">
        {!isUpdate && (
          <div>
            <img src={hero} alt="Logo" className="w-[100px]"></img>
          </div>
        )}
        {error && (
          <div className="form-error capitalize py-1 text-red-500">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-input"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            
          </div>
          <button type="submit" className="form-button">
            {isUpdate ? "Update" : "Add Person"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonForm;
