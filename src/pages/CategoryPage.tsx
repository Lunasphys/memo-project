import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStore } from '../stores/useStore';

const CategoryPage: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const { themes, addTheme } = useStore((state) => ({
        themes: state.themes,
        addTheme: state.addTheme,
    }));

    if (!categoryId) {
        return <div>Catégorie non trouvée</div>;
    }

    const themeList = themes[categoryId] || [];

    return (
        <div>
            <h1>Thèmes pour la catégorie {categoryId}</h1>
            <ul>
                {themeList.map((theme) => (
                    <li key={theme}>
                        <Link to={`/theme/${theme}`}>{theme}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => addTheme(categoryId, prompt('Nouveau thème') || '')}>
                Ajouter un thème
            </button>
        </div>
    );
};

export default CategoryPage;
