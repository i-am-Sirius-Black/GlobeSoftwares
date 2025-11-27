import { Target, Users, Award, TrendingUp, Heart, Lightbulb, Shield, Rocket } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'We are committed to delivering excellence and innovation in every project we undertake, helping businesses achieve their digital transformation goals.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Your success is our success. We prioritize understanding your needs and exceeding your expectations through personalized solutions.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'We maintain the highest standards of quality through rigorous testing, code reviews, and best practices implementation.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth Oriented',
      description: 'We continuously evolve and adapt to the latest technologies and industry trends to provide cutting-edge solutions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passionate Team',
      description: 'Our team is passionate about technology and dedicated to creating solutions that make a real difference.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We embrace creativity and innovation, constantly exploring new ways to solve complex business challenges.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Integrity',
      description: 'We build long-term relationships based on trust, transparency, and ethical business practices.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Agile Delivery',
      description: 'We use agile methodologies to ensure fast, flexible, and efficient project delivery that adapts to your needs.'
    }
  ];

  const team = [
    { name: 'Expert Developers', count: '15+', description: 'Skilled professionals in various technologies' },
    { name: 'UI/UX Designers', count: '8+', description: 'Creative minds crafting beautiful experiences' },
    { name: 'Project Managers', count: '5+', description: 'Ensuring timely and efficient delivery' }
  ];

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2020', event: '50+ Projects Delivered', description: 'Crossed our first major milestone with satisfied clients' },
    { year: '2021', event: 'Expanded Team', description: 'Grew to 20+ talented professionals across multiple domains' },
    { year: '2022', event: 'Industry Recognition', description: 'Received awards for excellence in software development' },
    { year: '2023', event: 'Global Reach', description: 'Extended our services to clients across 15+ countries' },
    { year: '2024', event: '100+ Projects', description: 'Achieved 100+ successful project deliveries with 100% satisfaction' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About GlobeSoftwares
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are more than just a software company – we are your partners in digital transformation, 
              committed to turning your vision into reality through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2019 with a vision to transform businesses through technology, GlobeSoftwares 
                  has been at the forefront of digital innovation for over 5 years.
                </p>
                <p>
                  We started as a small team of passionate developers and designers who believed in the power 
                  of technology to solve real-world problems. Today, we've grown into a full-service digital 
                  agency with expertise spanning across custom software development, web applications, mobile 
                  apps, and comprehensive digital solutions.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to understanding your unique challenges and 
                  delivering solutions that not only meet but exceed your expectations. We believe in building 
                  long-term partnerships with our clients, guiding them through every step of their digital 
                  transformation journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-2xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Talented professionals dedicated to your success
            </p>
          </div>
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{member.count}</div>
                  <div className="text-xl font-semibold mb-2">{member.name}</div>
                  <div className="text-blue-100">{member.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and frameworks we use to build exceptional solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Next.js', 'Vue.js', 'Flutter', 'GraphQL'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all text-center group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-blue-600 font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
