// libs
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/user/user.actions';

// components
import { Box, Button, Form, FormField, MaskedInput, TextInput } from 'grommet';

const LOGIN_FIELDS = {
  email: '',
  password: ''
};

export default () => {
  const [user_log, setUserLog] = useState(LOGIN_FIELDS);
  const dispatch = useDispatch();

  return (
    <Box width="medium">
      <h1>LOGIN</h1>
      <Form
        value={user_log}
        onChange={nextValue => {
          setUserLog(nextValue);
        }}
        onSubmit={event => {
          event.preventDefault();
          dispatch(signIn(user_log));
        }}
      >
        <FormField label="Email" name="email" required>
          <MaskedInput
            name="email"
            type="email"
            mask={[
              { regexp: /^[\w\-_.]+$/, placeholder: 'exemple' },
              { fixed: '@' },
              { regexp: /^[\w]+$/, placeholder: 'gmail' },
              { fixed: '.' },
              { regexp: /^[\w]+$/, placeholder: 'com' }
            ]}
          />
        </FormField>
        <FormField label="Mot de passe" name="password">
          <TextInput type="password" name="password" />
        </FormField>
        <Box direction="row" justify="center" margin={{ top: 'medium' }}>
          <Button type="submit" label={'Se connecter'} />
        </Box>
      </Form>
    </Box>
  );
};
