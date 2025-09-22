import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
  import { HashRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(

<HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
  </Routes>
</HashRouter>

);
