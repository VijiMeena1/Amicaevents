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
            },
            {
                path: '/signup',
                element: <Signup/>,
            },
            {
              path: '/service-details/:title_id',
              element:<Card/>, 
              loader: async ({ params }) => {
                const response = await fetch('/service.json');
                const data = await response.json();
                const cardData = data.find((item) => item.title_id === params.title_id);
                return { data: cardData };
              }
            }

        ]
    }    
]);

export default router;