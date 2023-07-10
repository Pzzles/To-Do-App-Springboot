
import './App.css';
import Notez from './components/Notez';
import {rowserRouter, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/mynotes' element={<Notez />} ></Route>
          <Route path='/newnote' element={<Add />} ></Route>
          <Route path='/' element={<Notez />} ></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
