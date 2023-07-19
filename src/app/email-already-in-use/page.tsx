import { styled } from "styled-components";
import { useRouter } from 'next/navigation';

const Main = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  animation: all .4s ease-in-out;
  transition: transform 0.9s;
	transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg)
  }
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: var(--primary-color-full);
  padding-bottom: 30px;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 9px 33px 7px 33px;
  border-radius: 10px;
  border: solid 1px var(--secondary-color-half);
  color: var(--secondary-color);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--primary-color-full);
    background-color: var(--secondary-color-half);
  }
`;

export default function EmailAlreadyInUse() {

  const router = useRouter();

  const handleVoltar = () => {
    router.push('/');
  };

  return (
    <Main>
      <Image src="./theStart.png" alt="The Start" width={250}/>
      <H1>Este e-mail já esta sendo utilizado <br/>crie uma nova conta ou acesse a já existente.</H1>
      <Button onClick={handleVoltar}>Voltar</Button>
    </Main>
  )
}