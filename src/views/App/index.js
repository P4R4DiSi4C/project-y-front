// libs
import React from 'react';
import Routes from '../../router';

// components
import Container from '../../components/Container';
import GlobalStyle from '../../components/GlobalStyle';


export default () => {
    const router = useRoutes(Router);

    return (
        <Container>
            <GlobalStyle />
            <Routes />
        </Container>
    );
};