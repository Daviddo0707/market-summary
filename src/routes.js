import {lazy} from 'react';

const Login = lazy(async () => await import('./pages/login/Login'));
const MarketsList = lazy(async () => await import('./pages/markets-list/MarketsList'));

export const routes = [
    {path: "/", component: <Login/>},
    {path: "/markets", component: <MarketsList/>},
]
