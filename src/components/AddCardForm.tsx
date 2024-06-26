import React, {useState} from 'react';
import {useStore} from '../stores/useStore';

interface AddCardFormProps {
    themeId: string;
}

const AddCardForm: React.FC<AddCardFormProps> = ({themeId}) => {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const addCard = useStore((state) => state.addCard);

    const handleAddCard = () => {
        if (front && back) {
            addCard({
                id: Math.random().toString(36).substr(2, 9),
                front,
                back,
                category: '', // Vous pouvez ajouter une logique pour déterminer la catégorie
                theme: themeId,
                box: 1,
                hidden: false,
                timeHidden: 0,
            });
            setFront('');
            setBack('');
        } else {
            alert('Les champs "Question" et "Réponse" sont obligatoires.');
        }
    };

    return (
        <div>
            <h2>Ajouter une nouvelle carte</h2>
            <div>
                <input
                    placeholder="Question"
                    value={front}
                    onChange={(e) => setFront(e.target.value)}
                />
                <input
                    placeholder="Réponse"
                    value={back}
                    onChange={(e) => setBack(e.target.value)}
                />
                <button onClick={handleAddCard}>Ajouter la carte</button>
            </div>
        </div>
    );
};

export default AddCardForm;
