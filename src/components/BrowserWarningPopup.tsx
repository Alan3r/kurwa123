import { useEffect, useState } from "react";

const isInAppBrowser = () => {
  const ua = navigator.userAgent || navigator.vendor;
  // Instagram, Facebook, Messenger, TikTok
  return /Instagram|FBAN|FBAV|Messenger|Line|Snapchat|TikTok/i.test(ua);
};

const BrowserWarningPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInAppBrowser()) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-rose-700">Otwórz w przeglądarce</h2>
        <p className="mb-4 text-gray-700">
          Ta strona nie działa poprawnie w aplikacji Instagram, Facebook, Messenger lub TikTok.<br/>
          <b>Otwórz ją w przeglądarce telefonu</b> (np. Chrome, Safari):<br/>
          <span className="block mt-2 text-sm text-rose-500">Kliknij <b>⋮</b> lub <b>...</b> w prawym górnym rogu i wybierz <b>Otwórz w przeglądarce</b>.</span>
        </p>
        <button className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold shadow hover:from-rose-700 hover:to-pink-700 transition" onClick={() => setShow(false)}>
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default BrowserWarningPopup;
