import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development in 2025',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to serverless architectures.',
      author: 'John Doe',
      date: 'Nov 20, 2025',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop',
      color: 'bg-blue-500'
    },
    {
      title: 'Building Scalable Mobile Apps with React Native',
      excerpt: 'Learn best practices and strategies for developing high-performance, scalable mobile applications using React Native.',
      author: 'Jane Smith',
      date: 'Nov 18, 2025',
      readTime: '7 min read',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop',
      color: 'bg-purple-500'
    },
    {
      title: 'Cloud Migration: A Complete Guide for Businesses',
      excerpt: 'Everything you need to know about migrating your infrastructure to the cloud, including best practices and common pitfalls.',
      author: 'Mike Johnson',
      date: 'Nov 15, 2025',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop',
      color: 'bg-indigo-500'
    },
    {
      title: 'AI and Machine Learning in Modern Applications',
      excerpt: 'Discover how artificial intelligence and machine learning are transforming software development and user experiences.',
      author: 'Sarah Williams',
      date: 'Nov 12, 2025',
      readTime: '8 min read',
      category: 'AI & ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop',
      color: 'bg-pink-500'
    },
    {
      title: 'Cybersecurity Best Practices for Startups',
      excerpt: 'Essential security measures every startup should implement to protect their digital assets and customer data.',
      author: 'David Brown',
      date: 'Nov 10, 2025',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop',
      color: 'bg-red-500'
    },
    {
      title: 'The Rise of Low-Code Development Platforms',
      excerpt: 'How low-code platforms are democratizing software development and accelerating digital transformation.',
      author: 'Emily Davis',
      date: 'Nov 8, 2025',
      readTime: '5 min read',
      category: 'Technology Trends',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
      color: 'bg-green-500'
    },
    {
      title: 'UI/UX Design Trends to Watch in 2025',
      excerpt: 'Stay ahead with the latest design trends that are shaping user interfaces and experiences in modern applications.',
      author: 'Alex Turner',
      date: 'Nov 5, 2025',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop',
      color: 'bg-orange-500'
    },
    {
      title: 'Database Optimization Techniques for Performance',
      excerpt: 'Expert tips and techniques to optimize your database performance and handle large-scale data efficiently.',
      author: 'Chris Anderson',
      date: 'Nov 3, 2025',
      readTime: '9 min read',
      category: 'Database',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop',
      color: 'bg-teal-500'
    },
    {
      title: 'Agile vs Waterfall: Choosing the Right Methodology',
      excerpt: 'A comprehensive comparison of Agile and Waterfall methodologies to help you choose the best approach for your project.',
      author: 'Lisa Martinez',
      date: 'Nov 1, 2025',
      readTime: '6 min read',
      category: 'Project Management',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and industry trends from our team of experts. Stay updated with the latest in technology and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 text-white flex flex-col justify-center">
                <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  Featured Post
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-blue-100 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 w-fit">
                  <span>Read Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="h-full min-h-[400px]">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 right-4 ${post.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-blue-600 font-semibold flex items-center space-x-1 group-hover:space-x-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest articles and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
