import { Link } from "react-router-dom";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const ContactCard = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">
          <Link
            to={`/contact/${contact.id}`}
            className="text-black underline hover:text-gray-700"
          >
            {contact.name}
          </Link>
        </h2>
        <div className="flex space-x-2">
          <button
            className="text-gray-800 hover:text-gray-600 text-xl"
            onClick={() => onEdit(contact)}
            aria-label="Edit"
          >
            <MdOutlineEdit />
          </button>
          <button
            className="text-gray-800 hover:text-gray-600 text-xl"
            onClick={() => onDelete(contact.id)}
            aria-label="Delete"
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
      <p className="mb-1">{contact.email}</p>
      <p className="mb-2">{contact.phone}</p>
    </div>
  );
};

export default ContactCard;
