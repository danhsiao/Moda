import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';
import Join from './pages/Join';
import Archive from './pages/Archive';
import FashionWeek2024 from './pages/FashionWeek2024';
import FashionWeek2022 from './pages/FashionWeek2022';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/fashion-week-2024' element={<FashionWeek2024/>}/>
        <Route path='/fashion-week-2022' element={<FashionWeek2022/>}/>
      </Routes>
    </>
  );
}

export default App;
