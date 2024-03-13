// MessagingPage.jsx
import React, { useState } from 'react';
import ConversationList from './ConversationList';
import Conversation from './Conversation';
import './MessagingApp.css';

const MessagingPage = () => {
    const [activeConversation, setActiveConversation] = useState(null);

    const handleConversationSelect = (conversationId) => {
        setActiveConversation(conversationId);
    };

    return (
        <div className="messaging-page">
            <ConversationList onSelectConversation={handleConversationSelect} />
            <div className="conversation-container">
                {activeConversation ? (
                    <Conversation conversationId={activeConversation} />
                ) : (
                    <div className="no-conversation-selected">
                        Sélectionnez une conversation pour commencer à discuter.
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagingPage;
