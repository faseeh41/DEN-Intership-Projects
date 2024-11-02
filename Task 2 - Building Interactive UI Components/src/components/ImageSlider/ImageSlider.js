import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const styles = {
  carouselContainer: {
    width: "100%",
    height: "280px", // Adjust height as needed
    overflow: "hidden",
    display: "flex", // Center items
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
  },
  carouselImage: {
    width: "100%", // Ensure images take full width
    height: "100%", // Keep the height
    objectFit: "cover", // Ensure images cover the container without distortion
  },
};

const ImageSlider = () => {
  return (
    <div style={styles.carouselContainer}>
      <Carousel
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true} // Optional: for infinite looping of slides
      >
        <div>
          <img
            style={styles.carouselImage}
            src="https://insignia.com.pk/cdn/shop/files/2_ff36b409-fc98-4317-9092-0351c3cfaf81.jpg?v=1705488336&width=493"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            style={styles.carouselImage}
            src="https://insignia.com.pk/cdn/shop/files/2_ff36b409-fc98-4317-9092-0351c3cfaf81.jpg?v=1705488336&width=493"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            style={styles.carouselImage}
            src="https://insignia.com.pk/cdn/shop/files/2_ff36b409-fc98-4317-9092-0351c3cfaf81.jpg?v=1705488336&width=493"
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
