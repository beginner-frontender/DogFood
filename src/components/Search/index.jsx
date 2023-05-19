import { useState, useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom";
import Ctx from "../../ctx";
import "./style.css";


const Search = ({data, setGoods, }) => {
    const {setSearchResult} = useContext(Ctx);
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [num, setNum] = useState(0);
    const changeValue = (e) => {
        navigate("/catalog");
        setText(e.target.value);
        // setNum(data.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase())).length)
    }
    const changeText = () => {
        console.log("click")
        setText("Привет!")
    }
    useEffect(() => {
        let str = ""
        if(num && text){
            str = `по запросу ${text} найдено ${num} товаров`;
        } else if(text){
            str = `по запросу ${text} не найдено ни одного товара`;
        } else {
            str = "";
        }
        setSearchResult(str)
    }, [num, text])

    useEffect(() => {
        let result = data.filter(el => el.name.toLowerCase().includes(text.toLowerCase()))
        setGoods(result);
        setNum(result.length);
        // console.log(result);
    }, [text])
    return <>
        <input className="search" type="search" value={text} onChange={changeValue}/>
        {/* <button onClick={changeText}>Тык {num} раз </button> */}
        {/* {text && <p>по запросу {text} найдено {num} товаров</p>} */}
    </>
}

export default Search;