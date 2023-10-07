import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import Home from "../pages/Home";
import ErrorPage from "../components/Errorpage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement:<ErrorPage/>, 
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }    
]);

export default router;