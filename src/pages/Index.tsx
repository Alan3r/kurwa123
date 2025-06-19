import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProfileCardsDemo from '../components/ProfileCardsDemo';
import TestimonialsSection from '../components/TestimonialsSection';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';
import { toast } from '../components/ui/sonner';
import { getNextAffiliateLink } from '../config';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Index = () => {
  useEffect(() => {
    let deferredPrompt: any;
    const handler = (e: any) => {
      e.preventDefault();
      deferredPrompt = e;
      toast(
        'Możesz dodać tę stronę do ekranu głównego jako aplikację!',
        {
          action: {
            label: 'Dodaj',
            onClick: () => {
              if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(() => {
                  deferredPrompt = null;
                });
              }
            },
          },
          duration: 10000,
        }
      );
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Śledzenie instalacji PWA (np. do Google Analytics)
  useEffect(() => {
    const onAppInstalled = () => {
      if (window.gtag) {
        window.gtag('event', 'app_installed');
      }
      // Możesz tu dodać wysyłkę do własnego API
    };
    window.addEventListener('appinstalled', onAppInstalled);
    return () => window.removeEventListener('appinstalled', onAppInstalled);
  }, []);

  // Przykład użycia getNextAffiliateLink do powiadomień push (pseudo-kod)
  // useEffect(() => {
  //   if ('serviceWorker' in navigator && window.OneSignal) {
  //     window.OneSignal.init({ ... });
  //     window.OneSignal.on('notificationDisplay', () => {
  //       const link = getNextAffiliateLink();
  //       // W treści powiadomienia: link
  //     });
  //   }
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <HeroSection />
      <FeaturesSection />
      <ProfileCardsDemo />
      <TestimonialsSection />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
