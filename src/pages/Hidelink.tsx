import { useEffect } from "react";
import { AFFILIATE_LINK } from "../config";

const Hidelink = () => {
  useEffect(() => {
    if (AFFILIATE_LINK) {
      window.location.replace(AFFILIATE_LINK);
    }
  }, []);
  return null;
};

export default Hidelink;
