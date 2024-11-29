import { useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { CharacterProvider } from "./utils/context/character";

function App() {
  return (
    <>
      <ThemeProvider>
        <CharacterProvider>
          <div className="h-screen w-screen">
            <Header />
            <Outlet />
          </div>
        </CharacterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
