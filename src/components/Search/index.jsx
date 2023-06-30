import { useState, useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom";
import Ctx from "../../ctx";
import "./style.css";


const Search = () => {
    const {setSearchResult,  baseData, setGoods} = useContext(Ctx);
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [num, setNum] = useState(0);
    const changeValue = (e) => {
        navigate("/catalog");
        setText(e.target.value);
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
        let result = baseData.filter(el => el.name.toLowerCase().includes(text));
        setGoods(result);
        setNum(result.length);
    }, [text, baseData])
    return <>
        <input className="search" type="search" value={text} onChange={changeValue}/>
    </>
}

export default Search;