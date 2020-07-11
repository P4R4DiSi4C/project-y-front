// libs
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, signIn, signIn2 } from '../../redux/user/user.actions';

// components
import { Box, Button, Form, FormField, MaskedInput, TextInput } from 'grommet';

const REGISTER_FIELDS = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const LOGIN_FIELDS = {
  email: '',
  password: '',
};

export default () => {
  const [user_reg, setUserReg] = useState(REGISTER_FIELDS);
  const [user_log, setUserLog] = useState(LOGIN_FIELDS);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(userActions.logout());
  }, []);

  return (
    <Box direction='row' fill='vertical' align='center' justify='evenly'>
      <Box width='medium'>
        <h1>REGISTER</h1>
        <Form
          value={user_reg}
          onChange={(nextValue) => {
            setUserReg(nextValue);
          }}
          //onReset={() => setValue(defaultValue)}
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            dispatch(signUp(user_reg));
          }}
        >
          <FormField label='Email' name='email' required>
            <MaskedInput
              name='email'
              mask={[
                { regexp: /^[\w\-_.]+$/, placeholder: 'exemple' },
                { fixed: '@' },
                { regexp: /^[\w]+$/, placeholder: 'gmail' },
                { fixed: '.' },
                { regexp: /^[\w]+$/, placeholder: 'com' },
              ]}
            />
          </FormField>
          <FormField label='Mot de passe' name='password'>
            <TextInput type='password' name='password' />
          </FormField>
          <FormField label='Prénom' name='firstName'>
            <TextInput name='firstName' />
          </FormField>
          <FormField label='Nom' name='lastName'>
            <TextInput name='lastName' />
          </FormField>
          <Box direction='row' justify='center' margin={{ top: 'medium' }}>
            <Button type='submit' label={"S'inscrire"} />
          </Box>
        </Form>
      </Box>
      <Box width='medium'>
        <h1>LOGIN</h1>
        <Form
          value={user_log}
          onChange={(nextValue) => {
            setUserLog(nextValue);
          }}
          //onReset={() => setValue(defaultValue)}
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            dispatch(signIn2(user_log));
          }}
        >
          <FormField label='Email' name='email' required>
            <MaskedInput
              name='email'
              mask={[
                { regexp: /^[\w\-_.]+$/, placeholder: 'exemple' },
                { fixed: '@' },
                { regexp: /^[\w]+$/, placeholder: 'gmail' },
                { fixed: '.' },
                { regexp: /^[\w]+$/, placeholder: 'com' },
              ]}
            />
          </FormField>
          <FormField label='Mot de passe' name='password'>
            <TextInput type='password' name='password' />
          </FormField>
          <Box direction='row' justify='center' margin={{ top: 'medium' }}>
            <Button type='submit' label={'Se connecter'} />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};
