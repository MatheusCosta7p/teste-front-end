import ProductList from "../../components/product/productList/productList.component";
import { Categories } from '../../components/categories/categories.component';
import Header from '../../components/header/header.component';
import { HeroSection } from '../../components/heroSection/heroSection.component';
import Partner from "../../components/partner/partner.component";

function Home() {
  return (
    <main>
      <Header />

      <HeroSection />

      <Categories />

      <ProductList />

      <Partner />

      <ProductList />

      <Partner />

      
    </main>
  )
}

export default Home
