import './App.css';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Home from './component/Home';
import {Switch, Route} from 'react-router-dom';
import Product from './component/Product';


function App() {
  return (
    <>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/products" component={Products} />
       <Route exact path="/products/id:" component={Product} />
     </Switch>
    </>
  );
}

export default App;
