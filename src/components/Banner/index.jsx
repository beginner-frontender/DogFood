import { Link } from "react-router-dom";
import "./style.css";
import BannerImg from "./dog.png";


const Banner = ({ user, setActive }) => {
    return (
        <div className="box">
            <div className="box-text">
                <h1>Крафтовые лакомства для собак</h1>
                <p>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>

                {user && <Link to="/catalog" className="box-link">Каталог</Link>}
                {!user && <>Авторизуйтесь, чтобы получить доступ к сайту</>}
            </div>
            <div className="box-img">
                <img src={BannerImg} alt="DogImg" />
            </div>
        </div>
    )
}

export default Banner;