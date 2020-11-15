import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './pages';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
