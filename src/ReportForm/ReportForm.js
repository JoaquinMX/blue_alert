import { React, useState, useEffect, useRef } from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Select,
    useToast,
    useDisclosure,
  } from '@chakra-ui/react'
import { Box, SkeletonText } from '@chakra-ui/react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { createUserReportMutation } from '../graphql/fields.js'

import ReCAPTCHA from "react-google-recaptcha";

function ReportForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ name, setName ] = useState('');
    const [ genre, setGenre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ incidentKind, setIncidentKind ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ isVictim, setIsVictim ] = useState('1');
    const [ isReportedToPolice, setIsReportedToPolice] = useState('1');
    const [ policeReport, setPoliceReport ] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [myRef, setMyRef] = useState({ lat: 25.645881, lng: -100.288731});


    const toast = useToast()

    const handleOnChangeCap = (value) => {
        setIsVerified(true);
      };

      // Not Working
    let allValuesValidated = name !== '' && 
        email !== '' && 
        phoneNumber !== '' &&  
        isVerified

function createUserReport() {
    const sendData = {
        name: name,
        email: email,
        genre: genre,
        phone: phoneNumber,
        incidentKind: incidentKind,
        description: description,
        latitude: myRef.lat,
        longitude: myRef.lng,
        isVictim: isVictim === '1' ? true : false,
        isReportedToPolice: isReportedToPolice === '1' ? true : false,
        policeReport: policeReport,
        isVerified: isVerified
    };

    const request = createUserReportMutation(sendData);

    console.log(request);

    fetch('https://dev.linkedblocks.xyz/api', {
        method: 'POST',
        body: JSON.stringify(request),
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
            toast({
                title: 'Error.',
                description: "Ocurrio un error al crear el reporte" + resData.errors[0].message,
                status: 'error',
                duration: 10000,
                isClosable: true,
              })
        
        } else {
            toast({
                title: 'Reporte Creado.',
                description: "Su reporte ha sido creado",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })

        }
    }).catch(err => {
        console.log(err);
    });
}
        
    return (
        <>
        <Button onClick={onOpen}>Crear Reporte</Button>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen} size={'md'}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Crear Reporte</DrawerHeader>
            <DrawerBody>
                <FormControl isRequired>
                    <FormLabel>Nombre Completo</FormLabel>
                    <Input type='text' onChange={(e) => {setName(e.target.value)}} />

                    <FormLabel>Correo Electrónico</FormLabel>
                    <Input type='email' onChange={(e) => {setEmail(e.target.value)}} />

                    <FormLabel>Genero</FormLabel>
                    <Select placeholder='Seleccione...' onChange={(e) => {setGenre(e.target.value)}} value={genre}>
                        <option value='Masculino'>Masculino</option>
                        <option value='Femenino'>Femenino</option>
                        <option value='Otro'>Otro</option>
                    </Select>

                    <FormLabel>Número de Teléfono</FormLabel>
                    <Input type='phone' onChange={(e) => {setPhoneNumber(e.target.value)}} />

                    <FormLabel>Tipo de incidente</FormLabel>
                    <Select placeholder='Seleccione...' onChange={(e) => { setIncidentKind(e.target.value) }} value={incidentKind}>
                        <option value='Asalto'>Asalto</option>
                        <option value='Robo de Vehiculo'>Robo de Vehiculo</option>
                        <option value='Acoso'>Acoso</option>
                        <option value='Acoso'>Homicidio</option>
                    </Select>

                    {GoogleMaps(myRef, setMyRef)}

                    <FormLabel>Descripción</FormLabel>
                    <Input type='phone' onChange={(e) => {setDescription(e.target.value)}} />

                    <RadioGroup onChange={setIsVictim} value={isVictim}>
                        <FormLabel>¿Fuiste Victima?</FormLabel>

                        <Stack direction='row'>
                            <Radio value='1'>Si</Radio>
                            <Radio value='2'>No</Radio>
                        </Stack>
                    </RadioGroup>

                    <RadioGroup onChange={setIsReportedToPolice} value={isReportedToPolice}>
                        <FormLabel>¿Ya fue reportado?</FormLabel>

                        <Stack direction='row' >
                            <Radio value='1'>Si</Radio>
                            <Radio value='2'>No</Radio>
                        </Stack>
                    </RadioGroup>

                    { isReportedToPolice ? 
                    <>
                        <FormLabel optionalIndicator>N&uacute;mero de Folio</FormLabel>
                        <Input type='text' onChange={(e) => {setPoliceReport(e.target.value)}}/>
                    </>
                    : 
                    <></>
                    }

                    <ReCAPTCHA
                        sitekey="6LeaWSkiAAAAAIoGI0-R3bRuMxr5u6O3PwIOVxwk"
                        onChange={(e) => handleOnChangeCap(e)}
                    />
                </FormControl>
                <Button disable={`${!allValuesValidated}`} onClick={createUserReport}>Subir Reporte</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

const center = { lat: 25.645881, lng: -100.288731};
function GoogleMaps(myRef, setMyRef) {

    const [map, setMap] = useState(/** @type google.maps.Map */null);
    // const [myRef, setMyRef] = useState({ lat: 25.645881, lng: -100.288731});

    /** @type React.mutableRefObject<HTMLInputElement> */
    const ref = useRef();
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    });

  if(!isLoaded) {
    return <SkeletonText />
  }

  function setValuesOfRef(value) {
    if (value === '') {
        return;
    }
    const centerPoint = { lat: parseFloat(value.latLng.lat()), lng: parseFloat(value.latLng.lng()) }
    setMyRef(centerPoint);
  }

  return (
    <Box>
        <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%', height:'10rem'}}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false
            }}
            onLoad={(map) => setMap(map)}
            onClick={(e) => setValuesOfRef(e)}
        >
            {<Marker position={myRef} map={map}/> }
        </GoogleMap>
    </Box>
  )
}


export default ReportForm;
