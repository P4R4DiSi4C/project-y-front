// libs
import React, { useState } from 'react';

// components
import {
  Box,
  MaskedInput,
  FormField,
  Button,
  TextInput,
  Heading
} from 'grommet';

const CLIENT_FIELDS = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  date: ''
};

export default () => {
  const [client_reg, setClientReg] = useState(CLIENT_FIELDS);

  return (
    <Box flex fill justify='center' align='center' direction='column'>
      <Box
        as='form'
        value={client_reg}
        onChange={newValue => {
          setClientReg(newValue);
        }}
        background='background_comp'
        round='small'
        pad='medium'
        border={{ color: 'border', size: 'xsmall' }}
        elevation='small'
        width={{ min: '30%' }}
      >
        <Heading level={3} margin={{ vertical: '6px', horizontal: '12px' }}>
          Nouveau rendez-vous
        </Heading>
        <FormField label='Prénom' name='firstName'>
          <TextInput name='firstName' />
        </FormField>
        <FormField label='Nom' name='lastName'>
          <TextInput name='lastName' />
        </FormField>
        <FormField label='Email' name='email' required>
          <MaskedInput
            name='email'
            mask={[
              { regexp: /^[\w\-_.]+$/, placeholder: 'exemple' },
              { fixed: '@' },
              { regexp: /^[\w]+$/, placeholder: 'gmail' },
              { fixed: '.' },
              { regexp: /^[\w]+$/, placeholder: 'com' }
            ]}
          />
        </FormField>
        <FormField name='date' label='Date'></FormField>
        <Button alignSelf='center' type='submit' label='Submit' />
      </Box>
    </Box>
  );
};
