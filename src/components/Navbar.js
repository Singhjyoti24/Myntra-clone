import React from 'react'
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Navbar({ wishCount, addCount }) {
    return (
        <div className="navbar">
            <div className="nav-list">
                <ul className='list-items'>
                    <img src="/images/myntra.avif" alt="myntra-logo" />
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Home&Living</a></li>
                    <li><a href="#">Beauty</a></li>
                </ul>
            </div>
            <div className="side-list">
                <ul className='list-items'>
                    <li className='wish-list'>
                        <FavoriteBorderIcon />{wishCount}
                    </li>
                    <li className='bag'>
                        <ShoppingCartIcon />{addCount}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
