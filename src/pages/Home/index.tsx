import React from 'react'
import { NavBar } from '../../components/NavBar'

import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <div className="content-navBar">
        <NavBar />
      </div>
      <div></div>
    </Container>
  )
}

