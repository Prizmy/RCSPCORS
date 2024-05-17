import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Используем Routes вместо Switch и Navigate вместо Redirect

import { authRouters, publicRouters } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";

const AppRouter = () => {
    const { user } = useContext(Context);

    return (
        <Routes> {/* Используем Routes вместо Switch */}
            {user.isAuth && user.User.role === "ADMIN" && authRouters.map(({ path, Component }) => {
                return <Route key={path} path={path} element={<Component />} exact /> // Используем атрибут element вместо component
            })}
            {publicRouters.map(({ path, Component }) => {
                return <Route key={path} path={path} element={<Component />} exact /> // Используем атрибут element вместо component
            })}
            <Navigate to={SHOP_ROUTE} /> {/* Заменяем Redirect на Navigate */}
        </Routes>
    );
};

export default AppRouter;
