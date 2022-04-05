import React from 'react';

const Reviews = ({ review }) => {
    const { name, comments, rating } = review;
    return (
        <div>
            <h1>This is customer review</h1>
            <h3>{name}</h3>
            <h4>{comments}</h4>
            <p>{rating}</p>
        </div>
    );
};

export default Reviews;