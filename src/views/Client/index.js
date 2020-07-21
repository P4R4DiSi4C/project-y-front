// libs
import React, { useState } from 'react';

// components
import {
  Box,
  MaskedInput,
  Form,
  FormField,
  Button,
  TextInput,
  Heading,
  DateInput,
} from 'grommet';

const CLIENT_FIELDS = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  date: new Date().toISOString(),
  time_start: '',
  time_end: '',
};

export default ({ uuid }) => {
  const [client_reg, setClientReg] = useState(CLIENT_FIELDS);

  return (
    <Box flex fill justify='center' align='center' direction='column'>
      <Box
        background='background_comp'
        round='small'
        pad='medium'
        border={{ color: 'border', size: 'xsmall' }}
        elevation='small'
        width={{ min: '30%' }}
        align='center'
      >
        <Form
          as='form'
          value={client_reg}
          onChange={(newValue) => {
            setClientReg(newValue);
          }}
        >
          <Heading level={3} margin={{ vertical: '6px', horizontal: '12px' }}>
            Nouveau rendez-vous
          </Heading>
          <FormField name='date' label='Date'>
            <DateInput name='date' format='dd/mm/yyyy' />
          </FormField>
          <Box direction='row' justify='between'>
            <FormField name='time_start' label='Début'>
              <TextInput name='time_start' />
            </FormField>
            <FormField name='time_end' label='Fin'>
              <TextInput name='time_end' />
            </FormField>
          </Box>
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
                { regexp: /^[\w]+$/, placeholder: 'com' },
              ]}
            />
          </FormField>
          <Box direction='row' justify='center' margin={{ top: 'medium' }}>
            <Button type='submit' label={'Inviter'} />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};
