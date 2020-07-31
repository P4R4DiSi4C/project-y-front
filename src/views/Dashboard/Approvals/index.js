// libs
import React, { useEffect, useContext, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
// redux
import { getAllAppointments } from '../../../redux/appointment/appointment.actions';
import { approvalAppointment } from '../../../redux/appointment/appointment.actions';

// components
import { Box, Button, Drop, Form, Grid, Heading, List, Menu, Text, ResponsiveContext } from 'grommet';
import DateTimeDrop from '../../../components/DateTimeDrop';

// icons
import { More, Checkmark, Close, Edit } from 'grommet-icons';

const ApprovalAppointement = (appointment, dispatch) => {
  const { uuid, approved } = { ...appointment };
  const [hour, minute] = appointment.hour.split(':');
  const end = moment(appointment.date).set({ hour, minute }).toISOString();

  dispatch(approvalAppointment({ uuid, end, approved }));
};

export default () => {
  const APPOINTMENT_FIELDS = {
    id: '',
    date: '',
    hour: '',
    approved: false
  };

  const dispatch = useDispatch();

  const appointments = useSelector((state) => state.appointment);
  const [appointment, setAppointment] = useState(APPOINTMENT_FIELDS);
  const [showDrop, setShowDrop] = useState(false);
  const refs = useRef({});
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
        {appointments.length >= 0 &&
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
                    ref={el => refs.current[datum._id] = el}
                    items={[
                      {
                        icon: <Checkmark color="status-ok" />,
                        onClick: () => {
                          setAppointment({
                            ...appointment,
                            uuid: datum._id,
                            approved: true
                          });
                          setShowDrop(true);
                        }
                      },
                      { icon: <Close color="status-critical" /> },
                      { icon: <Edit color="status-warning" /> }
                    ]}
                  />
                </Box>
              </Grid>
            )}
          </List>}
        {showDrop &&
          <Drop
            align={{ right: 'left' }}
            target={refs.current[appointment.uuid]}
            onClickOutside={() => setShowDrop(false)}
          >
            <Box
              pad='medium'
              align='center'
            >
              <Form
                value={appointment}
                onChange={(newValue) => {
                  setAppointment(newValue);
                }}
                onSubmit={(event) => {
                  event.preventDefault();
                  ApprovalAppointement(appointment, dispatch);
                  setShowDrop(false);
                }}
              >
                <Heading level={4} margin={{ vertical: '6px', horizontal: '12px' }}>
                  Date & heure de fin
                </Heading>
                <DateTimeDrop state={appointment} setAppointment={setAppointment} />
                <Box direction='row' justify='center' margin={{ top: 'medium' }}>
                  <Button type='submit' label={'Approuver'} />
                </Box>
              </Form>
            </Box>
          </Drop>
        }
      </Box>
    </Box>
  );
};
