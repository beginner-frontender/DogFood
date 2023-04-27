import "./style.css";
import Logo from "../Logo";

const links = [
    {name: "Каталог", src: "/"},
    {name: "Избраннное", src: "/"},
    {name: "Корзина", src: "/"}
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
                    <a href={el.src}>{el.name}</a>
                </li>)}
            </ul>
        </footer>
    )
}