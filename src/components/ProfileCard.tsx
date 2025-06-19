import { useState } from 'react';
import RegistrationPopup from './RegistrationPopup';
import { AFFILIATE_LINK } from '../config';

interface User {
  id: number;
  name: string;
  age: number;
  image: string;
  description: string;
  location: string;
  interests?: string[];
  isOnline?: boolean;
}

interface ProfileCardProps {
  user: User;
  onClick: () => void;
}

const ProfileCard = ({ user, onClick }: ProfileCardProps) => {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // Jeśli kliknięto na przycisk interakcji, przejdź na szczegóły profilu
    if ((e.target as HTMLElement).closest('.interaction-button')) {
      e.stopPropagation();
      onClick();
      return;
    }
    // W przeciwnym razie, pokaż szczegóły profilu
    onClick();
  };

  return (
    <>
      <div 
        className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-rose-500/25 transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden border border-rose-800/20"
        onClick={handleCardClick}
      >
        <div className="relative overflow-hidden rounded-t-3xl">
          <img 
            src={user.image.startsWith('/img/') ? user.image : '/img/Anna.webp'}
            alt={user.name}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {user.isOnline && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
              🟢 ONLINE
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold mb-2 text-shadow-lg">
              {user.name}, {user.age}
            </h3>
            <p className="text-rose-200 text-sm mb-2 opacity-90">
              📍 {user.location}
            </p>
          </div>
        </div>
        
        <div className="p-6 relative">
          <p className="text-rose-100/80 text-sm leading-relaxed mb-4 line-clamp-2">
            {user.description}
          </p>
          
          {user.interests && (
            <div className="flex flex-wrap gap-2 mb-6">
              {user.interests.slice(0, 3).map((interest, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-rose-600/80 to-pink-600/80 text-rose-100 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                >
                  {interest}
                </span>
              ))}
              {user.interests.length > 3 && (
                <span className="text-rose-300/60 text-xs px-3 py-1 font-medium">
                  +{user.interests.length - 3} więcej
                </span>
              )}
            </div>
          )}
          
          <div className="absolute inset-x-6 bottom-6">
            <div className="interaction-button bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-xl text-center font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
              💋 Zobacz Profil
            </div>
          </div>
        </div>
      </div>

      <RegistrationPopup 
        isOpen={showRegistrationPopup}
        onClose={() => setShowRegistrationPopup(false)}
      />
    </>
  );
};

export default ProfileCard;
