import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';
import Join from './pages/Join';
import Archive from './pages/Archive';
import Newsletter from './pages/Newsletter';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/newsletter' element={<Newsletter/>}/>
      </Routes>
    </>
  );
}

export default App;
