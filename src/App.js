import { Route, Routes } from 'react-router-dom';
import './App.css';
import RowSelector from './components/RowSelector';
import Grid1 from './components/Grid/Grid1'
import Header from './components/Header';
function App() {
  return (
    <div className='main-background'>
      <Header />
      <Routes>
        <Route path='/' element={<RowSelector />} />
        <Route path='/Grids' element={<Grid1 />} />
      </Routes>
    </div>

  );
}

export default App;
