import { GraduationCap, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import srhLogo from '../components/srh.png';
import mvjceLogo from '../components/mvjce.png';

interface EducationPageProps {
  onBack: () => void;
}

export default function EducationPage({ onBack }: EducationPageProps) {
  const education = [
    {
      degree: 'Master of Science in Applied Data Science and Analytics ',
      institution: 'SRH Hochschule Heidelberg',
      logo: srhLogo,
      year: '2023 - 2025',
      location: 'Heidelberg, Germany',
      icon: GraduationCap
    },
    {
      degree: 'Bachelor of Engineering in Electronics and Communication',
      institution: 'MVJ College of Engineering',
      logo: mvjceLogo,
      year: '2018 - 2022',
      location: 'Bangalore, India',
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 lg:py-16">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4 sm:mb-6 md:mb-8 transition-colors text-sm sm:text-base md:text-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          Back to Portfolio
        </button>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Education 
          </h1>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-blue-600 mb-6 sm:mb-8 md:mb-12"></div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-600 via-blue-600 to-blue-400 hidden lg:block"></div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-3 sm:gap-4 md:gap-6 lg:gap-0 items-start lg:items-center w-full`}
                >
                  {/* Card Container */}
                  <div className={`w-full ${index % 2 === 0 ? 'lg:w-5/12 lg:pr-4' : 'lg:w-5/12 lg:pl-4'}`}>
                    <div className="bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
  
                        {/* LOGO BOX */}
                        {edu.logo ? (
                          <img
                            src={edu.logo}
                            alt={edu.institution + " logo"}
                            className="w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 rounded-lg object-contain shadow-md bg-white p-1.5 sm:p-2 flex-shrink-0"
                          />
                        ) : (
                          <div className="bg-blue-100 p-2 sm:p-3 md:p-3 rounded-lg flex-shrink-0">
                            <edu.icon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-blue-600" />
                          </div>
                        )}
                      
                        {/* TEXT */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2 break-words">
                            {edu.degree}
                          </h3>
                      
                          <p className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg lg:text-xl break-words">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 md:gap-4">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="text-sm sm:text-base md:text-lg">{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="text-sm sm:text-base md:text-lg">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Center Spacer */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div className="relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-600 z-10">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Empty Right/Left Spacer */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
