import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const names = [
  'Katarzyna', 'Julia', 'Maja', 'Agnieszka', 'Anna', 'Olga', 'Lena', 'Zuzanna', 'Karolina', 'Wiktoria', 'Paulina', 'Natalia', 'Ewa', 'Dominika', 'Kinga', 'Alicja', 'Patrycja', 'Monika', 'Magdalena', 'Zofia'
];

const notifications = [
  (name: string) => `${name} właśnie rozpoczęła transmisję na żywo!`,
  (name: string) => `${name} dołączyła do czatu!`,
  (name: string) => `${name} właśnie się zarejestrowała!`,
  (name: string) => `${name} rozpoczęła prywatny pokaz!`,
  (name: string) => `${name} właśnie dołączyła do platformy!`
];

const getRandomNotification = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  const notif = notifications[Math.floor(Math.random() * notifications.length)];
  return notif(name);
};

const TopRightNotification = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(getRandomNotification());
      setVisible(true);
      // Play sound if user interacted
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
      setTimeout(() => setVisible(false), 4000);
    }, 8000); // pojawia się po 8 sekundach
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  // Portal rendering to document.body with very high z-index
  return createPortal(
    <div className="fixed top-6 right-6 z-[99999] bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-4 rounded-2xl shadow-2xl text-base font-semibold animate-fade-in pointer-events-auto">
      <span role="img" aria-label="notification" className="mr-2">🔔</span>
      {message}
    </div>,
    typeof window !== 'undefined' && document.body ? document.body : (null as any)
  );
};

export default TopRightNotification;
