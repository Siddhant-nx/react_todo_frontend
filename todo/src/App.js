import './App.css';
import Signup from './TD_signin';
import Login from './TD_login';
import Home from './Home';
import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';


function App() {
  return (
   <div className="App">

<Router>
  <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/TD_login' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
  </Routes>
</Router>
   </div>
   
  );
}

export default App;
