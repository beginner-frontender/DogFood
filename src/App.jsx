import {useState, useEffect} from "react";

import testData from "./assents/data.json";
import Card from "./components/Card/Card";
// import Promo from "./components/Promo/Promo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
// import Logo from "./components/Logo";

// const promoData = ["=)", "*-*", "0|0", "x_x", ":)", ";(", "^_^"];
// map преабразовывает 1 элемент массива в другой для всех элементов



const App = () => {
  // const user = localStorage.getItem("user12");
  const [user, setUser] = useState(localStorage.getItem("user12"));
  const [userId, setUserId] = useState(localStorage.getItem("user12-id"));
  const [token, setToken] = useState(localStorage.getItem("token12"));
  const [goods, setGoods] = useState(testData);
  const [searchResult, setSearchResult] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  // Сохрани в переменную user то значение, что находится внутри useState

  useEffect(() => {
      if (user) {
          setUserId(localStorage.getItem("user12-id"));
          setToken(localStorage.getItem("token12"));
      } else {
          localStorage.removeItem("user12-id")
          localStorage.removeItem("token12")
          setUserId(null);
          setToken(null);
      }
  }, [user])
  useEffect(() => {
      console.log("token", token);
  }, [token])
  return (
      <>
          {/* upd - передали функцию setUser внутрь компонента Header, чтобы внутри использовать ее как слово upd() */}
          <Header 
              user={user} 
              upd={setUser} 
              searchArr={testData} 
              setGoods={setGoods} 
              setSearchResult={setSearchResult}
              setModalOpen={setModalOpen}
          />
          <div className="container">
              {searchResult && <p className="search-result">{searchResult}</p>}
              {goods.map((pro, i) => (
                  <Card key={i} img={pro.pictures} name={pro.name} price={pro.price} />
              ))}
              {/*{promoData.map(el => <Promo key={el} text={el}/>)}*/}
          </div>
          <Footer/>
          <Modal 
              isActive={modalOpen} 
              setIsActive={setModalOpen}
              setUser={setUser}
          />
      </>
  )
}

export default App;