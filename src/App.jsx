import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css'
import Navbar from './Navbar';


import Home from './Home';
import UserList from './UserList';
import UserMovieDetails from './UserMovieDetails';
import Form from './Form';



function App() {


  return (
    
    <Router>
      <Navbar/>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userlist" element={<UserList />} />
      <Route path="/users/:id" element={<UserMovieDetails />} />
      <Route path='/form' element={<Form />} />
    
    </Routes>
  </Router>
  );
}

export default App
