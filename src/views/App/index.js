// libs
import React from 'react';
import Routes from '../../router';
import Styled from 'styled-components';

// components
import GlobalStyle from '../../components/GlobalStyle';


export default () => {

    return (
        <Layout>
            <GlobalStyle />
            <Routes />
        </Layout>
    );
};

const Layout = Styled.div`
  height:100vh;
`;