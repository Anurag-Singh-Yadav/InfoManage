import React, { useState } from "react";
import DialogBox from "./DialogBox";
import Avatar from "react-avatar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
function PersonList({ persons,error, setError, handleUpdatePerson, onDeletePerson }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  return (
    <div className="container">
      {open && <DialogBox open={open} error={error} setError={setError} handleUpdatePerson={handleUpdatePerson} formData={formData} setFormData={setFormData} setOpen={setOpen}></DialogBox>}
      <div className="text-center font-bold text-2xl my-4">
        Person{"'"}s Details
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-8 col-md-10">
          <div className="flex flex-col gap-2 py-2">
            {persons.map((person) => (
              <div
                key={person.id}
                className="grid grid-cols-3 px-6 py-2 border-2 gap-2"
              >
                <div className="col-span-1">
                  <Avatar name={person.name} round={true} size="60"></Avatar>
                </div>
                <div className="col-span-2 flex flex-col">
                  <div className="text-lg font-semibold cursor-default hover:underline">
                    {person.name}
                  </div>
                  <div>{person.email}</div>
                  <div className="flex my-2 justify-between items-start">
                    <button
                      onClick={() => onDeletePerson(person.id)}
                      className=" rounded-full bg-red-500 text-white p-2 hover:bg-red-700"
                    >
                      <MdDelete size={20} />
                    </button>
                    <button
                      className=" rounded-full bg-blue-500 text-white p-2 hover:bg-blue-700"
                      onClick={(e) => {
                        e.preventDefault();
                        setFormData(person);
                        setOpen(true);
                      }}
                    >
                      <MdEdit size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonList;
