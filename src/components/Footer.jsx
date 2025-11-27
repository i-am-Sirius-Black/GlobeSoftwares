import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Facebook, Twitter, Linkedin, Instagram, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
      
      <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 w-fit">
              <Code2 className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">GlobeSoftwares</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming ideas into exceptional digital solutions. We specialize in custom software development, 
              web applications, and mobile apps that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-xl mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates on technology trends and our services.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-white"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} GlobeSoftwares. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
