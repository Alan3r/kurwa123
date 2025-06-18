import React from 'react';
import { Heart, MessageCircle, Users, Shield, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Smart Matching AI",
      description: "Algorytm dopasowuje Cię z osobami o podobnych zainteresowaniach",
      stats: "95% trafnych match'y",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Natychmiastowy Chat",
      description: "Rozmawiaj bez granic i poznawaj nowych ludzi",
      stats: "24/7 dostępność",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "2M+ Użytkowników",
      description: "Największa społeczność singli w Polsce",
      stats: "15k nowych dziennie",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "100% Bezpieczeństwo",
      description: "Zweryfikowane profile i bezpieczne rozmowy",
      stats: "0% fake profili",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleCTA = () => {
    window.open('https://randkuj.xyz/link/2273/31766093', '_blank');
    console.log('Feature CTA clicked!');
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dlaczego to DZIAŁA?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Najnowsze technologie + sprawdzone metody = idealne dopasowania
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-purple-200"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transform transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.stats}
                </span>
                <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Główny CTA w środku */}
        <div className="text-center mb-16">
          <button 
            onClick={handleCTA}
            className="group px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full text-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              Dołącz do 2M+ użytkowników
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Social proof numbers */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2.5M+</div>
              <div className="text-purple-200">Użytkowników</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">450K+</div>
              <div className="text-purple-200">Szczęśliwych par</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">97%</div>
              <div className="text-purple-200">Poleca znajomym</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.8⭐</div>
              <div className="text-purple-200">Średnia ocena</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
