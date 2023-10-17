import React from 'react'
import './Category.css'
import Flip from './Flip'

function Category({ heading, wishCount, addCount, setWishCount, setAddCount }) {
    return (
        <div className='category'>
            <div className="heading">
                {heading}
            </div>

            <div className="specials">
                <Flip image="/images/zaveri.jpg" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>Zaveri Pearls</p>
                        <p>Rs.419</p>
                    </div>
                </Flip>
                <Flip image="/images/puma.avif" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>Puma</p>
                        <p>Rs.1109</p>
                    </div>
                </Flip>
                <Flip image="/images/bag.jpeg" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>HandBag</p>
                        <p>Rs.699</p>
                    </div>
                </Flip>
                <Flip image="/images/watch.jfif" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>Danel Klen</p>
                        <p>Rs.2999</p>
                    </div>
                </Flip>
                <Flip image="/images/perfume.jpg" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>Luxury Perfume</p>
                        <p>Rs.3999</p>
                    </div>
                </Flip>
            </div>
            <div className="specials">
                <Flip image="/images/boat.webp" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>boAt</p>
                        <p>Rs.899</p>
                    </div>
                </Flip>
                <Flip image="/images/shoes.jfif" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>U.S. Polo Assn.</p>
                        <p>Rs.1499</p>
                    </div>
                </Flip>
                <Flip image="/images/night.jpg" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>Be You</p>
                        <p>Rs.779</p>
                    </div>
                </Flip>
                <Flip image="/images/face.webp" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>L`avenour</p>
                        <p>Rs.229</p>
                    </div>
                </Flip>
                <Flip image="/images/lip.webp" wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount}>
                    <div className="information">
                        <p>Lipstick</p>
                        <p>Rs.1999</p>
                    </div>
                </Flip>
            </div>
        </div>
    )
}

export default Category
