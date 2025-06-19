import { useEffect, useState } from 'react';

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
      setTimeout(() => setVisible(false), 4000);
    }, 8000); // pojawia się po 8 sekundach
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-6 right-6 z-50 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-4 rounded-2xl shadow-2xl text-base font-semibold animate-fade-in">
      <span role="img" aria-label="notification" className="mr-2">🔔</span>
      {message}
    </div>
  );
};

export default TopRightNotification;
