import { Header } from "./Components/Header";
import {Footer} from "./Components/Footer";
import { RouterMain } from "./Routers/RouterMain";
import "./styles/index.scss";

function App() {

  return (
    <>
      <Header />
      <main>
        <RouterMain />
      </main>
      <Footer />
    </>
  )
}

export default App
