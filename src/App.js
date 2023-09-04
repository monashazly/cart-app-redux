
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Homepage from "./components/Homepage"


function App() {
  return (
    <div className="App py-5">
      <AppNavbar></AppNavbar>
      <Routes>
        <Route path='/' element = {<Homepage></Homepage>}></Route>
        <Route path='/products' element = {<Products></Products>}></Route>
        <Route path='/cart' element = {<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
