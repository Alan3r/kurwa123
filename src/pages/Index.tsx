import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProfileCardsDemo from '../components/ProfileCardsDemo';
import TestimonialsSection from '../components/TestimonialsSection';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';
import HiddenAffiliateRedirect from '../components/HiddenAffiliateRedirect';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <HiddenAffiliateRedirect />
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
