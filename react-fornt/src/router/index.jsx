import {useRoutes, Navigate} from 'react-router-dom'

import Layout from '../layout/indexlayout'
import Home from '../pages/home'
import Me from '../pages/me'
import Equipment from '../pages/equipment'

const routers = [
    {
        path: '*',
        element: <Navigate to="/layout/home" />,
    },
    {
        path: '/layout',
        element: <Layout/>,
        children:[
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'me',
                element: <Me/>,
            },
            {
                path: 'equipment',
                element: <Equipment/>,
            },
        ]
    },
]

export default function Router() {
    return useRoutes(routers)
}