import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../error-page.tsx";
import PrivateLayout from "../Layouts/PrivateLayout.tsx";
import Declarations from "../pages/Declarations.tsx";
import Home from "../pages/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
                {
                    index:true,
                    element: <Home />,
                },
                {
                    path: "private",
                    element: <PrivateLayout />,

                    children: [
                        {
                            path: "declaration",
                            element: <Declarations />,
                        },
                    ],
            },
        ],
    },
]);

export {router}