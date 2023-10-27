import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 10px;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to the Calorie Tracker</Title>
      <Description>Track your food intake and nutritional values with ease.</Description>
      
      <ImageContainer>
        <Image src="https://www.muscleandfitness.com/wp-content/uploads/2016/09/Bodybuilder-Working-Out-His-Upper-Body-With-Cable-Crossover-Exercise.jpg?quality=86&strip=all" alt="Healthy Food" />
      </ImageContainer>

      <Description>
        Start your journey towards a healthier lifestyle today.
        Explore our app to manage your diet and reach your fitness goals.
      </Description>
    </HomeContainer>
  );
}

export default Home;
