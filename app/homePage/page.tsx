import HeroSection from "./components/heroSection";
import TrendyProducts from "./components/trendyProducts";
import LuxuriousProducts from "./components/luxuriousProducts";
import ProductGrid from "./components/productGrid";
import MainCharacterProducts from "./components/mainCharacterProducts";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <TrendyProducts/>
      <ProductGrid/>
      <LuxuriousProducts/>
      <MainCharacterProducts/>
    </div>
  )
}

export default Home;
