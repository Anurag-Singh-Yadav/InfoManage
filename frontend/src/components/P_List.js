import React, { useState } from "react";
import DialogBox from "./DialogBox";
import Avatar from "react-avatar";
function P_List({ persons, handleUpdatePerson, onDeletePerson }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  return (
    <div className="container">
      {open && <DialogBox open={open} handleUpdatePerson={handleUpdatePerson} formData={formData} setFormData={setFormData} setOpen={setOpen}></DialogBox>}
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
                  <div className="flex justify-between items-start">
                    <button
                      onClick={() => onDeletePerson(person.id)}
                      className=""
                    >
                      Delete
                    </button>
                    <button
                      className=""
                      onClick={(e) => {
                        e.preventDefault();
                        setFormData(person);
                        setOpen(true);
                      }}
                    >
                      Update
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

export default P_List;
