
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import UserPost from './UserPost';
import RegistrationPopup from './RegistrationPopup';
import CameraCard from './CameraCard';
import { cameras } from '../data/cameras';

interface User {
  id: number;
  name: string;
  age: number;
  image: string;
  description: string;
  location: string;
  interests?: string[];
  isOnline?: boolean;
  posts?: Array<{
    id: number;
    image: string;
    likes: number;
    comments: number;
  }>;
}

interface ProfileDetailProps {
  user: User;
  onBack: () => void;
  onSendMessage: () => void;
}

const ProfileDetail = ({ user, onBack, onSendMessage }: ProfileDetailProps) => {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  const handleInteraction = () => {
    setShowRegistrationPopup(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-rose-300 hover:text-rose-200 mb-8 transition-colors duration-200 group"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-lg">Powrót do profili</span>
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-rose-800/20">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src={user.image}
                    alt={`${user.name} - ${user.age} lat`}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  {user.isOnline && (
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-xl">
                      🟢 ONLINE TERAZ
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-rose-100">
                      {user.name}
                    </h1>
                  </div>
                  <p className="text-2xl text-rose-300/80 mb-4">
                    {user.age} lat
                  </p>
                  <p className="text-xl text-rose-400/80 font-medium mb-2">
                    📍 {user.location}
                  </p>
                  {user.isOnline && (
                    <p className="text-emerald-400 font-semibold text-lg">
                      💬 Dostępna do rozmowy
                    </p>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-rose-200 mb-6">
                    O mnie
                  </h2>
                  <p className="text-rose-100/80 leading-relaxed text-lg">
                    {user.description}
                  </p>
                </div>

                {user.interests && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-rose-200 mb-6">
                      Moje pasje
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {user.interests.map((interest, index) => (
                        <span 
                          key={index}
                          className="bg-gradient-to-r from-rose-600/80 to-pink-600/80 text-rose-100 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button 
                  onClick={handleInteraction}
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold py-5 px-8 rounded-2xl hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-xl"
                >
                  💋 Napisz do mnie prywatnie
                </button>
              </div>
            </div>
          </div>

          {/* Sekcja postów */}
          {user.posts && user.posts.length > 0 && (
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Jej gorące posty 🔥
                </h2>
                <p className="text-xl text-rose-200/80">
                  Najnowsze zdjęcia i momenty z jej życia
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {user.posts.map((post) => (
                  <UserPost 
                    key={post.id}
                    post={post}
                    onLike={handleInteraction}
                    onComment={handleInteraction}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sekcja kamerek */}
          <div className="border-t border-rose-800/30 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Inne gorące kamerki LIVE
              </h2>
              <p className="text-xl text-rose-200/80">
                Odkryj więcej pięknych kobiet na żywo
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cameras.filter(camera => camera.id !== user.id).slice(0, 4).map((camera) => (
                <CameraCard 
                  key={camera.id}
                  camera={camera}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <RegistrationPopup 
        isOpen={showRegistrationPopup}
        onClose={() => setShowRegistrationPopup(false)}
      />
    </div>
  );
};

export default ProfileDetail;
