import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuienEres } from './components/QuienEres';
import { Fuentes } from './components/Fuentes';
import { Tendencias } from './components/Tendencias';
import { Oportunidades } from './components/Oportunidades';
import { Plan } from './components/Plan';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuienEres />
      <Fuentes />
      <Tendencias />
      <Oportunidades />
      <Plan />
      <Footer />
    </div>
  );
}
