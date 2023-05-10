import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const Product = () => {
    const { id } = useParams()
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://api.react-learning.ru/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token12")}`
            }
        })
            .then(res => res.json())
            .then(serverData => {
                console.log(id, serverData);
                setData(serverData);
            })
    }, [])
    return <>
        <Link to={`/catalog#pro_${id}`}>Назад</Link>
        {data.name
            ? <>
                <h1> {data.name}</h1>
                <img src={data.pictures} alt={data.name} />
            </>
            : <div className="info" style={{ textAlign: "center" }}>
                <h1>товара не существует</h1>
            </div>
        }
    </>
}
export default Product;