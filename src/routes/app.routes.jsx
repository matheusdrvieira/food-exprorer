import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { Details } from "../pages/Details";
import { MyOrder } from "../pages/MyOrder";
import { OrderHistory } from "../pages/OrderHistory";
import { MyFavorites } from "../pages/MyFavorites";
import { Payment } from "../pages/Payment";
import { Profile } from "../pages/Profile";
import { IsAdm } from "../utils/index";


export function AppRoutes() {
    const isAdm = IsAdm();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />

            {isAdm ? <Route path="/dish" element={<Dish />} /> :
                <Route path="/dish" element={<Home />} />}

            <Route path="/details" element={<Details />} />
            <Route path="/order" element={<MyOrder />} />
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/favorites" element={<MyFavorites />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}