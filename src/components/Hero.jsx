import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-linear-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Welcome to GlobeSoftwares</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-xl text-gray-600">
              We craft exceptional software solutions, stunning websites, and innovative digital products 
              that drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span className="font-semibold">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all font-semibold"
              >
                View Our Work
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-600 rounded-2xl z-0 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-purple-600 rounded-2xl z-0 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
