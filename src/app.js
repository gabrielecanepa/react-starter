import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Logo = styled(() => <img alt="logo" src="/logo.svg" />)`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: app-logo-spin infinite 20s linear;
  }
  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Link = styled.a`
  color: #61dafb;
`

const App = () => (
  <Container>
    <Header>
      <Logo />
      <p>
        {'Edit '}
        <code>{'src/app.js'}</code>
        {' and save to reload.'}
      </p>
      <Link className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
        {'Learn React'}
      </Link>
    </Header>
  </Container>
)

export default App
