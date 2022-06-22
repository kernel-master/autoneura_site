import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import AnIPage from './pages/aniPage';
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';

const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <div style={{ position: "relative", height: "100px", lineHeight: "100px"}}>
        <Routes>
          <Route path="home" element={<HomePage/>} />
          <Route path="anIproduct" element={<AnIPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<HomePage/>} />
          {/* <Route path="about" element={<AboutPage/>} /> */}
          {/* <Route path="/careers" element={<CareersPage/>} /> */}
        </Routes>
        <div style={{ display: 'flex', justifyContent: 'space-between', bottom: '0', lineHeight: '30px', padding: '0px 15%', width: '100%', backgroundColor: "rgb(245,245,247)"}}>
          <div>
            © 2022 AutoNeura. NP-105, ICENTRE HOWARD WAY, NEWPORT PAGNELL, BUCKINGHAMSHIRE, MK16 9PY 
          </div>
          <div style={{display: 'flex'}}>
            <a style={{cursor: "pointer"}} href="https://www.linkedin.com/company/autoneura/"> <i class="linkedin icon" style={{display: 'flex', fontSize: '20px'}}/></a>
            <a style={{cursor: "pointer"}} href="/#" onClick={(e)=> {window.location.href = 'mailto:abarr@autoneura.com'; e.preventDefault();}}> <i class="mail icon" style={{display: 'flex', fontSize: '20px', color: 'orange'}}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
