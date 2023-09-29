import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid blue;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    margin-bottom: 20px;
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
`

export const HeaderLink = styled(NavLink)`
    position: relative;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;

    &:hover{
        color: blue;
    }
`