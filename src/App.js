import "./App.css";
import Creations from "./components/Creations/Creations";
import Header from "./components/Header/Header";
import InteractiveVR from "./components/VR/InteractiveVR";

function App() {
  return (
    <>
      <Header />
      <InteractiveVR />
      <Creations />
    </>
  );
}

export default App;
