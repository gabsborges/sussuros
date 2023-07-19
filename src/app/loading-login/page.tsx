import { keyframes, styled } from "styled-components";

const flipCard = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(-180deg);
  }
`;

const Main = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  animation: ${flipCard} 2s ease-in-out infinite;
  transition: transform 0.9s;
	transform-style: preserve-3d;

`;

const H1 = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: var(--primary-color-full);
  padding-bottom: 30px;
`;

export default function LoadingLogin() {

  return (
    <Main>
      <Image src="./theStart.png" alt="The Start" width={250}/>
      <H1>Carregando sua conta...</H1>
    </Main>
  )
}