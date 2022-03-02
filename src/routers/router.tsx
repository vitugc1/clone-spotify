import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}