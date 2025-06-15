
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Clock, MessageCircle, Settings, Briefcase, Phone, CheckCircle, Star, Users, Calendar, Mail, MapPin, Heart } from "lucide-react";

const Index = () => {
  const [imageError, setImageError] = useState(false);

  const skills = [
    {
      category: "Telemedicine Tools",
      items: ["Zoom for Healthcare", "Doxy.me", "Telehealth Platforms"],
      icon: Phone
    },
    {
      category: "Medical Transcription",
      items: ["Dragon NaturallySpeaking", "Express Scribe", "Medical Terminology"],
      icon: MessageCircle
    },
    {
      category: "EMR & HIPAA Compliance",
      items: ["Practice Fusion", "Epic Systems", "HIPAA Protocols"],
      icon: Shield
    },
    {
      category: "Pharmacy Support",
      items: ["Rx Management", "Prior Authorizations", "Insurance Verification"],
      icon: Settings
    }
  ];

  const valueProps = [
    {
      icon: Shield,
      title: "HIPAA Compliant & Secure",
      description: "Certified in healthcare privacy regulations with secure data handling protocols"
    },
    {
      icon: Clock,
      title: "Fast, Reliable, Organized",
      description: "Efficient workflows and systematic approach to all healthcare administrative tasks"
    },
    {
      icon: MessageCircle,
      title: "Proactive Communication",
      description: "Clear, timely updates and seamless coordination with healthcare teams"
    },
    {
      icon: Settings,
      title: "Industry Tool Expertise",
      description: "Proficient in leading healthcare software and telemedicine platforms"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Discuss your healthcare practice needs and requirements"
    },
    {
      number: "02",
      title: "Custom Setup",
      description: "Configure systems and workflows tailored to your practice"
    },
    {
      number: "03",
      title: "Seamless Integration",
      description: "Begin providing reliable virtual healthcare support"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Family Practice Physician",
      content: "Linda's support has been invaluable. Her attention to detail and understanding of healthcare protocols is exceptional.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Telemedicine Specialist",
      content: "Professional, reliable, and always delivers on time. Linda has become an essential part of our telehealth operations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1.5 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Available for New Projects
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Your healthcare is our{" "}
                    <span className="text-teal-600">top priority</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                    I'm Linda Osunga, a tech-savvy virtual assistant specializing in healthcare support services — from telemedicine coordination to HIPAA-compliant data handling.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg" 
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 text-base rounded-xl"
                  >
                    Hire Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 text-base rounded-xl"
                  >
                    View Portfolio
                  </Button>
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center">
                    <div className="flex -space-x-1.5">
                      <div className="w-8 h-8 bg-teal-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">L</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Trusted by 50+ healthcare providers</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-teal-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                      {!imageError ? (
                        <img
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          alt="Linda Osunga - Professional Healthcare Assistant"
                          className="w-full h-full object-cover rounded-3xl"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="text-5xl lg:text-6xl text-gray-400 font-bold">LO</div>
                      )}
                    </div>
                  </div>
                  
                  {/* Floating cards */}
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
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">24/7 Available</p>
                        <p className="text-xs text-gray-500">Remote Support</p>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Step by step to get your solution
            </h2>
            <p className="text-xl text-gray-600">
              Simple process to get started with professional healthcare virtual assistance
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We care about your expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive healthcare technology expertise to support your practice with the latest tools and platforms
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

      {/* Why Hire Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why we are better
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional healthcare virtual assistance with proven expertise and reliability
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
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              What say our patients
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

      {/* Free Consultation CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Free Consultation
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Schedule a complimentary consultation to discuss how I can support your healthcare practice with professional virtual assistance.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 text-lg rounded-xl"
                  >
                    Schedule Now
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
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
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Brand Section */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Linda Osunga</h3>
                    <p className="text-teal-300 text-sm font-medium">Healthcare Virtual Assistant</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Providing secure, efficient, and HIPAA-compliant virtual healthcare support services to modern medical practices and telemedicine providers.
                </p>
                <div className="flex items-center space-x-2 text-teal-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Remote Healthcare Support Worldwide</span>
                </div>
              </div>
              
              {/* Services Column */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-white mb-6">Healthcare Services</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><Phone className="w-3 h-3" /><span>Telemedicine Support</span></a></li>
                  <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><MessageCircle className="w-3 h-3" /><span>Medical Transcription</span></a></li>
                  <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><Shield className="w-3 h-3" /><span>HIPAA Compliance</span></a></li>
                  <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><Settings className="w-3 h-3" /><span>Practice Management</span></a></li>
                  <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors text-sm flex items-center space-x-2"><Calendar className="w-3 h-3" /><span>Appointment Scheduling</span></a></li>
                </ul>
              </div>
              
              {/* Contact Column */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-white mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-teal-400 text-teal-300 hover:bg-teal-600 hover:text-white rounded-xl transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-400 mb-3">Follow for Healthcare Tips</p>
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-teal-600 hover:border-teal-600 hover:text-white rounded-lg transition-all duration-300">
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-teal-600 hover:border-teal-600 hover:text-white rounded-lg transition-all duration-300">
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="border-t border-gray-700 pt-12 pb-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-green-100/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white text-sm">HIPAA Certified</p>
                    <p className="text-gray-400 text-xs">100% Compliant</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white text-sm">50+ Providers</p>
                    <p className="text-gray-400 text-xs">Trusted Partner</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white text-sm">24/7 Support</p>
                    <p className="text-gray-400 text-xs">Always Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  &copy; 2024 Linda Osunga. All rights reserved. Professional Healthcare Virtual Assistant Services.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <a href="#" className="hover:text-teal-300 transition-colors">Privacy Policy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-teal-300 transition-colors">Terms of Service</a>
                  <span>•</span>
                  <a href="#" className="hover:text-teal-300 transition-colors">HIPAA Notice</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
