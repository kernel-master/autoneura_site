import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import AboutPage from './pages/aboutPage';
import AnIPage from './pages/aniPage';
import CareersPage from './pages/careersPage';
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';

const App = () => {
  return (
    <div className='App'>
      <div style={{ position: "relative", height: "100px", lineHeight: "100px"}}>
        <NavBar/>
          <Routes>
            <Route path="*" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/anIproduct" element={<AnIPage/>} />
            <Route path="/careers" element={<CareersPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
