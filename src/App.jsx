
import './App.css'
import Banner from './Component/Home/Banner/Banner'
import CounterSection from './Component/Home/CounterSection'
import ButtonToggling from './Component/Home/PremiumDigitalTools/ButtonToggling'
import Products from './Component/Home/PremiumDigitalTools/Products'
import Navbar from './Component/Navbar/Navbar';

async function loadProductData() {
  const res = await fetch('/ProductData.json');
  const data = await res.json();
  return data;
}
const productData = loadProductData();
// console.log(productData);
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <CounterSection></CounterSection>
      <ButtonToggling></ButtonToggling>
      <Products productData={productData}></Products>
    </>
  )
}

export default App
