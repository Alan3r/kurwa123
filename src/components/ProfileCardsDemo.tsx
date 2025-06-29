import React from 'react';
import { Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { AFFILIATE_LINK } from '../config';
const ProfileCardsDemo = () => {
  const profiles = [
    {
      name: "Katarzyna",
      age: 28,
      location: "Warszawa",
      interests: ["Podróże", "Fitness", "Fotografia"],
      image: "/img/Katarzyna.webp",
      match: 94
    },
    {
      name: "Olga",
      age: 25,
      location: "Kraków", 
      interests: ["Muzyka", "Taniec", "Książki"],
      image: "/img/Olga.webp",
      match: 87
    },
    {
      name: "Justyna",
      age: 30,
      location: "Gdańsk",
      interests: ["Kultura", "Wino", "Gotowanie"],
      image: "/img/Justyna.lat.webp",
      match: 91
    },
    {
      name: "Agata",
      age: 27,
      location: "Poznań",
      interests: ["Sztuka", "Teatr", "Joga"],
      image: "/img/Agata.webp",
      match: 89
    }
  ];

  const handleCTA = () => {
     window.open(AFFILIATE_LINK, '_blank');
    console.log('Profile demo CTA clicked!');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Tysiące profili czeka na Ciebie!
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Zobacz kogo możesz poznać już dziś
          </p>
        </div>

        {/* Profile showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {profiles.map((profile, index) => (
            <div key={index} className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  loading="lazy"
                  src={profile.image} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-bold">
                  {profile.match}% match
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{profile.name}, {profile.age}</h3>
                  <p className="text-white/80 text-sm mb-3">{profile.location}</p>
                  <div className="flex flex-wrap gap-1">
                    {profile.interests.slice(0, 2).map((interest, i) => (
                      <span key={i} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <button 
                  onClick={handleCTA}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Zobacz profil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Gotowy poznać <span className="text-pink-600">swoją osobę?</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Dołącz do największej społeczności singli w Polsce
            </p>
            <button 
              onClick={handleCTA}
              className="group px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                Zacznij przeglądać profile
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <div className="mt-4 text-sm text-gray-500">
              ✓ Rejestracja za darmo ✓ Bez zobowiązań ✓ Natychmiastowy dostęp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCardsDemo;
