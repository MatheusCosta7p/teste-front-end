import ProductList from "../../components/product/productList/productList.component";
import { Categories } from '../../components/categories/categories.component';
import Header from '../../components/header/header.component';
import { HeroSection } from '../../components/heroSection/heroSection.component';

function Home() {
  return (
    <main>
      <Header />

      <HeroSection />

      <Categories />

      <ProductList />
    </main>
  )
}

export default Home
