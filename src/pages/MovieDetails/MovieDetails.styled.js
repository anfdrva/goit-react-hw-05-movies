import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`;
export const MovieTitle = styled.p`
    font-weight: 700;
    font-size: 26px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: black;
    margin-top: 0;
`
export const MovieContent = styled.p`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MovieContentTitle = styled.span`
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.02em;
`;

export const MovieDetailsList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

export const MovieDetailsLink = styled(NavLink)`
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        color: blue;
    }
`





