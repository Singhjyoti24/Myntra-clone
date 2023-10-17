import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Flip.css'

function Flip({ image, children, wishCount, addCount, setWishCount, setAddCount }) {
    const [wish, setWish] = useState(false)
    const [bag, setBag] = useState(false)

    const handleClickWish = (e) => {
        let ct = wishCount;
        if (wish === false) {
            ct++;
            setWish(true);
        } else {
            ct--;
            setWish(false);
        }
        setWishCount(ct);
        console.log(wishCount);
    }

    const handleClickBag = (e) => {
        let ct = addCount;
        if (bag === false) {
            ct++;
            setBag(true);
        } else {
            ct--;
            setBag(false);
        }
        setAddCount(ct);
        console.log(addCount);
    }

    return (
        <div className='flip'>
            <div className="flip-image">
                <img src={image} alt="image" />
            </div>
            <div className="flipinfobox">
                <div className="flip-info">
                    {children}
                </div>
                <div className="buttons">
                    <div className='wishlist' wish="false" onClick={handleClickWish}>{!wish && <FavoriteBorderIcon />}
                        {wish && <FavoriteIcon />}
                    </div>
                    <div className='addBag' bag="false" onClick={handleClickBag}>
                        {bag && <ShoppingCartIcon />}
                        {!bag && <AddShoppingCartIcon />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flip
