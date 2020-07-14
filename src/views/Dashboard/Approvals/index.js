// libs
import React from 'react';
import { useSelector } from 'react-redux';

// components
import { Box, Heading, List, Menu, Text } from 'grommet';

// icons
import { Grommet, More, Checkmark, Close, Edit } from 'grommet-icons';

export default () => {
  const [selected, setSelected] = React.useState();

  const user = useSelector(state => state.user);

  console.log(user);

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
          data={[
            {
              name: 'Sacha Bonsoir',
              date: '10 juin à 12h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'David Bonjour',
              date: '10 juin à 10h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'Ryan Trump',
              date: '11 juin à 14h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'Manu Macron',
              date: '12 juin à 15h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'Manu Macron',
              date: '12 juin à 15h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'Manu Macron',
              date: '12 juin à 15h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'Manu Macron',
              date: '12 juin à 15h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'Manu Macron',
              date: '12 juin à 15h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'Manu Macron',
              date: '12 juin à 15h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            },
            {
              name: 'Manu Macron',
              date: '12 juin à 15h00',
              email: 'sacha.bonsoir@hotmail.be',
              tel: '076 399 02 03'
            }
          ]}
          /*itemProps={
              selected >= 0 ? { [selected]: { background: "brand" } } : undefined
            }*/
          onClickItem={event =>
            setSelected(selected === event.index ? undefined : event.index)
          }
        >
          {(datum, index) => (
            <Box
              key={index}
              direction="row-responsive"
              justify="between"
              align="center"
            >
              <Box direction="row-responsive" align="center" gap="small">
                <Grommet color="status-unknown" />
                <Box direction="column">
                  <Text>{datum.name}</Text>
                  <Text>{datum.email}</Text>
                  <Text>{datum.tel}</Text>
                </Box>
              </Box>
              <Box direction="column">
                <Text>{datum.date}</Text>
              </Box>
              <Menu
                key={index}
                icon={<More color="brand" />}
                alignSelf="center"
                justifyContent="center"
                hoverIndicator
                items={[
                  { icon: <Checkmark color="status-ok" /> },
                  { icon: <Close color="status-critical" /> },
                  { icon: <Edit color="status-warning" /> }
                ]}
              />
            </Box>
          )}
        </List>
      </Box>
    </Box>
  );
};
