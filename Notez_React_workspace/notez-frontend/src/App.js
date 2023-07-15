
import './App.css';
import Notez from './components/Notez';
import {rowserRouter, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/mynotes' element={<Notez />} ></Route>
          <Route path='/newnote' element={<Add />} ></Route>
          <Route path='/view/:id' element={<View />} ></Route>
          <Route path='/editnote/:id' element={<Add />} ></Route>
          <Route path='/' element={<Notez />} ></Route>
    

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
