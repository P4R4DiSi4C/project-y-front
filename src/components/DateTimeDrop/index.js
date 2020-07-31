import React, { useState } from 'react';

import {
  Box,
  FormField,
  Text,
  Calendar,
  MaskedInput,
  DropButton
} from 'grommet';

import { Schedule } from 'grommet-icons';

const DropContent = ({ state, setAppointment }) => {
  return (
    <Box align='center'>
      <Box>
        <Calendar
          locale='fr-CH'
          animate={false}
          date={state.date}
          onSelect={newDate => {
            setAppointment({
              ...state,
              date: newDate
            });
          }}
          showAdjacentDays={false}
          daysOfWeek={true}
          firstDayOfWeek={1}
        />
      </Box>
      <FormField name='hour' label='Heure'>
        <MaskedInput
          name='hour'
          mask={[
            {
              length: [1, 2],
              options: ['08', '09', '10', '11', '13', '14', '15', '16', '17'],
              regexp: /^0[8-9]|1[0-7]$/,
              placeholder: 'hh'
            },
            { fixed: ':' },
            {
              length: 2,
              options: ['00', '05', '15', '30', '45'],
              regexp: /^0[0,5]|15|30|45$/,
              placeholder: 'mm'
            }
          ]}
        />
      </FormField>
    </Box>
  );
};

export default ({ state, setAppointment }) => {
  const [open, setOpen] = useState();

  return (
    <Box align='center' pad='small'>
      <DropButton
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        dropContent={
          <DropContent state={state} setAppointment={setAppointment} />
        }
        dropAlign={{ top: 'bottom' }}
      >
        <Box direction='row' gap='medium' align='center' pad='small'>
          <Text color={state.date ? undefined : 'dark-5'}>
            {state.date
              ? `${new Date(state.date).toLocaleDateString()} ${
              state.hour
              }`
              : 'Date et heure'}
          </Text>
          <Schedule />
        </Box>
      </DropButton>
    </Box>
  );
};
