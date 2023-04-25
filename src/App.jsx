import './App.css';
import Navbar from './components/navbar/Navbar';
import Slider from './components/Slider/Slider';
import About from './components/About_maks/About';
import Price from './components/Price/Price';
import PriceT from './components/PriceT/PriceT';
import PriceTBusiness from './components/PriceTBusiness/PriceTBusiness';
import PriceTMedia from './components/PriceTMedia/PriceTMedia';
import BlockPrice from './components/priceBlock/BlockPrice';
// import PriorityT from './components/PriorityT/PriorityT';
import Parking from './components/Parking/Parking';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <About />
      <Price />
      <PriceT />
      <PriceTBusiness />
      <PriceTMedia />
      <BlockPrice />
      <Parking />
      <Footer />
    </div>
  );
}

export default App;
