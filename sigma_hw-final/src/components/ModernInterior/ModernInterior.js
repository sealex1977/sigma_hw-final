// import React, { useState, useRef, useEffect } from "react";
import ModernInteriorImage from '../../assets/img/moderninterior/modern-interior-image.png'

// import { Link } from "react-router-dom";

function ModernInterior() {
    return (
        <section className="modern-interior__container">
            <div className="modern-interior__inner">
                <div className="modern-interior__content">
                    <div className="modern-interior__subtitle">
                        modern interior
                    </div>
                    <div className="modern-interior__title">
                        Create Your Interior Design.
                    </div>
                    <div className="modern-interior__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.
                    </div>
                    <button className="modern-interior__btn" type="button">
                        <span>contact</span>
                    </button>
                </div>
                <div className="modern-interior__image">
                    <img className="modern-interior__img" src={ModernInteriorImage} alt="modern interior image" />
                    <div className="modern-interior__image-decor"></div>
                </div>
            </div>
            <div className="modern-interior__decor"></div>
        </section>
    )
}

export default ModernInterior;