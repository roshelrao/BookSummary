import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Summary from './components/Summary';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/summary/:id' exact element={<Summary/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
