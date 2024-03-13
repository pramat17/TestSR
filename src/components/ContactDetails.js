import React from 'react';
import './ContactDetails.css';
import defaultProfilePic from '../images/icon.png'; // Mettez à jour avec le chemin vers votre image par défaut

const ContactDetails = ({ contact }) => {
    if (!contact) {
        return <div className="contact-details">Sélectionnez un contact pour voir les détails.</div>;
    }

    return (
        <div className="contact-details">
            <div className="contact-header">
                <img src={contact.profilePic || defaultProfilePic} alt={`${contact.firstName} ${contact.lastName}`} className="profile-picture" />
                <div>
                    <h2>{contact.firstName} {contact.lastName}</h2>
                    <p>{contact.team}</p>
                </div>
            </div>
            <div className="contact-info">
                <label>Téléphone:</label>
                <p>{contact.phone}</p>

                <label>Email:</label>
                <p>{contact.email}</p>

                <label>Équipe entraînée:</label>
                <p>{contact.team}</p>

                <label>Diplôme:</label>
                <p>{contact.diploma}</p>

                <label>Créneaux d'entraînement:</label>
                <p>{contact.trainingSlots}</p>
            </div>
        </div>
    );
};

export default ContactDetails;
