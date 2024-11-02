import React, { Suspense, lazy } from "react";
import "./App.css";
import { useEffect } from "react";
import webDesignImage from "./assets/service1.webp"; // Import web design image
import seoImage from "./assets/service2.webp"; // Import SEO image
import otherServiceImage from "./assets/service3.webp"; // Import other service image

// Lazy loading for components
const Header = lazy(() => import("./components/Header"));
const LazyImage = lazy(() => import("./components/LazyImage"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  useEffect(() => {
    // Google Analytics initialization for performance monitoring
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "GA_TRACKING_ID"); // Replace with your Google Analytics ID
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main>
          <h1>Our Services</h1>
          <div
            className="services"
            role="region"
            aria-labelledby="services-heading"
          >
            <h2 id="services-heading" className="visually-hidden">
              Services Offered
            </h2>

            {/* Web Design Service */}
            <article className="service" aria-labelledby="web-design-title">
              <h3 id="web-design-title">Web Design</h3>
              <LazyImage
                src={webDesignImage} // Web design image
                alt="Web Design Service"
                tabIndex="0" // Allow keyboard navigation
              />
              <p>
                We offer professional web design services to help you build a
                stunning website.
              </p>
            </article>

            {/* SEO Service */}
            <article className="service" aria-labelledby="seo-title">
              <h3 id="seo-title">SEO</h3>
              <LazyImage
                src={seoImage} // SEO image
                alt="SEO Service"
                tabIndex="0" // Allow keyboard navigation
              />
              <p>
                Our SEO experts will help you rank higher on search engines and
                boost visibility.
              </p>
            </article>

            {/* Other Service */}
            <article className="service" aria-labelledby="other-service-title">
              <h3 id="other-service-title">Other Service</h3>
              <LazyImage
                src={otherServiceImage} // Other service image
                alt="Other Service"
                tabIndex="0" // Allow keyboard navigation
              />
              <p>
                We provide various other digital services tailored to your
                needs.
              </p>
            </article>
          </div>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
