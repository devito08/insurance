import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroute from './components/Allroute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Allroute/>
      <Footer/>
    </Router>
  );
}

export default App;
