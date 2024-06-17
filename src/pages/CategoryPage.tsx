import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../stores/useStore';

const CategoryPage: React.FC = () => {
    const categories = ['Math', 'Science', 'Histoire']; // exemple statique

    return (
        <div>
            <h1>Catégories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
