import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';
import Join from './pages/Join';
import Archive from './pages/Archive';
import Newsletter from './pages/Newsletter';
import FashionWeek from './pages/FashionWeek';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/newsletter' element={<Newsletter/>}/>
        <Route path='/FashionWeek' element={<FashionWeek/>}/>
      </Routes>
    </>
  );
}

export default App;
