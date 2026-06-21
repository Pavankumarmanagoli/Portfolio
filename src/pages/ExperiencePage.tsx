import { ExternalLink, Building2, Calendar, ArrowLeft } from 'lucide-react';
import NCSchultzllcLogoImg from '../components/NC-Schultz-llc.jpg';
import iiterateLogoImg from '../components/iiterate.png';
import renolitLogoImg from '../components/logo-renolit-corretto.png';
import grayradiantLogoImg from '../components/grayradiant.png';
import zeboAiLogoImg from '../components/zebo_ai.jpg';

interface ExperiencePageProps {
  onBack: () => void;
}

export default function ExperiencePage({ onBack }: ExperiencePageProps) {
  const experiences = [
    {
      company: 'N.C Schultz LLC',
      position: 'AI Engineer (Intern)',
      period: 'Apr 2026 - Present',
       logo: NCSchultzllcLogoImg,
      description:'As an AI Engineer, I build an internal AI system for a financial services business with over 18,700 leads. I develop multiple AI agents that automatically research leads, score and categorize them, prepare personalized outreach messages, and check content for compliance. I work closely with the business owner and key stakeholders, to find where manual work slows the team down and and automate those repetitive steps with simple, practical AI solutions, so the team can focus on calls and relationships instead of repetitive tasks.',
      highlights: ['Python','AI Agents', 'Workflow Automation', 'LLM', 'Prompt Engineering','Generative AI'],
      color: 'bg-gradient-br from-gray-300 to-white-600'
    },
    {
      company: 'iiterate Technologies GmbH',
      position: 'AI Engineer (Intern)',
      period: 'Jan 2025 - Dec 2025',
       logo: iiterateLogoImg,
      description: 'During my internship at iiterate Technologies GmbH, I developed a Retrieval-Augmented Generation (RAG) system for a regional knowledge portal, transforming REST API content into a structured knowledge base stored in MongoDB to enable semantic search and question answering. I implemented the retrieval pipeline in Python using LangChain, OpenAI embeddings, and FAISS, optimizing chunking strategies and retrieval parameters to improve response relevance. To ensure system reliability, I designed an evaluation framework using RAGAS and DeepEval, improving faithfulness from 0.61 to 0.84 and relevance from 0.67 to 0.89 through metric-driven optimization. I also built a Streamlit interface for real-time interaction and deployed the containerized application on AWS (ECR/EC2) using Docker and GitHub Actions CI/CD. In addition, I contributed to ETL pipelines for a multimodal AI project, preparing structured datasets from medical documents and imaging data stored in AWS S3.',
      highlights: ['Python', 'NoSQL', 'RAG', 'LLM', 'NLP', 'PyTorch', 'AWS', 'Docker', 'Generative AI'],
      companyUrl: 'https://www.iiterate.de/',
      color: 'bg-gradient-br from-gray-300 to-white-600'
    },
    {
      company: 'Renolit (In collaboration with SRH University Heidelberg)',
      position: 'Research student',
      period: 'Apr 2024 - Sept 2024',
       logo: renolitLogoImg,
      description: 'This case study focused on improving quality control in plastic roll manufacturing at RENOLIT using production sensor and MES data. An unsupervised machine learning model was used to learn normal production behavior and flag abnormal patterns automatically. A supervised model was then applied to verify these anomalies and identify the main factors causing defects. All results were presented through a real-time dashboard for operational use.',
      highlights: ['Python', 'EDA', 'Anamoly detection', 'ML', 'Streamlit'],
      companyUrl: 'https://www.renolit.com/de/',
      color: 'bg-gradient-br from-gray-300 to-white-600'
    },
    {
      company: 'HCL Technologies',
      position: 'Data Analyst',
      period: 'Jan 2023 - Aug 2023',
      logo: 'https://hcltech.imgix.net/sites/default/files/images/hcltech-logo.webp?upscale=true',
      description: 'Working with a US-based e-commerce client at HCL Technologies, I focused on transforming complex operational data into meaningful business insights. I maintained and improved ETL pipelines that integrated ERP, CRM, and logistics data into centralized analytics systems. I developed dbt models on Snowflake to standardize KPI calculations and ensure reliable reporting across teams. Using Python and SQL, I analyzed large datasets to evaluate marketing campaigns and identify revenue drivers. I also built PowerBI dashboards that visualized revenue trends, fulfillment performance, and customer behavior, enabling stakeholders to make data-driven strategic decisions.',
      highlights: ['Python', 'SQL', 'ETL', 'PowerBI', 'Snowflake', 'dbt'],
      companyUrl: 'https://www.hcltech.com/de-de',
      color: 'bg-gradient-br from-gray-300 to-white-600'
    },
    {
      company: 'Grayradiant Data Services',
      position: 'Data Analyst',
      period: 'Dec 2021 - Jan 2023',
      logo: grayradiantLogoImg,
      description: 'I worked as a Data Analyst where I built scalable ETL pipelines to integrate data from multiple operational systems into a centralized analytics environment. I automated data ingestion workflows using Power Automate and Azure Data Factory, improving data availability and reducing manual processing. Using Databricks and PySpark, I performed large-scale data transformations including cleaning, normalization, and deduplication to ensure data quality. I also designed interactive BI dashboards that visualized key logistics KPIs, enabling stakeholders to monitor operational performance and make data-driven decisions. My work focused on building reliable data pipelines and analytical models that supported efficient reporting and business insights.',
      highlights: ['Python', 'SQL ','ETL', 'PowerBI', 'Azure', 'Power Automate'],
      companyUrl: 'https://graysonsolutions.net/index.html',
      color: 'bg-gradient-br from-gray-300 to-white-600'
    },
    {
      company: 'Zebo.AI',
      position: 'AI/ML Intern',
      period: 'Apr 2021 - Jul 2021',
      logo: zeboAiLogoImg,
      description: 'I worked within a team to develop an end-to-end data pipeline, to classify “mask” and “without_mask” images using OpenCv with live webcam video feed with overlayed labels. This projects strengthened my understanding of data preprocessing, feature engineering, and model evaluation across both structured datasets and image-based inputs.',
      highlights: ['Python', 'ML', 'CNN', 'OpenCv'],
      color: 'bg-gradient-br from-gray-300 to-white-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-14 sm:pt-16 md:pt-20 lg:pt-24">
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
            Professional Experience
          </h1>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-blue-600 mb-6 sm:mb-8 md:mb-12"></div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-12 lg:mb-16 text-justify leading-relaxed">
            Around 3+ years of professional experience, working with cutting-edge technologies
            and collaborating with talented teams to deliver exceptional digital solutions.
          </p>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {experiences.map((exp, index) => (
              <a
                key={index}
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`bg-gradient-to-br ${exp.color} p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 cursor-pointer relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-white/10 rounded-full -mr-12 sm:-mr-16 md:-mr-20 -mt-12 sm:-mt-16 md:-mt-20 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-white/10 rounded-full -ml-10 sm:-ml-12 md:-ml-16 -mb-10 sm:-mb-12 md:-mb-16 group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1">
                        <div className="flex-shrink-0">
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={exp.company + ' logo'}
                              className="w-14 sm:w-18 md:w-20 lg:w-24 h-14 sm:h-18 md:h-20 lg:h-24 object-contain bg-white/20 rounded-lg p-1.5 sm:p-2"
                            />
                          ) : (
                            <div className="bg-white/20 p-1.5 sm:p-2 md:p-3 rounded-lg">
                              <Building2 className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
                            </div>
                          )}
                        </div>
                      
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-0.5 sm:mb-1 break-words">
                            {exp.company}
                          </h3>
                          <p className="text-black/90 text-sm sm:text-base md:text-lg lg:text-xl font-semibold break-words">
                            {exp.position}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black/70 group-hover:text-black transition-colors flex-shrink-0" />
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4 text-black/80">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base font-medium">{exp.period}</span>
                    </div>

                    <p className="text-black/90 text-s sm:text-s md:text-base lg:text-base leading-relaxed mb-3 sm:mb-4 md:mb-6 text-justify line-clamp-3 sm:line-clamp-none">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-black/10 text-black rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm whitespace-nowrap"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 md:mt-12 p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg sm:rounded-xl border border-blue-200">
            <p className="text-gray-700 text-center text-xs sm:text-sm md:text-base">
              <span className="font-semibold text-gray-900">Continuously evolving</span> by learning new technologies and best practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
