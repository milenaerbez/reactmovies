import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header/Header';

function App() {
  return (
  <>
  <Router>
    <Header />
    <Switch>

    </Switch>
  </Router>
  
  
  </>
  );
}

export default App;
