import React, { useState } from 'react';

// redux
import { useDispatch } from 'react-redux';

import { addCalendar } from '../../redux/calendar/calendar.actions';
// components
import { Box, Button, FormField, Heading, Layer, TextInput } from 'grommet';
import { Close } from 'grommet-icons';

export default ({ setModal }) => {
  const [calName, setCalName] = useState('');
  const dispatch = useDispatch();

  return (
    <Layer
      position='center'
      onClickOutside={() => setModal(false)}
      onEsc={() => setModal(false)}
    >
      <Box
        pad='medium'
        width='large'
        as='form'
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addCalendar({ name: calName })).then(() => {
            setModal(false);
          }).catch(error => {

          });
        }}
      >
        <Box flex={false} direction='row' justify='between'>
          <Heading level={2} margin='none'>
            Ajouter un calendrier
          </Heading>
          <Button icon={<Close />} onClick={() => setModal(false)} />
        </Box>
        <Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>
          <FormField label='Nom du calendrier'>
            <TextInput
              value={calName}
              onChange={(event) => setCalName(event.target.value)}
            />
          </FormField>
        </Box>
        <Box flex={false} as='footer' align='center'>
          <Button type='submit' label='Ajouter' />
        </Box>
      </Box>
    </Layer >
  );
};
