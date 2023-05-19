import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SuitHeart, SuitHeartFill } from "react-bootstrap-icons";
import {Card, Button} from "react-bootstrap";
import Ctx from "../../ctx";
const BsCard = ({
    discount,
    likes,
    name,
    pictures,
    price,
    tags,
    _id,
    user
}) => {
    const {setBaseData} = useContext(Ctx)
    const [isLike, setIsLike] = useState(likes.includes(user));

    const likeHandler = () => {
        setIsLike(!isLike);
        setBaseData((old) => old.map(el => {
            if (el._id === _id) {
                isLike
                    ? el.likes = el.likes.filter(lk => lk !== user)
                    : el.likes.push(user);
            }
            return el;
        }))
    }

    // return <div className="card pt-2" id={"pro_" + _id}>
    //     <span className="card-like" onClick={likeHandler}>
    //         {isLike ? <SuitHeartFill /> : <SuitHeart />}
    //     </span>
    //     <img src={pictures} alt={name} className="card-img-top align-self-center w-auto" height="100"/>
    //     <div className="card-body d-flex flex-column ">
    //         <h4>{price} ₽</h4>
    //         <p className="text-secondary fs-5 flex-grow-1">{name}</p>
    //         <button className="btn btn-warning w-100">Купить</button>
    //     </div>
    //     <Link to={`/product/${_id}`} className="card-link"></Link>
    // </div>

    return <Card className="pt-2 h-100" id={"pro_" + _id}>
    <span className="card-like" onClick={likeHandler}>
        {isLike ? <SuitHeartFill /> : <SuitHeart />}
    </span>
    <Card.Img variant="top" src={pictures} alt={name} className=" align-self-center w-auto" height="100"/>
    <Card.Body className="d-flex flex-column">
        <Card.Text as="h4">{price} ₽</Card.Text>
        <Card.Text className="text-secondary fs-5 flex-grow-1">{name}</Card.Text>
        <Button variant="warning" className="w-100">Купить</Button>
    </Card.Body>
    <Link to={`/product/${_id}`} className="card-link"></Link>
</Card>
}
export default BsCard;