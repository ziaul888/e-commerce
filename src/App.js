//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//import {FaHome} from "react-icons/fa"
import {Route,Switch} from "react-router-dom"
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Cart from './pages/CartPage';
import Contact from './pages/Contact';
import Default from './pages/DefaultPage';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProductPage';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';


function App() {
  return (
    <>
    {/*navber,sidebar,cart,footer*/}
    <NavBar/>
    <SideBar/>
    <SideCart/>
    <Switch>
      <Route path="/"  exact  component={Home}/>
      <Route path="/about"   component={About}/>
      <Route path="/cart"   component={Cart}/>
      <Route path="/contact"   component={Contact}/>
      <Route component={Default}/>  
      <Route path ="/products" exact  component={Products}/>
      <Route path="/products/:id"   component={SingleProduct}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
