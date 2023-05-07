import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo";

const links = [
    {name: "Каталог", src: "/catalog"},
    {name: "Избраннное", src: "/"},
    {name: "Корзина", src: "/"},
    {name: "Тестовая страница", src:"/old"}
]

export default () => {
    return (
        <footer>
            <div className="footer__copy">
            <Logo/>
            <span>©{new Date().getFullYear()}</span>
            </div>
            <ul className="footer__nav">
                {links.map(el => <li key={el.name}>
                    <Link to={el.src}>{el.name}</Link>
                </li>)}
            </ul>
        </footer>
    )
}