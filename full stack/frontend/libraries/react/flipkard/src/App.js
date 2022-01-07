import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 import Home from './pages/Home'
import UsersList from './pages/UsersList';
// import About from './pages/About';


function App() {
  return (
    <>
      {
    
      
       <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/users" element={<UsersList/>}/>
        </Routes>
      </Router> 
      }
    </>
  );
}

export default App;
