import { useEffect, useState } from "react";
import logo from "@/assets/bookr-logo.png";

export function BrandLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      console.log("Loader timeout fired, hiding loader");
      setIsLoading(false);
    }, 2600);
    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 3000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className="brand-loader"
      style={{
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none",
        transition: "opacity 500ms ease-out",
      }}
    >
      <div className="brand-loader__inner">
        <img src={logo} alt="" className="brand-loader__icon" />
        <span className="brand-loader__word">Bookr</span>
      </div>
    </div>
  );
}
