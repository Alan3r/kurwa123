// Plik konfiguracyjny z linkami afiliacyjnymi

export const AFFILIATE_LINK = "https://randkuj.xyz/link/2821/31766093";
export const AFFILIATE_LINKS = [
  "https://randkuj.xyz/link/2821/31766093",
  "https://randkuj.xyz/link/2273/31766093",
  "https://randkuj.xyz/link/9999/31766093"
];

// Funkcja do pobierania kolejnego linku (np. z localStorage lub losowo)
export function getNextAffiliateLink() {
  const used = JSON.parse(localStorage.getItem('used_aff_links') || '[]');
  const available = AFFILIATE_LINKS.filter(l => !used.includes(l));
  let next = available[0] || AFFILIATE_LINKS[0];
  if (!used.includes(next)) used.push(next);
  if (used.length > AFFILIATE_LINKS.length) used.length = 1;
  localStorage.setItem('used_aff_links', JSON.stringify(used));
  return next;
}
