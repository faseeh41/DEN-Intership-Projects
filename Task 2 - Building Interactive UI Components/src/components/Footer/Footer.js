import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Coded by{" "}
        <a
          href="https://github.com/faseeh41"
          target="_blank"
          rel="noopener noreferrer"
        >
          M.Faseeh Hassan
        </a>
        , Open sourced on{" "}
        <a
          href="https://github.com/MFaseehHassan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . Hosted on Vercel.
      </p>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  background-color: #282c34; /* Same as .App-header background color */
  color: white; /* Same as .App-header text color */
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000; /* Ensure the footer is above other content */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Add shadow for better separation */

  p {
    margin: 0;
    font-size: calc(10px + 2vmin); /* Same font size scale as .App-header */
  }

  a {
    color: #61dafb; /* Same color as .App-link */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease; /* Smooth transition for hover effect */
  }

  a:hover {
    color: #21a1f1; 
    text-decoration: underline;
  }
`;

export default Footer;
