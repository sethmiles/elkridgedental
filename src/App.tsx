import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PhoneIcon from "@mui/icons-material/Phone";
import { useUiContext } from "./context/UiContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Landing } from "./components/Landing";

function App() {
  const { isMobile } = useUiContext();
  return (
    <>
      <Header />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
