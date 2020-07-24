// libs
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { getAll } from '../../../redux/calendar/calendar.actions';
import moment from 'moment';
import 'moment/locale/fr';
import { getAppointments } from '../../../redux/appointment/appointment.actions';

// styles
import 'react-big-calendar/lib/css/react-big-calendar.css';

// components
import { Box, Select } from 'grommet';

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

  const [selectedCalendar, setSelectedCalendar] = useState('');

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    if (calendars.length > 0) {
      setSelectedCalendar(calendars[0]._id);
      dispatch(getAppointments(calendars[0]._id));
    }
  }, [dispatch, calendars]);

  return (
    calendars.length > 0 && (
      <>
        <Box fill round='small'>
          <Box align='center' justify='center'>
            <Select
              labelKey='label'
              valueKey={{ key: 'value', reduce: true }}
              options={calendars.map((calendar) => ({
                label: calendar.name,
                value: calendar._id,
              }))}
              value={selectedCalendar}
              onChange={({ value }) => setSelectedCalendar(value)}
            />
          </Box>
          <Box fill>
            <Calendar
              localizer={localizer}
              events={[
                {
                  id: 0,
                  title: 'Hey Sach',
                  start: moment('2020-07-22T09').toDate(),
                  end: moment('2020-07-22T10').toDate(),
                },
              ]}
              messages={messages}
            />
          </Box>
        </Box>
      </>
    )
  );
};
