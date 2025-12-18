import powerBiLogo from './power_bi_logo.png';
import statsLogo from './statistics-business-logo.jpg';
import mlLogo from './ai-brain-logo-neural-network-vector-60853429.avif';
import snowflakeLogo from './snow.png';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      // skills: [
      //   { name: 'React', level: 95 },
      //   { name: 'TypeScript', level: 90 },
      //   { name: 'Tailwind CSS', level: 95 },
      //   { name: 'Next.js', level: 85 },
      //   { name: 'HTML/CSS', level: 98 }
      // ]
    },
    {
      title: 'SQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      // skills: [
      //   { name: 'Node.js', level: 90 },
      //   { name: 'PostgreSQL', level: 85 },
      //   { name: 'REST APIs', level: 92 },
      //   { name: 'GraphQL', level: 80 },
      //   { name: 'Supabase', level: 88 }
      // ]
    },
    {
      title: 'Power BI',
       logo: powerBiLogo
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
      title: 'Excel',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732220.png'
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
      title: 'Statistics',
      logo: statsLogo
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
      title: 'Machine Learning',
      logo: mlLogo
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
      title: 'NLP',
       logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
      title: 'RAG',
      logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712100.png'
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
      title: 'Snowflake',
      logo: snowflakeLogo
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
      title: 'Airflow',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg'
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
      title: 'Azure',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
      // skills: [
      //   { name: 'Git', level: 95 },
      //   { name: 'Docker', level: 80 },
      //   { name: 'Jira', level: 75 },
      //   { name: 'Confluence', level: 85 },
      //   { name: 'CI/CD', level: 82 }
      // ]
    },
    {
       title: 'Git',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg'
    }
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
                  className="w-12 h-12 mb-4 mx-auto"
                />
              
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.title}
                </h3>

                {/* <div className="space-y-5"> */}
                  {/* {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-base text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))} */}
                {/* </div> */}
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
