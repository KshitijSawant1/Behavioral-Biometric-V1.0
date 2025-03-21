import { useState } from "react";

const Dashboard = () => {
  const [formFields, setFormFields] = useState([
    {
      name: "",
      phone: "",
      email: "",
      dob: "",
      city: "",
      nameChecked: true,
      phoneChecked: false,
      emailChecked: false,
      dobChecked: false,
      cityChecked: false,
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

  const handleAddCustomField = () => {
    const fieldKey = newField.fieldName.toLowerCase().replace(/\s+/g, "_");
    const updatedFields = formFields.map((form) => ({
      ...form,
      [fieldKey]: newField.fieldContent,
      [`${fieldKey}Checked`]: false,
    }));

    setFormFields(updatedFields);
    setShowModal(false);
    setNewField({ fieldName: "", fieldType: "text", fieldContent: "" });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewField({ fieldName: "", fieldType: "text", fieldContent: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {/* Large left column */}
        <div className="col-span-3">
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
                    {Object.keys(form).map((key) => {
                      if (
                        !["name", "phone", "email", "dob", "city"].includes(
                          key
                        ) &&
                        !key.includes("Checked")
                      ) {
                        return (
                          <div key={key} className="flex items-center gap-4">
                            <div className="flex-1">
                              <label
                                htmlFor={`${key}-${index}`}
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
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
                                type={newField.fieldType}
                                id={`${key}-${index}`}
                                name={key}
                                value={form[key]}
                                onChange={(event) =>
                                  handleFormChange(index, event)
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                              />
                            </div>
                            <div className="flex items-center h-[42px] mt-8">
                              <input
                                type="checkbox"
                                checked={form[`${key}Checked`]}
                                onChange={(event) =>
                                  handleFormChange(index, event, key)
                                }
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
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
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Small right column */}
        <div className="col-span-1">
          <div className="p-6 bg-white rounded-lg shadow-md h-full">
            {/* Right column content here */}
          </div>
        </div>

        {/* Modal */}
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
    </div>
  );
};

export default Dashboard;
