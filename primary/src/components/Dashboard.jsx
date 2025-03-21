import { useState, useEffect } from "react";
import PatternLock from "react-pattern-lock";
import { getAuth } from "firebase/auth";
import "../App.css";

const Dashboard = () => {
  const [formFields, setFormFields] = useState([
    {
      name: "",
      phone: "",
      email: "",
      dob: "",
      city: "",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newField, setNewField] = useState({
    fieldName: "",
    fieldType: "text",
    fieldContent: "",
  });

  const handleFormChange = (index, event, field) => {
    let data = [...formFields];

    if (event.target.type === "checkbox") {
      data[index][`${field}Checked`] = event.target.checked;
    } else {
      data[index][event.target.name] = event.target.value;
    }

    setFormFields(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let form of formFields) {
      if (!form.name || !form.phone || !form.email || !form.dob || !form.city) {
        alert("Please fill in all required fields.");
        return;
      }
    }
    console.log("Form Data Submitted:", formFields);
  };

  const handleAddCustomField = () => {
    if (!newField.fieldName.trim()) {
      alert("Field Name cannot be empty!");
      return;
    }

    const fieldKey = newField.fieldName.toLowerCase().replace(/\s+/g, "_");

    const updatedFields = formFields.map((form) => ({
      ...form,
      [fieldKey]: newField.fieldContent,
    }));

    setFormFields(updatedFields);
    setShowModal(false);
    setNewField({ fieldName: "", fieldType: "text", fieldContent: "" });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewField({ fieldName: "", fieldType: "text", fieldContent: "" });
  };

  const [pattern, setPattern] = useState([]);
  const [patternResult, setPatternResult] = useState(""); // New state for pattern result

  const handleFinish = () => {
    setPatternResult(`Pattern Entered: ${pattern.join(" → ")}`); // Update h2 text
  };
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "User";
    setUsername(storedUsername);
  }, []);

  return (
    <>
      <h1 className="pt-[50px] mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Welcome {username}
      </h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {/* Rest of your Dashboard content */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Large left column */}
          <div className="w-full lg:col-span-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Add Element
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {formFields.map((form, index) => (
                  <div
                    key={index}
                    className="mb-6 p-4 border border-gray-200 rounded"
                  >
                    <div className="grid gap-4 mb-4">
                      {/* Name field */}
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor={`name-${index}`}
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id={`name-${index}`}
                            name="name"
                            value={form.name}
                            onChange={(event) => handleFormChange(index, event)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div className="flex items-center h-[42px] mt-8">
                          <input
                            disabled
                            type="checkbox"
                            checked={form.nameChecked}
                            onChange={(event) =>
                              handleFormChange(index, event, "name")
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Phone field */}
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor={`phone-${index}`}
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id={`phone-${index}`}
                            name="phone"
                            value={form.phone}
                            onChange={(event) => handleFormChange(index, event)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div className="flex items-center h-[42px] mt-8">
                          <input
                            type="checkbox"
                            checked={form.phoneChecked}
                            onChange={(event) =>
                              handleFormChange(index, event, "phone")
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Email field */}
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor={`email-${index}`}
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Email ID
                          </label>
                          <input
                            type="email"
                            id={`email-${index}`}
                            name="email"
                            value={form.email}
                            onChange={(event) => handleFormChange(index, event)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div className="flex items-center h-[42px] mt-8">
                          <input
                            type="checkbox"
                            checked={form.emailChecked}
                            onChange={(event) =>
                              handleFormChange(index, event, "email")
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* DOB field */}
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor={`dob-${index}`}
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            id={`dob-${index}`}
                            name="dob"
                            value={form.dob}
                            onChange={(event) => handleFormChange(index, event)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div className="flex items-center h-[42px] mt-8">
                          <input
                            type="checkbox"
                            checked={form.dobChecked}
                            onChange={(event) =>
                              handleFormChange(index, event, "dob")
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* City field */}
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor={`city-${index}`}
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id={`city-${index}`}
                            name="city"
                            value={form.city}
                            onChange={(event) => handleFormChange(index, event)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div className="flex items-center h-[42px] mt-8">
                          <input
                            type="checkbox"
                            checked={form.cityChecked}
                            onChange={(event) =>
                              handleFormChange(index, event, "city")
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Dynamic fields */}
                      {Object.entries(form).map(([key, value]) => {
                        if (
                          !["name", "phone", "email", "dob", "city"].includes(
                            key
                          ) &&
                          !key.includes("Checked")
                        ) {
                          return (
                            <div key={key} className="flex items-center gap-4">
                              <div className="flex-1">
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                  {key
                                    .split("_")
                                    .map(
                                      (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                    )
                                    .join(" ")}
                                </label>
                                <input
                                  type="text"
                                  name={key}
                                  value={value}
                                  onChange={(event) =>
                                    handleFormChange(index, event)
                                  }
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                ))}

                <div className="flex justify-end">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      Procced to Mine Block
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right Column - Pattern Lock */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Pattern Lock Box */}
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Draw Pattern
            </h1>
            <div className="flex justify-center bg-white p-4 rounded-lg shadow-md border border-gray-300">
              <PatternLock
                width={280} // Width of the pattern lock
                pointSize={18} // Size of each dot
                size={3} // 3x3 grid
                path={pattern} // Stores pattern input
                onChange={setPattern} // Updates the pattern as the user draws
                onFinish={handleFinish} // Triggers when the pattern is completed
                connectorThickness={4} // Makes the connecting lines thicker
                connectorRoundedCorners={true} // Rounded connecting lines
                className="custom-pattern-lock"
              />
            </div>

            {/* Pattern Display (H2 Tag) */}
            <h2 className="mt-4 p-3 bg-gray-200 text-gray-900 rounded-md text-lg text-center">
              {patternResult || "Pattern: None"} {/* Display pattern here */}
            </h2>

            {/* Reset Button */}
            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
                onClick={() => {
                  setPattern([]);
                  setPatternResult(""); // Clear pattern result
                }}
              >
                Reset Pattern
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Adding Elements */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Add New Field
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Field Name
                  </label>
                  <input
                    type="text"
                    value={newField.fieldName}
                    onChange={(e) =>
                      setNewField({ ...newField, fieldName: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Field Type
                  </label>
                  <select
                    value={newField.fieldType}
                    onChange={(e) =>
                      setNewField({ ...newField, fieldType: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="email">Email</option>
                    <option value="tel">Phone</option>
                    <option value="date">Date</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Default Content
                  </label>
                  <input
                    type={newField.fieldType}
                    value={newField.fieldContent}
                    onChange={(e) =>
                      setNewField({ ...newField, fieldContent: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCustomField}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
