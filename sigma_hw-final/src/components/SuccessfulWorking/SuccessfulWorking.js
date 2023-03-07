import SuccessfulWorkingImage from '../../assets/img/succesfullworking/succesfull-working-image.png';

function SuccessfulWorking() {
    return (
        <section className="successful-working__container">
            <div className="successful-working__inner">
                <div className="successful-working__content">
                    <div className="successful-working__years">20</div>
                    <div className="successful-working__title">Years Of Successful Working<br /> The Market</div>
                    <button className="successful-working__btn" type="button">
                        <span>read more</span>
                    </button>
                </div>
                <div className="successful-working__image">
                    <img className="successful-working__img" src={SuccessfulWorkingImage} alt="successful working image" />
                    <div className="successful-working__image-decor"></div>
                </div>
            </div>
            <div className="successful-working__decor"></div>
        </section>
    )
}

export default SuccessfulWorking;