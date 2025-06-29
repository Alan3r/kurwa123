import Footer from '../components/Footer';

const Terms = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white flex flex-col">
    <div className="max-w-2xl mx-auto p-8 flex-1">
      <h1 className="text-3xl font-bold mb-6">Regulamin</h1>
      <ol className="list-decimal ml-6 mb-4">
        <li>Korzystanie z serwisu jest dobrowolne i bezpłatne.</li>
        <li>Zakazane jest publikowanie treści niezgodnych z prawem.</li>
        <li>Administracja zastrzega sobie prawo do usuwania kont naruszających regulamin.</li>
        <li>Użytkownik ma prawo do usunięcia swojego konta w każdej chwili.</li>
        <li>Wszelkie reklamacje należy zgłaszać przez formularz kontaktowy.</li>
      </ol>
      <p className="mt-8">Korzystając z serwisu akceptujesz powyższy regulamin.</p>
    </div>
    <Footer />
  </div>
);

export default Terms;
