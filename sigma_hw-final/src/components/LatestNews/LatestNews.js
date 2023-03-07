import LatestNewsImage1 from '../../assets/img/latestnews/latest-news-image1.png';
import LatestNewsImage2 from '../../assets/img/latestnews/latest-news-image2.png';

function LatestNews() {
    return (
        <section className="latest-news__container">
            <div className="latest-news__subtitle">latest news</div>
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
            <div className="latest-news__decor"></div>
        </section>
    )
}

export default LatestNews;