import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/img/header/logo.svg";

import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header__container">
            {/* <Link>
                <img className="header__logo-img" src={Logo} alt="logo" />
            </Link> */}
            <div className="header__logo">
                <img className="header__logo-img" src={Logo} alt="logo" />
            </div>
            <div className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-item">home</li>
                    <li className="header__menu-item">project</li>
                    <li className="header__menu-item">services</li>
                    <li className="header__menu-item">about</li>
                    <li className="header__menu-item">blog</li>
                    <li className="header__menu-item">shop</li>
                    <li className="header__menu-item">contact</li>
                    <li className="header__menu-item">
                        <button className="header__menu-btn" type="button">
                            <span>Sign Up</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;