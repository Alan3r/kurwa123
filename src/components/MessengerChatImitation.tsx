import { useState, useEffect } from "react";
import RegistrationPopup from "./RegistrationPopup";

const AVATAR = "https://randomuser.me/api/portraits/women/65.jpg"; // Przykładowe działające zdjęcie
const NAME = "Julia, 24";

export default function MessengerChatImitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [replied, setReplied] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  // Poprawiona detekcja mobile
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Popup na desktopie po 8s, na mobile tylko ikona po 10s
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false); // zawsze zamknięty na mobile
      setHasPlayedSound(false);
    } else {
      setIsOpen(false);
      setHasPlayedSound(false);
      const timer = setTimeout(() => {
        setIsOpen(true);
        if (!hasPlayedSound) {
          const audio = new Audio('/audio/notification.mp3');
          audio.play();
          setHasPlayedSound(true);
        }
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Ikonka czatu na telefonie pojawia się dopiero po 10 sekundach i od razu miga
  const [showChatIcon, setShowChatIcon] = useState(false);
  const [notify, setNotify] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setShowChatIcon(false);
      setNotify(false);
      setHasPlayedSound(false);
      const timer = setTimeout(() => {
        setShowChatIcon(true);
        setNotify(true);
        if (!hasPlayedSound) {
          const audio = new Audio('/audio/notification.mp3');
          audio.play();
          setHasPlayedSound(true);
        }
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isOpen]);

  // Reset dźwięku po zamknięciu czatu/ikony
  useEffect(() => {
    if (!isOpen && !showChatIcon) {
      setHasPlayedSound(false);
    }
  }, [isOpen, showChatIcon]);

  // Ikonka na mobile
  if (isMobile && !isOpen) {
    if (!showChatIcon) return null;
    return (
      <button
        className={`fixed bottom-4 right-4 z-[99] bg-white p-1 rounded-full shadow-2xl border-2 border-rose-500 transition-all ${notify ? 'animate-pulse' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Otwórz czat"
      >
        <div className="relative">
          <img src={AVATAR} alt={NAME} className="w-14 h-14 rounded-full object-cover border-2 border-rose-400" />
          <span className={`absolute bottom-0 right-0 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-lg border-2 border-white shadow ${notify ? 'animate-pulse' : ''}`}>💬</span>
        </div>
      </button>
    );
  }

  // NOWOŚĆ: Na desktopie nie renderuj czatu wcale przed upływem 8 sekund
  if (!isMobile && !isOpen) {
    return null;
  }

  // Popup czatu
  return (
    <div className="fixed bottom-6 right-6 z-[99] max-w-xs w-full bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 rounded-2xl shadow-2xl border border-rose-400 flex flex-col animate-fade-in">
      {/* Pasek górny */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-rose-600 to-pink-600 rounded-t-2xl rounded-br-2xl">
        <img src={AVATAR} alt={NAME} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
        <span className="font-semibold text-white text-lg flex-1">{NAME}</span>
        <button
          onClick={() => setIsOpen(false)}
          className="ml-2 text-white bg-rose-500/80 hover:bg-rose-700 rounded-full w-8 h-8 flex items-center justify-center text-xl transition"
          aria-label="Zamknij czat"
        >
          ×
        </button>
      </div>
      {/* Wiadomości */}
      <div className="flex-1 px-4 py-3 bg-transparent space-y-3 min-h-[80px]">
        <div className="flex items-end gap-2">
          <img src={AVATAR} alt={NAME} className="w-8 h-8 rounded-full border border-rose-400" />
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl rounded-bl-2xl px-4 py-2 text-base max-w-[70%] shadow">
            Hej, jesteś tu nowy? <span role="img" aria-label="wink">😉</span>
          </div>
        </div>
        {replied && (
          <div className="flex justify-end">
            <div className="bg-slate-800 text-rose-100 rounded-2xl rounded-br-2xl px-4 py-2 text-base max-w-[70%] shadow">
              {input}
            </div>
          </div>
        )}
      </div>
      {/* Pole do odpowiedzi lub komunikat */}
      {!replied ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (input.trim()) setReplied(true);
          }}
          className="flex border-t border-rose-400 bg-slate-900"
        >
          <input
            type="text"
            className="flex-1 px-3 py-2 text-base outline-none bg-slate-900 text-white rounded-bl-2xl placeholder:text-rose-300"
            placeholder="Napisz odpowiedź..."
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="px-4 py-2 text-pink-200 font-bold hover:text-white transition"
          >
            Wyślij
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center p-4 border-t border-rose-400 bg-slate-900">
          <div className="text-pink-200 font-semibold text-center mb-2">
            Aby kontynuować rozmowę, zarejestruj się
          </div>
          <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold py-3 rounded-xl text-lg shadow-lg hover:from-rose-700 hover:to-pink-700 transition" onClick={() => setShowRegistration(true)}>
            Zarejestruj się teraz
          </button>
          <RegistrationPopup isOpen={showRegistration} onClose={() => setShowRegistration(false)} />
        </div>
      )}
    </div>
  );
}
