import './App.css';
import { Routes, Route } from 'react-router-dom';
import Canvas from './pages/canvas';
import CustomHook from './pages/customHook';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CustomHook />}></Route>
        <Route path='/canvas' element={<Canvas />}></Route>
      </Routes>
    </div>
  );
}

export default App;
