// libs
import React from 'react';
import { navigate, useRoutes } from 'raviger';

// subroutes
import DashHome from './Home';
import DashCalendar from './Calendar';
import DashApprovals from './Approvals';

// components
import { Grid, Box, Nav, Button, Sidebar, Avatar, Main } from 'grommet';
import { User, MapLocation, Help, Projects, Validate, Configure, Calendar } from 'grommet-icons';

const routes = {
  '/': () => <DashHome />,
  '/calendar': () => <DashCalendar />,
  '/approvals': () => <DashApprovals />
};

export default () => {
  const routesResult = useRoutes(routes, { basePath: '/dashboard'});

  return (
    <Grid
      fill
      pad="small"
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        { name: "sidebar", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]}
      gap={{ column: "1rem" }}>


        <Sidebar
          gridArea="sidebar"
          width="xsmall"
          justify="center"
          align="center"
          background="background_comp"
          round="small"
          border={{ color: 'border', size: 'xsmall' }}
          header={
            <>
              <Avatar border={{ size: "small", color: "brand" }} background="white">
                    Y
                </Avatar>
            </>
          }
          footer={
            <>
              <Nav gap="small">
                <Button icon={<Configure />} hoverIndicator />
                <Button icon={<Help />} hoverIndicator />
              </Nav>
            </>
          }
        >
          <Nav gap="small">
            <Button onClick={() => navigate("/dashboard")} icon={<Projects />} hoverIndicator />
            <Button onClick={() => navigate("/dashboard/calendar")} icon={<Calendar />} hoverIndicator />
            <Button onClick={() => navigate("/dashboard/approvals")} icon={<Validate />} hoverIndicator />
            <Box
              pad="small"
              border={{ color: "white", side: "bottom" }}
              hoverIndicator
            />
            <Box gap="small" pad={{ vertical: "medium" }} hoverIndicator>
              <Button icon={<MapLocation />} hoverIndicator />
              <Button icon={<User />} hoverIndicator />
            </Box>
          </Nav>
        </Sidebar>

      <Main
        direction="row-responsive"
        gridArea="main"
        background="background_comp"
        round="small"
        pad="medium"
        justify="between"
        border={{ color: 'border', size: 'xsmall' }}
      >
        {routesResult}
      </Main>
    </Grid>
  );
};
