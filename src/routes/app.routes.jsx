import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { Details } from "../pages/Details";
import { MyOrder } from "../pages/MyOrder";
import { OrderHistory } from "../pages/OrderHistory";
import { MyFavorites } from "../pages/MyFavorites";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/dish" element={<Dish />} />
            <Route path="/details" element={<Details />} />
            <Route path="/order" element={<MyOrder />} />
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/favorites" element={<MyFavorites />} />
        </Routes>
    )
}