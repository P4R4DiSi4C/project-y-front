// libs
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';

// styles
import 'react-big-calendar/lib/css/react-big-calendar.css';

// components
import { Box } from 'grommet';

// localizer
const localizer = momentLocalizer(moment);
moment.locale('fr');
moment.updateLocale('fr', {
  week: {
    dow: 1, // First day of week is Monday
    doy: 4 // First week of year must contain 4 January (7 + 1 - 4)
  }
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
  showMore: total => `+ ${total} événement(s) supplémentaire(s)`
};

export default () => {
  return (
    <>
      <Box fill direction='column' round='small'>
        <Calendar
          localizer={localizer}
          events={[
            {
              id: 0,
              title: 'Hey Sach',
              start: moment('2020-07-22T09').toDate(),
              end: moment('2020-07-22T10').toDate()
            }
          ]}
          messages={messages}
        />
      </Box>
    </>
  );
};
