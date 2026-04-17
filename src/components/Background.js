import { useEffect, useState } from "react";

export default function Background() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div
      className="parallax-bg "
      style={{
        transform: `translateY(${offset * 0.2}px)`
      }}
    >
    </div>
        </>

  );
}