import React, { useState } from 'react';
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
}

const Card: React.FC<CardProps> = ({ front, back }) => {
    const [showBack, setShowBack] = useState(false);

    return (
        <div className={`card ${showBack ? 'show-back' : ''}`} onClick={() => setShowBack(!showBack)}>
            <div className="card-content">
                {showBack ? back : front}
            </div>
        </div>
    );
};

export default Card;
