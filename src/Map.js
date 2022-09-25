import { React, useRef, useState } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react'
import ReportForm from './ReportForm/ReportForm';
import MapsOptimizedRoute from './components/MapsOptimizedRoute';

function Map() {

    // https://dev.linkedblocks.xyz/pin/getPins?state=monterrey
    const [myRef, setMyRef] = useState([]);


    function getCoordinates() {
        fetch('https://dev.linkedblocks.xyz/pin/getPins?state=monterrey', {
            method: 'POST',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Falied POST');
            }
    
            return res.json();
        }).then(resData => {
            if (resData.errors) {
            
            } else {
                const pins = resData;
                setMyRef(pins);
                console.log(pins);

            }
        }).catch(err => {
            console.log(err);
        });
    }

    return(
        <>
            <ReportForm />
            {getCoordinates()}
            <MapsOptimizedRoute myRef={myRef} />
        </>
    );
}

export default Map;
