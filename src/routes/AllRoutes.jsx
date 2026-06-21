import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../pages";
import { Header } from "../components";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </>
  )
}
