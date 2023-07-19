import { styled } from "styled-components";

const Main = styled.div`
  min-height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: var(--primary-color-full);
  padding-bottom: 30px;
`;

export default function CreatingAccount() {
  return (
    <Main>
      <H1>Sua conta esta sendo criada <br/>por favor aguarde...</H1>
    </Main>
  )
}