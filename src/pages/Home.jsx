import { Link } from "react-router-dom";
import { Journals } from "react-bootstrap-icons";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import BanPromo from "../components/BanPromo";

const Home = ({ user, setActive }) => {
    return (<>
        <Banner />
        <div className="info">

            {user && <Link to="/catalog" className="info-link"><Journals style={{ marginRight: "10px" }} /> Каталог товаров</Link>}
            {!user && <>
                <span className="info-link " onClick={() => setActive(true)}>Авторизуйтесь</span>, чтобы получить доступ к сайту</>}
        </div>
        <BanPromo title={"Подарок за первый заказ!"} text={"Легкое говяжье - пластины"} />
        <Slider/>
        <BanPromo title={"Большой ассортимент"} text={"Низкие цены"} />
    </>
    )
}
export default Home;