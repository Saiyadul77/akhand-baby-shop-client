import React, { useState } from 'react';
import useReviews from '../../hooks/useReviews';
import './Home.css'


const Home = () => {
    const [reviews, setReviews] = useReviews();


    return (
        <div>
            <div className='product-information'>
                <div className='product-info'>
                    <h1>Life is Beautiful </h1>
                    <h3>One day, one hour, one minute, one second will not come again. So avoid fight, avoid anger, speak lovely and spread your smile.</h3>
                    <h4>With an overwhelming variety of products on the market, it can be hard for consumers to figure out what the best baby products actually are. And when there's a new baby on the way, it's tempting to continue using the same hand-me-down parenting products that worked for older siblings or cousins. There's nothing wrong with tradition, but so many innovative baby and parenting products now help make raising a child a little easier and more fun, too.

                        No, we're not talking about robots that'll handle all of the product changes, but about simple, smart products that'll enrich your day-to-day life as a parent by making various tasks more efficient. The parents at Best Products are constantly evaluating the latest and greatest finds, talking to manufacturers, and testing both established products and new-to-the-market items. We've done all of the hard work for you and have found many indispensable items that will make your life as a new parent so much easier.</h4>
                    <button className='live-demo'>
                        <span>Live Demo</span>
                    </button>
                </div>
                <div>
                    <img src={'https://i.ibb.co/XJSnBTF/2020-11-16-0001.jpg'} alt="" />
                </div>
            </div>
            <h1>Customer Reviews (3)</h1>
            <div className='display-product'>
                {
                    reviews.map(review =>
                        <div key={review.id}>
                            <h1>{review.name}</h1>
                            <h3>{review.comments}</h3>
                            <p>Rating: {review.rating}</p>
                        </div>

                    )
                }
            </div>
            <button className='live-demo'>See All Reviews</button>
        </div>
    );
};

export default Home;