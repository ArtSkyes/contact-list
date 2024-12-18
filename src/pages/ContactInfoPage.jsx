import { useParams, Link } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";
import { FaArrowLeft } from "react-icons/fa";

const ContactInfoPage = () => {
  const { id } = useParams();
  const { contacts, loading } = useContacts();

  if (loading) {
    return <div>Loading...</div>;
  }

  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-6">
          <Link to="/" className="text-gray-700 mr-4">
            <FaArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold">Customer Information</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h2 className="text-sm text-gray-500 mb-1">Full Name</h2>
              <p className="text-md font-semibold">{contact.name}</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-500 mb-1">Email Address</h2>
              <p className="text-md font-semibold">{contact.email}</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-500 mb-1">Contact Number</h2>
              <p className="text-md font-semibold">{contact.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPage;
