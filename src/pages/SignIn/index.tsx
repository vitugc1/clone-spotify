import React from 'react';

import LogoSpotifySvg from '../../assets/logoSpotify.svg';
import { Input } from '../../components/InputSignin';
import { Container, Content } from './styles';

import { FcGoogle } from 'react-icons/fc';
import { AiOutlineFacebook } from 'react-icons/ai';

export const SignIn: React.FC = () => {
  return (
    <Container>
        <Content>
            <form action="">
              <img src={LogoSpotifySvg} alt="Logo Spotify"/>
              <Input type='email' label="E-mail" />
              <Input type='password' label="Senha" />
              <button type="submit">Entrar</button>
            </form>
           
            <div>
              <div className="separator">ou</div>
              <button className="button-facebook">
                <AiOutlineFacebook style={{ fontSize: '25px', color: '#fff'}} />
                Entrar com Facebook
              </button>
              <button className="button-google">
                <FcGoogle style={{ fontSize: '25px' }} />
                Entrar com Google
              </button>
            </div>
        </Content>
    </Container>
  )
}

