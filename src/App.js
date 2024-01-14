import React from "react"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import Main from "./components/sections/Main"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
