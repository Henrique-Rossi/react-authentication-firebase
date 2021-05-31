import React, { useState } from "react"
import "./style.css"
import { Header } from "../../Components/header"
export function HomePage() {
  return (
    <div>
      <Header />
      <div className="home">
        <h2> Bem Vindo </h2>
      </div>


    </div>
  )
}