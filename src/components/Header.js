import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase-config';

function Header() {

    const [{basket},loggedinuser,dispatch] = useStateValue()
    const logoutUser = () => {
        if(loggedinuser) {
            auth.signOut();
        }
    }

    return (
       <nav className="header">
           <Link to="/">
           <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
           </Link>
           <div className="header__search">
               <input type="text" className="header__searchInput" />
               <SearchIcon className="header__searchIcon"/>
           </div>
           <div className="header__nav">
           <Link to={!loggedinuser && "/login"} className="header__link">
           <div onClick={logoutUser} className="header__option">
               <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
               <span className="header__optionLineTwo">{loggedinuser ? 'Signout':"SignIn"}</span>
            </div>
            </Link>

            <Link to="/" className="header__link">
           <div className="header__option">
               <span className="header__optionLineOne">Returns</span>
               <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>

            <Link to="/" className="header__link">
           <div className="header__option">
               <span className="header__optionLineOne">You</span>
               <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>
            </div>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__productCount">
                        {basket.length}
                    </span>
                </div>
            </Link>
       </nav>
    )
}

export default Header
