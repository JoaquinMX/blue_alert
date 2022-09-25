import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react';
import Map from './Map';
import Navbar from './Navbar';
import ReportForm from './ReportForm/ReportForm';

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
                    <Route exact path="/map" element={<ReportForm/>}></Route>
                    <Route exact path="/dashboard" element={<div>dashboard</div>}></Route>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
            </Grid>
        </div>
    );
}

export default Content;
