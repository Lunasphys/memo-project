import React from 'react';

interface CardProps {
    front: string;
    back: string;
}

const Card: React.FC<CardProps> = ({ front, back }) => {
    const [flipped, setFlipped] = React.useState(false);

    return (
        <div onClick={() => setFlipped(!flipped)} style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
            {!flipped ? (
                <>
                    <p>{front}</p>
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
