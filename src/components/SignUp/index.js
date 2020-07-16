// libs
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/user/user.actions';

// components
import { Box, Button, FormField, MaskedInput, TextInput } from 'grommet';

const REGISTER_FIELDS = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

export default () => {
  const [user_reg, setUserReg] = useState(REGISTER_FIELDS);
  const dispatch = useDispatch();

  return (
    <Box
      as='form'
      value={user_reg}
      onChange={(nextValue) => {
        setUserReg(nextValue);
      }}
      onSubmit={(event) => {
        event.preventDefault();
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
    </Box>
  );
};
