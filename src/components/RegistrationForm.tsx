
import React from 'react';
import { Heart, ArrowRight, Star, Shield } from 'lucide-react';
import { AFFILIATE_LINK } from "@/config";
const RegistrationForm = () => {
  const handleMainCTA = () => {
    window.open(AFFILIATE_LINK, "_blank");
    console.log('Main registration CTA clicked!');
  };

  return (
    <section id="registration" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Zacznij swoją przygodę z miłością
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Ponad 2 miliony użytkowników już znalazło swoją drugą połówkę
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Gotowy na <span className="text-pink-600">prawdziwą miłość?</span>
            </h3>
            
            <p className="text-gray-600 text-lg mb-6">
              Dołącz za darmo i znajdź swoją idealną osobę już dziś!
            </p>

            {/* Benefits list */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Inteligentne dopasowywanie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Nieograniczone wiadomości</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Zweryfikowane profile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">100% bezpieczeństwo</span>
              </div>
            </div>

            {/* Rating and social proof */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-semibold">4.8/5 (127k+ ocen)</span>
            </div>

            {/* Main CTA Button */}
            <button 
              onClick={handleMainCTA}
              className="group w-full py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-2xl text-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 mb-6"
            >
              <span className="flex items-center justify-center gap-3">
                Dołącz za DARMO
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>SSL Szyfrowanie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>RODO Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Bez spamu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency banner */}
        <div className="mt-8 p-6 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl text-center">
          <h4 className="text-xl font-bold mb-2">🚨 OSTATNIA SZANSA!</h4>
          <p className="text-red-100">
            Tylko dziś: <span className="font-bold">Premium za darmo przez pierwsze 7 dni!</span> 
            Nie przegap tej okazji - oferta kończy się o północy!
          </p>
        </div>

        {/* Social proof numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">2.5M+</div>
            <div className="text-gray-600">Użytkowników</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600 mb-2">450K+</div>
            <div className="text-gray-600">Szczęśliwych par</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">97%</div>
            <div className="text-gray-600">Poleca znajomym</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
            <div className="text-gray-600">Wsparcie</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
