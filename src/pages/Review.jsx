import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Review = () => {
    const [description, setDescription] = useState("Напишите свой отзыв о товаре");
    const { id } = useParams();
    const navigate = useNavigate();

    const clearForm = () => {
        setDescription("Напишите свой отзыв о товаре");
    }

    const formHandler = (e) => {
        e.preventDefault();
        const body = {
            description: description,
        };
        console.log(body)
        fetch(`https://api.react-learning.ru/products/review/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token12")}`
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, id);
                if (!data.err && !data.error) {
                    clearForm();
                    navigate(`/product/review/${id}`)
                }
            })
    }

    return <Container style={{ gridTemplateColumns: "auto" }}>
        <Row>
            <Col xs={12}><h1>Добавить новый отзыв</h1></Col>
            <Form onSubmit={formHandler}>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="pro-info">Описание</Form.Label>
                        <Form.Control
                            id="pro-info"
                            type="text"
                            value={description}
                            as="textarea"
                            rows={4}
                            onChange={e => { setDescription(e.target.value) }}
                        />
                    </Form.Group>
                </Col>
                <Button type="submit">сохранить</Button>
            </Form>
        </Row>
    </Container>

}
export default Review