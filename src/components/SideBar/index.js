// libs
import React from 'react';
import { Box, Nav, Button, Sidebar, Avatar } from 'grommet';
import { navigate } from 'raviger';

// icons
import {
  User,
  MapLocation,
  Help,
  Projects,
  Validate,
  Configure,
  Calendar,
} from 'grommet-icons';

export default ({ company }) => {
  return (
    <Sidebar
      gridArea='sidebar'
      width='xsmall'
      justify='center'
      align='center'
      background='background_comp'
      round='small'
      border={{ color: 'border', size: 'xsmall' }}
      header={
        <>
          <Avatar border={{ size: 'small', color: 'brand' }} background='white'>
            Y
          </Avatar>
        </>
      }
      footer={
        <>
          <Nav gap='small'>
            <Button icon={<Configure />} hoverIndicator />
            <Button icon={<Help />} hoverIndicator />
          </Nav>
        </>
      }
    >
      <Nav gap='small'>
        <Button
          onClick={() => navigate(company)}
          icon={<Projects />}
          hoverIndicator
        />
        <Button
          onClick={() => navigate(company + '/calendar')}
          icon={<Calendar />}
          hoverIndicator
        />
        <Button
          onClick={() => navigate(company + '/approvals')}
          icon={<Validate />}
          hoverIndicator
        />
        <Box
          pad='small'
          border={{ color: 'white', side: 'bottom' }}
          hoverIndicator
        />
        <Box gap='small' pad={{ vertical: 'medium' }} hoverIndicator>
          <Button icon={<MapLocation />} hoverIndicator />
          <Button icon={<User />} hoverIndicator />
        </Box>
      </Nav>
    </Sidebar>
  );
};
