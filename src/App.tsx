import React from "react"
import { AppRouter } from "./routers/router"
import { GlobalStyle } from "./styles/global"

export const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
      <GlobalStyle />
    </div>
  )
}


