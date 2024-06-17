import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ThemePage from './pages/ThemePage';
import ReviewPage from './pages/ReviewPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/theme/:themeId" element={<ThemePage />} />
            <Route path="/review/:themeId" element={<ReviewPage />} />
        </Routes>
    );
};

export default App;
