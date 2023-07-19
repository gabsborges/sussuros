"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { keyframes } from 'styled-components';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import styled from 'styled-components';
import CreatingAccount from '../creating-account/page';
import EmailAlreadyInUse from '../email-already-in-use/page';

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
  animation: ${toUp} 0.5s ease-in;
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

export default function CreateAccount() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordTextError, setPasswordTextError] = useState('');
  const [usuarioError, setUsuarioError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);
  const [validate, setValidate] = useState(false);
  const [emailAlreadyInUse, setEmailAlreadyInUse] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSamePassword = () => {
    if (password === repeatPassword) {
      setValidate(true);
      handleCreateAccount();
    } else {
      setValidate(false);
      setPasswordTextError('As senhas precisam ser iguais');
    }
  };

  const handleValidation = () => {
    if (
      usuario.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      repeatPassword.length !== 0
    ) {
      handleSamePassword();
    } else {
      handleNullField();
    }
  };

  const handleNullField = () => {
    setUsuarioError(usuario.length === 0);
    setEmailError(email.length === 0);
    setPasswordError(password.length === 0);
    setRepeatPasswordError(repeatPassword.length === 0);
  };

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(email, password)
    setUsuario('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  if(error) {
    return <EmailAlreadyInUse/>
  }

  if(loading) {
    return <CreatingAccount/>
  }

  const handleVoltar = () => {
    router.push('/');
  };

  return (
        <Main>
      <Div>
        <Title>Crie sua conta</Title>
        <form onSubmit={handleValidation}>
          <Label>
            <TextLabel>Usuario</TextLabel>
            <Input
              type="text"
              placeholder="Digite seu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          {usuarioError && <ErrorMessage>Preencha o campo "Usuario"</ErrorMessage>}
          </Label>
          <Label>
            <TextLabel>E-mail</TextLabel>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          {emailError && <ErrorMessage>Preencha o campo "E-mail"</ErrorMessage>}
          {<ErrorMessage>{emailAlreadyInUse}</ErrorMessage>}
          </Label>
          <Label>
            <TextLabel>Senha</TextLabel>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
            />
          {passwordError && <ErrorMessage>Preencha o campo "Senha"</ErrorMessage>}
          </Label>
          <Label>
            <TextLabel>Confirme sua senha</TextLabel>
            <Input
              type="password"
              placeholder="Repita sua senha"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              minLength={6}
            />
          {repeatPasswordError && (
            <ErrorMessage>Preencha o campo "Confirme sua senha"</ErrorMessage>
          )}
          {passwordTextError && <ErrorMessage>{passwordTextError}</ErrorMessage>}
          </Label>
          <DivButton>
            <FirstButton type="submit">Criar</FirstButton>
            <SecondButton onClick={handleVoltar}>Voltar</SecondButton>
          </DivButton>
        </form>
      </Div>
    </Main>
  );
}
