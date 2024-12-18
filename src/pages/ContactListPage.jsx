import { useState } from "react";
import { useContacts } from "../hooks/useContacts";
import ContactTable from "../components/ContactTable";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import { MdGridView } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const ContactListPage = () => {
  const { contacts, loading, addContact, updateContact, deleteContact } =
    useContacts();
  const [viewMode, setViewMode] = useState("card");
  const [showModal, setShowModal] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      deleteContact(id);
    }
  };

  const handleSubmit = (contact) => {
    if (editingContact && editingContact.id) {
      updateContact(editingContact.id, contact);
    } else {
      addContact(contact);
    }
    setShowModal(false);
    setEditingContact(null);
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contacts Information</h1>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <p className="text-lg">
            Your list of contacts appear here. To add a new contact, click on
            the Add New Contact button.
          </p>
        </div>
        <div className="w-1/2 pl-2 flex justify-end items-center">
          <button
            className="bg-purple-600 text-white rounded-full h-10 w-[180px] flex items-center justify-center"
            onClick={() => setShowModal(true)}
          >
            Add New Contact
          </button>
        </div>
      </div>
      <div className="flex justify-end space-x-2 mb-4">
        <button
          className={`p-2 rounded ${
            viewMode === "card" ? "bg-gray-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setViewMode("card")}
        >
          <MdGridView className="text-lg" />
        </button>
        <button
          className={`p-2 rounded ${
            viewMode === "list" ? "bg-gray-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setViewMode("list")}
        >
          <GiHamburgerMenu className="text-lg" />
        </button>
      </div>
      {viewMode === "list" ? (
        <ContactTable
          contacts={contacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onEdit={() => handleEdit(contact)}
              onDelete={() => handleDelete(contact.id)}
            />
          ))}
        </div>
      )}
      {showModal && (
        <ContactForm
          contact={editingContact}
          onSubmit={handleSubmit}
          onClose={() => {
            setShowModal(false);
            setEditingContact(null);
          }}
        />
      )}
    </div>
  );
};

export default ContactListPage;
