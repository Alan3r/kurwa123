import { AFFILIATE_LINKS, getNextAffiliateLink } from './src/config';

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  // Domyślnie link z payloada, fallback: losowy z configu
  let url = event.notification.data?.url;
  if (!url) {
    // Wersja fallback: losowy link z listy
    const links = AFFILIATE_LINKS || [];
    url = links[Math.floor(Math.random() * links.length)] || '/';
  }
  event.waitUntil(
    clients.openWindow(url)
  );
});
