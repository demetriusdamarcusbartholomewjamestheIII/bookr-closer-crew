import { useEffect, useState } from "react";
import logo from "@/assets/bookr-logo.png";

export function BrandLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIsLoading(false), 1400);
    const t2 = setTimeout(() => setHide(true), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      aria-hidden="true"
      className="brand-loader"
      data-fading={!isLoading ? "true" : undefined}
    >
      <div className="brand-loader__inner">
        <img src={logo} alt="" className="brand-loader__icon" />
        <span className="brand-loader__word">Bookr</span>
      </div>
    </div>
  );
}
