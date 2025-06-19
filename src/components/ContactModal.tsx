
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: number;
  name: string;
  age: number;
  image: string;
  description: string;
  location: string;
}

interface ContactModalProps {
  user: User;
  onClose: () => void;
}

const ContactModal = ({ user, onClose }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

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

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię jest wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Podaj poprawny adres e-mail';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Treść wiadomości jest wymagana';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Wiadomość musi mieć co najmniej 10 znaków';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    console.log('Wysyłanie wiadomości do:', user.name);
    console.log('Dane formularza:', formData);
    
    // Próba odtworzenia dźwięku powiadomienia
    try {
      const audio = new Audio('/audio/notification.mp3');
      audio.play().catch(error => {
        console.log('Nie można odtworzyć dźwięku:', error);
      });
    } catch (error) {
      console.log('Audio nie jest dostępne:', error);
    }

    toast({
      title: "Wiadomość została wysłana! 💌",
      description: `Twoja wiadomość do ${user.name} została wysłana pomyślnie.`,
      duration: 5000,
    });

    // Reset formularza i zamknięcie modala
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Usuń błąd dla pola, gdy użytkownik zaczyna pisać
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 p-1"
          >
            <X size={24} />
          </button>
          
          <div className="text-center p-6 border-b">
            <img 
              src={user.image}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-3 shadow-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              Wyślij wiadomość do {user.name}
            </h2>
            <p className="text-gray-600">
              Napisz miłą wiadomość i nawiąż kontakt
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Twoje imię *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Wpisz swoje imię"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Adres e-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="twoj@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Wiadomość * (min. 10 znaków)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Napisz swoją wiadomość..."
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            <p className="text-xs text-gray-500 mt-1">
              {formData.message.length}/10 znaków minimum
            </p>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            ✉️ Wyślij wiadomość
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
