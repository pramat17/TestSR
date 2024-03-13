// ConversationList.jsx
import React from 'react';
import './ConversationList.css';
import defaultAvatar from '../images/icon.png';
import { ReactComponent as PlusIcon } from '../images/plus-icon.svg'; // Assurez-vous que le chemin est correct

const ConversationList = ({ onSelectConversation, activeConversationId }) => {
    const conversations = [
        { id: 1, title: "Stage Perf Pacques", lastMessage: "Bonjour", avatar: defaultAvatar, unread: true },
        { id: 2, title: "Mike Bur", lastMessage: "Salut", avatar: defaultAvatar, unread: false },
        // Ajoutez plus de conversations ici
    ];

    return (
        <div className="conversation-list">
            <div className="conversation-list-header">
                <input
                    type="text"
                    placeholder="Recherche conversation"
                    className="conversation-search"
                />
                <div className="create-conversation-btn">
                    <PlusIcon/>
                </div>
            </div>
            {conversations.map((conversation) => (
                <div
                    key={conversation.id}
                    className={`conversation-preview ${conversation.id === activeConversationId ? 'active' : ''}`}
                    onClick={() => onSelectConversation(conversation.id)}
                >
                    <img src={conversation.avatar} alt={conversation.title} className="avatar"/>
                    <div className="conversation-details">
                        <h4>{conversation.title}</h4>
                        <p className="last-message">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread && <div className="unread-badge">New</div>}
                </div>
            ))}
        </div>
    );
};

export default ConversationList;
