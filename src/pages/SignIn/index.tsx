import React, { FormEvent, useRef, useState } from 'react';

import LogoSpotifySvg from '../../assets/logoSpotify.svg';
import { Input } from '../../components/InputSignin';
import { Container, Content } from './styles';

import { FcGoogle } from 'react-icons/fc';
import { AiOutlineFacebook } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';


export const SignIn: React.FC = () => {
  const navigator = useNavigate();
  const { user, signInWithGoogle, signInWithFacebook, sigInWithEmailAndSenha } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSignInWithGoogle() {
      if(!user){
          await signInWithGoogle();
      }

      navigator('/home');
  }

  async function handleSignInWithFacebook() {
    if(!user){
        await signInWithFacebook();
    }
    
    navigator('/home');
  }

  async function handleWithEmailAndSenha(event: FormEvent) {
    event.preventDefault();
    if(!user){
        await sigInWithEmailAndSenha(email, password);

    }

    navigator('/home');
  }

  return (
    <Container>
        <Content>
            <form onSubmit={handleWithEmailAndSenha}>
              <img src={LogoSpotifySvg} alt="Logo Spotify"/>
              <Input
                required
                onInvalid={() => alert('Email inválido')}
                onChange={(event) => setEmail(event.target.value)}
                type='email' 
                label="E-mail" 
              />
              <Input
                required
                minLength={8}
                onInvalid={() => alert('Senha errar ou muito curta')}
                onChange={(event) => setPassword(event.target.value)}
                type='password' 
                label="Senha"
              />
              <button type="submit">Entrar</button>
            </form>
           
            <div>
              <div className="separator">ou</div>
              <button 
                type="submit"
                onClick={handleSignInWithFacebook}
                className="button-facebook"
                >
                <AiOutlineFacebook style={{ fontSize: '25px', color: '#fff'}} />
                Entrar com Facebook
              </button>
              <button
                type='submit'
                onClick={handleSignInWithGoogle}
                className="button-google"
              >
                <FcGoogle style={{ fontSize: '25px' }} />
                Entrar com Google
              </button>
                
            </div>
        </Content>
    </Container>
  )
}

