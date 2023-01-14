import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import BuyItWith from "./components/BuyItWith/BuyItWith"
import SpecialOffers from "./components/SpecialOffers/SpecialOffers"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import FromManufactures from "./components/FromManufactures/FromManufactures"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <BuyItWith />
      <SpecialOffers />
      <ProductDetails />
      <FromManufactures />
      

    </div>
  )
}

export default App
