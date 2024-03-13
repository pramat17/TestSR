// Conversation.jsx
import React from 'react';
import MessageInput from './MessageInput';
import './Conversation.css';

const Conversation = ({ conversationId }) => {
    const messages = [
        // Exemple de messages, devraient être filtrés par conversationId
        { id: 1, text: "Bonjour", sent: true, timestamp: "10:00 AM" },
        { id: 2, text: "Salut, comment ça va ?", sent: false, timestamp: "10:01 AM" },
        // Ajoutez plus de messages ici
    ];

    return (
        <div className="conversation">
            {messages.map((message) => (
                <div key={message.id} className={`message ${message.sent ? 'sent' : 'received'}`}>
                    <p>{message.text}</p>
                    <span>{message.timestamp}</span>
                </div>
            ))}
            <MessageInput />
        </div>
    );
};

export default Conversation;
