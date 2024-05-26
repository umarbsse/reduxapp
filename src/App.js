
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import{BrowserRouter,
  Routes,
  Route,
  }from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>    
        <div className="container">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
} 

export default App;
