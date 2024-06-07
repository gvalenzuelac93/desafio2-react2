import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { FotoProvider } from './contexts/FotoContext';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favorites from './views/Favorites';
import './App.css';


function App() {

  return (
    <>
      <FotoProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/desafio2_react2/favoritos" element={<Favorites />} />
          </Routes>
      </FotoProvider>

    </>
  );
}

export default App;