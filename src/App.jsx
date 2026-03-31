
import { useState } from 'react'
import './App.css'
import Banner from './Component/Home/Banner/Banner'
import CounterSection from './Component/Home/CounterSection'
import ButtonToggling from './Component/Home/PremiumDigitalTools/ButtonToggling'
import Cart from './Component/Home/PremiumDigitalTools/Cart'
import Products from './Component/Home/PremiumDigitalTools/Products'
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer'
import GetStarted from './Component/Home/GetStarted'
import Pricing from './Component/Home/Pricing'

async function loadProductData() {
  const res = await fetch('/ProductData.json');
  const data = await res.json();
  return data;
}
const productData = loadProductData();
// console.log(productData);
function App() {
  const [activeCart, setActiveCart] = useState("Products");
  const [addToCart, setAddToCart] = useState([]);

  return (
    <>
      <Navbar addToCart={addToCart} setActiveCart={setActiveCart}></Navbar>
      <Banner></Banner>
      <CounterSection></CounterSection>
      <ButtonToggling addToCart={addToCart} setActiveCart={setActiveCart}></ButtonToggling>
      {activeCart === "Products" ?
        (<Products addToCart={addToCart} setAddToCart={setAddToCart} productData={productData}></Products>)
        :
        (<Cart addToCart={addToCart} setAddToCart={setAddToCart}></Cart>)
      }
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App
