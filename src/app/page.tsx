import Hero from './components/Hero';
import ProductsMenu from './components/ProductsMenu';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main className='font-grotesk'>
        <Hero />
        <ProductsMenu />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
