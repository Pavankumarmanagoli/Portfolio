import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'experience' || id === 'education') {
      onNavigate?.(id);
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-br from-gray-100 to-blue-100 backdrop-blur-sm z-50 shadow-sm">
      <nav className="w-full px-0">
        <div className="flex justify-between items-center py-6 px-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Portfolio
          </button>

          <div className="hidden md:flex items-center space-x-1 ml-auto">
            {/* <button onClick={() => scrollToSection('about')} className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-gray-50">
              About
            </button> */}
            <button onClick={() => scrollToSection('experience')} className="px-3 py-2 text-xl text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-gray-50">
              Experience
            </button>
            <button onClick={() => scrollToSection('education')} className="px-3 py-2 text-xl text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-gray-50">
              Education
            </button>
            <button onClick={() => scrollToSection('skills')} className="px-3 py-2 text-xl text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-gray-50">
              Skills
            </button>
             <button onClick={() => scrollToSection('projects')} className="px-3 py-2 text-xl text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-gray-50">
              Projects
            </button>
            <button onClick={() => scrollToSection('certifications')} className="px-3 py-2 text-xl text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-gray-50">
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-xl"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50">
              Experience
            </button>
            <button onClick={() => scrollToSection('education')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50">
              Education
            </button>
            <button onClick={() => scrollToSection('certifications')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50">
              Certifications
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50">
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
