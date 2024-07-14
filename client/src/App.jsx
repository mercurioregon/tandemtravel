import './App.css';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './pages/homepage';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';


function App() {
  console.log('here')
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  );
}

export default App;
