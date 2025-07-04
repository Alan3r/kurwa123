const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-rose-100 py-16 border-t border-rose-800/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              🌹 BezpiecznieRandki
            </h3>
            <p className="text-rose-300/80 leading-relaxed text-lg">
              Ekskluzywny portal dla wymagających mężczyzn. Dyskretne spotkania 
              z najpiękniejszymi kobietami. Twoje pragnienia, nasze możliwości.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-rose-200">Ekskluzywne Usługi</h4>
            <ul className="space-y-3 text-rose-300/80">
              <li><a href="#" className="hover:text-rose-200 transition-colors text-lg">💎 VIP Profile</a></li>
              <li><a href="#" className="hover:text-rose-200 transition-colors text-lg">🔥 Prywatne Pokazy</a></li>
              <li><a href="#" className="hover:text-rose-200 transition-colors text-lg">🌹 Dyskretność</a></li>
              <li><a href="#" className="hover:text-rose-200 transition-colors text-lg">👑 Premium Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-rose-200">Dyskretny Kontakt</h4>
            <div className="text-rose-300/80 space-y-3">
              
              
             
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex gap-4 items-center">
            <img src="/img/ssl-secure.svg" alt="SSL Secure" className="h-8" loading="lazy" />
            <img src="/img/discreet-billing.svg" alt="Discreet Billing" className="h-8" loading="lazy" />
            <img src="/img/100-secure.svg" alt="100% Secure" className="h-8" loading="lazy" />
          </div>
          <div className="flex gap-4 text-sm mt-2 md:mt-0">
            <a href="/privacy-policy" className="underline hover:text-rose-300 transition">Polityka Prywatności</a>
            <a href="/terms" className="underline hover:text-rose-300 transition">Regulamin</a>
          </div>
        </div>
        
        <div className="border-t border-rose-800/20 mt-12 pt-8 text-center text-rose-400/60">
          <p className="text-lg">&copy; 2024 Bezpieczne Randki. Dyskretność gwarantowana. Tylko dla pełnoletnich.</p>
        </div>
      </div>  

    </footer>
  );
};

export default Footer;
