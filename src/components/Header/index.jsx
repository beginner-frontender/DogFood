import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo";
import {
    BalloonHeart, 
    Cart4, 
    PersonCircle, 
    BuildingUp, 
    // BuildingDown
} from "react-bootstrap-icons";
import Search from "../Search";

const Header = ({       
    user, 
    // upd, 
    searchArr,
    setGoods, 
    // setSearchResult,
    setModalOpen
    }) => {
    const login = () => {
        setModalOpen(true)
        // localStorage.setItem("user12", "Yuliya");
        // upd("Yuliya");
    }
    // const logout = () => {
    //     localStorage.removeItem("user12");
    //     upd(null);
    // }
    return (<header>
            <Logo/>
            <div className="search-block">
                <Search 
                   data={searchArr} 
                   setGoods={setGoods} 
                //    setSearchResult={setSearchResult}
                   />
                   
            </div>
            <nav className="header__menu">
                {user && <>
                    <Link to="/favorites">
                        <BalloonHeart title="Избранное"/>
                    </Link>
                    <Link to="/basket" className="header__link">
                        <Cart4 title="Корзина"/>
                        <span className="header__badge">{}</span>
                    </Link>
                    <Link to="/profile">
                        <PersonCircle title="Личный кабинет"/>
                    </Link>
                </>
                }

                <span>
                    {!user && <BuildingUp title="Войти" onClick={login}/>}
                    {/* {user && <BuildingDown title="Выйти" onClick={logout}/>} */}
                </span>
            </nav>
        </header>
    )
}

export default Header