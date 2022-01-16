import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Summary from './components/Summary';
import Categories from './components/Categories';
import AddNew from './components/AddNew';

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
        <Route path='/categories' exact element={<Categories/>}/>
        <Route path='/addNew' exact element={<AddNew/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
