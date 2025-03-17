import ProductList from "../../components/product/productList/productList.component";
import { Categories } from '../../components/categories/categories.component';
import Header from '../../components/header/header.component';
import { HeroSection } from '../../components/heroSection/heroSection.component';
import Partner from "../../components/partner/partner.component";
import { RelatedProduct } from "../../components/relatedProduct/relatedProduct.component";
import styles from "../../assets/styles/pages/Home.module.scss";
import { Brands } from "../../components/brands/brands.component";


function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Header />
        <HeroSection />
      </section>

      <section className={styles.categories}>
        <Categories />
      </section>

      <section className={styles.relatedProducts}>
        <RelatedProduct filter />
      </section>

      <ProductList />

      <section className={styles.partners}>
        <Partner />
      </section>

      <section className={styles.relatedProducts}>
        <RelatedProduct />
      </section>

      <ProductList />

      <section className={styles.partners}>
        <Partner />
      </section>

      <Brands />

      <section className={styles.relatedProducts}>
        <RelatedProduct />
      </section>

      <ProductList />
      
    </main>
  )
}

export default Home;
