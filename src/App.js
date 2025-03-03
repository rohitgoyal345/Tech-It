import './App.css';

// bootstrap import link
import 'bootstrap-icons/font/bootstrap-icons.css';




// Components
import Navbar from "./Components/Navbar.js";

// pages
import Banner from "./Pages/Banner.js";
import About from "./Pages/About.js";
import Service from './Pages/Service.js';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route excat path="/" element={<Banner />} />
            <Route excat path="/" element={<About />} />
            <Route excat path="/" element={<Service />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;