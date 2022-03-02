import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 300px; //This is the height of image
  flex-direction: column;
`;

const _Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  border: 2px solid #000;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  margin-top: 3rem;
  padding: 1rem 3rem;
`;

function App() {
  const [phrase, setPhrase] = useState({});

  const consultarAPI = async () => {
    const res = await fetch(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );

    const data = await res.json();

    setPhrase(data[0]);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Container>
      <Phrase phrase={phrase}></Phrase>
      <_Button onClick={consultarAPI}>Obtener Frase</_Button>
    </Container>
  );
}

export default App;
