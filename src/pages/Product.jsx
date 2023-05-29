import { useState, useEffect, useContext} from "react";
import { useParams, Link } from "react-router-dom";
import {Button, Row, Col} from "react-bootstrap";
import Ctx from "../ctx";



const Product = () => {
    const {searchResult} = useContext(Ctx);
    // console.log(searchResult)
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

    <Button variant="warning" as={Link} to={`/catalog#pro_${id}`}>Назад</Button>
        {data.name
            ? <>
            <Row>
                <Col xs={6}>
                <img src={data.pictures} alt={data.name} />
                </Col>
                <Col xs={6}>
                <h1> {data.name}</h1>
                <p>Цена: {data.price}  ₽</p>
                <p>Вес: {data.wight}</p>
                <p>Скидка: {data.discount} %</p>
                </Col>
                <Col xs={12}>
                    <h3>Отзывы: </h3>
                    <div>
                        {/* <p>автор: {data.author.name}</p> */}
                    
                        {data.reviews.map((rev, i) => <p key={i}> {rev.text}</p> )}
                        
                    </div>

                </Col>
            </Row>
            <Button variant="warning" as={Link} to="/product/:id/review" >Добавить отзыв</Button>
            </>
            : <div className="info" style={{ textAlign: "center" }}>
                <h1>товара не существует</h1>
            </div>
        }
    </>
}
export default Product;