import React, { useState } from 'react';
import { useStore } from '../stores/useStore';
import '../styles/card.css';

interface CardProps {
    id: string;
    front: string;
    back: string;
    image?: string;
    audio?: string;
    video?: string;
    category: string;
    theme: string;
    box: number;
    hidden?: boolean;
    isReviewing: boolean;
}

const Card: React.FC<CardProps> = ({ id, front, back, isReviewing }) => {
    const [showBack, setShowBack] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newFront, setNewFront] = useState(front);
    const [newBack, setNewBack] = useState(back);
    const { updateCard, deleteCard } = useStore((state) => ({
        updateCard: state.updateCard,
        deleteCard: state.deleteCard,
    }));

    const handleSave = () => {
        updateCard(id, { front: newFront, back: newBack });
        setIsEditing(false);
    };

    return (
        <div className={`card ${showBack ? 'show-back' : ''}`}>
            {isEditing ? (
                <div className="edit-card">
                    <input
                        type="text"
                        value={newFront}
                        onChange={(e) => setNewFront(e.target.value)}
                    />
                    <textarea
                        value={newBack}
                        onChange={(e) => setNewBack(e.target.value)}
                    />
                    <button className="button save-button" onClick={handleSave}>Enregistrer</button>
                    <button className="button cancel-button" onClick={() => setIsEditing(false)}>Annuler</button>
                </div>
            ) : (
                <div className="card-content" onClick={() => setShowBack(!showBack)}>
                    {showBack ? back : front}
                </div>
            )}
            {!isReviewing && !isEditing && (
                <div className="card-actions">
                    <button className="button edit-button" onClick={() => setIsEditing(true)}>Éditer</button>
                    <button className="button delete-button" onClick={() => deleteCard(id)}>Supprimer</button>
                </div>
            )}
        </div>
    );
};

export default Card;
