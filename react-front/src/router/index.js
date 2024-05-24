import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../views/layout";
import My from "../views/my";
import Cneter from "../views/cneter";
export default createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/my",
                Component: My,
            },
            {
                path: "/centre",
                Component: Cneter,
            }
        ]
    }
])
