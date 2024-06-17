import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../stores/useStore';
import Card from '../components/Card';
import AddCardForm from '../components/AddCardForm';

const ThemePage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const { themes, addTheme, cards } = useStore((state) => ({
        themes: state.themes,
        addTheme: state.addTheme,
        cards: state.cards.filter((card) => card.theme === id),
    }));

    // Redirection ou message d'erreur si `id` est undefined
    if (!id) {
        navigate('/');
        return null;
    }

    const themeList = themes[id] || [];

    return (
        <div>
            <h1>Thèmes pour {id}</h1>
            <ul>
                {themeList.map((theme) => (
                    <li key={theme}>{theme}</li>
                ))}
            </ul>
            <button onClick={() => addTheme(id, prompt('Nouveau thème') || '')}>
                Ajouter un thème
            </button>

            <AddCardForm themeId={id} />

            <h2>Cartes de révision</h2>
            <div>
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
};

export default ThemePage;
