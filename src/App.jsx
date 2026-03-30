
import './App.css'
import Banner from './Component/Home/Banner/Banner'
import CounterSection from './Component/Home/CounterSection'
import ButtonToggling from './Component/Home/PremiumDigitalTools/ButtonToggling'
import Navbar from './Component/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <CounterSection></CounterSection>
      <ButtonToggling></ButtonToggling>
    </>
  )
}

export default App
