import React, { useContext } from 'react';
import { Button, Image, Nav } from "react-bootstrap";
import shop_cart from "../../assets/shopping-basket.png";
import { NavLink, useNavigate } from "react-router-dom"; // Импортируем useNavigate
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE } from "../../utils/consts";

const AdminPanel = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate(); // Заменяем useHistory на useNavigate

    if (user.User.role === 'ADMIN') {
        return (
            <div className="d-flex align-items-center mr-3">
                <Button
                    className={"mr-3"}
                    variant={"outline-light"}
                    onClick={() => { navigate(ADMIN_ROUTE) }} // Используем navigate вместо history.push
                >
                    Админ панель
                </Button>
            </div>
        );
    } else {
        return (
            <div className="d-flex align-items-center mr-3">
            </div>
        );
    }
});

export default AdminPanel;
