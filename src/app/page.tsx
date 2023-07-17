"use client"

import { styled } from "styled-components"

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: var(--primary-color-full);
  padding-bottom: 30px;
`;

const Div = styled.div`
  width: 370px;
`;


const TextLabel = styled.p`
  position: absolute;
  top: -10px;
  left: 20px;
  padding: 0 5px;
  background-color: #0F172A;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--primary-color);

  &:focus-within ${TextLabel} {
    color: var(--primary-color-full); 
  }

  &:first-child {
    margin-bottom: 60px;
  }
`;


const Input = styled.input`
  padding: 15px 13px 13px 13px;
  font-size: 16px;
  color: var(--primary-color);
  background-color: transparent;
  border: 1px var(--primary-color) solid;
  border-radius: 10px;

  &::placeholder {
      color: var(--secondary-color);
  }
`;

const Forgot = styled.a`
  display: flex;
  justify-content: flex-end;
  text-decoration: underline;
  font-size: 12px;
  color: var(--primary-color);
  transition: all .3s ease-in-out;

  &:hover {
    color: var(--primary-color-full);
  }
`;

const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`;

const FirstButton = styled.button`
  background-color: var(--secondary-color-half);
  padding: 9px 33px 7px 33px;
  border-radius: 10px;
  border: solid 1px transparent;
  color: var(--primary-color);
  font-size: 16px;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    color: var(--primary-color-full);
    background-color: var(--secondary-color-minimum);
  }
`;

const SeccondButton = styled.button`
  background-color: transparent;
  padding: 9px 33px 7px 33px;
  border-radius: 10px;
  border: solid 1px var(--secondary-color-half);
  color: var(--secondary-color);
  font-size: 16px;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    color: var(--primary-color-full);
    background-color: var(--secondary-color-half);
  }
`;

export default function Home() {

  // const navigate = useNavigate();

  // const handleEntrarClick = () => {
  //   // Realize as ações necessárias antes de navegar para a próxima página
  //   // ...

  //   // Navegue para a próxima página
  //   navigate("/outra-pagina");
  // };

  // const handleCriarContaClick = () => {
  //   // Realize as ações necessárias antes de navegar para a próxima página
  //   // ...

  //   // Navegue para a próxima página
  //   navigate("/outra-pagina");
  // };

  return (
    <Main>
      <Image src='./logo.png' alt="" />

      <Title>Sussuros do Baralho</Title>

      <Div>

        <Label>
          <TextLabel>E-mail</TextLabel>
          <Input type="text" placeholder="Digite seu e-mail"/>
        </Label>

        <Label>
        <TextLabel>Senha</TextLabel>
          <Input type="password" placeholder="Digite sua senha"/>
        </Label>
        <Forgot href="#">Esqueceu sua senha?</Forgot>

        <DivButton>
          <FirstButton >Entrar</FirstButton>
          <SeccondButton >Criar conta</SeccondButton>
        </DivButton>
      </Div>
    </Main>
  )
}
