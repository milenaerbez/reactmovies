
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { HomePages } from './components/home/HomePages';
import Footer from './components/footer/Footer';
import { SinglePage } from './components/watch/SinglePage';

function App() {
  return (
  <>
  <Router>
    <Header />
    <Switch>
<Route exact path='/' component={HomePages}/>
<Route exact path='/SinglePage/:id' component={SinglePage} />
    </Switch>
    <Footer />
  </Router>
  
  
  </>
  );
}

export default App;
