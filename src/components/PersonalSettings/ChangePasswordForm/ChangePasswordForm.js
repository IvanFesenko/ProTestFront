import { CircularProgress, makeStyles } from '@material-ui/core';

import { useEffect, useState } from 'react';
import { useStyles as useStylesForm } from 'components/AuthForm';

import {
  Field,
  SignBlock,
  SignButton,
} from 'components/AuthForm/AuthForm.style';
import {
  Form,
  ErrorMsg,
  FormWrapper,
  FormHeader,
  TextHeader,
} from './Form.style';
import ShowPasswordToggle from './ShowPasswordToggle';

const useStylesLoader = makeStyles({
  loader: {
    color: 'white',
  },
});

function ChangePasswordForm() {
  const classes = useStylesForm();
  const styleLoader = useStylesLoader();
  const [oldPassword, setSldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let showError;
    if (error) {
      showError = setTimeout(() => {
        setError(false);
      }, 3000);
    }

    return () => {
      clearTimeout(showError);
    };
  }, [error]);

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'oP':
        return setSldPassword(value);
      case 'nP':
        return setNewPassword(value);
      case 'cNp':
        return setConfirmPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('New password does not match with Confirm password');
      return;
    }
    setSending(true);
    setSldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormHeader>
          <TextHeader>Change your password:</TextHeader>
          <ShowPasswordToggle
            showPassword={showPassword}
            handleShowPassword={setShowPassword}
          />
        </FormHeader>

        <Field
          className={classes.root}
          label="Old Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          name="oP"
          required
          value={oldPassword}
          onChange={handleChange}
        />
        <Field
          className={classes.root}
          label="New Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          name="nP"
          required
          value={newPassword}
          onChange={handleChange}
        />
        <Field
          className={classes.root}
          label="Confirm new password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          name="cNp"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        {error && <ErrorMsg error={error}>{error}</ErrorMsg>}

        <SignBlock>
          <SignButton type="submit" sending={sending} disabled={sending}>
            {sending ? (
              <CircularProgress className={styleLoader.loader} />
            ) : (
              'Submit'
            )}
          </SignButton>
        </SignBlock>
      </Form>
    </FormWrapper>
  );
}

export default ChangePasswordForm;
