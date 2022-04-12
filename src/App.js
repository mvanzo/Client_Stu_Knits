import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Shop from './components/pages/Shop';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route
            path='/'
            element={<Home/>}  
          />
          <Route
            path='/shop'
            element={<Shop/>}  
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}