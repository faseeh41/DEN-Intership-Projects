import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const styles = {
  carouselContainer: {
    width: "100%",
    height: "280px", // Adjust height as needed
    overflow: "hidden",
  },
  carouselImage: {
    height: "100%",
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
      >
        <div>
          <img
            style={styles.carouselImage}
            src="https://insignia.com.pk/cdn/shop/files/2_ff36b409-fc98-4317-9092-0351c3cfaf81.jpg?v=1705488336&width=493"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            style={styles.carouselImage}
            src="https://insignia.com.pk/cdn/shop/files/2_ff36b409-fc98-4317-9092-0351c3cfaf81.jpg?v=1705488336&width=493"
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img
            style={styles.carouselImage}
            src="https://insignia.com.pk/cdn/shop/files/2_ff36b409-fc98-4317-9092-0351c3cfaf81.jpg?v=1705488336&width=493"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
