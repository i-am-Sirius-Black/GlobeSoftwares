import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'We are committed to delivering excellence and innovation in every project we undertake.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Your success is our success. We prioritize understanding and exceeding your expectations.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'We maintain the highest standards of quality through rigorous testing and best practices.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth Oriented',
      description: 'We continuously evolve and adapt to the latest technologies and industry trends.'
    }
  ];

  const team = [
    {
      name: 'Expert Developers',
      count: '15+',
      description: 'Skilled professionals in various technologies'
    },
    {
      name: 'UI/UX Designers',
      count: '8+',
      description: 'Creative minds crafting beautiful experiences'
    },
    {
      name: 'Project Managers',
      count: '5+',
      description: 'Ensuring timely and efficient delivery'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About GlobeSoftwares
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Founded with a vision to transform businesses through technology, GlobeSoftwares has been at the forefront of digital innovation for over 5 years.
              </p>
              <p>
                We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences. Our expertise spans across custom software development, web applications, mobile apps, and comprehensive digital solutions.
              </p>
              <p>
                What sets us apart is our commitment to understanding your unique challenges and delivering solutions that not only meet but exceed your expectations. We believe in building long-term partnerships with our clients, guiding them through every step of their digital transformation journey.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop"
              alt="Our team"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-2xl mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Team
          </h3>
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
  );
};

export default About;
