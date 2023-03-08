function SignUp() {
    return (
        <section className="sign-up__container">
            <div className="sign-up__title">don't forget to sign up</div>
            <div className="sign-up__line"></div>
            <div className="sign-up__text">
                Find out early about all upcoming promotions and new product releases with our newsletter.
            </div>
            <div className="sign-up__form-box">
                <form className="sign-up__form">
                    <div className="sign-up__form-user">
                        <div className="sign-up__form-name">
                            <input className="sign-up__input-name sign-up__input" type="text" required placeholder="Enter your name....." />
                        </div>
                        <div className="sign-up__form-surname">
                            <input className="sign-up__input-surname sign-up__input" type="text" required placeholder="Enter your surname....." />
                        </div>
                    </div>
                    <div className="sign-up__form-email">
                        <input className="sign-up__input-email sign-up__input" type="text" required placeholder="Enter your e-mail....." />
                    </div>
                    <button className="sign-up__btn" type="button">
                        <span>subscribe</span>
                    </button>
                </form>
            </div>
            {/* <div className="latest-news__subtitle">latest news</div>
            <div className="latest-news__title">From Our Blogs</div>
            <div className="latest-news__content">
                <div className="latest-news__card">
                    <div className="latest-news__card-image">
                        <img className="latest-news__img" src={LatestNewsImage1} alt="latest news image" />
                        <div className="latest-news__image-decor"></div>
                    </div>
                    <div className="latest-news__card-title">
                        2020 Interior Design Trends
                    </div>
                    <div className="latest-news__card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                    <button className="latest-news__btn" type="button">
                        <span>continue reading....</span>
                    </button>
                </div>
                <div className="latest-news__card">
                    <div className="latest-news__card-image">
                        <img className="latest-news__img" src={LatestNewsImage2} alt="latest news image" />
                        <div className="latest-news__image-decor"></div>
                    </div>
                    <div className="latest-news__card-title">
                        28 Notable Product at ARC Interior Design
                    </div>
                    <div className="latest-news__card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                    <button className="latest-news__btn" type="button">
                        <span>continue reading....</span>
                    </button>
                </div>
            </div>
            <div className="latest-news__decor"></div> */}
        </section>
    )
}

export default SignUp;