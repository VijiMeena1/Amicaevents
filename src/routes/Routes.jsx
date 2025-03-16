import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import ErrorPage from "../components/Errorpage";
import Contactus from "../components/Contactus";
import Services from "../layouts/Services";
import Categories from "../components/Categories";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Card from "../components/Card";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import PrivateRoute from "../routes/PrivateRoute"; // ✅ Fixed import path
import SelectVenue from "../pages/SelectVenue";
import Checkout from "../pages/Checkout";
// import OrderConfirmation from "../pages/OrderConfirmation";
import OrderSuccess from "../pages/OrderSuccess";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/contact", element: <Contactus /> }, 
            { path: "/contactus", element: <Contactus /> }, // ✅ Ensured consistency
            { path: "/services", element: <Services /> },
            { path: "/select-venue/:title_id", element: <SelectVenue/> },
            { path: "/checkout", element: <Checkout />},
            // { path: "/order-confirmation", element:<OrderConfirmation />},
            { path: "/order-success", element: <OrderSuccess />},
            { path: "/categories", element: <Categories /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            {
                path: "/details/:title_id",
                element: <Card />,
                loader: async ({ params }) => {
                    try {
                        const response = await fetch("/service.json");
                        if (!response.ok) throw new Error("Failed to fetch data");
                        const data = await response.json();
                        return { data: data.find(item => item.title_id === params.title_id) };
                    } catch (error) {
                        console.error("Error loading data:", error);
                        return { data: null };
                    }
                }
            },
            { path: "/cart", element: <PrivateRoute><Cart /></PrivateRoute> },
            { path: "/profile", element: <PrivateRoute><Profile /></PrivateRoute> }
        ]
    }
]);

export default router;