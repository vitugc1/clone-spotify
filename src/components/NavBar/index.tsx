import React from 'react'

import LogoSpotifySvg from '../../assets/logoSpotify.svg'
import { FaHome } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import { VscLibrary } from 'react-icons/vsc'
import { Container } from './styles'

export const NavBar: React.FC = () => {
  
  return (
    <Container>
      <img src={LogoSpotifySvg} alt="" />

      <nav>
      <button>
        <FaHome style={{ fontSize: '2rem', borderRadius: '20%' }} />
        <strong>Home</strong>
      </button>
      <button>
        <HiSearch style={{ fontSize: '2rem', borderRadius: '20%' }} />
        <strong>Pesquisa</strong>
      </button>
      <button>
        <VscLibrary style={{ fontSize: '2rem', borderRadius: '20%' }} />
        <strong>Meu Spotify</strong>
      </button>
      </nav>
    </Container>
  )
}
