import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo ao lado." />
    <S.Title>React Avançado</S.Title>
    <S.Description>Typescript, NextJS, e Styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para um computador"
    />
  </S.Wrapper>
)

export default Main
