import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../stores/useStore';

const HomePage: React.FC = () => {
    const { categories, addCategory } = useStore((state) => ({
        categories: state.categories,
        addCategory: state.addCategory,
    }));

    return (
        <div>
            <h1>Application de Mémorisation</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => addCategory(prompt('Nouvelle catégorie') || '')}>
                Ajouter une catégorie
            </button>
        </div>
    );
};

export default HomePage;
