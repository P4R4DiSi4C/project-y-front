import React, { useState } from 'react';

import {
  Box,
  FormField,
  Keyboard,
  Text,
  Calendar,
  MaskedInput,
  DropButton
} from 'grommet';

import { Schedule } from 'grommet-icons';

const DropContent = ({ state, onClose, setClientReg }) => {
  return (
    <Box align='center'>
      <Box>
        <Calendar
          locale='fr-CH'
          animate={false}
          date={state.date}
          onSelect={newDate => {
            setClientReg({
              ...state,
              date: newDate
            });
          }}
          showAdjacentDays={false}
          daysOfWeek={true}
          firstDayOfWeek={1}
        />
      </Box>
      <Box direction='row' width='small' gap='medium'>
        <Keyboard
          onEnter={event => {
            event.preventDefault(); // so drop doesn't re-open
            onClose();
          }}
        >
          <FormField name='time_start' label='De'>
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
        </Keyboard>
        <Keyboard
          onEnter={event => {
            event.preventDefault(); // so drop doesn't re-open
            onClose();
          }}
        >
          <FormField name='time_end' label='À'>
            <MaskedInput
              name='time_end'
              mask={[
                {
                  length: [1, 2],
                  options: ['8', '9', '10', '11', '13', '14', '15', '16', '17'],
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
        </Keyboard>
      </Box>
    </Box>
  );
};

export default ({ state, setClientReg }) => {
  const [open, setOpen] = useState();

  const onClose = () => {
    setOpen(false);
    setTimeout(() => setOpen(undefined), 1);
  };

  return (
    <Box align='center' pad='small'>
      <DropButton
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        dropContent={
          <DropContent
            state={state}
            onClose={onClose}
            setClientReg={setClientReg}
          />
        }
        dropAlign={{ top: 'bottom' }}
      >
        <Box direction='row' gap='medium' align='center' pad='small'>
          <Text color={state.date ? undefined : 'dark-5'}>
            {state.date
              ? `${new Date(
                  state.date
                ).toLocaleDateString()} ${state.time_start +
                  ' - ' +
                  state.time_end}`
              : 'Date et heure'}
          </Text>
          <Schedule />
        </Box>
      </DropButton>
    </Box>
  );
};
