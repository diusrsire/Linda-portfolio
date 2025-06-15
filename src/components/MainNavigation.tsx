
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LO</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Linda Osunga</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 px-2 py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col space-y-5 px-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium py-2 px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-6 mx-2">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
