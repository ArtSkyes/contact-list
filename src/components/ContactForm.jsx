import React, { useState, useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const ContactForm = ({ contact, onSubmit, onClose }) => {
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [phone, setPhone] = useState(contact?.phone || "");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateField = (field, value) => {
    let error = "";
    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email address is invalid";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Contact number is required";
        } else if (!/^\d+$/.test(value)) {
          error = "Contact number must only contain numbers";
        } else if (value.length !== 11) {
          error = "Contact number must be 11 digits";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      phone: validateField("phone", phone),
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      onSubmit({ name, email, phone });
      onClose();
    }
  };

  const isFormValid =
    !Object.values(errors).some((error) => error) && name && email && phone;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-80 shadow-lg rounded-md bg-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name ? "border-red-500" : ""
              }`}
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-1 flex items-center">
                <FaExclamationCircle className="mr-1" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Contact Number
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phone ? "border-red-500" : ""
              }`}
              id="phone"
              name="phone"
              type="tel"
              placeholder="Contact Number"
              value={phone}
              onChange={handleChange}
              maxLength={11}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic mt-1 flex items-center">
                <FaExclamationCircle className="mr-1" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-1 flex items-center">
                <FaExclamationCircle className="mr-1" /> {errors.email}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              className="bg-white hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline border-2 border-purple-500"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className={`bg-purple-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${
                isFormValid
                  ? "hover:bg-purple-700"
                  : "opacity-50 cursor-not-allowed"
              }`}
              type="submit"
              disabled={!isFormValid}
            >
              {contact ? "Save Changes" : "Add Contact"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
