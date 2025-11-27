import { ArrowRight, Code, Rocket, Users, Star, CheckCircle2, Zap, Award, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '28+', label: 'Team Members', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Shield className="w-6 h-6" /> }
  ];

  const featuredServices = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Build stunning, responsive websites'
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Mobile Apps',
      description: 'Native & cross-platform solutions'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Custom Software',
      description: 'Tailored enterprise solutions'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted by Leading Companies</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Build Better
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                Digital Products
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              We transform ideas into powerful digital solutions. From web to mobile, 
              we bring your vision to life with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all font-semibold text-lg"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                  <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-xl mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all text-center group cursor-pointer"
              >
                <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-blue-600 font-semibold text-lg hover:space-x-3 transition-all"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose GlobeSoftwares?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Highly skilled professionals with years of industry experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Delivery</h3>
                    <p className="text-gray-600">On-time project completion with rigorous quality assurance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Dedicated support team available whenever you need assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                    <p className="text-gray-600">Best value for money with transparent, flexible pricing</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 mt-8 text-blue-600 font-semibold text-lg hover:space-x-3 transition-all"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "GlobeSoftwares transformed our business with their innovative solutions. The team's expertise and dedication exceeded all expectations."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <div className="font-bold text-gray-900">John Davis</div>
                  <div className="text-sm text-gray-600">CEO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Outstanding service and exceptional quality. They delivered our project on time and within budget. Highly recommend!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  SL
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Lee</div>
                  <div className="text-sm text-gray-600">Founder, StartupHub</div>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-pink-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Professional, efficient, and incredibly talented. Working with GlobeSoftwares was a game-changer for our company."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <div className="font-bold text-gray-900">Michael Johnson</div>
                  <div className="text-sm text-gray-600">CTO, InnovateCo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with innovative digital solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
