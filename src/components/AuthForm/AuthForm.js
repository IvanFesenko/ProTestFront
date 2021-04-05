import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form,
  Text,
  GoogleButton,
  Span,
  Field,
  SignBlock,
  SignButton,
} from './AuthForm.style';
import { ReactComponent as GoogleIcon } from 'assets/images/google.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0px',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#FF6B09',
    },
    '& .MuiFormLabel-root': {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '1.21',
      letterSpacing: '0.02em',
      color: '#BBBBBB',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FF6B09',
    },
  },
});

const AuthForm = ({ auth }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;

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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleOnClick = () => {
    history.push(auth ? '/register' : '/auth');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Text>
        You can use your Google Account to {auth ? 'authorize:' : 'register:'}
      </Text>
      <GoogleButton>
        <GoogleIcon width="18" height="18" />
        <Span>Google</Span>
      </GoogleButton>
      <Text>
        Or {auth ? 'login' : 'register'} to our app using e-mail and password:
      </Text>
      {!auth && (
        <Field
          className={classes.root}
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      )}
      <Field
        className={classes.root}
        label="E-mail"
        variant="outlined"
        type="email"
        name="email"
        required
        value={email}
        onChange={handleChange}
      />
      <Field
        className={classes.root}
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        required
        value={password}
        onChange={handleChange}
      />
      <SignBlock>
        <SignButton
          active={auth}
          type={auth ? 'submit' : 'button'}
          onClick={!auth ? handleOnClick : undefined}
        >
          Sign in
        </SignButton>
        <SignButton
          active={!auth}
          type={!auth ? 'submit' : 'button'}
          onClick={auth ? handleOnClick : undefined}
        >
          Sign up
        </SignButton>
      </SignBlock>
    </Form>
  );
};

export default AuthForm;
