// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import App from'./App'
// import './index.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Layout from "./Layout";
import Details from "./Details";
import Student from "./Student";
import Addstudent from "./Addstudent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Student" element={<Student />}></Route>
          <Route path="/Student/:id" element={<Details />}></Route>
          <Route path="/Student/add" element={<Addstudent />}></Route>
          <Route path="/Student/edit/:id" element={<Addstudent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

