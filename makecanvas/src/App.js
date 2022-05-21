import './App.css';
import { Routes, Route } from 'react-router-dom';
import Canvas from './pages/canvas';
import CustomHook from './pages/customHook';
import UseCallback from './pages/UseCallback';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/customHook' element={<CustomHook />}></Route>
        <Route path='/canvas' element={<Canvas />}></Route>
        <Route path='/' element={<UseCallback />}></Route>
      </Routes>
    </div>
  );
}

export default App;
