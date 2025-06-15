
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Clock, MessageCircle, Settings, Briefcase, Phone } from "lucide-react";

const Index = () => {
  const [imageError, setImageError] = useState(false);

  const skills = [
    {
      category: "Telemedicine Tools",
      items: ["Zoom for Healthcare", "Doxy.me", "Telehealth Platforms"]
    },
    {
      category: "Medical Transcription",
      items: ["Dragon NaturallySpeaking", "Express Scribe", "Medical Terminology"]
    },
    {
      category: "EMR & HIPAA Compliance",
      items: ["Practice Fusion", "Epic Systems", "HIPAA Protocols"]
    },
    {
      category: "Pharmacy Support",
      items: ["Rx Management", "Prior Authorizations", "Insurance Verification"]
    },
    {
      category: "Design & Communication",
      items: ["Canva", "Medical Documentation", "Patient Communication"]
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
    },
    {
      icon: Briefcase,
      title: "Flexible Engagement",
      description: "Available for long-term partnerships or contract-based projects"
    },
    {
      icon: Phone,
      title: "Virtual Collaboration",
      description: "Seamless remote support with proven track record in telehealth environments"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A0F3D] via-[#1a237e] to-[#0A0F3D] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Linda Osunga
                  </h1>
                  <h2 className="text-xl md:text-2xl text-blue-200 font-medium">
                    Virtual Healthcare Assistant & Telemedicine Support Specialist
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    Secure, efficient, remote support for modern healthcare providers.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#0A0F3D] hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                  >
                    Hire Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-[#0A0F3D] font-semibold px-8 py-3 text-lg"
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {!imageError ? (
                        <img
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          alt="Linda Osunga - Professional Healthcare Assistant"
                          className="w-full h-full object-cover rounded-full"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="text-6xl text-gray-400">LO</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A0F3D]">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                I'm a tech-savvy, detail-oriented virtual assistant specializing in healthcare support services — from telemedicine coordination to medical transcription and HIPAA-compliant data handling. With a deep understanding of the healthcare industry's unique demands, I provide seamless virtual support that allows medical professionals to focus on what matters most: patient care.
              </p>
              
              <p>
                My approach combines technical expertise with the discretion and professionalism that healthcare environments require. Whether coordinating telehealth appointments, managing medical documentation, or ensuring compliance with privacy regulations, I bring a systematic and reliable methodology to every task.
              </p>
              
              <p>
                I believe in building long-term partnerships with healthcare providers, offering not just task completion but strategic support that scales with your practice. My goal is to become an extension of your team, providing the kind of dependable, behind-the-scenes excellence that allows you to deliver exceptional patient experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Software Expertise */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A0F3D]">
              Skills & Software Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#0A0F3D]">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="mr-2 mb-2 bg-blue-50 text-[#0A0F3D] hover:bg-blue-100"
                        >
                          {skill}
                        </Badge>
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A0F3D]">
              Why Hire Me?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-[#0A0F3D] rounded-full flex items-center justify-center mb-4 mx-auto">
                        <prop.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0F3D] mb-3">
                        {prop.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-16 bg-[#0A0F3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how I can support your practice with reliable, professional virtual assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#0A0F3D] hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0A0F3D] font-semibold px-8 py-3 text-lg"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
