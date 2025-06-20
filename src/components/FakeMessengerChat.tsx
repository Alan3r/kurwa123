import { useEffect, useState } from 'react';
import RegistrationPopup from './RegistrationPopup';

interface FakeMessengerChatProps {
  name: string;
  avatar: string;
  accentFrom?: string;
  accentTo?: string;
}

const FakeMessengerChat = ({ name, avatar, accentFrom = 'from-rose-600', accentTo = 'to-pink-600' }: FakeMessengerChatProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      from: 'woman',
      text: 'Hej! Jestem napalona 😈 Czekam na Ciebie... 😘',
      time: 'Teraz'
    }
  ]);
  const [showRegister, setShowRegister] = useState(false);
  const [hasReplied, setHasReplied] = useState(false);
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Odtwarzaj dźwięk tylko jeśli użytkownik już kliknął gdziekolwiek na stronie
      const playAudio = () => {
        const audio = new Audio('/audio/notification.mp3');
        audio.play();
        window.removeEventListener('pointerdown', playAudio);
      };
      if ((window as any).__userInteracted) {
        playAudio();
      } else {
        window.addEventListener('pointerdown', playAudio);
      }
    }, 6000); // 6 sekund
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Flaga globalna, że użytkownik wykonał interakcję
    const setInteracted = () => { (window as any).__userInteracted = true; };
    window.addEventListener('pointerdown', setInteracted, { once: true });
    return () => window.removeEventListener('pointerdown', setInteracted);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input, time: 'Teraz' }]);
    setInput('');
    setTimeout(() => {
      setShowRegister(true);
      setHasReplied(true);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 max-w-xs w-full shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-rose-800/30">
        <div className={`px-4 py-3 flex items-center justify-between bg-gradient-to-r ${accentFrom} ${accentTo} text-white`}>
          <span className="font-bold flex items-center gap-2">
            <img src={avatar} alt={name} className="w-8 h-8 rounded-full border-2 border-white shadow mr-2" />
            {name}
          </span>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-rose-200">✕</button>
        </div>
        <div className="bg-slate-900/80 px-4 py-3 h-40 flex flex-col gap-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.fake-messenger-chat::-webkit-scrollbar { display: none; }`}</style>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-2xl px-4 py-2 text-sm max-w-[80%] ${msg.from === 'user' ? 'bg-rose-100 text-rose-900' : 'bg-gradient-to-r from-rose-600 to-pink-600 text-white'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {showRegister && (
            <div className="text-center text-xs text-rose-400 font-semibold mt-2">
              Tylko dla zarejestrowanych!<br/>Zarejestruj się, aby kontynuować rozmowę.
            </div>
          )}
        </div>
        {!hasReplied ? (
          <form onSubmit={handleSend} className="flex border-t border-rose-800/30 bg-slate-900/80">
            <input
              type="text"
              className="flex-1 px-3 py-2 text-sm outline-none bg-slate-800 text-white placeholder:text-rose-300"
              placeholder="Napisz wiadomość..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={showRegister}
            />
            <button
              type="submit"
              className="px-4 py-2 text-rose-100 font-bold hover:text-white disabled:opacity-50"
              disabled={showRegister}
            >
              Wyślij
            </button>
          </form>
        ) : (
          <div className="flex border-t border-rose-800/30 bg-slate-900/80 p-2">
            <button
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold py-2 px-4 rounded-xl hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-base"
              onClick={() => setShowRegistrationPopup(true)}
            >
              Zarejestruj się, aby odpisać
            </button>
          </div>
        )}
      </div>
      <RegistrationPopup isOpen={showRegistrationPopup} onClose={() => setShowRegistrationPopup(false)} />
    </>
  );
};

export default FakeMessengerChat;
