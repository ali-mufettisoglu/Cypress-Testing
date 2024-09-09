import { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
    </>
  )
}

export default App
