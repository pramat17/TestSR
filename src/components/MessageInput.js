// MessageInput.jsx
import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        // Logique d'envoi de message
        setMessage('');
    };

    return (
        <form onSubmit={sendMessage} className="message-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrire un message..."
            />
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default MessageInput;
