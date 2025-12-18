import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 mb-8">
            <div>
              <button
            onClick={() => scrollToSection('hero')}
            className="text-3xl left-0 font-bold text-white-900 hover:text-blue-100 transition-colors">
            Portfolio
          </button>
              <p className="text-gray-400 leading-relaxed">
                Building digital experiences that make a difference, one line of code at a time.
              </p>
            </div>

            <div className="text-end">
              <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                </li>
                {/* <li>
                  <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                </li> */}
                {/* <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                </li> */}
              </ul>
            </div>

            {/* <div>
              <h4 className="text-white text-xl font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Pavankumarmanagoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pavan-u-managoli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:pavanmanagoli06@gmail.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div> */}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-base">
              {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="text-gray-400 text-base flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500 fill-current" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
