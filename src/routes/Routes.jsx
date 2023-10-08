import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import Home from "../pages/Home";
import ErrorPage from "../components/Errorpage";
import Contactus from "../components/Contactus";
import Services from "../layouts/Services";
import Categories from "../components/Categories";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement:<ErrorPage/>, 
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/contactus',
                element: <Contactus/>,
            },
            {
                path: '/services',
                element: <Services/>,
            },
            {
                path: '/categories',
                element: <Categories/>,
            },
            {
                path: '/login',
                element: <Login/>,
            }

        ]
    }    
]);

export default router;