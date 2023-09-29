import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
    border: 1px solid blue;
    border-radius: 10px; 
    padding: 6px 12px;
    background-color: white;;
    color: black;
    text-decoration: none; 
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;

&:hover{
    color: white;
    background-color: blue;
}
`;