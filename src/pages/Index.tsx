import { useState } from 'react';
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

const Index = () => {
  const [activeSection, setActiveSection] = useState('profiles');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

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
      
      <div className="relative">
        {/* Hero Section */}
        <div className="relative py-24 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-pink-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-6 leading-tight">
              Ekskluzywne Spotkania
            </h1>
            <p className="text-2xl text-rose-200/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Odkryj świat luksusowych randek z najpiękniejszymi kobietami. 
              Dyskretnie, elegancko, bez zobowiązań.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
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
                className="bg-gradient-to-r from-purple-600 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
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
      </div>
      
      <Footer />
      <FakeMessengerChat 
        name="Katarzyna"
        avatar="/img/Katarzyna.webp"
        accentFrom="from-rose-600"
        accentTo="to-pink-600"
      />
      <TopRightNotification />
    </div>
  );
};

export default Index;
