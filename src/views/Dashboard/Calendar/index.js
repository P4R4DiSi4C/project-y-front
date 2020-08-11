// libs
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';

// redux
import { getAll } from '../../../redux/calendar/calendar.actions';
import { getAppointments } from '../../../redux/appointment/appointment.actions';

// styles
import 'react-big-calendar/lib/css/react-big-calendar.css';

// components
import { Box, Button, Select, Text } from 'grommet';
import { Add } from 'grommet-icons';
import AddCalendar from '../../../components/Modals/AddCalendar';

// localizer
const localizer = momentLocalizer(moment);
moment.locale('fr');
moment.updateLocale('fr', {
  week: {
    dow: 1, // First day of week is Monday
    doy: 4, // First week of year must contain 4 January (7 + 1 - 4)
  },
});

const messages = {
  allDay: 'journée',
  previous: 'précédent',
  next: 'suivant',
  today: "aujourd'hui",
  month: 'mois',
  week: 'semaine',
  day: 'jour',
  agenda: 'Agenda',
  date: 'date',
  time: 'heure',
  event: 'événement', // Or anything you want
  showMore: (total) => `+ ${total} événement(s) supplémentaire(s)`,
};

export default () => {
  const dispatch = useDispatch();

  const calendars = useSelector((state) => state.calendar);
  const appointments = useSelector((state) => state.appointment);
  console.log(appointments);
  const [selectedCalendar, setSelectedCalendar] = useState('');
  const [forbidden, setForbidden] = useState(false);
  const [addCalModal, setAddCalModal] = useState(false);


  const setCalEvents = useCallback(
    (id) => {
      setSelectedCalendar(id);
      dispatch(getAppointments(id, { approved: 2 }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getAll()).catch((error) => setForbidden(true));
  }, [dispatch]);

  useEffect(() => {
    if (calendars.length > 0) {
      setCalEvents(calendars[0]._id);
    }
  }, [setCalEvents, calendars]);

  return (
    <Box fill justify='center' round='small'>
      {calendars.length > 0 && (
        <>
          <Box align='center' justify='center'>
            <Select
              labelKey='label'
              valueKey={{ key: 'value', reduce: true }}
              options={calendars.map((calendar) => ({
                label: calendar.name,
                value: calendar._id,
              }))}
              value={selectedCalendar}
              onChange={({ value }) => setCalEvents(value)}
            />
          </Box>
           {/* [
                {
                  id: 0,
                  title: 'Hey Sach',
                  start: moment('2020-07-22T09').toDate(),
                  end: moment('2020-07-22T10').toDate(),
                },
              ]  */}
          <Box fill>
            <Calendar
              localizer={localizer}
              events={appointments.map(({ _id, description, start, end }) => ({
                id: _id,
                title: description,
                start,
                end
              }))}
              messages={messages}
            />
          </Box>
        </>
      )}
      {forbidden && (
        <Box align='center' justify='center'>
          IL FAUT T'ABONNER
        </Box>
      )}
      {calendars.length <= 0 && !forbidden &&
        <Box align='center' justify='center'>
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
          {addCalModal && <AddCalendar setModal={setAddCalModal} />}
        </Box>
      }
    </Box>
  );
};
