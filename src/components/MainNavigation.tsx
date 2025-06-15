
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
      <div className="mx-2 md:mx-8 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-lg">
        <div className="container px-0 md:px-2 py-1.5">
          <div className="flex items-center justify-between h-[64px] md:h-[68px] gap-x-0 md:gap-x-4 relative">
            {/* Logo and Name */}
            <div className="flex items-center space-x-3 min-w-0">
              <div className="min-w-[2.5rem] min-h-[2.5rem] w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center shadow">
                <span className="text-white font-extrabold text-lg">LO</span>
              </div>
              <span className="truncate text-[2rem] font-extrabold text-gray-900 max-w-xs sm:max-w-none leading-tight">
                Linda Osunga
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="flex gap-8 xl:gap-11">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 font-semibold whitespace-nowrap hover:text-teal-600 transition-colors duration-200 px-0"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex flex-shrink-0 ml-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded-lg text-base font-bold shadow [&_svg]:ml-2" style={{minWidth: '160px', height: '48px'}}>
                Get Started
                <ArrowRight className="h-5 w-5" />
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
            <div className="md:hidden py-4 border-t border-gray-200 z-40 bg-white rounded-b-3xl mt-2 shadow-lg animate-in fade-in slide-in-from-top-4">
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
