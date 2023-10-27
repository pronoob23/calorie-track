import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
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

function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404 - Not Found</Title>
      <Description>The page you are looking for does not exist.</Description>
    </NotFoundContainer>
  );
}

export default NotFound;
