// libs
import React from 'react';
import Routes from '../../router';

// components
import Container from '../../components/Container';
import GlobalStyle from '../../components/GlobalStyle';


export default () => {

    return (
        <Container>
            <GlobalStyle />
            <Routes />
        </Container>
    );
};