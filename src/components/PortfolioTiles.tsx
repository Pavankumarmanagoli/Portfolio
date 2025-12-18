import { Briefcase, BookOpen, ArrowRight } from 'lucide-react';

interface PortfolioTilesProps {
  onNavigate: (page: string) => void;
}

export default function PortfolioTiles({ onNavigate }: PortfolioTilesProps) {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Explore my professional experience and educational background
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => onNavigate('experience')}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <Briefcase className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-5xl md:text-6xl font-bold mb-3 text-center">Experience</h3>
                <p className="text-xl text-blue-100 max-w-xs text-center mb-6">
                  3+ years of professional development across startups and enterprises
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  View Details <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 group-hover:scale-125 transition-transform duration-300"></div>
            </button>

            <button
              onClick={() => onNavigate('education')}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-400"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <BookOpen className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-5xl md:text-6xl font-bold mb-3 text-center">Education</h3>
                <p className="text-xl text-blue-100 max-w-xs text-center mb-6">
                  Comprehensive learning from universities
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  View Details <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 group-hover:scale-125 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
