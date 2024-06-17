import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../stores/useStore';

const HomePage: React.FC = () => {
    const { categories, addCategory } = useStore((state) => ({
        categories: state.categories,
        addCategory: state.addCategory,
    }));

    return (
        <div className="container">
            <h1 className="header">Application de Mémorisation</h1>
            <div className="section">
                <h2 className="section-title">Catégories</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category}>
                            <Link className="button" to={`/category/${category}`}>{category}</Link>
                        </li>
                    ))}
                </ul>
                <button className="button" onClick={() => addCategory(prompt('Nouvelle catégorie') || '')}>
                    Ajouter une catégorie
                </button>
            </div>
        </div>
    );
};

export default HomePage;
