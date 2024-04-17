import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Extrato } from "./components/Extrato.jsx";
import { Nav } from "./components/Nav.jsx";
import { Transacoes } from "./components/Transacoes.jsx";
import { GlobalContextProvider } from "./Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/transacoes", element: <Transacoes /> },
  { path: "/extrato", element: <Extrato /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
