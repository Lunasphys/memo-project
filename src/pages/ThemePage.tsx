import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStore } from '../stores/useStore';
import Card from '../components/Card';
import AddCardForm from '../components/AddCardForm';
import BoxVisualization from '../components/BoxVisualization';

const ThemePage: React.FC = () => {
    const { themeId } = useParams<{ themeId: string }>();
    const { cards } = useStore((state) => ({
        cards: state.cards.filter((card) => card.theme === themeId),
    }));

    if (!themeId) {
        return <div>Thème non trouvé</div>;
    }

    return (
        <div className="container">
            <h1 className="header">Thème: {themeId}</h1>
            <Link className="button" to={`/review/${themeId}`}>Commencer la révision</Link>

            <AddCardForm themeId={themeId} />

            <BoxVisualization themeId={themeId} />

            <h2 className="section-title">Cartes de révision</h2>
            <div className="card-list">
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
};

export default ThemePage;
