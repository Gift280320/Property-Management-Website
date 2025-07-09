import React from 'react';
import { Users, Award, Shield, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct our business with the highest ethical standards and transparency.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide to our clients.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients\' success is our success. We put their needs first always.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to serve our clients better.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Mwaura Property Managers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in real estate excellence, serving the Kenyan market with integrity and professionalism.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional real estate services that exceed client expectations through 
              professional expertise, innovative solutions, and unwavering commitment to integrity. 
              We strive to make property transactions seamless, transparent, and profitable for all parties involved.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading property management company in Kenya, recognized for our exceptional 
              service delivery, innovative approaches, and positive impact on the real estate industry. 
              We envision a future where every property transaction is handled with utmost professionalism and care.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Founded with a vision to revolutionize the real estate industry in Kenya, Mwaura Property Managers 
              has grown from a small startup to a trusted name in property management and real estate services. 
              Our journey began with a simple belief: that every client deserves exceptional service and honest advice.
            </p>
            <p className="mb-4">
              Over the years, we have built a reputation for excellence through our commitment to understanding 
              our clients' unique needs and delivering tailored solutions. Whether you're a first-time homebuyer, 
              seasoned investor, or property owner looking for management services, we have the expertise and 
              dedication to help you achieve your goals.
            </p>
            <p>
              Today, we continue to expand our services while maintaining the personal touch and attention to 
              detail that has made us a preferred choice for property services in Kenya. Our team of experienced 
              professionals is committed to providing you with the highest level of service and support throughout 
              your property journey.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;