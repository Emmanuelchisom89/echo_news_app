import { useState, useRef } from "react"
import Navbar from "./components/navBar/Navbar"
import NavbarTop from "./components/navBarTop/NavbarTop"
import AdvertTop from "./components/advertTop/AdvertTop"
import Hero from "./components/hero/Hero"
import Home from "./components/mainContent/homes/Home"
import WorldNews from "./components/mainContent/world/WorldNews"
import Naija from "./components/mainContent/naija/Naija"
import Footer from "./components/common/footer/Footer"
import AdvertBottom from "./components/advertBottom/AdvertBottom"

const App = () => {

  const [category, setCategory] = useState("business")
  const anodaBoardRef = useRef(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    anodaBoardRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div>
      <NavbarTop />
      <AdvertTop />
      <Navbar setCategory={handleCategoryChange} />
      <Hero />
      <WorldNews category={category} anodaBoardRef={anodaBoardRef} />
      <Home />
      <AdvertBottom />
      <Naija />
      <Footer />
   </div>
  )
}

export default App
