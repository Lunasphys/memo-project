import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Application de Mémorisation</h1>
            <Link to="/category">Voir les catégories</Link>
        </div>
    );
};

export default HomePage;
