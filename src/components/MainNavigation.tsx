import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Portfolio",
    href: "#portfolio"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg">
        <div className="container mx-auto px-3 md:px-6 py-2">
          <div className="flex items-center justify-between h-16 gap-2 md:gap-8">
            {/* Logo */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LO</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Linda Osunga</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">
                  {item.name}
                </a>)}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex ml-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-teal-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>)}
                <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-4">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>}
        </div>
      </div>
    </nav>;
};
export default MainNavigation;
