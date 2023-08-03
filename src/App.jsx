import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layouts/Header'
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { Provider } from "react-redux";
import store from './components/redux/store';
import Cart from "./components/Cart";
function App() {

  return (
    <Provider store={store}>
<Router>
          <Header/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/cart/" element={<Cart/>}/>
          </Routes>
<Footer/>
</Router>
</Provider>
  );
}
export default App;
