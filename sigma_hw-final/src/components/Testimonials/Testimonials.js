import TestimonialsImage1 from '../../assets/img/testimonials/testimonials-image1.png';
import TestimonialsImage2 from '../../assets/img/testimonials/testimonials-image2.png';

function Testimonials() {
    return (
        <section className="testimonials__container">
            <div className="testimonials__subtitle">testimonials</div>
            <div className="testimonials__title">Client says about us</div>
            <div className="testimonials__content">
                <div className="testimonials__card">
                    <div className="testimonials__card-img">
                        <img className="testimonials__card-image" src={TestimonialsImage1} alt="testimonials image" />
                    </div>
                    <div className="testimonials__card-info">
                        <div className="testimonials__card-title">
                            Louis Saville <span className="testimonials__card-text"> /CEO at Google inc</span>
                        </div>
                        <div className="testimonials__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="testimonials__quotes">”</div>
                    <div className="testimonials__card-wrapper"></div>
                </div>
                <div className="testimonials__card">
                    <div className="testimonials__card-img">
                        <img className="testimonials__card-image" src={TestimonialsImage2} alt="testimonials image" />
                    </div>
                    <div className="testimonials__card-info">
                        <div className="testimonials__card-title">
                            Rekha Varadwaz <span className="testimonials__card-text"> /Manager at Nike inc</span>
                        </div>
                        <div className="testimonials__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="testimonials__quotes">”</div>
                    <div className="testimonials__card-wrapper card-wrapper"></div>
                </div>
            </div>
            <div className="testimonials__btn left-btn">
                <div className="testimonials__arrow left-arrow"></div>
            </div>
            <div className="testimonials__btn right-btn">
                <div className="testimonials__arrow right-arrow"></div>
            </div>
        </section>
    )
}

export default Testimonials;