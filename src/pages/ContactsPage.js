// Dans ContactsPage.jsx
import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import ContactDetails from '../components/ContactDetails';
import "./ContactsPage.css"

const ContactsPage = () => {
    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <div className="contacts-page">
            <div className="contacts-content">
                <ContactList onSelectContact={setSelectedContact} />
                <ContactDetails contact={selectedContact} />
            </div>
        </div>
    );
};

export default ContactsPage;
