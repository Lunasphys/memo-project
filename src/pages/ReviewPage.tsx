import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useStore} from '../stores/useStore';
import Card from '../components/Card';

const ReviewPage: React.FC = () => {
    const {themeId} = useParams<{ themeId: string }>();
    const {cards, correctAnswer, incorrectAnswer} = useStore((state) => ({
        cards: state.cards.filter((card) => card.theme === themeId && !card.hidden),
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
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [cards, isHidden]);

    const handleAnswer = (correct: boolean) => {
        const updatedVisibleCards = [...visibleCards]; // Créer une copie de la liste visibleCards
        const card = updatedVisibleCards[currentCardIndex];
        if (correct) {
            correctAnswer(card.id);
            updatedVisibleCards.splice(currentCardIndex, 1); // Supprimer la carte correctement répondue de la liste visibleCards
        } else {
            incorrectAnswer(card.id);
        }
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % updatedVisibleCards.length); // Mettre à jour l'index actuel en fonction de la nouvelle liste visibleCards
        setVisibleCards(updatedVisibleCards); // Mettre à jour la liste visibleCards avec la carte correctement répondue supprimée
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

