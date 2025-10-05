import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Products from "./Products.tsx";
import Contact from "./Contact.tsx";
import "./utils/i18n.ts";
import LocalizationProvider from "./providers/localiztion-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocalizationProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/our-products"} element={<Products />} />
          <Route path={"/contact-us"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  </StrictMode>,
);
