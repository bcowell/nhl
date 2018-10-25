import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Header, Title, Box, Menu, Footer } from 'grommet';
import './Navbar.css';

const Navbar = () => 
    <Sidebar className='overflow-hidden' colorIndex='neutral-1'
        fixed={true}>
        <Header pad='medium' justify='between'>
            <Title><a href="/">Home</a></Title>
        </Header>
        <Box flex='grow' justify='start'>
            <Menu primary={true}>
                <NavLink to="/teams">Teams</NavLink>
                <NavLink to="/second">Second</NavLink>
                <NavLink to="/third">Third</NavLink>
            </Menu>
        </Box>
    <Footer pad='medium'></Footer>
    </Sidebar>

export default Navbar;