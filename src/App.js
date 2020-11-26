import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
