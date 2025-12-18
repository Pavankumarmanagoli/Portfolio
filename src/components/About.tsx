import { Code, Brain, Lightbulb, BookOpen, Sparkles,  Rocket, Users } from 'lucide-react';
import profilePic from '../components/about.jpg'; // your image path

export default function AboutPage() {
  const highlights = [
    {
      icon: Brain,
      title: 'Analytical Thinking',
      description: 'Analyse details, identify the root cause, and reach meaningful solutions'
    },
    {
      icon: Sparkles,
      title: 'Adaptability',
      description: 'Adjust easily to any situation and environment'
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always exploring new technologies and best practices'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/3">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          {/* Top section: first text + profile pic + "What I Bring" */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
            {/* Left column: first text */}
            <div className="md:col-span-2 text-justify">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                I’m someone who enjoys turning ideas into working systems whether it’s building AI that understands context, designing clean data pipelines, or creating tools that make information easier to use. I’m drawn to technology that feels intuitive and meaningful, which is why my work often sits at the intersection of AI, data, and real-world problem-solving.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Over the years, I’ve worked across different parts of the analytics and AI spectrum, developing chatbots, contributing to multimodal healthcare systems, analyzing large-scale IT infrastructure, and building dashboards that help teams make confident, data-driven decisions. What motivates me most is the balance between creativity and logic, the point where imagination meets engineering and ideas become something people can actually use.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                 Outside of work, I'm passionate about exploring new places, listening to music, and playing cricket. These experiences keep me curious, grounded, and inspired, and they often influence the way I think about design, user experience, and problem-solving.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                I value clarity, reliability, and thoughtful design in everything I build. Whether it's writing a model, shaping a workflow, or collaborating with teams, my goal remains simple: create solutions that work well, feel seamless, and make a real impact.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "I love doing what I do! The deeper I go, the more I fall in love with the process."
              </p>
            </div>

            {/* Right column: image + "What I Bring" stacked */}
            <div className="flex flex-col items-center md:items-end pb-0 mb-0">
              {/* Profile picture */}
              <img
                src={profilePic}
                alt="Profile"
                className="w-full object-cover"
              />

              {/* "What I Bring" block */}
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 pt-10 pb-10 mt-2 mb-0 rounded-3xl w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What I Bring</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 pb-1">
                    <div className="bg-blue-600 text-white p-1 rounded-lg mt-1">
                      <Code size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base mt-1">3 Years Experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pb-1">
                    <div className="bg-blue-600 text-white p-1 rounded-lg mt-1">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base">Real World Projects </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pb-1">
                    <div className="bg-blue-600 text-white p-1 rounded-lg  ">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base">Growth-Oriented Mindset</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="grid md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
