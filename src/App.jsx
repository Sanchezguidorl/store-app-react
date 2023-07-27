import "bootstrap/dist/css/bootstrap.min.css";
import {ShoesContextProvider} from "./components/contexts/ShoesContextProvider";
import Body from "./components/Body";

function App() {

  return (
    <>
    <ShoesContextProvider>
<Body/>
      </ShoesContextProvider>
    </>
  );
}
export default App;
