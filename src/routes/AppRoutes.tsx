import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Contact} from '../pages';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
