// MessagingPage.jsx
import React from 'react';
import MessagingApp from '../components/MessagingApp'; // Importez le composant MessagingApp
// Assurez-vous que les chemins d'importation correspondent à l'organisation de votre projet

const MessagingPage = () => {
    return (
        <div>
            <main style={{ padding: "1rem" }}>
                <MessagingApp />
            </main>
        </div>
    );
};

export default MessagingPage;
