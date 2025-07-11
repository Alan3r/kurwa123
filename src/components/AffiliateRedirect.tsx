import { useEffect } from "react";
import { AFFILIATE_LINK } from "../config";
import { useNavigate } from "react-router-dom";

// Lista popularnych botów do wykrycia po user-agent
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

export default function AffiliateRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const ua = navigator.userAgent;
    const isBot = botUserAgents.some((re) => re.test(ua));
    if (isBot) {
      window.location.replace(BOT_REDIRECT);
    } else {
      window.location.replace(AFFILIATE_LINK);
    }
    // Jeśli ktoś wróci, przekieruj na stronę główną
    setTimeout(() => navigate("/"), 5000);
  }, [navigate]);
  return (
    <div style={{padding: 40, textAlign: "center"}}>
      <h2>Przekierowujemy...</h2>
      <p>Jeśli nie nastąpi przekierowanie, <a href={AFFILIATE_LINK}>kliknij tutaj</a>.</p>
    </div>
  );
}
