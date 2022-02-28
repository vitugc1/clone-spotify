import React, { InputHTMLAttributes, memo } from 'react';
import { Container } from './styles';

type IInputProps =  InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  label: string;
} 

export const InputSignin: React.FC<IInputProps> = ({ type, label, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <input
        type={type}
        {...rest}
      />
    </Container>
  )
}

export const Input = memo(InputSignin);



