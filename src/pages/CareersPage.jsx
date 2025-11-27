import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, TrendingUp, Award } from 'lucide-react';

const CareersPage = () => {
  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Silicon Valley, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team and build scalable web applications.',
      requirements: ['5+ years experience', 'React & Node.js', 'Database design', 'Agile methodology'],
      color: 'bg-blue-500'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Silicon Valley, CA',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Join our design team to create beautiful and intuitive user experiences for web and mobile applications.',
      requirements: ['3+ years experience', 'Figma/Adobe XD', 'User research', 'Portfolio required'],
      color: 'bg-purple-500'
    },
    {
      title: 'Mobile App Developer (React Native)',
      department: 'Engineering',
      location: 'Remote / Silicon Valley, CA',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Build and maintain cross-platform mobile applications using React Native for our diverse client base.',
      requirements: ['3+ years React Native', 'iOS/Android', 'Redux/MobX', 'API integration'],
      color: 'bg-pink-500'
    },
    {
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote / Silicon Valley, CA',
      type: 'Full-time',
      salary: '$110k - $150k',
      description: 'Help us build and maintain our cloud infrastructure, CI/CD pipelines, and deployment automation.',
      requirements: ['4+ years DevOps', 'AWS/Azure', 'Docker/Kubernetes', 'Infrastructure as Code'],
      color: 'bg-indigo-500'
    },
    {
      title: 'Project Manager',
      department: 'Management',
      location: 'Hybrid / Silicon Valley, CA',
      type: 'Full-time',
      salary: '$95k - $125k',
      description: 'Lead and coordinate software development projects from inception to delivery, ensuring quality and timely completion.',
      requirements: ['3+ years PM experience', 'Agile/Scrum', 'Excellent communication', 'PMP certification preferred'],
      color: 'bg-green-500'
    },
    {
      title: 'QA Engineer',
      department: 'Quality Assurance',
      location: 'Remote / Silicon Valley, CA',
      type: 'Full-time',
      salary: '$80k - $110k',
      description: 'Ensure the quality of our software products through comprehensive testing and automation strategies.',
      requirements: ['2+ years QA', 'Automation testing', 'Selenium/Cypress', 'Bug tracking tools'],
      color: 'bg-orange-500'
    }
  ];

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
              Find your next opportunity with us
            </p>
          </div>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <span className={`${job.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="w-full lg:w-auto bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <Briefcase className="w-5 h-5" />
                      <span>Apply Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
