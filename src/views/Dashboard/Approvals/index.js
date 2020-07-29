// libs
import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
// redux
import { getAllAppointments } from '../../../redux/appointment/appointment.actions';

// components
import { Box, Grid, Heading, List, Menu, Text, ResponsiveContext } from 'grommet';

// icons
import { More, Checkmark, Close, Edit } from 'grommet-icons';

export default () => {
  const dispatch = useDispatch();

  const appointments = useSelector((state) => state.appointment);
  const sizeContext = useContext(ResponsiveContext);

  useEffect(() => {
    dispatch(getAllAppointments({ approved: false })).catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <Box fill direction="column">
      <Heading
        level="3"
        textAlign="start"
        margin={{ top: 'none', bottom: '1rem' }}
      >
        Rendez-vous en attente
      </Heading>
      <Box fill direction="column" overflow={{ vertical: 'auto' }}>
        <List
          pad="small"
          data={appointments}
        >
          {(datum, index) => (
            <Grid
              key={index}
              align='center'
              columns={{
                count: sizeContext !== 'small' ? 3 : 'fill',
                size: 'auto',
                justifyContent: 'between'
              }}
            >
              <Box>
                <Text>{datum.firstName + ' ' + datum.lastName}</Text>
                <Text>{datum.email + 'TES2222T'}</Text>
                <Text>{datum.tel + 'TES222T'}</Text>
              </Box>
              <Box align='center'>
                <Text>{datum.start}</Text>
              </Box>
              <Box align='end'>
                <Menu
                  key={index}
                  icon={<More color="brand" />}
                  alignSelf={sizeContext !== 'small' ? 'end' : 'center'}
                  justifyContent="center"
                  hoverIndicator
                  items={[
                    { icon: <Checkmark color="status-ok" /> },
                    { icon: <Close color="status-critical" /> },
                    { icon: <Edit color="status-warning" /> }
                  ]}
                />
              </Box>
            </Grid>
          )}
        </List>
      </Box>
    </Box>
  );
};
