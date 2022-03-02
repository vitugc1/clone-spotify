import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";

export const AppRouter: React.FC = () => {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<SignIn />} />
            {user &&
                <>
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/home" element={<Home />} />
                </>
            }
            </Routes>

        </BrowserRouter>
    )
}

