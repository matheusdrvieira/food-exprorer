import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewProduct } from "../pages/NewProduct";
import { Details } from "../pages/Details";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<NewProduct />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    )
}