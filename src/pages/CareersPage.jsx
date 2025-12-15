import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, TrendingUp, Award } from 'lucide-react';

const CareersPage = () => {
  const openings = [];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and remote work options'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career advancement paths'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Great Team',
      description: 'Collaborative environment with talented and supportive colleagues'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recognition',
      description: 'Regular recognition and rewards for outstanding performance'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of technology. 
              We're always looking for talented individuals who are passionate about innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and talent flourishes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              We are not hiring at the moment.<br />
              Please check back later or send us your resume for future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always interested in hearing from talented individuals. Send us your resume and let's talk!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
