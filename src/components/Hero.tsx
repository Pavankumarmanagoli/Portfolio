import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from './photo.jpeg';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 pt-4">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <div className="flex justify-center mb-9">
              <img src={profilePhoto} alt="Profile" className="w-[250px] h-[250px] rounded-full object-cover "/>
              </div>  
              Hi, I'm <span className="text-blue-900">Pavankumar Umesh Managoli</span>
            </h1>
            <p className="text-3xl md:text-4xl text-gray-700 font-light mb-6 mt-5">
              Data & AI Professional
            </p>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <i>"Real Magic Happens when Tech Meets Imagination"</i>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-9">
            <a
              href="https://github.com/Pavankumarmanagoli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
            >
              <Github className="w-8 h-8 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-u-managoli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="w-8 h-8 text-blue-600" />
            </a>
            <a
              href="mailto:pavanmanagoli06@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-8 h-8 text-gray-700" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-white rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            >
               My Work
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="mt-10 animate-bounce inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
