import React from "react"
import { AuthContextProvider } from "./context/AuthContext"
import { AppRouter } from "./routers/router"
import { GlobalStyle } from "./styles/global"

export const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
      <GlobalStyle />
    </AuthContextProvider>
  )
}


