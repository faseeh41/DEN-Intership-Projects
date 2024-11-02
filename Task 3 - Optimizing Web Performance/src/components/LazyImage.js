import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <img
      src={loaded ? src : "path-to-placeholder.jpg"} // Lazy loading with a placeholder
      alt={alt}
      style={{ opacity: loaded ? 1 : 0.5 }}
      loading="lazy" // Native lazy loading for modern browsers
    />
  );
};

export default LazyImage;
