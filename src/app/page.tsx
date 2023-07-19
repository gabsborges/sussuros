"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { keyframes } from 'styled-components';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from './services/firebaseConfig';
import styled from 'styled-components';
import LoadingLogin from './loading-login/page';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const levitate = keyframes`
  0% {
    transform: translateY(15px)
  }
  50% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(15px)
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

const Image = styled.img`
  padding-bottom: 30px;
  animation: ${levitate} 3s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: var(--primary-color-full);
  padding-bottom: 30px;
  animation: ${fadeIn} 3s ease-in;
`;

const Div = styled.div`
  width: 370px;
  animation: ${fadeIn} 3s ease-in;
`;

const TextLabel = styled.p`
  position: absolute;
  top: -10px;
  left: 20px;
  padding: 0 5px;
  background-color: #0f172a;
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
  transition: all 0.3s ease-in-out;

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
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--primary-color-full);
    background-color: var(--secondary-color-minimum);
  }
`;

const SecondButton = styled.button`
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

const ErrorMessage = styled.p`
  font-size: 12px;
  color: #e11d48;
`;

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTextError, setEmailTextError] = useState('');
  const [passwordTextError, setPasswordTextError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)
  const router = useRouter();

  const handleLogin = () => {
    setEmailError(false);
    setPasswordError(false);
    setEmailTextError('');
    setPasswordTextError('');

    if (email.length === 0) {
      setEmailError(true);
      setEmailTextError('Este campo precisa ser preenchido');
    }

    if (password.length === 0) {
      setPasswordError(true);
      setPasswordTextError('Este campo precisa ser preenchido');
    }

    if (email.length !== 0 && password.length !== 0) {
      signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail('');
          setPassword('');
          router.push('/dashboard');
        })
        .catch((error) => {
          
        });
    }
  };

  if(loading) {
    return <LoadingLogin/>
  }

  const handleCreateAccount = () => {
    router.push('/create-account');
  };

  return (
    <Main>
      <Image src="./logo.png" alt="" />
      <Title>Sussuros do Baralho</Title>
      <Div>
        <Label>
          <TextLabel>E-mail</TextLabel>
          <Input
            type="text"
            placeholder="Digite seu e-mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <ErrorMessage>Preencha o campo "E-mail"</ErrorMessage>}
          {emailTextError && <ErrorMessage>{emailTextError}</ErrorMessage>}
        </Label>
        <Label>
          <TextLabel>Senha</TextLabel>
          <Input
            type="password"
            placeholder="Digite sua senha"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          {passwordError && <ErrorMessage>Preencha o campo "Senha"</ErrorMessage>}
          {passwordTextError && <ErrorMessage>{passwordTextError}</ErrorMessage>}
        </Label>
        <Forgot href="#">Esqueceu sua senha?</Forgot>
        <DivButton>
          <FirstButton onClick={handleLogin}>Entrar</FirstButton>
          <SecondButton onClick={handleCreateAccount}>Criar conta</SecondButton>
        </DivButton>
      </Div>
    </Main>
  );
}
