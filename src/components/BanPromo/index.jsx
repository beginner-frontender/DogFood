import "./style.css";
import BanPromoImg from "./banPromoImg.jpg";

const BanPromo = (props) => {
    return (
        <div className="banner-box">
            <img src={BanPromoImg} alt="BanPromoImg"/>
            <h2 className="banner__title">{props.title}</h2>
            <p className="banner__text">{props.text}</p>
        </div>
    )
}

export default BanPromo;