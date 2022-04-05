import React from 'react';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css'


const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='product-information'>
                <div>
                    <h3>Your next furniture</h3>
                    <p>We are manufacturer</p>
                </div>
                <div>
                    <img src={'https://i.ibb.co/ypN53BH/baby-product.jpg'} alt="" />
                </div>
            </div>
            {
                reviews.map(review => <Reviews
                    key={review.id}
                    review={review}
                ></Reviews>)
            }
        </div>
    );
};

export default Home;