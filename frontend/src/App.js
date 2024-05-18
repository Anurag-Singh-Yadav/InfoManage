/* eslint-disable react/jsx-pascal-case */ // Disabling Pascal case check for JSX elements

import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
function App() {
  const base_url = process.env.REACT_APP_BASE_URL;
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
  });

  // Fetching data from the server on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/persons`);
      setPersons(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle addition of a new person
  const handleAddPerson = async (formData) => {
    try {
      await axios.post(`${base_url}/persons`, formData);
      fetchData(); // Fetch data after adding a person
    } catch (error) {
      console.log("Error adding person:", error.response.data.message);
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000); // Clear the error message after 3 seconds
      return;
    }
  };

  // Function to handle updating an existing person
  const handleUpdatePerson = async (id, newData) => {
    // Validation for required fields
    if (
      !newData.name ||
      !newData.email ||
      !newData.mobileNumber ||
      !newData.dateOfBirth
    ) {
      setErrorMessage("All fields are required.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000); // Clear the error message after 3 seconds
      return;
    }
    try {
      await axios.put(`${base_url}/persons/${id}`, newData);
      fetchData(); // Fetch data after updating a person
    } catch (error) {
      console.error("Error updating person:", error);
    }
  };

  // Function to handle deletion of a person
  const handleDeletePerson = async (id) => {
    try {
      await axios.delete(`${base_url}/persons/${id}`);
      fetchData(); // Fetch data after deleting a person
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };
  return (
    <div className="grid grid-cols-1 pb-7 md:grid-cols-2">
      <div className="">
        <PersonForm
          formData={formData}
          error={errorMessage}
          setError={setErrorMessage}
          handleUpdatePerson={handleUpdatePerson}
          setFormData={setFormData}
          handleAddPerson={handleAddPerson}
        />
      </div>
      <div>
        <PersonList
          error={errorMessage}
          setError={setErrorMessage}
          persons={persons}
          handleUpdatePerson={handleUpdatePerson}
          setFormData={setFormData}
          onDeletePerson={handleDeletePerson}
        />
      </div>
    </div>
  );
}

export default App;
