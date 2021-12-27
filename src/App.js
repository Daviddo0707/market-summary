import './App.css';
import {routes} from "./routes";
import {Route, Routes, Navigate, BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/navbar/Navbar';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    {routes.map(({path, component}) => (
                        <Route path={path} key={path} element={component}></Route>
                    ))}
                    <Route render={() => <Navigate to='/'/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
