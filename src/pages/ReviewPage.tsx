import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../stores/useStore';
import Card from '../components/Card';

const ReviewPage: React.FC = () => {
    const { themeId } = useParams<{ themeId: string }>();
    const { cards, correctAnswer, incorrectAnswer } = useStore((state) => ({
        cards: state.cards.filter((card) => card.theme === themeId && !card.hidden),
        correctAnswer: state.correctAnswer,
        incorrectAnswer: state.incorrectAnswer,
    }));

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleAnswer = (correct: boolean) => {
        const card = cards[currentCardIndex];
        if (correct) {
            correctAnswer(card.id);
        } else {
            incorrectAnswer(card.id);
        }
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    if (cards.length === 0) {
        return <div>Pas de cartes à réviser pour le moment.</div>;
    }

    return (
        <div>
            <h1>Révision des cartes pour le thème: {themeId}</h1>
            <Card {...cards[currentCardIndex]} />
            <div>
                <button onClick={() => handleAnswer(true)}>Correct</button>
                <button onClick={() => handleAnswer(false)}>Incorrect</button>
            </div>
        </div>
    );
};

export default ReviewPage;
