import styled from '@emotion/styled';

const ContainerPhrase = styled.div`
  background-color: #fff;
  padding: 3rem;
  border-radius: 8px;
  max-width: 800px;
  position: relative;

  &::before {
    content: open-quote;
    color: #000;
    font-size: 8rem;
    position: absolute;
    top: 0;
    left: 50%;
  }

  h1 {
    text-align: center;
  }

  p {
    color: #666;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: right;
  }
`;
const Phrase = ({ phrase }) => {
  return (
    <ContainerPhrase>
      <h1>{phrase.quote}</h1>
      <p>- {phrase.author}</p>
    </ContainerPhrase>
  );
};

export default Phrase;
