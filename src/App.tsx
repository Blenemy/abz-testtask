import { Header } from "./pages/homepage/Layout/Header/Header";
import { Main } from "./pages/homepage/Layout/Main/Main";
import { Container } from "./components/Container/Container";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
