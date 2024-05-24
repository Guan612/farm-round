import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../views/layout";
import My from "../views/my";
import Cneter from "../views/cneter";
export const router = createBrowserRouter([
    {
        path: "/",
        element: Layout,
        children: [
            {
                path: "/my",
                element: My,
            },
            {
                path: "/centre",
                element: Cneter,
            }
        ]
    }
])
