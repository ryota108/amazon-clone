import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import {Routes,Route} from "react-router-dom";
import Checkout from './Checkout/Checkout';

function App() {
  return (
  <div className="App">
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </div>
  );
}

export default App;
