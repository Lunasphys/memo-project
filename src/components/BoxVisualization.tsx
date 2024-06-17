import React from 'react';
import { useStore } from '../stores/useStore';

interface BoxVisualizationProps {
    themeId: string;
}

const BoxVisualization: React.FC<BoxVisualizationProps> = ({ themeId }) => {
    const { cards } = useStore((state) => ({
        cards: state.cards.filter((card) => card.theme === themeId),
    }));

    const boxes = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
        <div>
            <h2>Progression des cartes</h2>
            {boxes.map((box) => (
                <div key={box}>
                    <h3>Boîte {box}</h3>
                    <ul>
                        {cards
                            .filter((card) => card.box === box)
                            .map((card) => (
                                <li key={card.id}>{card.front}</li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default BoxVisualization;
