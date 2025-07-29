import './App.css';
import Register from './components/Register';
import Login from './components/Login';
/* import DigitalWatch from './components/DigitalWatch';
import Parent from './components/Parent';
import UserList from './components/UserList'; */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import DashBoard from './components/DashBoard';
import PersonalDetails from './components/PersonalDetails';


function App() {
  return (
    <div className="App">
     <Router>
      <nav>
        <a>React </a>
      </nav>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={ <ProtectedRoute role="admin">  <DashBoard/></ProtectedRoute>}/>
        <Route path='/personaldetails' element={ <ProtectedRoute role="employee">  <PersonalDetails/> </ProtectedRoute>}/>
      </Routes>
      
     </Router>
    
    </div>
  );
}

export default App;
