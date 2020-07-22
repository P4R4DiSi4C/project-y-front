// libs
import React, { useState, useEffect, useCallback } from 'react';
import instance from '../../axios';

// components
import {
  Box,
  MaskedInput,
  Form,
  FormField,
  Button,
  TextInput,
  Heading
} from 'grommet';

import DateTimeDrop from '../../components/DateTimeDrop';
import { navigate } from 'raviger';

const CLIENT_FIELDS = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  date: new Date().toISOString(),
  time_start: '',
  time_end: ''
};

export default ({ uuid }) => {
  const [client_reg, setClientReg] = useState(CLIENT_FIELDS);

  const [calendar, setCalendar] = useState({
    name: ''
  });

  const fetch = useCallback(async (uuid) => {
    const response = await instance.get('/calendar/' + uuid);

    return response;
  }, []);

  useEffect(() => {
    fetch(uuid)
      .then(response => {
        setCalendar(response);
      }).catch(error => {
        navigate('/');
      });
  }, [uuid, fetch]);

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
          onChange={newValue => {
            setClientReg(newValue);
          }}
        >
          <Heading level={3} margin={{ vertical: '6px', horizontal: '12px' }}>
            Nouveau rendez-vous
          </Heading>
          {/* <FormField name='date' label='Date'> */}
          {/* <DateInput name='date' format='dd/mm/yyyy' /> */}
          <DateTimeDrop state={client_reg} setClientReg={setClientReg} />
          {/* </FormField> */}
          {/* <Box direction='row' justify='between'>
            <FormField name='time_start' label='Début'>
              <MaskedInput
                name='time_start'
                mask={[
                  {
                    length: [1, 2],
                    options: [
                      '08',
                      '09',
                      '10',
                      '11',
                      '13',
                      '14',
                      '15',
                      '16',
                      '17'
                    ],
                    regexp: /^1[1-2]$|^[0-9]$/,
                    placeholder: 'hh'
                  },
                  { fixed: ':' },
                  {
                    length: 2,
                    options: ['00', '05', '15', '30', '45'],
                    regexp: /^[0-5][0-9]$|^[0-9]$/,
                    placeholder: 'mm'
                  }
                ]}
              />
            </FormField>
            <FormField name='time_end' label='Fin'>
              <MaskedInput
                name='time_end'
                mask={[
                  {
                    length: [1, 2],
                    options: [
                      '8',
                      '9',
                      '10',
                      '11',
                      '13',
                      '14',
                      '15',
                      '16',
                      '17'
                    ],
                    regexp: /^1[1-2]$|^[0-9]$/,
                    placeholder: 'hh'
                  },
                  { fixed: ':' },
                  {
                    length: 2,
                    options: ['00', '05', '15', '30', '45'],
                    regexp: /^[0-5][0-9]$|^[0-9]$/,
                    placeholder: 'mm'
                  }
                ]}
              />
            </FormField>
          </Box> */}
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
          <Box direction='row' justify='center' margin={{ top: 'medium' }}>
            <Button type='submit' label={'Inviter'} />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};
