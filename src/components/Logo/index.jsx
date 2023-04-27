
import logoImg from "../../assents/images/logo.png";
import "./style.css";

const Logo = () => <a className="logo" href="/"> 
<img src={logoImg} alt="DogFood"/>
<span className="logo__text">DogFood</span>
</a>

export default Logo;