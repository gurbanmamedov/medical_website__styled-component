import styled from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Services from "./components/Main/ServicesSection/ServicesContent/Services";
import Experts from "./components/Main/Experts/Experts";
import Stats from "./components/Main/Stats/Stats";
import Department from "./components/Main/Department/Department";

function App() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <Experts/>
        <Stats/>
        <Department/>
      </main>
    </>
  );
}

export default App;
