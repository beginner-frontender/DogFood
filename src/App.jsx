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
  const [goods, setGoods] = useState(testData);
  const [searchResult, setSearchResult] = useState("");
    return (<>
      <Header 
        user={user} 
        upd={setUser} 
        searchArr={testData} 
        setGoods={setGoods} 
        setSearchResult={setSearchResult}
      />
        <div className="container">
          {searchResult && <p className="search-result">{searchResult}</p>}
          {goods.map((pro, i) => 
            (<Card key= {i} img={pro.pictures} name={pro.name} price={pro.price}/>)
            )}
          {/* {promoData.map(el => <Promo key={el} text={el}/>)} */}
        </div>
      <Footer/>
    </>
    )
  }

export default App;