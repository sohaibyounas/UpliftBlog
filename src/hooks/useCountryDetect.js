import { useState, useEffect } from "react";
import axios from "axios";
import { findCountryByCode } from "./countries";

export function useCountryDetect() {
  const [detectedCountry, setDetectedCountry] = useState(null);
  const [userOverride, setUserOverride] = useState(false);

  useEffect(() => {
    if (userOverride) return;

    const detectCountry = async () => {
      try {
        let countryCode = null;

        if (process.env.NODE_ENV === "development") {
          const { data } = await axios.get("https://ipwho.is/");
          if (data && data.success !== false) {
            countryCode = data.country_code;
          }
        } else {
          const { data } = await axios.get("/api/geo");
          countryCode = data.country_code;
        }

        const matchedCountry = findCountryByCode(countryCode);
        if (matchedCountry) {
          setDetectedCountry(matchedCountry);
        }
      } catch (error) {
        console.log("Country detection failed:", error);
      }
    };

    detectCountry();
  }, [userOverride]);

  const markUserOverride = () => {
    setUserOverride(true);
  };

  return {
    detectedCountry,
    setDetectedCountry,
    markUserOverride,
  };
}
