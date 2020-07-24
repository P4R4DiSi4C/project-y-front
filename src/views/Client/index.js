// libs
import React, { useState, useEffect } from 'react';
import instance from '../../axios';
import moment from 'moment';
import appointmentService from '../../redux/appointment/appointment.service';

// components
import {
  Box,
  MaskedInput,
  Form,
  FormField,
  Button,
  TextInput,
  Heading,
} from 'grommet';

import DateTimeDrop from '../../components/DateTimeDrop';
import { navigate } from 'raviger';

const AddAppointment = async (appointment) => {
  const { firstName, lastName, uuid, email } = { ...appointment };
  const [hour, minute] = appointment.timeStart.split(':');
  const start = moment(appointment.date).set({ hour, minute }).toISOString();

  try {
    await appointmentService.add({
      firstName,
      lastName,
      calendar: uuid,
      email,
      start,
      description: 'test',
    });
  } catch (error) {
    console.log(error);
  }
};

export default ({ uuid }) => {
  useEffect(() => {
    async function fetchCalendarName() {
      try {
        const response = await instance.get('/calendar/' + uuid);

        setCalendar(response);
      } catch (error) {
        navigate('/');
      }
    }

    fetchCalendarName(uuid);
  }, [uuid]);

  const APPOINTMENT_FIELDS = {
    email: '',
    firstName: '',
    lastName: '',
    date: '',
    timeStart: '',
    uuid,
  };

  const [appointment, setAppointment] = useState(APPOINTMENT_FIELDS);
  const [calendar, setCalendar] = useState({
    name: '',
  });

  return (
    calendar.name.length > 0 && (
      <Box flex fill justify='center' align='center' direction='column'>
        <Box
          background='background_comp'
          round='small'
          pad='medium'
          border={{ color: 'border', size: 'xsmall' }}
          elevation='small'
          width='medium'
          align='center'
        >
          <Form
            as='form'
            value={appointment}
            onChange={(newValue) => {
              setAppointment(newValue);
            }}
            onSubmit={(event) => {
              event.preventDefault();
              AddAppointment(appointment);
            }}
          >
            <Heading level={3} margin={{ vertical: '6px', horizontal: '12px' }}>
              Nouveau rendez-vous
            </Heading>
            <DateTimeDrop state={appointment} setAppointment={setAppointment} />
            <FormField label='Prénom' name='firstName'>
              <TextInput name='firstName' />
            </FormField>
            <FormField label='Nom' name='lastName'>
              <TextInput name='lastName' />
            </FormField>
            <FormField label='Email' name='email' required>
              <MaskedInput
                name='email'
                type='email'
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
    )
  );
};
