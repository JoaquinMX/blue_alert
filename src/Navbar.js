import React from 'react';
import { useColorMode, Grid, GridItem, Button, IconButton, Link, Box, Text, Image } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import classNames from 'classnames';
import BALogo from './assets/imgs/ala-removebg-preview.png'
import './Css/Navbar.scss';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="navbar-content">
            <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                <GridItem className="home-row" colSpan={1}>
                    <Box
                    className={classNames('section-skill-card', {
                        light: colorMode === 'light',
                        dark: colorMode === 'dark'
                    })}>
                    <Image className="logo" src={BALogo} alt='Nuevo León Logo' />
                    <Text className="card-label">Blue Alert</Text>
                </Box>
                </GridItem>
                <GridItem className="menu-row" colStart={2} colEnd={8}>
                    <ul className="menu-row-options">
                        <li>
                            <Link href="/home">
                                <Button variant="link">Home</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/map">
                                <Button variant="link">Map</Button>
                            </Link>
                        </li>
                    </ul>
                </GridItem>
                <GridItem>
                    <IconButton
                        className="darkmode-row"
                        onClick={toggleColorMode}
                        icon={getIcon(colorMode)}
                    />
                </GridItem>
            </Grid>
        </div>
    );
}

function getIcon(colorMode) {
    return colorMode === 'light' ? <MoonIcon /> : <SunIcon />;
}

export default Navbar;
