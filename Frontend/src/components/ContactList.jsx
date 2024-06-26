import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaEdit, FaTrash } from 'react-icons/fa';
import UpdateContact from './UpdateContact';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [updateContact, setUpdateContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://backend-1-0wii.onrender.com/contact');
      setContacts(response.data.contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`https://backend-1-0wii.onrender.com/delete/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleUpdate = (contact) => {
    setUpdateContact(contact);
  };

  const handleUpdateComplete = () => {
    setUpdateContact(null);
    fetchContacts();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Contacts</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {contacts.map((contact) => (
              <li key={contact.id} className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{contact.firstName[0]}{contact.lastName[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{`${contact.firstName} ${contact.lastName}`}</h3>
                      <div className="mt-1 flex items-center text-gray-500">
                        <FaEnvelope className="mr-2" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="mt-1 flex items-center text-gray-500">
                        <FaPhone className="mr-2" />
                        <span>{contact.mobile}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleUpdate(contact)} 
                      className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button 
                      onClick={() => deleteContact(contact.id)} 
                      className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {updateContact && (
        <UpdateContact contact={updateContact} onComplete={handleUpdateComplete} />
      )}
    </div>
  );
}

export default ContactList;