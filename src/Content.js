import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './Navbar';

function Content() {
    return(
        <div className="page-content">
            <Grid
                templateAreas={`
                    "header"
                    "main"
                `}
                gridTemplateRows={'70px 100%'}
                height="100%">
                <GridItem area={'header'}>
                    <Navbar />
                </GridItem>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/home" element={<div>home</div>}></Route>
                    <Route exact path="/map" element={<div>map</div>}></Route>
                    <Route exact path="/dashboard" element={<div>dashboard</div>}></Route>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
            </Grid>
        </div>
    );
}

export default Content;
