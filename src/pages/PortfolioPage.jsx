import { useState } from 'react';
import { ExternalLink, Github, Filter, Award } from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile App', 'Custom Software', 'E-Commerce', 'Data Visualization'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      description: 'A full-featured online shopping platform with payment integration, inventory management, real-time analytics, and multi-vendor support.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      color: 'bg-blue-500',
      client: 'RetailCorp Inc.',
      duration: '6 months'
    },
    {
      title: 'Healthcare Management System',
      category: 'Custom Software',
      description: 'Comprehensive hospital management software with patient records, appointment scheduling, billing, and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop',
      tags: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
      color: 'bg-green-500',
      client: 'MediCare Solutions',
      duration: '8 months'
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile App',
      description: 'Real-time food ordering and delivery application with GPS tracking, multiple payment options, and restaurant management.',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'Maps API', 'Push Notifications'],
      color: 'bg-orange-500',
      client: 'FoodHub',
      duration: '5 months'
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing platform with advanced search filters, virtual tours, agent management, and CRM integration.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'Vercel'],
      color: 'bg-purple-500',
      client: 'PropertyPro',
      duration: '4 months'
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Interactive dashboard for tracking investments, market trends, portfolio performance with real-time data updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop',
      tags: ['Vue.js', 'D3.js', 'Express', 'MySQL', 'WebSocket'],
      color: 'bg-indigo-500',
      client: 'FinTech Solutions',
      duration: '5 months'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      description: 'Complete fitness solution with workout plans, nutrition tracking, progress analytics, and social features.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop',
      tags: ['Flutter', 'Dart', 'Firebase', 'ML Kit', 'HealthKit'],
      color: 'bg-pink-500',
      client: 'FitLife',
      duration: '6 months'
    },
    {
      title: 'Educational Platform',
      category: 'Web Development',
      description: 'Online learning management system with video courses, quizzes, progress tracking, and certification.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
      color: 'bg-cyan-500',
      client: 'EduTech',
      duration: '7 months'
    },
    {
      title: 'Inventory Management System',
      category: 'Custom Software',
      description: 'Enterprise-level inventory tracking with warehouse management, supplier integration, and automated ordering.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop',
      tags: ['Angular', 'Java Spring', 'PostgreSQL', 'Kubernetes'],
      color: 'bg-teal-500',
      client: 'LogiCorp',
      duration: '9 months'
    },
    {
      title: 'Social Media Platform',
      category: 'Web Development',
      description: 'Professional networking platform with messaging, groups, events, and content sharing features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop',
      tags: ['React', 'GraphQL', 'PostgreSQL', 'Redis', 'Elasticsearch'],
      color: 'bg-blue-600',
      client: 'ConnectHub',
      duration: '10 months'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-purple-50 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6 font-semibold shadow-lg">
              <Award className="w-4 h-4 inline mr-2" />
              150+ Successful Projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our successful projects and see how we've helped businesses across various industries 
              achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <button className="flex-1 bg-white text-gray-900 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-semibold">View Demo</span>
                      </button>
                      <button className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className={`absolute top-4 right-4 ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Client: {project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
