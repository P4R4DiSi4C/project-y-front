// libs
import React from 'react';
import Routes from '../../router';
import Styled from 'styled-components';

// components
import { Grid, Text, ThemeContext, Box, Nav, Button, Sidebar, Avatar, Main } from 'grommet';
import { User, Chat, Help, Projects, Clock, Analytics, Configure, Calendar } from 'grommet-icons';

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
        </Header> //////////////////////////////

        <Box
            fill
            background="light-3">

            <Box
                direction='row'
                flex
                overflow={{ horizontal: 'hidden' }}
                pad="medium">
                <ThemeContext.Extend value={{global: { edgeSize: {small:'18px'}}}}>
                    <Sidebar
                        pad="small"
                        width="xsmall"
                        justify="center"
                        align="center"
                        elevation="large"
                        background="brand"
                        round="small"
                        margin={{"right":"1rem"}}
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
                                    <Button size="large" icon={<Configure />} hoverIndicator />
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
                                <Button icon={<Chat />} hoverIndicator />
                                <Button icon={<User />} hoverIndicator />
                            </Box>
                        </Nav>
                    </Sidebar>
                </ThemeContext.Extend>

                <Main 
                    pad="small"
                    elevation="large"
                    background="brand"
                    round="small"
                >
                    <Routes />                    
                </Main>
            </Box>
        </Box> */

        <Grid
            fill
            pad="small"
            rows={["auto", "flex"]}
            columns={["auto", "flex"]}
            areas={[
                { name: "sidebar", start: [0, 1], end: [0, 1] },
                { name: "main", start: [1, 1], end: [1, 1] }
            ]}
        >

            <ThemeContext.Extend 
                value={
                    {global: { edgeSize: {small:'18px'}}}
                }>
                <Sidebar
                    gridArea="sidebar"
                    width="xsmall"
                    justify="center"
                    align="center"
                    elevation="large"
                    background="brand"
                    round="small"
                    margin={{"right":"1rem"}}
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
                                <Button size="large" icon={<Configure />} hoverIndicator />
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
                            <Button icon={<Chat />} hoverIndicator />
                            <Button icon={<User />} hoverIndicator />
                        </Box>
                    </Nav>
                </Sidebar>
            </ThemeContext.Extend>

            <Main 
                    gridArea="main"
                    elevation="large"
                    background="brand"
                    round="small"
                    pad="small"
                    overflow={{"horizontal": "auto"}}
                >
                    <Routes />                    
            </Main>
        </Grid>
    );
};