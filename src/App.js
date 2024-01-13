import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import AddLocation from './page/addLocation';
import ListLocation from './page/listLocation.js';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';


function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" exact  element={<Home />} />
        <Route path="/add-location" element={<AddLocation />} />
        <Route path="/list-location" element={<ListLocation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
