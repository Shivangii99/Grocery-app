import React from 'react'
import './Styles.css'
import search from '../photos-lib/search.svg'
import account from '../photos-lib/account.svg'
// import './Styles1.css'

export const Navbar = ()=>{
    return(
        <>
        <div className="search-contain">
            <div className="search-bar">
                <input id="search" type="text" placeholder="Search Paneer" value="" />
                <div className="S-img">
                    <img src={search} alt="Search"/>
                </div>
            </div>
            <div className="login-contain">
                <p>Login</p>
                <p>Signup</p>
            </div>
        </div>
        <div className="nav-contain">
            <div class="nav-bar">
                <p>LOGO</p>
                <ol>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Deals</li>
                    <li>About us</li>
                    <li>Track your order</li>
                </ol>
                <div className="account-contain">
                   <img src={account} alt="your account"/>
                </div>
            </div>
        </div>
        </>
    );
}