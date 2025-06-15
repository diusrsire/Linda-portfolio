
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
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 w-full">
      <div className="mx-4 md:mx-6 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg">
        <div className="container px-3 md:px-6 py-2">
          <div className="flex flex-wrap items-center justify-between h-16 gap-x-3 md:gap-x-8 relative">
            {/* Logo */}
            <div className="flex items-center space-x-3 md:space-x-4 min-w-0">
              <div className="min-w-[2.5rem] min-h-[2.5rem] w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LO</span>
              </div>
              <span className="truncate text-xl font-bold text-gray-900 max-w-xs sm:max-w-none">
                Linda Osunga
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-5 xl:space-x-8 min-w-0">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 whitespace-nowrap hover:text-teal-600 font-medium transition-colors duration-200 px-1"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex flex-shrink-0 ml-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-4 flex-nowrap">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 flex-shrink-0 z-10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
            <div className="md:hidden py-4 border-t border-gray-200 z-40 bg-white rounded-b-2xl mt-2 shadow-lg animate-in fade-in slide-in-from-top-4">
              <div className="flex flex-col space-y-2">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium py-2 px-2 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-4 w-full rounded-lg">
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
