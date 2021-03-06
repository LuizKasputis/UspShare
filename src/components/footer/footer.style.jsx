import styled from 'styled-components';

export const FooterDiv = styled.div`
    height: 80px;
    padding: 0 12% 0 12%;

    justify-content: center;
    display: flex;
    background: #1094AB;
`;

export const TextFooter = styled.span`
    display: inline-flex;
    align-items: center;
    
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 35px;
    color: #FFFFFF;

    @media only screen and (min-width: 1060px) and (max-width: 1300px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 1060px) {
        font-size: 20px;
    }
`;