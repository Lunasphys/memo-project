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
        <div className="container">
            <h1 className="header">Thèmes pour la catégorie {categoryId}</h1>
            <div className="section">
                <div className="theme-list">
                    {themeList.map((theme) => (
                        <Link className="theme-item" key={theme} to={`/theme/${theme}`}>
                            {theme}
                        </Link>
                    ))}
                </div>
                <br></br>
                <button className="button" onClick={() => addTheme(categoryId, prompt('Nouveau thème') || '')}>
                    Ajouter un thème
                </button>
            </div>
        </div>
    );
};

export default CategoryPage;
