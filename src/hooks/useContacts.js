import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5000/contacts";

export const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(API_URL);
      setContacts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Failed to fetch contacts");
      setLoading(false);
    }
  };

  const addContact = async (newContact) => {
    try {
      const response = await axios.post(API_URL, newContact);
      setContacts([...contacts, response.data]);
      toast.success("Successfully added a new contact!");
    } catch (error) {
      console.error("Error adding contact:", error);
      toast.error("Failed to add contact");
    }
  };

  const updateContact = async (id, updatedContact) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        ...updatedContact,
        id,
      });
      setContacts(
        contacts.map((contact) =>
          contact.id === id ? { ...updatedContact, id } : contact
        )
      );
      toast.success("Changes saved");
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Failed to update contact");
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setContacts(contacts.filter((contact) => contact.id !== id));
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Failed to delete contact");
    }
  };

  return { contacts, loading, addContact, updateContact, deleteContact };
};
