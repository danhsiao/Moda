import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home"
import About from './pages/About';
import Join from './pages/Join';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/join' element={<Join/>}/>
      </Routes>
    </>
  );
}

export default App;
