import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const SocialLink = styled.a`
  color: white;
  margin-left: 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>1400 Moss Rose CIR, Irving, Texas, 76501</p>
      <p>Phone: (559) - 214-7978</p>
      <div>
        <SocialLink href="https://www.linkedin.com/in/manichakravardhan-reddy-donuru-2aa031119/" target="_blank" rel="noopener noreferrer">
          <SocialLogo src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn Logo" />
          LinkedIn
        </SocialLink>
        <SocialLink href="https://github.com/Manichakravardhan" target="_blank" rel="noopener noreferrer">
          <SocialLogo src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" />
          GitHub
        </SocialLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;