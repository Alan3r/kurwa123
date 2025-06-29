import { useEffect, useRef, useState } from 'react';
import { Shield, CheckCircle, Lock, Camera, MessageCircle, Image as ImageIcon, Users, ChevronDown, Gift } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import ProfileDetail from '../components/ProfileDetail';
import ContactModal from '../components/ContactModal';
import CameraCard from '../components/CameraCard';
import Footer from '../components/Footer';
import { users } from '../data/users';
import { cameras } from '../data/cameras';
import FakeMessengerChat from '../components/FakeMessengerChat';
import TopRightNotification from '../components/TopRightNotification';
import MessengerChatImitation from "../components/MessengerChatImitation";
import RegistrationPopup from '../components/RegistrationPopup';

const Index = () => {
  const [activeSection, setActiveSection] = useState('profiles');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  const handleProfileClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackToProfiles = () => {
    setSelectedUser(null);
  };

  const handleShowContactModal = () => {
    setShowContactModal(true);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  // Social proof: fake online counter
  const [onlineCount, setOnlineCount] = useState(124 + Math.floor(Math.random()*30));
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((c) => c + (Math.random() > 0.5 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Exit-intent popup
  const [showExitPopup, setShowExitPopup] = useState(false);
  const exitPopupShown = useRef(false);
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !exitPopupShown.current) {
        setShowExitPopup(true);
        exitPopupShown.current = true;
      }
    };
    window.addEventListener('mouseout', handleMouseLeave);
    return () => window.removeEventListener('mouseout', handleMouseLeave);
  }, []);

  // Personalized greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Dzień dobry!';
    if (hour < 18) return 'Miłego popołudnia!';
    return 'Dobry wieczór!';
  };
  const greeting = getGreeting();

  // Limited-time offer countdown
  const [offerSeconds, setOfferSeconds] = useState(5 * 60); // 5 minutes
  useEffect(() => {
    if (offerSeconds > 0) {
      const timer = setTimeout(() => setOfferSeconds(offerSeconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [offerSeconds]);
  const offerMinutes = Math.floor(offerSeconds / 60);
  const offerSecs = offerSeconds % 60;

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: 'Czy to jest bezpieczne?', a: 'Tak, wszystkie profile są weryfikowane, a Twoje dane są chronione.' },
    { q: 'Czy mogę usunąć konto?', a: 'Tak, możesz usunąć konto w każdej chwili w ustawieniach.' },
    { q: 'Czy rejestracja jest darmowa?', a: 'Tak, rejestracja i przeglądanie profili są darmowe.' },
    { q: 'Jak działa czat?', a: 'Po rejestracji możesz rozmawiać z wybranymi osobami na czacie.' },
  ];

  // Jeśli wybrany użytkownik, pokaż szczegóły profilu
  if (selectedUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
        <ProfileDetail 
          user={selectedUser}
          onBack={handleBackToProfiles}
          onSendMessage={handleShowContactModal}
        />
        {showContactModal && (
          <ContactModal 
            user={selectedUser}
            onClose={handleCloseContactModal}
          />
        )}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      {/* Social proof bar + Hero section wrapper for mobile hide on scroll */}
      <div className="mobile-hide-on-scroll">
        {/* Social proof bar (static on mobile) */}
        <div className="w-full bg-gradient-to-r from-purple-700 to-rose-700 text-white py-2 px-2 sm:px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-base sticky top-[44px] z-40 social-proof-static">
          <div className="flex items-center gap-1">
            <Users className="inline w-5 h-5 text-green-300" />
            <span>Online:</span>
            <span className="font-bold text-green-200">{onlineCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="inline w-5 h-5 text-blue-200" />
            <span>Zweryfikowane profile</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="inline w-5 h-5 text-emerald-200" />
            <span>100% bezpieczne</span>
          </div>
        </div>
        {/* Hero Section */}
        <div className="relative py-10 px-2 sm:py-16 sm:px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-pink-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative z-10 max-w-2xl sm:max-w-4xl mx-auto flex flex-col items-center">
            <div className="mb-2 sm:mb-4 text-lg sm:text-2xl font-bold text-white animate-fade-in-slow">{greeting}</div>
            <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-2 sm:mb-6 leading-tight">
              Ekskluzywne Spotkania
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-rose-200/90 mb-4 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
              Odkryj świat luksusowych randek z najpiękniejszymi kobietami. 
              Dyskretnie, elegancko, bez zobowiązań.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto justify-center">
              <button
                className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl animate-pulse-slow hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none w-full sm:w-auto"
                onClick={() => {
                  setActiveSection('profiles');
                  setTimeout(() => {
                    document.getElementById('profiles-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                🔥 Przeglądaj Profile
              </button>
              <button
                className="bg-gradient-to-r from-purple-600 to-rose-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-purple-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto"
                onClick={() => {
                  setActiveSection('profiles');
                  setTimeout(() => {
                    document.getElementById('cameras-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 200);
                }}
              >
                📹 Kamerki LIVE
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeSection === 'profiles' && (
        <div id="profiles-section" className="container mx-auto px-4 pb-16">
          {/* Profile Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent mb-4">
                Wybierz Swoją Ideał
              </h2>
              <p className="text-xl text-rose-200/80 max-w-2xl mx-auto">
                Ekskluzywna kolekcja najpiękniejszych kobiet czekających na Ciebie
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {users.map((user) => (
                <ProfileCard 
                  key={user.id}
                  user={user}
                  onClick={() => handleProfileClick(user)}
                />
              ))}
            </div>
          </div>

          {/* Camera Section */}
          <div className="border-t border-rose-800/30 pt-20" id="cameras-section">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Prywatne Pokazy LIVE
              </h2>
              <p className="text-xl text-rose-200/80 max-w-3xl mx-auto">
                Intymne transmisje na żywo. Wejdź do ekskluzywnego świata prywatnych pokazów.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cameras.map((camera) => (
                <CameraCard 
                  key={camera.id}
                  camera={camera}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'cameras' && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Prywatne Pokazy LIVE
            </h1>
            <p className="text-xl text-rose-200/80 max-w-3xl mx-auto">
              Intymne transmisje na żywo. Wejdź do ekskluzywnego świata prywatnych pokazów.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cameras.map((camera) => (
              <CameraCard 
                key={camera.id}
                camera={camera}
              />
            ))}
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto mt-8 mb-12 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <ImageIcon className="w-8 h-8 mb-2 text-pink-400" />
            <span className="font-semibold text-white">Prywatne zdjęcia</span>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="w-8 h-8 mb-2 text-purple-400" />
            <span className="font-semibold text-white">Czat z wybranymi</span>
          </div>
          <div className="flex flex-col items-center">
            <Camera className="w-8 h-8 mb-2 text-rose-400" />
            <span className="font-semibold text-white">Ekskluzywne transmisje</span>
          </div>
          <div className="flex flex-col items-center">
            <Lock className="w-8 h-8 mb-2 text-blue-400" />
            <span className="font-semibold text-white">Dyskrecja gwarantowana</span>
          </div>
        </div>
      </section>
      {/* Exit-intent popup */}
      {showExitPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center relative animate-fade-in">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-rose-500 text-xl" onClick={() => setShowExitPopup(false)}>&times;</button>
            <h2 className="text-2xl font-bold mb-2 text-rose-700">Zostań z nami!</h2>
            <p className="mb-4 text-gray-700">Nie przegap szansy na poznanie kogoś wyjątkowego.<br />Zarejestruj się i odkryj ekskluzywne funkcje!</p>
            <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg w-full mt-2" onClick={() => { setShowExitPopup(false); setShowRegistrationPopup(true); }}>Zarejestruj się teraz</button>
          </div>
        </div>
      )}
      <RegistrationPopup isOpen={showRegistrationPopup} onClose={() => setShowRegistrationPopup(false)} />
      <Footer />
      {/* <FakeMessengerChat 
        name="Katarzyna"
        avatar="/img/Katarzyna.webp"
        accentFrom="from-rose-600"
        accentTo="to-pink-600"
        className="!fixed !bottom-4 !right-4 !left-auto !z-[60]"
      /> */}
      <TopRightNotification />
      <MessengerChatImitation />
    </div>
  );
};

export default Index;

/*
  Add the following CSS to App.css or a global stylesheet if not present:
  .animate-pulse-slow {
    animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  .scrolled .hidden-mobile-scroll {
    display: none !important;
  }
*/
