import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
`;

function AboutUs() {
  return (
    <AboutUsContainer>
      <Title>About Us</Title>
      <Description>We are passionate about helping you maintain a healthy diet.</Description>
    </AboutUsContainer>
  );
}

export default AboutUs;
