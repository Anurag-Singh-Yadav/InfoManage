/* eslint-disable react/jsx-pascal-case */ // Disabling Pascal case check for JSX elements

import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import P_FORM from "./components/P_FORM";
import P_List from "./components/P_List";

function App() {
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
      const response = await axios.get("http://localhost:3000/api/persons");
      setPersons(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle addition of a new person
  const handleAddPerson = async (formData) => {
    try {
      await axios.post("http://localhost:3000/api/persons", formData);
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
      await axios.put(`http://localhost:3000/api/persons/${id}`, newData);
      fetchData(); // Fetch data after updating a person
    } catch (error) {
      console.error("Error updating person:", error);
    }
  };

  // Function to handle deletion of a person
  const handleDeletePerson = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/persons/${id}`);
      fetchData(); // Fetch data after deleting a person
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <P_FORM
          formData={formData}
          error={errorMessage}
          setError={setErrorMessage}
          handleUpdatePerson={handleUpdatePerson}
          setFormData={setFormData}
          handleAddPerson={handleAddPerson}
        />
      </div>
      <div>
        <P_List
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
