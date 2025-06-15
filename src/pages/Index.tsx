
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Clock, MessageCircle, Settings, Briefcase, Phone, CheckCircle, Star, Users, Calendar, Mail, MapPin, Heart } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";

const Index = () => {
  const [imageError, setImageError] = useState(false);

  const skills = [
    {
      category: "Telemedicine & Virtual Assistance",
      items: ["Zoom for Healthcare", "Doxy.me", "Remote patient coordination", "Appointment scheduling"],
      icon: Phone
    },
    {
      category: "Medical Transcription",
      items: ["Express Scribe", "Dragon NaturallySpeaking", "Audio dictation transcription", "Medical note formatting"],
      icon: MessageCircle
    },
    {
      category: "Medical Records & HIPAA",
      items: ["Practice Fusion", "Epic Systems", "Patient data entry", "HIPAA Compliance"],
      icon: Shield
    },
    {
      category: "Pharmacy Tech Support",
      items: ["PioneerRx", "QS/1", "McKesson Connect", "Inventory tracking"],
      icon: Settings
    }
  ];

  const valueProps = [
    {
      icon: Shield,
      title: "HIPAA Compliant & Secure",
      description: "Unwavering dedication to confidentiality and accuracy in compliance with HIPAA standards"
    },
    {
      icon: Clock,
      title: "Detail-Oriented & Reliable",
      description: "Meticulous attention to detail with consistent, dependable healthcare support services"
    },
    {
      icon: MessageCircle,
      title: "Expert Communication",
      description: "Clear, professional communication with healthcare teams and seamless patient coordination"
    },
    {
      icon: Settings,
      title: "Advanced Tech Proficiency",
      description: "Highly skilled in leading healthcare software, EMR/EHR systems, and digital productivity tools"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We'll discuss your specific healthcare practice needs and workflow requirements"
    },
    {
      number: "02",
      title: "Custom Implementation",
      description: "Tailored setup of systems and processes to seamlessly integrate with your practice"
    },
    {
      number: "03",
      title: "Ongoing Excellence",
      description: "Reliable, continuous support to enhance your healthcare operations and patient care"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Family Practice Physician",
      content: "Linda's expertise in telemedicine support has transformed our practice operations. Her attention to detail and HIPAA compliance knowledge is exceptional.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Internal Medicine Specialist",
      content: "Professional, reliable, and incredibly skilled. Linda's medical transcription accuracy and EMR management have been invaluable to our clinic.",
      rating: 5
    }
  ];

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolio = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleConsultation = () => {
    window.open('mailto:jeje5482@gmail.com?subject=Healthcare Virtual Assistant Consultation Request&body=Hello Linda,%0A%0AI would like to schedule a consultation to discuss my healthcare practice needs.%0A%0AThank you!', '_blank');
  };

  const handleSendMessage = () => {
    window.open('mailto:jeje5482@gmail.com?subject=Healthcare Virtual Assistant Inquiry&body=Hello Linda,%0A%0AI am interested in your healthcare virtual assistant services.%0A%0APlease contact me to discuss further.%0A%0AThank you!', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />
      
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative container mx-auto px-6 py-8 md:py-10 lg:py-14">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-center">
              <div className="space-y-6 md:pl-24 lg:pl-32 xl:pl-40">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1.5 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Available for Healthcare Projects
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Expert healthcare virtual{" "}
                    <span className="text-teal-600">assistance you can trust</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                    I'm Linda Osunga, a detail-oriented healthcare professional specializing in telemedicine support, medical transcription, and HIPAA-compliant virtual assistance services.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg" 
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 text-base rounded-xl"
                    onClick={handleGetStarted}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 text-base rounded-xl"
                    onClick={handleViewPortfolio}
                  >
                    View My Services
                  </Button>
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center">
                    <div className="flex -space-x-1.5">
                      <div className="w-8 h-8 bg-teal-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">L</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">O</div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">+</div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Trusted by healthcare professionals nationwide</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start md:pl-12">
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-teal-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                      {!imageError ? (
                        <img
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          alt="Linda Osunga - Professional Healthcare Virtual Assistant"
                          className="w-full h-full object-cover rounded-3xl"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="text-5xl lg:text-6xl text-gray-400 font-bold">LO</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute -right-2 sm:-right-4 top-6 sm:top-8 bg-white rounded-2xl shadow-lg p-3 max-w-40 sm:max-w-48">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">HIPAA Certified</p>
                        <p className="text-xs text-gray-500">100% Compliant</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-2 sm:-left-4 bottom-6 sm:bottom-8 bg-white rounded-2xl shadow-lg p-3 max-w-40 sm:max-w-48">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">Professional</p>
                        <p className="text-xs text-gray-500">Expert Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How we work together
            </h2>
            <p className="text-xl text-gray-600">
              A simple, professional process to deliver exceptional healthcare virtual assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Software Expertise */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                My healthcare expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive healthcare technology skills to support your practice with advanced tools and proven expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <skillGroup.icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <p key={skillIndex} className="text-sm text-gray-600">
                          {skill}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why healthcare professionals choose me
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional healthcare virtual assistance with proven expertise, reliability, and dedication to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {valueProps.map((prop, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg p-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <prop.icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {prop.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {prop.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              What healthcare professionals say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-teal-100 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Free Consultation
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Schedule a complimentary consultation to discuss how my healthcare virtual assistance services can support and enhance your practice operations.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      jeje5482@gmail.com
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 text-lg rounded-xl w-full"
                      onClick={handleScheduleConsultation}
                    >
                      Schedule Consultation
                      <Calendar className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="bg-teal-50 p-12 flex items-center justify-center">
                  <div className="w-64 h-64 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-teal-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Linda Osunga</h3>
                    <p className="text-teal-300 text-sm font-medium">Healthcare Virtual Assistant Specialist</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Providing secure, efficient, and HIPAA-compliant virtual healthcare support services to modern medical practices and telemedicine providers nationwide.
                </p>
                <div className="flex items-center space-x-2 text-teal-300">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">jeje5482@gmail.com</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-white mb-6">My Services</h4>
                <ul className="space-y-3">
                  <li><a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><Phone className="w-3 h-3" /><span>Telemedicine Support</span></a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><MessageCircle className="w-3 h-3" /><span>Medical Transcription</span></a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><Shield className="w-3 h-3" /><span>HIPAA Compliance</span></a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><Settings className="w-3 h-3" /><span>EMR Management</span></a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><Calendar className="w-3 h-3" /><span>Appointment Scheduling</span></a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-white mb-6">Let's Connect</h4>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
                    onClick={handleSendMessage}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-teal-400 text-teal-300 hover:bg-teal-600 hover:text-white rounded-xl transition-all duration-300"
                    onClick={handleScheduleConsultation}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  &copy; 2024 Linda Osunga. All rights reserved. Professional Healthcare Virtual Assistant Services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
