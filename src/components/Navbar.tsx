import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, onSectionChange }: { 
  activeSection: string; 
  onSectionChange: (section: string) => void; 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'profiles', label: 'Ekskluzywne Profile' },
    { id: 'cameras', label: 'Prywatne Pokazy LIVE' }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-lg shadow-2xl sticky top-0 z-[60] border-b border-rose-800/20">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center py-4 sm:py-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              🌹 
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xl transform scale-105'
                    : 'text-rose-200 hover:text-white hover:bg-rose-800/30 hover:shadow-lg'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-rose-800/30 text-rose-200 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 mb-2 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xl'
                    : 'text-rose-200 hover:text-white hover:bg-rose-800/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
