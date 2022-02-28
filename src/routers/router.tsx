import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}