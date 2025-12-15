import Contact from '../components/Contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-purple-50 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full mb-6 font-semibold shadow-lg">
              <Mail className="w-5 h-5" />
              <span>We're Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Let's Talk
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear from you. Contact us and let's make something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="inline-flex p-3 bg-blue-600 text-white rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">Lucknow, Uttar Pradesh, India</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="inline-flex p-3 bg-purple-600 text-white rounded-full mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 93056 48179</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl text-center">
              <div className="inline-flex p-3 bg-pink-600 text-white rounded-full mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">info@globesoftwares.com</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="inline-flex p-3 bg-indigo-600 text-white rounded-full mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.675635503578!2d80.9461593148836!3d26.84669398315809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2b0d6b8b1b1%3A0x6d8e8e8e8e8e8e8e!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1702732800000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GlobeSoftwares Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
