import React from 'react'
import './Main.css'
import Card from './Card'
import Category from './Category'
import Footer from './Footer'

function Main({ wishCount, addCount, setWishCount, setAddCount }) {
    return (
        <div className='main'>
            <div className="fashionfest">
                <img src="/images/fashion.jpg" alt="myntra-fashion-festival" />
            </div>
            <div className="offer">
                <img src="/images/offer.png" alt="coupon" />
                <div className="crazy-offer">
                    <p className='first'>FESTIVE CRAZY OFFERS</p>
                    <p className='second'>Irresistible Discounts To Bag</p>
                </div>
            </div>
            <div className="festive-offer">
                <Card image="/images/tshirt.avif" >
                    <div className="info">
                        <p>Shirts, Jeans & More</p>
                        <span>MIN. 50% OFF</span>
                    </div>
                </Card>
                <Card image="/images/gant.avif" >
                    <div className="info">
                        <p>Top Casual Styles</p>
                        <span>MIN. 50% OFF</span>
                    </div>
                </Card>
                <Card image="/images/blazer.webp" >
                    <div className="info">
                        <p>Outfits For Office</p>
                        <span>MIN. 60% OFF</span>
                    </div>
                </Card>
                <Card image="/images/kurta.avif" >
                    <div className="info">
                        <p>Best Of Kurtas</p>
                        <span>UNDER Rs.499</span>
                    </div>
                </Card>
                <Card image="/images/kurta.jpg" >
                    <div className="info">
                        <p>Kurta Sets For The Season</p>
                        <span>MIN. 60-80% OFF</span>
                    </div>
                </Card>
                <Card image="/images/ethnic.jfif" >
                    <div className="info">
                        <p>Stylish Ethnic Wear</p>
                        <span>Starting Rs.399</span>
                    </div>
                </Card>
            </div>

            <Category heading="Category Specials" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount} />

            <div className="download">
                <img src="/images/download.png" alt="download-app" />
            </div>

            <Footer />
        </div>
    )
}

export default Main
