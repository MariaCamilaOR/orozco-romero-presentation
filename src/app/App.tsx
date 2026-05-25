import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuienEres } from './components/QuienEres';
import { Proyectos } from './components/Proyectos';
import { Fuentes } from './components/Fuentes';
import { Tendencias } from './components/Tendencias';
import { Oportunidades } from './components/Oportunidades';
import { Plan } from './components/Plan';
import { Footer } from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <QuienEres />
        <Proyectos />
        <Fuentes />
        <Tendencias />
        <Oportunidades />
        <Plan />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
