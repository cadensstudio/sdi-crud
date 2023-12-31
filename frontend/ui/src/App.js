import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Inventory from './pages/Inventory';
import Logout from './pages/Logout';
import './App.css';
import AddItem from './pages/AddItem';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inventory />} />
        <Route path='/login' element={<Registration />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/add-item' element={<AddItem />} />
        <Route path='/:itemId' element={<ItemDetails />} />
      </Routes>
    </>
  );
}

export default App;
