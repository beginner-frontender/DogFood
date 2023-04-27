import {useState} from "react";

import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Promo from "./components/Promo/Promo";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Logo from "./components/Logo";

const promoData = ["=)", "*-*", "0|0", "x_x", ":)", ";(", "^_^"];
// map преабразовывает 1 элемент массива в другой для всех элементов



const App = () => {
  // const user = localStorage.getItem("user");
  const [user, setUser] = useState(localStorage.getItem("user12"))
    return (<>
      <Header user={user} upd={setUser}/>
      <div>
        <h1> First Page</h1>
        <div className="container">
          {testData.map((pro, i) => 
            (<Card key= {i} img={pro.pictures} name={pro.name} price={pro.price}/>)
            )}
          {promoData.map(el => <Promo key={el} text={el}/>)}
        </div>
      </div>
      <Footer/>
    </>
    )
  }

export default App;