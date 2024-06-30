import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../stores/useStore';

const HomePage: React.FC = () => {
    const { categories, addCategory, updateCategory, deleteCategory } = useStore((state) => ({
        categories: state.categories,
        addCategory: state.addCategory,
        updateCategory: state.updateCategory,
        deleteCategory: state.deleteCategory,
    }));

    const [newCategoryName, setNewCategoryName] = useState('');
    const [editingCategory, setEditingCategory] = useState<string | null>(null);
    const [updatedCategoryName, setUpdatedCategoryName] = useState('');

    const handleAddCategory = () => {
        if (newCategoryName.trim() !== '') {
            addCategory(newCategoryName);
            setNewCategoryName('');
        }
    };

    const handleUpdateCategory = (category: string) => {
        updateCategory(category, updatedCategoryName);
        setEditingCategory(null);
    };

    return (
        <div className="container">
            <h1 className="header">Application de Mémorisation</h1>
            <div className="category-list">
                {categories.map((category) => (
                    <div key={category} className="category-item">
                        {editingCategory === category ? (
                                <div>
                                    <input
                                        type="text"
                                        value={updatedCategoryName}
                                        onChange={(e) => setUpdatedCategoryName(e.target.value)}
                                    />
                                    <div className={"crud-button"}>
                                        <button onClick={() => handleUpdateCategory(category)}>Sauvegarder</button>
                                        <button onClick={() => setEditingCategory(null)}>Annuler</button>
                                    </div>
                                </div>
                            )
                            : (
                                <div>
                                    <Link to={`/category/${category}`}>{category}</Link>
                                    <div className={"crud-button"}>
                                        <button onClick={() => { setEditingCategory(category); setUpdatedCategoryName(category); }}>Éditer</button>
                                        <button onClick={() => deleteCategory(category)}>Supprimer</button>
                                    </div>

                                </div>
                            )}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <button onClick={handleAddCategory}>Ajouter une catégorie</button>
            </div>
        </div>
    );
}
export default HomePage;