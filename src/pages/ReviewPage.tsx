import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useStore} from '../stores/useStore';
import Card from '../components/Card';

const ReviewPage: React.FC = () => {
    const {themeId} = useParams<{ themeId: string }>();
    const {cards, correctAnswer, incorrectAnswer} = useStore((state) => ({
        cards: state.cards.filter((card) => card.theme === themeId),
        correctAnswer: state.correctAnswer,
        incorrectAnswer: state.incorrectAnswer,
    }));

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [visibleCards, setVisibleCards] = useState<Card[]>([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function isHidden(id: string) { // Fonction pour vérifier si une carte est cachée ou non
        const updatedCards = cards.map((card) => {
            if (card.id === id && card.hidden && card.timeHidden !== 0) {
                const currentTime = Date.now();
                if ((card.timeHidden - currentTime) < 0) {
                    return {...card, hidden: card.hidden = false, timeHidden: card.timeHidden = 0};
                } else {
                    return {...card, hidden: true};
                }
            }
            return card;
        });

        setVisibleCards(updatedCards.filter((card) => !card.hidden));
    }


    useEffect(() => { // Vérifie si une carte est cachée ou non toutes les secondes
        const interval = setInterval(() => {
            cards.forEach((card) => {
                isHidden(card.id);
                console.log(card.id,'+', card.hidden,'+', card.timeHidden - Date.now());
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [cards, isHidden]);

    const handleAnswer = (correct: boolean) => { // Fonction pour gérer les réponses correctes et incorrectes
        const card = visibleCards[currentCardIndex];
        if (correct) {
            correctAnswer(card.id);
        } else {
            incorrectAnswer(card.id);
        }
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % visibleCards.length);
    };

    if (visibleCards.length === 0) {
        return <div>Pas de cartes à réviser pour le moment.</div>;
    }

    return (
        <div>
            <h1>Révision des cartes pour le thème: {themeId}</h1>
            <Card {...visibleCards[currentCardIndex]} />
            <div>
                <button onClick={() => handleAnswer(true)}>Correct</button>
                <button onClick={() => handleAnswer(false)}>Incorrect</button>
            </div>
        </div>
    );
};

export default ReviewPage;

