import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  Text,
  GoogleButton,
  Span,
  Field,
  SignBlock,
  SignButton,
  FieldsContainer,
  Error,
} from './AuthForm.style';
import authOperations from 'redux/auth/authOperations';
import { getError } from 'redux/auth/authSelectors';
import { BASE_URL } from 'services/API';
import { ReactComponent as GoogleIcon } from 'assets/images/google.svg';

const AuthForm = ({ auth }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const newError = useSelector(getError);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setError(newError);
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [newError]);

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    auth
      ? dispatch(authOperations.logIn({ email, password }))
      : dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleOnClick = e => {
    e.preventDefault();
    history.push(auth ? '/register' : '/auth');
    setError(null);
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Text>
        You can use your Google Account to {auth ? 'authorize:' : 'register:'}
      </Text>

      <GoogleButton href={`${BASE_URL}/auth/google`}>
        <GoogleIcon width="18" height="18" />
        <Span>Google</Span>
      </GoogleButton>
      <Text>
        Or {auth ? 'login' : 'register'} to our app using e-mail and password:
      </Text>
      <FieldsContainer>
        {error && <Error>{error.message ?? error}</Error>}
        {!auth && (
          <Field
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            error={Boolean(error)}
          />
        )}
        <Field
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          error={Boolean(error)}
        />
        <Field
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          error={Boolean(error)}
        />
      </FieldsContainer>

      <SignBlock>
        <SignButton
          active={auth}
          type={auth ? 'submit' : 'button'}
          onClick={!auth ? handleOnClick : null}
        >
          Sign in
        </SignButton>
        <SignButton
          active={!auth}
          type={!auth ? 'submit' : 'button'}
          onClick={auth ? handleOnClick : null}
        >
          Sign up
        </SignButton>
      </SignBlock>
    </Form>
  );
};

export default AuthForm;
