import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';
import Join from './pages/Join';
import Archive from './pages/Archive';
import FashionWeek2024 from './pages/FashionWeek2024';
import FashionWeek2022 from './pages/FashionWeek2022';
import FashionWeek2023 from './pages/FashionWeek2023';
import FashionWeek2021 from './pages/FashionWeek2021';
import Lifestyle from './pages/Lifestyle';
import Culture from './pages/Culture';
import Fashion from './pages/Fashion';
import DigitalIssues from './pages/digitalIssues';
import PastFinaleShows from './pages/PastFinaleShows';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/fashion-week-2024' element={<FashionWeek2024/>}/>
        <Route path='/fashion-week-2023' element={<FashionWeek2023/>}/>
        <Route path='/fashion-week-2022' element={<FashionWeek2022/>}/>
        <Route path='/fashion-week-2021' element={<FashionWeek2021/>}/>
        <Route path='/past-fashion-shows' element={<PastFinaleShows />}/>
        <Route path='/lifestyle' element={<Lifestyle/>}/>
        <Route path='/culture' element={<Culture/>}/>
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/digital' element={<DigitalIssues/>}/>

      </Routes>
    </>
  );
}

export default App;