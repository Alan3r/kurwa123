import { X } from 'lucide-react';
import { AFFILIATE_LINK } from '../config';
import { useRef, useEffect } from 'react';

interface RegistrationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationPopup = ({ isOpen, onClose }: RegistrationPopupProps) => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      topRef.current.focus?.();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-rose-800/30 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-rose-300 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center" ref={topRef} tabIndex={-1}>
          <div className="text-6xl mb-6">🔥</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent mb-4">
            Dołącz do Nas!
          </h2>
          <p className="text-rose-200/80 text-lg mb-8 leading-relaxed">
            Zarejestruj się za DARMO i odkryj świat ekskluzywnych randek. 
            Tysiące pięknych kobiet czeka na Ciebie!
          </p>
          
          <div className="space-y-4">
            <a 
              href={AFFILIATE_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold py-4 px-6 rounded-2xl hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              🚀 REJESTRACJA PREMIUM
            </a>
            
            <p className="text-rose-300/60 text-sm">
              ✨ Darmowa rejestracja • 💎 Bez ukrytych opłat • 🔒 100% dyskretne
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;
