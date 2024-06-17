import React from 'react';
import { useStore } from '../stores/useStore';
import '../styles/boxVisualization.css';

interface BoxVisualizationProps {
    themeId: string;
}

const BoxVisualization: React.FC<BoxVisualizationProps> = ({ themeId }) => {
    const { cards } = useStore((state) => ({
        cards: state.cards.filter((card) => card.theme === themeId),
    }));

    const boxes = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
        <div className="box-visualization">
            <h2>Progression des cartes</h2>
            {boxes.map((box) => (
                <div className="box" key={box}>
                    <h3 className="box-title">Boîte {box}</h3>
                    <ul className="card-list">
                        {cards
                            .filter((card) => card.box === box)
                            .map((card) => (
                                <li className="card-item" key={card.id}>{card.front}</li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default BoxVisualization;
