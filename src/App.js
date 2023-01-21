
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { HomePages } from './components/home/HomePages';
import Footer from './components/footer/Footer';
import { SinglePage } from './components/watch/SinglePage';
import Movies from './components/Movies/Movies';
import { homeData } from './Podaci';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(homeData)
  const[cartItems, setCartItems]=useState([]);
  const refreshCart = () => {
    const newProducts = items.filter((item) => item.amount > 0);
    setCartItems(newProducts);
 };

  const addToCart = (id) => {
    items.map((item) => {
      if (item.id === id) {
        if(item.amount==0){
        item.amount = item.amount + 1;
        
        refreshCart();
        alert("Dodali ste film "+ item.name);
      }}
    });
  };
  

  return (
  <>
  <Router>
    <Header />
    <Switch>
<Route exact path='/' component={HomePages}/>
<Route exact path='/SinglePage/:id' component={SinglePage} />
<Movies items={items} title='Movies'  onAdd={addToCart} />
    </Switch>
    <Footer />
  </Router>
  
  
  </>
  );
}

export default App;
