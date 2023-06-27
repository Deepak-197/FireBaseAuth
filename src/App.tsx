import React, { useEffect } from "react";
import { MantineProvider, Text } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "./Pages";
import { auth } from "./config";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) console.log(user);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1><a href="/auth">Login</a></h1>
        <h1><a href="/">Home</a></h1>
      </header>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
