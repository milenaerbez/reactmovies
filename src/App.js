import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { HomePages } from './components/home/HomePages';

function App() {
  return (
  <>
  <Router>
    <Header />
    <Switch>
<Route exact path='/' component={HomePages}/>
    </Switch>
  </Router>
  
  
  </>
  );
}

export default App;
