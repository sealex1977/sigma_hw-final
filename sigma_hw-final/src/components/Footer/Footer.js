import Logo from "../../assets/img/footer/logo.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__inner">
                    <div className="footer__logo-box">
                        <div className="footer__logo">
                            <div className="footer__logo">
                                <img className="footer__logo-img" src={Logo} alt="logo" />
                            </div>
                        </div>
                        <div className="footer__text">
                            But i must explain to you all this mistaken
                            idea of dencouncing pleasure.
                        </div>
                    </div>
                    <div className="footer__quick-links">
                        <div className="footer__title">Quick Links</div>
                        <div className="footer__text">About Our Company</div>
                        <div className="footer__text">Services WE provide</div>
                        <div className="footer__text">Career & Opportunity</div>
                        <div className="footer__text">Privacy & policy</div>
                        <div className="footer__text">Contact US</div>
                    </div>
                    <div className="footer__company">
                        <div className="footer__title">Company</div>
                        <div className="footer__text">About Company</div>
                        <div className="footer__text">Our Testimonials</div>
                        <div className="footer__text">Latest News</div>
                        <div className="footer__text">Our misson</div>
                        <div className="footer__text">Get a free Quot</div>
                    </div>
                    <div className="footer__contact-us">
                        <div className="footer__title">Contact us</div>
                        <div className="footer__text">Sagrada Familia, Herba</div>
                        <div className="footer__text">Street Front USA</div>
                        <div className="footer__text">brandoxide@gmail.com</div>
                        <div className="footer__text">002-568423591</div>
                    </div>
                    <div className="footer__social">
                        <div className="footer__title">Follow Us</div>
                        <div className="footer__social-box">
                            <div className="footer__social-icon facebook"></div>
                            <div className="footer__social-icon twitter"></div>
                            <div className="footer__social-icon instagram"></div>
                            <div className="footer__social-icon linkedin"></div>
                        </div>
                    </div>
                </div>
                <div className="footer__decor"></div>
            </div>
            <div className="footer__line"></div>
            <div className="footer__copyright">
                Copyright @ 2020 <span>Brandoxide</span> .all right reserved.
            </div>
        </div>
    )
}

export default Footer;