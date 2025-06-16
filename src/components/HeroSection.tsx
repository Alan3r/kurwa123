import React, { useState, useEffect } from 'react';
import { Heart, Users, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { AFFILIATE_LINK } from "@/config";
const HeroSection = () => {
  const [activeUsers, setActiveUsers] = useState(15847);
  const [newMatches, setNewMatches] = useState(342);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) + 1);
      if (Math.random() > 0.7) {
        setNewMatches(prev => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMainCTA = () => {
    window.open(AFFILIATE_LINK, "_blank");
    console.log('Affiliate link clicked!');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-500 rounded-full opacity-30 animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pilność i social proof */}
          <div className="flex justify-center items-center gap-8 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Users className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-semibold text-gray-700">{activeUsers.toLocaleString()} aktywnych TERAZ</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-gray-700">{newMatches} nowych par dziś</span>
            </div>
          </div>

          {/* Główny headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Poznaj swoją
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              bratnią duszę
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-200">
            <span className="font-bold text-purple-600">Najlepsza aplikacja randkowa w Polsce!</span>
            <br />
            Ponad 2 miliony użytkowników już znalazło miłość
          </p>

          {/* Główny CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in delay-300">
            <button 
              onClick={handleMainCTA}
              className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full text-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                Zacznij TERAZ za DARMO
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Gwiazdki i oceny */}
          <div className="flex justify-center items-center gap-4 mb-8 animate-fade-in delay-400">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-semibold">4.8/5 (127k ocen)</span>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 animate-fade-in delay-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>100% bezpieczne</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
              <span>Bez ukrytych kosztów</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-400"></div>
              <span>Natychmiastowy dostęp</span>
            </div>
          </div>

          {/* Urgency/Scarcity */}
          <div className="mt-8 p-6 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl animate-fade-in delay-600">
            <p className="text-lg font-bold mb-2">
              🔥 OSTATNIE 24h PROMOCJI!
            </p>
            <p className="text-red-100">
              Dołącz za darmo przed końcem dnia i otrzymaj <span className="font-bold">Premium na 7 dni GRATIS!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
