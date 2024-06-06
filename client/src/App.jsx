import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroute from './components/Allroute';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Allroute/>
      
    </Router>
  );
}

export default App;
