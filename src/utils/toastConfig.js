import { toast } from "react-toastify";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import React from "react";

export const configureToasts = () => {
  toast.success = (content) =>
    toast(content, {
      icon: React.createElement(FaCheck, { className: "text-black mr-2" }),
      className: "bg-green-300 text-black",
    });

  toast.error = (content) =>
    toast(content, {
      icon: React.createElement(FaExclamationCircle, {
        className: "text-black mr-2",
      }),
      className: "bg-red-300 text-black",
    });
};

export const toastContainerProps = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeButton: true,
  closeOnClick: true,
  toastClassName: ({ type }) =>
    `relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer ${
      type === "error" ? "bg-red-300" : "bg-green-300"
    } text-black`,
  bodyClassName: () => "text-sm font-medium flex items-center p-2 text-black",
};
