import {lazy} from 'react';

const Login = lazy(() => import('./pages/login/Login'));
const MarketsList = lazy(() => import('./pages/markets-list/MarketsList'));

export const routes = [
    {path: "/", component: <Login/>},
    {path: "/markets", component: <MarketsList/>},
]
