import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Skills from './components/Skills';
import PortfolioTiles from './components/PortfolioTiles';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';

type Page = 'portfolio' | 'experience' | 'education';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('portfolio');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage('portfolio');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'experience') {
    return <ExperiencePage onBack={handleBack} />;
  }

  if (currentPage === 'education') {
    return <EducationPage onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Skills />
      <PortfolioTiles onNavigate={handleNavigate} />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
