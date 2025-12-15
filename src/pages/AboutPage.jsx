import { Target, TrendingUp, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'Empowering businesses to grow through technology and innovation.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Always Evolving',
      description: 'We move with the latest tech, adapting and innovating for our clients.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We believe in creative solutions and forward-thinking.'
    }
  ];



  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About GlobeSoftwares
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Founded in 2025, GlobeSoftwares is dedicated to helping businesses innovate and grow with the latest technology. We believe in moving fast, staying current, and delivering real value through creative solutions.
            </p>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are passionate about technology, innovation, and helping our clients succeed in a fast-changing world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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






    </div>
  );
};

export default AboutPage;
