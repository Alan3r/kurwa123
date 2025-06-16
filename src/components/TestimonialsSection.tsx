import React from 'react';
import { Heart, Star, ArrowRight } from 'lucide-react';
import { AFFILIATE_LINK } from "@/config";
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ania i Paweł",
      story: "Poznaliśmy się 6 miesięcy temu i już planujemy ślub! Ta aplikacja naprawdę działa - algorytm dopasowania jest niesamowity!",
      image1: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
      image2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      duration: "6 miesięcy razem",
      rating: 5
    },
    {
      name: "Kasia i Michał",
      story: "Po latach samotności w końcu znalazłam swoją drugą połówkę! Pierwszy match okazał się być tym jedynym. Polecam każdemu!",
      image1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      image2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      duration: "1 rok razem",
      rating: 5
    },
    {
      name: "Marta i Jakub",
      story: "Mieszkamy w różnych miastach, ale aplikacja nas połączyła. Teraz przeprowadzam się do niego! Miłość nie zna granic.",
      image1: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      image2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      duration: "8 miesięcy razem",  
      rating: 5
    }
  ];

  const handleCTA = () => {
    window.open(AFFILIATE_LINK, "_blank");
    console.log('Testimonials CTA clicked!');
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Prawdziwe historie miłości
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ponad 450,000 par się tu poznało. Ty możesz być następny!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              {/* Couple photos */}
              <div className="flex justify-center items-center mb-6 relative">
                <img 
                  src={testimonial.image1} 
                  alt={testimonial.name.split(' ')[0]}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg z-10"
                />
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center -mx-4 z-20">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <img 
                  src={testimonial.image2} 
                  alt={testimonial.name.split(' ')[2]}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg z-10"
                />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Story */}
              <blockquote className="text-gray-700 text-center mb-6 italic leading-relaxed">
                "{testimonial.story}"
              </blockquote>

              {/* Names and duration */}
              <div className="text-center">
                <div className="font-bold text-lg text-gray-800 mb-2">{testimonial.name}</div>
                <div className="text-sm text-purple-600 font-semibold flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {testimonial.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ty też możesz znaleźć miłość!</h3>
          <p className="text-pink-100 mb-6 text-lg">
            Dołącz do 450,000+ szczęśliwych par które się tu poznały
          </p>
          <button 
            onClick={handleCTA}
            className="group bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              Znajdź swoją miłość teraz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <div className="mt-4 text-pink-100 text-sm">
            ✓ Całkowicie za darmo ✓ Bez rejestracji email ✓ Natychmiastowy dostęp
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
