import React, { useState } from 'react';
import { useStore } from '../stores/useStore';

interface AddCardFormProps {
    themeId: string;
}

const AddCardForm: React.FC<AddCardFormProps> = ({ themeId }) => {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [image, setImage] = useState('');
    const [audio, setAudio] = useState('');
    const [video, setVideo] = useState('');

    const addCard = useStore((state) => state.addCard);

    const handleAddCard = () => {
        if (front && back) {
            addCard({
                id: Math.random().toString(36).substr(2, 9),
                front,
                back,
                image: image || '',
                audio: audio || '',
                video: video || '',
                category: '', // Vous pouvez ajouter une logique pour déterminer la catégorie
                theme: themeId,
                box: 1,
            });
            setFront('');
            setBack('');
            setImage('');
            setAudio('');
            setVideo('');
        } else {
            alert('Les champs Front et Back sont obligatoires.');
        }
    };

    return (
        <div>
            <h2>Ajouter une nouvelle carte</h2>
            <div>
                <input
                    placeholder="Front"
                    value={front}
                    onChange={(e) => setFront(e.target.value)}
                />
                <input
                    placeholder="Back"
                    value={back}
                    onChange={(e) => setBack(e.target.value)}
                />
                <input
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input
                    placeholder="Audio URL"
                    value={audio}
                    onChange={(e) => setAudio(e.target.value)}
                />
                <input
                    placeholder="Video URL"
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}
                />
                <button onClick={handleAddCard}>Ajouter la carte</button>
            </div>
        </div>
    );
};

export default AddCardForm;
