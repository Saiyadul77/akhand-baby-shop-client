import React from 'react';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='display-product'>
            {
                reviews.map(review =>

                    <div key={review.id}>
                        <h1>{review.name}</h1>
                        <h3>{review.comments}</h3>
                        <p>Rating:{review.rating}</p>
                    </div>

                )
            }
        </div>
    );
};

export default Reviews;