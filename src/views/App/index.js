// libs
import React from 'react';
import Routes from '../../router';
import Styled from 'styled-components';

// components
import GlobalStyle from '../../components/GlobalStyle';
import { Box, Heading, Collapsible, Header, Menu, Nav, Button, Sidebar, Avatar, Main, Paragraph } from 'grommet';
import { User, Chat, Help, StatusInfoSmall, Projects, Clock, Analytics, Configure, Calendar } from 'grommet-icons';

export default () => {

    return (
            /* <Header
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='brand'
                pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                elevation='medium'
                height='xxsmall'
                style={{ zIndex: '1' }}
            >
                <Heading
                    level='4'
                    margin='none'>
                    Project Y
                </Heading>

                <Menu
                    items={[
                        {
                            label: 'Logout',
                            onClick: () => { }
                        }
                    ]}
                >
                    <Box direction="row" align='center' justify='center' gap="small" pad="small">
                        <User />
                    </Box>
                </Menu>
            </Header> */
            <Box fill>
            <GlobalStyle />

            <Box 
                direction='row' 
                flex 
                overflow={{ horizontal: 'hidden' }}>
                <Sidebar
                    pad="small"
                    elevation="large"
                    background="brand"
                    round="small"
                    header={
                        <>
                            <Avatar border={{ size: "small", color: "accent-2" }} background="white">
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
                        <Button icon={<Projects />} hoverIndicator />
                        <Button icon={<Calendar />} hoverIndicator />
                        <Button icon={<Clock />} hoverIndicator />
                        <Box
                            pad="small"
                            border={{ color: "white", side: "bottom" }}
                            hoverIndicator
                        />
                        <Box gap="small" pad={{ vertical: "medium" }} hoverIndicator>
                            <Button icon={<Analytics />} hoverIndicator />
                            <Button icon={<Chat />} hoverIndicator />
                        </Box>
                    </Nav>
                </Sidebar>

                <Main pad="large">
                    <Heading>Something</Heading>
                    <Paragraph>Something about something</Paragraph>
                </Main>
            </Box>
        </Box>
    );
};

const Layout = Styled.div`
  height:100vh;
`;