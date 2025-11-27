import { Code, Globe, Smartphone, Cloud, Database, Palette, Cpu, Shield, Zap, Users, BarChart, Wrench } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.',
      features: ['Enterprise Applications', 'SaaS Solutions', 'API Development', 'System Integration'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Responsive, fast, and SEO-optimized websites that deliver exceptional user experiences across all devices.',
      features: ['E-commerce Platforms', 'Corporate Websites', 'Web Applications', 'CMS Development'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to enhance performance and reduce costs.',
      features: ['AWS Services', 'Azure Cloud', 'Cloud Migration', 'DevOps Solutions'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Database Management',
      description: 'Robust database design, optimization, and management to ensure data integrity and performance.',
      features: ['Database Design', 'SQL Optimization', 'Data Migration', 'Backup Solutions'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed to delight users and maximize conversion rates.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'ChatBots'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and maintain compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Performance Optimization',
      description: 'Enhance application speed, efficiency, and user experience through expert optimization.',
      features: ['Code Optimization', 'Load Testing', 'CDN Setup', 'Caching Strategies'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Consulting & Training',
      description: 'Expert consultation and training programs to empower your team with modern technologies.',
      features: ['Technical Consulting', 'Team Training', 'Code Reviews', 'Architecture Planning'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with advanced analytics and visualization tools.',
      features: ['Data Analytics', 'Dashboard Creation', 'Reporting Tools', 'Data Visualization'],
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and dedicated support to keep your applications running smoothly.',
      features: ['24/7 Support', 'Bug Fixes', 'Updates & Upgrades', 'Monitoring'],
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-purple-50 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full mb-6 font-semibold">
              <Zap className="w-4 h-4 inline mr-2" />
              Expert Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to transform your business and achieve your goals.
              We combine innovation, expertise, and dedication to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-linear-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for delivering exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-all">
                  <span className="text-3xl font-bold text-blue-600 group-hover:text-white transition-all">1</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and goals</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-600 transition-all">
                  <span className="text-3xl font-bold text-purple-600 group-hover:text-white transition-all">2</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-purple-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Creating intuitive user experiences</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-pink-600 transition-all">
                  <span className="text-3xl font-bold text-pink-600 group-hover:text-white transition-all">3</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-pink-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Building with cutting-edge tech</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-600 transition-all">
                  <span className="text-3xl font-bold text-green-600 group-hover:text-white transition-all">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">Deploying and supporting your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help transform your business and achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
