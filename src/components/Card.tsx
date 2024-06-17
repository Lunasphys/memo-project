import React from 'react';

interface CardProps {
    front: string;
    back: string;
    image?: string;
    audio?: string;
    video?: string;
}

const Card: React.FC<CardProps> = ({ front, back, image, audio, video }) => {
    const [flipped, setFlipped] = React.useState(false);

    return (
        <div onClick={() => setFlipped(!flipped)} style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
            {!flipped ? (
                <>
                    <p>{front}</p>
                    {image && <img src={image} alt="front" style={{ maxWidth: '100%' }} />}
                    {audio && <audio controls src={audio} />}
                    {video && <video controls src={video} style={{ maxWidth: '100%' }} />}
                </>
            ) : (
                <>
                    <p>{back}</p>
                </>
            )}
        </div>
    );
};

export default Card;
