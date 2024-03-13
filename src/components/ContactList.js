// src/components/ContactList.jsx
import React, { useState } from 'react';
import './ContactList.css'; // Assurez-vous de créer ce fichier CSS

const initialContacts = [
    { id: 1, firstName: "Gwen", lastName: "Chamlong", phone: "0102030405", email: "gchamlong@staderochelais.com", team: "U9 Fille / Secrétaire", diploma: "CQP 2", trainingSlots: "Lundi, Mercredi" },
    { id: 2, firstName: "Léo", lastName: "Dalger", phone: "0607080910", email: "ldalger@staderochelais.com", team: "U13 Garçons 1 / U15 Fille 1", diploma: "DE", trainingSlots: "Mardi, Mercredi, Jeudi" },
];

const ContactList = ({ onSelectContact }) => {
    const [contacts, setContacts] = useState(initialContacts);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContacts = contacts.filter(contact =>
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="contact-list">
            <input
                type="text"
                placeholder="Rechercher..."
                className="search-input"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredContacts.map((contact) => (
                <div key={contact.id} className="contact-item" onClick={() => onSelectContact(contact)}>
                    {contact.firstName} {contact.lastName}
                </div>
            ))}
        </div>
    );
};

export default ContactList;
