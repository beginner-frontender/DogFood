import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Ctx from "./ctx";
// import "bootstrap/dist/css/bootstrap.min.css"

// import testData from "./assents/data.json";
// import Card from "./components/Card/Card";
// import Promo from "./components/Promo/Promo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
// import Logo from "./components/Logo";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import OldPage from "./pages/Old";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Review from "./pages/Review"

// const promoData = ["=)", "*-*", "0|0", "x_x", ":)", ";(", "^_^"];
// map преабразовывает 1 элемент массива в другой для всех элементов



const App = () => {
    // const user = localStorage.getItem("user12");
    const [user, setUser] = useState(localStorage.getItem("user12"));
    const [userId, setUserId] = useState(localStorage.getItem("user12-id"));
    const [token, setToken] = useState(localStorage.getItem("token12"));
    // const [goods, setGoods] = useState(testData);
    const [baseData, setBaseData] = useState([]);
    const [goods, setGoods] = useState(baseData);
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
        // console.log("token", token);
        if (token) {
            fetch("https://api.react-learning.ru/products", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBaseData(data.products);
                })
        }
    }, [token])
    useEffect(() => {
        setGoods(baseData)
    }, [baseData])

//    export const Ctx = createContext({});


    return (
        <Ctx.Provider value={{
            searchResult,
            setSearchResult,
            setBaseData,
            baseData
        }}>
            {/* upd - передали функцию setUser внутрь компонента Header, чтобы внутри использовать ее как слово upd() */}
            <Header
                user={user}
                upd={setUser}
                searchArr={baseData}
                setGoods={setGoods}
                // setSearchResult={setSearchResult}
                setModalOpen={setModalOpen}
            />
            <main>
                <Routes>
                    <Route path="/" element={<Home user={user} setActive={setModalOpen} />} />
                    <Route path="/catalog" element={<Catalog
                        goods={goods}
                        userId={userId}
                     />} />
                    <Route path="/old" element={<OldPage
                        goods={goods} />} />
                    <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/add/product" element={<AddProduct/>}/>
                    <Route path="/product/:id/review" element={<Review />} />
                </Routes>
            </main>

            <Footer />
            <Modal
                isActive={modalOpen}
                setIsActive={setModalOpen}
                setUser={setUser}
            /> 
        </Ctx.Provider>
    )
}

export default App;