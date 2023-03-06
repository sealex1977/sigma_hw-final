import AboutUsImage from '../../assets/img/aboutus/about-us-image.png'

function AboutUs() {
    return (
        <section className="about-us__container">
            <div className="about-us__inner">
                <div className="about-us__image">
                    <img className="about-us__img" src={AboutUsImage} alt="about us image" />
                    <div className="about-us__image-decor"></div>
                </div>
                <div className="about-us__content">
                    <div className="about-us__subtitle">
                        about us
                    </div>
                    <div className="about-us__title">
                        Interioris The Will of An Epoch Mextreo
                    </div>
                    <div className="about-us__text">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form injected
                        humour, or randomised words which don't look even slightly
                        believable.If you are going to use a passage of Lorem Ipsum,
                        sure there isn't anything embarrassing hidden the middleof text.
                        All the Lorem Ipsum generators on the Internettend to repeat
                        predefined chunks as necessary,making this the first true
                        generator on the Internet.
                    </div>
                    <button className="about-us__btn" type="button">
                        <span>learn more</span>
                    </button>
                </div>
            </div>
            <div className="about-us__decor"></div>
        </section>
    )
}

export default AboutUs;