import { getLocalStorageToken } from "../js/Api";
import { MainRouter } from "../routes/MainRouter";
import { Header } from "./header/Header";

function App() {
  const token = getLocalStorageToken();
  return (
    <>
      <Header />
      <MainRouter />
    </>
  );
}

export default App;
