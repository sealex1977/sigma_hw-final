// import TestimonialsImage1 from '../../assets/img/testimonials/testimonials-image1.png';
// import TestimonialsImage2 from '../../assets/img/testimonials/testimonials-image2.png';

function WhatWeDo() {
    return (
        <section className="what-we-do__container">
            <div className="what-we-do__subtitle">what we do</div>
            <div className="what-we-do__title">Our Service</div>
            <div className="what-we-do__buttons">
                <div className="what-we-do__btn">
                    <span>all</span>
                </div>
                <div className="what-we-do__btn">
                    <span>interior design</span>
                </div>
                <div className="what-we-do__btn">
                    <span>architecture</span>
                </div>
                <div className="what-we-do__btn">
                    <span>planning</span>
                </div>
            </div>
            <div className="what-we-do__content">
                <div className="what-we-do__service">
                    <div className="what-we-do__service-icon icon1"></div>
                    <div className="what-we-do__service-info">
                        <div className="what-we-do__service-title">Interioir Design 1</div>
                        <div className="what-we-do__service-text">
                            Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.
                        </div>
                    </div>
                </div>
                <div className="what-we-do__service decored">
                    <div className="what-we-do__service-icon icon2"></div>
                    <div className="what-we-do__service-info">
                        <div className="what-we-do__service-title decored">Architecture 1</div>
                        <div className="what-we-do__service-text decored">
                            Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.
                        </div>
                    </div>
                </div>
                <div className="what-we-do__service">
                    <div className="what-we-do__service-icon icon3"></div>
                    <div className="what-we-do__service-info">
                        <div className="what-we-do__service-title">Planning 1</div>
                        <div className="what-we-do__service-text">
                            Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;