import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

const SignUp = () => (
  <>
    <img src={logo} alt='Gobarber-logo' />

    <form>
      <input type='text' placeholder='Nome completo' />
      <input type='email' placeholder='Seu e-mail' />
      <input type='password' placeholder='Sua senha secreta' />

      <button type='submit'>Criar conta</button>
      <Link to='/'>Já tenho uma conta</Link>
    </form>
  </>
);

export default SignUp;
