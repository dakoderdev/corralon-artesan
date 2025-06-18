import Hero from './components/Hero';
import ProductsMenu from './components/ProductsMenu';
import AboutUs from './components/AboutUs';
import IsClosed from './components/IsClosed';

export default function Home() {
  return (
    <main className='font-grotesk'>
      <Hero />
      <ProductsMenu />
      <AboutUs />
      <IsClosed />
    </main>
  );
}
