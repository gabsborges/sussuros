"use client"

import { useRouter } from "next/navigation";
import { keyframes, styled } from "styled-components";

const toUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Main = styled.div`
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-size: 32px;
  font-weight: bold;
  color: var(--primary-color-full);
  padding-bottom: 30px;
`;

const Div = styled.div`
  width: 370px;

  animation: ${toUp} .5s ease-in;
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
  margin-bottom: 30px;

  &:focus-within ${TextLabel} {
    color: var(--primary-color-full); 
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

const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export default function CreateAccount() {

  const { push } = useRouter();

  const handleEntrarClick = () => {
    // Realize as ações necessárias antes de navegar para a próxima página
    // ...

    // Navegue para a próxima página
    ("/outra-pagina");
  };

  const handleVoltar = () => {
    push("/");
  };

  return (
<Main>
      <Div>

      <Title>Crie sua conta</Title>

        <Label>
          <TextLabel>Usuario</TextLabel>
          <Input type="text" placeholder="Digite seu usuario" required/>
        </Label>

        <Label>
          <TextLabel>E-mail</TextLabel>
          <Input type="text" placeholder="Digite seu e-mail" required/>
        </Label>

        <Label>
        <TextLabel>Senha</TextLabel>
          <Input type="password" placeholder="Digite sua senha" required/>
        </Label>

        <Label>
        <TextLabel>Confirme sua senha</TextLabel>
          <Input type="password" placeholder="Repita sua senha" required/>
        </Label>

        <DivButton>
          <FirstButton >Criar</FirstButton>
          <SeccondButton onClick={handleVoltar}>Voltar</SeccondButton>
        </DivButton>

      </Div>
    </Main>
  )
}