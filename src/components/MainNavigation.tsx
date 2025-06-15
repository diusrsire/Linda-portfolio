
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
    <nav className="fixed top-2 left-0 right-0 z-50 w-full">
      <div className="mx-1 md:mx-5 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg">
        <div className="container px-0 md:px-2 py-1">
          {/* Main flexible row */}
          <div className="flex items-center h-[52px] md:h-[54px] w-full justify-between">
            {/* Logo (left) */}
            <div className="flex items-center min-w-0 flex-shrink-0 mr-1 md:mr-4">
              <div className="flex items-center justify-center min-w-[2rem] min-h-[2rem] w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-md shadow">
                <span className="text-white font-extrabold text-base md:text-lg select-none">LO</span>
              </div>
            </div>
            {/* Desktop Navigation (center) */}
            <div className="hidden md:flex flex-1 min-w-0 justify-center">
              <nav className="flex gap-5 xl:gap-9">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 text-sm md:text-base font-semibold whitespace-nowrap hover:text-teal-600 transition-colors duration-150 px-1"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            {/* Desktop CTA Button (right) */}
            <div className="hidden md:flex flex-shrink-0 ml-2" style={{ minWidth: '120px' }}>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-base font-semibold shadow [&_svg]:ml-2 w-full"
                style={{ minWidth: '120px', height: '38px' }}
              >
                <span className="hidden sm:inline">Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            {/* Mobile Menu Button (always right-aligned) */}
            <button
              className="md:hidden p-1 flex-shrink-0 z-10 ml-auto"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-3 border-t border-gray-200 z-40 bg-white rounded-b-2xl mt-2 shadow-lg animate-in fade-in slide-in-from-top-4">
              <div className="flex flex-col space-y-1.5">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium py-1.5 px-2 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-2 w-full px-4 py-2 text-base rounded-md">
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4" />
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

