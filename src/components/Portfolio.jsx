import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured online shopping platform with payment integration, inventory management, and analytics.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'bg-blue-500'
    },
    {
      title: 'Healthcare Management System',
      category: 'Custom Software',
      description: 'Comprehensive hospital management software with patient records, appointment scheduling, and billing.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop',
      tags: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      color: 'bg-green-500'
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile App',
      description: 'Real-time food ordering and delivery application with GPS tracking and multiple payment options.',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'Maps API'],
      color: 'bg-orange-500'
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing platform with advanced search filters, virtual tours, and agent management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
      color: 'bg-purple-500'
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Interactive dashboard for tracking investments, market trends, and portfolio performance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop',
      tags: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
      color: 'bg-indigo-500'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      description: 'Complete fitness solution with workout plans, nutrition tracking, and progress analytics.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop',
      tags: ['Flutter', 'Dart', 'Firebase', 'ML Kit'],
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
  );
};

export default Portfolio;
