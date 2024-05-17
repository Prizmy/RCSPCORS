import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Button, Col, Image, Row, Modal } from "react-bootstrap";
import OneItemInBasket from "../components/oneItemInBasket";
import emptyBasket from "./../assets/emptyBasket.jpg";
import { ORDERING_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";

const BasketCard = observer(() => {
    const { basket, user } = useContext(Context);
    const history = useHistory();
    const [showModal, setShowModal] = React.useState(false);

    const handleCheckout = () => {
        if (user.isAuth) {
            history.push(ORDERING_ROUTE);
        } else {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    if (basket.Basket.length === 0) {
        return (
            <div className="d-flex flex-column align-items-center mt-5">
                <Image src={emptyBasket} />
                <div className="text-center mt-5" style={{ fontSize: 28 }}>
                    <b>Empty shopping basket</b>
                </div>
            </div>
        );
    }

    return (
        <>
            <br />
            <Button onClick={handleCheckout}>Checkout</Button>
            <Row className="mt-3">
                <Col xs={12}>
                    {basket.Basket.map(device => (
                        <OneItemInBasket key={device.id} device={device} />
                    ))}
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>Пожалуйста, авторизуйтесь, чтобы продолжить оформление заказа.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
});

export default BasketCard;
