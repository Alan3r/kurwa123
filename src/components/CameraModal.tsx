
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface Camera {
  id: number;
  name: string;
  image: string;
  viewers: number;
  isLive: boolean;
}

interface CameraModalProps {
  camera: Camera;
  onClose: () => void;
}

const CameraModal = ({ camera, onClose }: CameraModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
          
          <img 
            src={camera.image}
            alt={`${camera.name} - transmisja na żywo`}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          
          {camera.isLive && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🔴 LIVE
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Transmisja {camera.name}
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl mb-4">
            <p className="text-gray-700 text-center">
              <span className="text-2xl mb-2 block">🚧</span>
              Funkcja transmisji na żywo jest obecnie w przygotowaniu.
              <br />
              Wkrótce będziesz mógł/mogła oglądać transmisje na żywo!
            </p>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>👥 {camera.viewers} oglądających</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
              {camera.isLive ? 'Na żywo' : 'Offline'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraModal;
