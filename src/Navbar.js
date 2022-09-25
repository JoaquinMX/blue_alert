import React from 'react';
import { useColorMode, Grid, GridItem, Button, IconButton, Link } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import './Css/Navbar.scss';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="navbar-content">
            <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                <GridItem className="home-row" colSpan={1}>
                    <Button className="home-row-content" variant="link">
                        Blue Alert
                    </Button>
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
                        <li>
                            <Link href="/dashboard">
                                <Button variant="link">Dashboard</Button>
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
