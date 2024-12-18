import { Link } from "react-router-dom";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const ContactTable = ({ contacts, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border-collapse border-black">
      <thead className="bg-purple-900 text-white text-left">
        <tr>
          <th className="py-2 px-4 border border-gray-400">Name</th>
          <th className="py-2 px-4 border border-gray-400">Contact Number</th>
          <th className="py-2 px-4 border border-gray-400">Email Address</th>
          <th className="py-2 px-4 border border-gray-400 w-24">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td className="py-2 px-4 border border-gray-400">
              <Link
                to={`/contact/${contact.id}`}
                className="text-black underline"
              >
                {contact.name}
              </Link>
            </td>
            <td className="py-2 px-4 border border-gray-400">
              {contact.phone}
            </td>
            <td className="py-2 px-4 border border-gray-400">
              {contact.email}
            </td>
            <td className="py-2 px-4 border border-gray-400">
              <div className="flex justify-center items-center space-x-2">
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
