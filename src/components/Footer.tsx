import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const Footer = () => {
  const handleCTA = () => {
    window.open('https://wait-page.eu/a/05JMfgn3SDy1K', '_blank');
    console.log('Footer CTA clicked!');
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Final CTA */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Nie czekaj dłużej na miłość!
          </h3>
          <p className="text-purple-200 mb-8 text-lg">
            Każdego dnia tysiące osób znajduje swoją drugą połówkę. Dołącz do nich już teraz!
          </p>
          
          <button 
            onClick={handleCTA}
            className="group px-10 py-4 bg-white text-purple-900 font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              Zacznij poszukiwania TERAZ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-purple-700 pt-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-2">2.5M+</div>
            <div className="text-purple-300 text-sm">Aktywnych użytkowników</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">450K+</div>
            <div className="text-purple-300 text-sm">Udanych związków</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">97%</div>
            <div className="text-purple-300 text-sm">Zadowolonych użytkowników</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">4.8⭐</div>
            <div className="text-purple-300 text-sm">Średnia ocena</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-700 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="font-semibold">Znajdź Miłość</span>
            <Heart className="w-5 h-5 text-pink-400" />
          </div>
          
          <p className="text-purple-300 text-sm">
            © 2024 Najlepsza aplikacja randkowa w Polsce. Wszystkie prawa zastrzeżone.
          </p>
          
          <div className="mt-4 flex justify-center gap-6 text-sm text-purple-300">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>

          <div className="mt-6 p-4 bg-purple-800/50 rounded-lg">
            <p className="text-purple-200 text-sm">
              🔥 <strong>Pamiętaj:</strong> Promocja "7 dni Premium za darmo" kończy się dzisiaj o północy!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
