import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: ${props => props.theme.styled.font};
        font-size: 16px;
        @media (max-width: 1199.98px) {
            font-size: 15px;
        }
        @media (max-width: 767.98px) {
            font-size: 14px;
        }
        
        @media (max-width: 325.00px) {
            font-size: 12px;
        }
    }

`;