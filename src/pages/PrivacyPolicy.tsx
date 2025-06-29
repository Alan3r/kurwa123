import Footer from '../components/Footer';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white flex flex-col">
    <div className="max-w-2xl mx-auto p-8 flex-1">
      <h1 className="text-3xl font-bold mb-6">Polityka Prywatności</h1>
      <p className="mb-4">Twoja prywatność jest dla nas bardzo ważna. Dbamy o bezpieczeństwo Twoich danych i nie udostępniamy ich osobom trzecim bez Twojej zgody.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Jakie dane zbieramy?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Adres e-mail podany przy rejestracji</li>
        <li>Adres IP oraz dane techniczne przeglądarki</li>
        <li>Informacje o aktywności na stronie (anonimowo)</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">W jakim celu?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Realizacja usług i funkcji portalu</li>
        <li>Statystyki i poprawa jakości serwisu</li>
        <li>Bezpieczeństwo użytkowników</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Twoje prawa</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Prawo do wglądu, poprawy i usunięcia danych</li>
        <li>Prawo do sprzeciwu wobec przetwarzania</li>
      </ul>
      <p className="mt-8">W razie pytań napisz do nas przez formularz kontaktowy.</p>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
