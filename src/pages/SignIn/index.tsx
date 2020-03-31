import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


// CUSTOM IMPORTS
import { signInRequest } from '../../store/modules/auth/actions';

// import { Container } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = () => {} 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Sign In</button>
      </form>

      <Link to="/register">cadastre-se</Link>
    </>
  );
}
