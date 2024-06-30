import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStore } from '../stores/useStore';

const CategoryPage: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [newThemeName, setNewThemeName] = useState('');
    const [editingTheme, setEditingTheme] = useState<string | null>(null);
    const [updatedThemeName, setUpdatedThemeName] = useState('');
    const { themes, addTheme, updateTheme, deleteTheme } = useStore((state) => ({
        themes: state.themes,
        addTheme: state.addTheme,
        updateTheme: state.updateTheme,
        deleteTheme: state.deleteTheme,
    }));

    if (!categoryId) {
        return <div>Catégorie non trouvée</div>;
    }

    const themeList = themes[categoryId] || [];

    const handleAddTheme = () => {
        if (newThemeName.trim() !== '') {
            addTheme(categoryId, newThemeName);
            setNewThemeName('');
        }
    };

    const handleUpdateTheme = (theme: string) => {
        updateTheme(categoryId, theme, updatedThemeName);
        setEditingTheme(null);
    };

    return (
        <div className="container">
            <h1 className="header">Thèmes pour la catégorie {categoryId}</h1>
            <div className="theme-list">
                {themeList.map((theme) => (
                    <div key={theme} className="theme-item">
                        {editingTheme === theme ? (
                            <div>
                                <input
                                    type="text"
                                    value={updatedThemeName}
                                    onChange={(e) => setUpdatedThemeName(e.target.value)}
                                />
                                <button onClick={() => handleUpdateTheme(theme)}>Save</button>
                                <button onClick={() => setEditingTheme(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <Link to={`/theme/${theme}`}>{theme}</Link>
                                <div className={"crud-button"}>
                                    <button onClick={() => { setEditingTheme(theme); setUpdatedThemeName(theme); }}>Éditer</button>
                                    <button onClick={() => deleteTheme(categoryId, theme)}>Supprimer</button>
                                </div>

                            </div>
                        )}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newThemeName}
                onChange={(e) => setNewThemeName(e.target.value)}
                placeholder="Nouveau thème"
            />
            <button className="button" onClick={handleAddTheme}>Ajouter un thème</button>
        </div>
    );
};

export default CategoryPage;
