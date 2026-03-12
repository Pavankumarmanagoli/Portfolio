import powerBiLogo from './power_bi_logo.png';
import statsLogo from './statistics-business-logo.jpg';
import mlLogo from './ai-brain-logo-neural-network-vector-60853429.avif';
import snowflakeLogo from './snow.png';

import noSqlLogo from './NoSQL.png';
import dbtLogo from './DBT.png';
import etlLogo from './ETL3.png';
import pySparkLogo from './PySpark.png';
import aiAgentLogo from './AIagent.png';
import dockerLogo from './docker.jpg';
import gitlabLogo from './gitlab.svg';
import powerAutomateLogo from './PALogo.png';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      title: 'SQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      title: 'NoSQL',
      logo: noSqlLogo,
    },
    {
      title: 'Power BI',
      logo: powerBiLogo,
    },
    {
      title: 'Statistics',
      logo: statsLogo,
    },
    {
      title: 'DBT',
      logo: dbtLogo,
    },
    {
      title: 'ETL',
      logo: etlLogo,
    },
    {
      title: 'Snowflake',
      logo: snowflakeLogo,
    },
    {
      title: 'Airflow',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg',
    },
    {
      title: 'PySpark',
      logo: pySparkLogo,
    },
    {
      title: 'Azure',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    },
    {
      title: 'Machine Learning',
      logo: mlLogo,
    },
    {
      title: 'NLP',
      logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    },
    {
      title: 'RAG',
      logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712100.png',
    },
    {
      title: 'AI Agent',
      logo: aiAgentLogo,
      size: 80,
    },
    {
      title: 'Docker',
      logo: dockerLogo,
    },
    {
      title: 'GitLab',
      logo: gitlabLogo,
    },
    {
      title: 'Power Automate',
      logo: powerAutomateLogo,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <img
                  src={category.logo}
                  alt={`${category.title} logo`}
                  className="mb-4 mx-auto object-contain"
                  style={{
                    width: `${category.size || 48}px`,
                    height: `${category.size || 48}px`,
                  }}
                />

                <h3 className="text-3xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}