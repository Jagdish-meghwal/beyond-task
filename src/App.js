import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages';

import signinpage from './pages/signinpage';

function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={signinpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
