import { useState } from 'react';
import styled from 'styled-components';
import parchmentImg from '../assets/ChatGPT Image May 28, 2025, 06_20_59 PM.png';

// Styled Components
const Section = styled.section`
  background-color: #f4b8b8;
  padding: 60px 20px;
  font-family: 'Dancing Script', cursive;
  color: #4e342e;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  width: 360px;
  height: 100px;
  background: linear-gradient(to right, #ffb6c1, #ffe0e9);
  color: #d0006f;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: 60px auto 40px;
  box-shadow: 0 10px 25px rgba(255, 105, 180, 0.3);
  transition: transform 0.3s ease;
  font-family:'Poppins', sans-serif;
;

  &:hover {
    transform: scale(1.05);
  }
`;

const LettersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const LetterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LetterPreview = styled.div`
  background: rgb(249, 207, 207);
  padding: 15px 20px;
  border: 2px dashed rgb(229, 130, 150);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;

  &:hover {
    background-color: #f4b8b8;
    transform: scale(1.02);
  }

  &.active {
    background-color: rgb(220, 178, 178);
    transform: scale(1.02);
  }
`;

const LetterContent = styled.div`
  max-width: 500px;
  padding: 20px;
`;

const Parchment = styled.div`
  background: url(${parchmentImg}) center/cover no-repeat;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  color: #3e2723;
  font-size: 20px;
  line-height: 1.8;
  font-family:'Poppins', sans-serif;
;
`;

const SelectMsg = styled.p`
  font-size: 20px;
  font-style: italic;
  text-align: center;
  opacity: 0.7;
`;

const Letters = ({ id }) => {
  const [letters] = useState([
    {
      id: 1,
      title: 'Letter 1',
      content: 'This is a placeholder for a heartfelt letter. Replace it with your own message to make it more personal and meaningful.',
    },
    {
      id: 2,
      title: 'Letter 2',
      content: 'Another sample letter content goes here. You can write something emotional, funny, romantic, or thoughtful — it’s all yours to customize.',
    },
  ]);


  const [activeLetter, setActiveLetter] = useState(null);

  return (
    <Section id={id}>
      <Container>
        <Title>Heartfelt Letters❤️</Title>
        <LettersWrapper>
          <LetterList>
            {letters.map((letter) => (
              <LetterPreview
                key={letter.id}
                className={activeLetter?.id === letter.id ? 'active' : ''}
                onClick={() => setActiveLetter(letter)}
              >
                <h3>{letter.title}</h3>
              </LetterPreview>
            ))}
          </LetterList>
          <LetterContent>
            {activeLetter ? (
              <Parchment>
                <h3>{activeLetter.title}</h3>
                <p>{activeLetter.content}</p>
              </Parchment>
            ) : (
              <SelectMsg>💌 Select a letter to read</SelectMsg>
            )}
          </LetterContent>
        </LettersWrapper>
      </Container>
    </Section>
  );
};

export default Letters;
