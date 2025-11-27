import { Code, Globe, Smartphone, Cloud, Database, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Responsive, fast, and SEO-optimized websites that deliver exceptional user experiences across all devices.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to enhance performance and reduce costs.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Database Management',
      description: 'Robust database design, optimization, and management to ensure data integrity and performance.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed to delight users and maximize conversion rates.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your business and achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className={`inline-flex p-4 rounded-xl bg-linear-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
