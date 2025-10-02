import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Products from "./Products.tsx";
import Contact from "./Contact.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/our-products"} element={<Products />} />
        <Route path={"/contact-us"} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
