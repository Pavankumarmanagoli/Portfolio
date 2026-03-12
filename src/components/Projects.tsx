import { ExternalLink, Github } from 'lucide-react';
import stosImage from './stos.png';
import ragAiImage from './rag_ai.png';
import customerChurnImage from './customer_churn.png';
import eRetailImage from './e_retail.png';
import abImage from './a_b.png';
import bikeSharingImage from './bike_sharing_system.png';

export default function Projects() {
  const projects = [
    {
      title: '𝗘𝗻𝗱-𝘁𝗼-𝗘𝗻𝗱 𝗖𝗿𝗼𝘀𝘀-𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲 𝗦𝗽𝗲𝗲𝗰𝗵 𝗧𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻: 𝗥𝗲𝘁𝗮𝗶𝗻𝗶𝗻𝗴 𝗦𝗽𝗲𝗮𝗸𝗲𝗿 𝗜𝗱𝗲𝗻𝘁𝗶𝘁𝘆 𝗮𝗻𝗱 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲 𝗗𝘆𝗻𝗮𝗺𝗶𝗰𝘀',
      description: 'English → German speech-to-speech translation pipeline that preserves both linguistic accuracy and expressive characteristics.',
      tags: ['Python', 'PyTorch', 'DL (Speech & NLP)', 'Whisper', 'MarineMT', 'YourTTS'],
      image: stosImage
    },
    {
      title: 'NeuroHire : Neural Semantic Matching Protocol for Real Time Job Interoperability',
      description: 'The system uses LLM-based semantic analysis to summarize resumes and match candidate profiles with relevant job opportunities in real time.',
      tags: ['Python', 'LLMs', 'LangChain', 'NLP', 'API Integration', 'Streamlit'],
      image: ragAiImage,
      github: 'https://github.com/Pavankumarmanagoli/NeuroHire_Neural-Semantic-Matching-Protocol-for-Real-Time-Job-Interoperability'
    },
    {
      title: 'Airflow Sales ETL Pipeline',
      description: 'Designed a workflow-based ETL system with Apache Airflow to convert raw sales data into a structured warehouse supporting business analytics.',
      tags: ['Python', 'Apache Airflow', 'SQL', 'Docker', 'Data Warehousing', 'Scikit-Learn'],
      image: customerChurnImage,
      github: 'https://github.com/Pavankumarmanagoli/Airflow-Sales-ETL-Pipeline'
    },
    {
      title: 'Customer Segmentation for Retail E-Commerce',
      description: 'End-to-end workflow for segmenting customers of an online retail business. The analysis cleans and explores transactional data, derives Recency, Frequency and Monetary (RFM) features, and applies K-Means clustering to uncover actionable customer groups.',
      tags: ['Python', 'Data Visualization', 'Scikit-Learn'],
      image: eRetailImage,
      github: 'https://github.com/Pavankumarmanagoli/Customer-Segmentation-for-Retail-E-Commerce-using-RFM-and-K-Means-Clustering'
    },
    {
      title: 'A/B Testing on Marketing Campaigns',
      description: 'Determines which campaign drives the greatest lift in weekly sales and provides actionable recommendations for future marketing rollouts.',
      tags: ['Python', 'SciPy', 'Statsmodels', 'Data Visualisation'],
      image: abImage,
      github: 'https://github.com/Pavankumarmanagoli/AB-Testing-on-Marketing-Campaigns'
    },
    {
      title: 'Bike Sharing Systems',
      description: 'Enhance the operational efficiency of urban bike‑sharing programs by ingesting real‑time data from the NextBike API and translating it into actionable insights for better bike distribution and resource planning.',
      tags: ['Python', 'Google BigQuery', 'GCS', 'Tableau', 'SQL'],
      image: bikeSharingImage,
      github: 'https://github.com/Pavankumarmanagoli/Data-Pipeline-Project-for-Optimizing-Bike-Sharing-Systems'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            A selection of projects that showcase my skills and passion for building exceptional digital experiences
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
