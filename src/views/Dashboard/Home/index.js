// libs
import React, { useState } from 'react';

// redux
import { useDispatch } from 'react-redux';
import { addCalendar } from '../../../redux/calendar/calendar.actions';

// components
import {
  Box,
  Button,
  FormField,
  Heading,
  Layer,
  List,
  Text,
  TextInput,
} from 'grommet';

import { MapLocation, Add, Close } from 'grommet-icons';

export default () => {
  const [selected, setSelected] = React.useState();
  const [addCalModal, setAddCalModal] = React.useState();
  const [calName, setCalName] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <Box fill='vertical' basis='40%'>
        <Heading
          level='3'
          textAlign='start'
          margin={{ top: 'none', bottom: '1rem' }}
        >
          Rendez-vous du jour
        </Heading>
        <Box fill direction='column' overflow={{ vertical: 'auto' }}>
          <List
            pad='small'
            data={[
              {
                name: 'Sacha Bonsoir',
                date: '12:00-14:00',
                email: 'sacha.bonsoir@hotmail.be',
                tel: '076 399 02 03',
                address: 'Rte de xxxx',
              },
              {
                name: 'David Bonjour',
                date: '10:00-12:00',
                email: 'sacha.bonsoir@hotmail.be',
                tel: '076 399 02 03',
                address: 'Rte de xxxx',
              },
              {
                name: 'Ryan Trump',
                date: '14:00-15:00',
                email: 'sacha.bonsoir@hotmail.be',
                tel: '076 399 02 03',
                address: 'Rte de xxxx',
              },
              {
                name: 'Manu Macron',
                date: '15:00-16:00',
                email: 'sacha.bonsoir@hotmail.be',
                tel: '076 399 02 03',
                address: 'Rte de xxxx',
              },
            ]}
            /*itemProps={
              selected >= 0 ? { [selected]: { background: "brand" } } : undefined
            }*/
            onClickItem={(event) =>
              setSelected(selected === event.index ? undefined : event.index)
            }
          >
            {(datum, index) => (
              <Box
                key={index}
                direction='row-responsive'
                justify='between'
                align='center'
              >
                <Box direction='row-responsive' align='center'>
                  <Box direction='column'>
                    <Text>{datum.name}</Text>
                    <Text>{datum.email}</Text>
                    <Text>{datum.tel}</Text>
                  </Box>
                </Box>
                <Box direction='column'>
                  <Text>{datum.date}</Text>
                  <Text>{datum.address}</Text>
                </Box>
                <Button
                  alignSelf='center'
                  size='large'
                  icon={<MapLocation color='brand' />}
                  hoverIndicator
                />
              </Box>
            )}
          </List>
        </Box>
      </Box>
      <Box fill='vertical' basis='55%' overflow={{ vertical: 'auto' }}>
        <Box fill basis='1/3'>
          <Heading level='3' textAlign='start' margin='none'>
            À approuver
          </Heading>
          <Box flex='grow' border={{ color: 'border', size: 'xsmall' }}></Box>
        </Box>
        <Box fill basis='1/3'>
          <Heading level='3' textAlign='start' margin='none'>
            Calendrier
          </Heading>
          <Box
            flex='grow'
            justify='center'
            align='center'
            border={{ color: 'border', size: 'xsmall' }}
          >
            <Button
              size='large'
              icon={<Add />}
              label={
                <Text>
                  <strong>Ajouter un calendrier</strong>
                </Text>
              }
              onClick={() => setAddCalModal(true)}
            />
            {addCalModal && (
              <Layer
                position='center'
                onClickOutside={() => setAddCalModal(false)}
                onEsc={() => setAddCalModal(false)}
              >
                <Box
                  pad='medium'
                  width='large'
                  as='form'
                  onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(addCalendar(calName));
                  }}
                >
                  <Box flex={false} direction='row' justify='between'>
                    <Heading level={2} margin='none'>
                      Ajouter un calendrier
                    </Heading>
                    <Button
                      icon={<Close />}
                      onClick={() => setAddCalModal(false)}
                    />
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
              </Layer>
            )}
          </Box>
        </Box>
        <Box fill basis='1/3'>
          <Heading level='3' textAlign='start' margin='none'>
            Map
          </Heading>
          <Box flex='grow' border={{ color: 'border', size: 'xsmall' }}></Box>
        </Box>
      </Box>
    </>
  );
};
