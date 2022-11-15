import React from 'react';

const Question = () => {
    return (
        <div className="card">
            <h2 className="card__title">W jakim celu korzystasz z naszych usług? 🤔</h2>
            <textarea className="card__answer" rows="4" />
        </div>
    );
};

export default Question;
