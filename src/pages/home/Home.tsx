import { Categories } from '../../components/categories/categories.component';
import Header from '../../components/header/header.component';
import { HeroSection } from '../../components/heroSection/heroSection.component';
function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
    </>
  )
}

export default Home
