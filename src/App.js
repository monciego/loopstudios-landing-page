import "./App.css";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InteractiveVR from "./components/VR/InteractiveVR";

function App() {
  return (
    <>
      <Header />
      <InteractiveVR />
      <Creations />
      <Footer />
    </>
  );
}

export default App;
