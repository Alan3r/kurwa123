import { useState } from 'react';
import CameraModal from './CameraModal';
import RegistrationPopup from './RegistrationPopup';

interface Camera {
  id: number;
  name: string;
  image: string;
  viewers: number;
  isLive: boolean;
}

interface CameraCardProps {
  camera: Camera;
}

const CameraCard = ({ camera }: CameraCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  const handleJoinClick = () => {
    setShowRegistrationPopup(true);
  };

  return (
    <>
      <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl shadow-2xl hover:shadow-rose-500/25 transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden border border-rose-800/20">
        <div className="relative">
          <img 
            src={camera.image.startsWith('/img/') ? camera.image : '/img/Agata.webp'}
            alt={`${camera.name} - transmisja na żywo`}
            className="w-full h-64 object-cover transition-all duration-700 filter blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {camera.isLive && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-rose-600 text-white px-3 py-2 rounded-full text-sm font-bold animate-pulse shadow-xl">
              🔴 LIVE
            </div>
          )}
          
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
            👥 {camera.viewers}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2 text-shadow-lg">
              {camera.name}
            </h3>
          </div>
        </div>
        
        <div className="p-6">
          <button 
            onClick={handleJoinClick}
            className="w-full bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold py-4 px-6 rounded-xl hover:from-red-700 hover:to-rose-800 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            🔥 Oglądaj
          </button>
        </div>
      </div>

      {showModal && (
        <CameraModal 
          camera={camera}
          onClose={() => setShowModal(false)}
        />
      )}

      <RegistrationPopup 
        isOpen={showRegistrationPopup}
        onClose={() => setShowRegistrationPopup(false)}
      />
    </>
  );
};

export default CameraCard;
