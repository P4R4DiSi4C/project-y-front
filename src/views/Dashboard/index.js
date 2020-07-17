// libs
import React from 'react';
import { useRoutes } from 'raviger';

// components
import { Grid, Main } from 'grommet';
import SideBar from '../../components/SideBar';

// subroutes
import DashHome from './Home';
import DashCalendar from './Calendar';
import DashApprovals from './Approvals';

const routes = {
  '/': () => <DashHome />,
  '/calendar': () => <DashCalendar />,
  '/approvals': () => <DashApprovals />,
};

export default ({ company }) => {
  const routesResult = useRoutes(routes, { basePath: company });
  return (
    <Grid
      fill
      pad='small'
      rows={['auto', 'flex']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'sidebar', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
      gap={{ column: '1rem' }}
    >
      <SideBar company={company} />

      <Main
        direction='row-responsive'
        gridArea='main'
        background='background_comp'
        round='small'
        pad='medium'
        justify='between'
        border={{ color: 'border', size: 'xsmall' }}
      >
        {routesResult}
      </Main>
    </Grid>
  );
};
