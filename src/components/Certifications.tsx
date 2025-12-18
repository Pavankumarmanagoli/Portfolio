import { Award, Star, CheckCircle, Download } from 'lucide-react';
import { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      title: 'Microsoft Certified: Azure Data Engineer Associate',
      issuer: 'Microsoft',
      date: 'November 2024',
      credentialId: 'B1C965366347A4F6',
      credentialUrl: 'https://learn.microsoft.com/en-us/users/pavankumarumeshmanagoli-3071/credentials/b1c965366347a4f6?ref=https%3A%2F%2Fwww.linkedin.com%2F',
      icon: '☁️',
      color: 'from-indigo-400 to-indigo-600',
      description: '',
      skills: ['']
    },
    {
      title: 'IBM Data Analyst Specialization',
      issuer: 'IBM',
      date: 'April 2025',
      credentialId: 'II1ZNWTEFYRU',
      credentialUrl:'https://www.coursera.org/account/accomplishments/specialization/II1ZNWTEFYRU',
      icon: '📊',
      color: 'from-blue-400 to-blue-600',
      description: '',
      skills: ['']
    },
    {
      title: 'SAS Certified Specialist: Visual Business Analytics',
      issuer: 'SAS',
      date: 'November 2023',
      credentialId: 'SAS',
      credentialUrl: 'https://www.credly.com/badges/9006fd87-1776-41ec-91ab-30d973d90009/whatsapp',
      icon: '🔍',
      color: 'from-cyan-400 to-blue-500',
      description: '',
      skills: ['']
    },
    {
      title: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      date: 'December 2024',
      credentialId: '1tO0Ys3ITkGJkXM3sgBKrQ',
      credentialUrl: 'https://www.linkedin.com/in/pavan-u-managoli/overlay/Certifications/207336702/treasury/?profileId=ACoAADr8SpYB6nA9acLW1ZVQ_cQw4wF5o4Y2G1E',
      icon: '🧬',
      color: 'from-cyan-400 to-blue-500',
      description: '',
      skills: ['']
    },
    {
      title: 'Building LLM Applications with Prompt Engineering',
      issuer: 'NVIDIA',
      date: 'June 2025',
      credentialId: '8KBlzJqTQ9WUKjONF9NCvwCredential ',
      credentialUrl: 'https://www.linkedin.com/in/pavan-u-managoli/details/certifications/1749554285824/single-media-viewer/?profileId=ACoAADr8SpYB6nA9acLW1ZVQ_cQw4wF5o4Y2G1E',
      icon: '🧠',
      color: 'from-blue-400 to-blue-600',
      description: '',
      skills: ['']
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Databricks',
      date: 'November 2024',
      credentialId: '121706590',
      credentialUrl: 'https://credentials.databricks.com/2a27a2fd-0006-4673-aadf-7ecfab13dbc6#acc.emq2tMRP',
      icon: '🤖',
      color: 'from-indigo-400 to-indigo-600',
      description: '',
      skills: ['']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Credentials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Industry-recognized certifications demonstrating expertise and commitment to continuous learning
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(selectedCert === index ? null : index)}
                className="group h-full"
              >
                <div className={`bg-gradient-to-br ${cert.color} p-0.5 rounded-2xl h-full`}>
                  <div className="bg-white rounded-2xl p-6 h-full flex flex-col relative overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>

                    <div className="relative z-10 flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl">{cert.icon}</span>
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h3>

                      <p className="text-gray-600 text-base mb-4">
                        {cert.issuer}
                      </p>

                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-500">Issued: {cert.date}</p>
                        <p className="text-sm text-gray-500">ID: {cert.credentialId}</p>
                      </div>

                        {/* {selectedCert === index && (
                          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200 animate-fade-in">
                            <p className="text-base text-gray-700 mb-3">{cert.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {cert.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded font-medium">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )} */}

                      <div className="flex gap-2 pt-2 border-t border-gray-200 mt-auto">
                        <button className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                          <CheckCircle className="w-4 h-4" />
                          Verified
                        </button>
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Continuous Learning</h3>
                <p className="text-gray-700">
                  Actively pursuing new certifications and staying updated with the latest technologies and industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
