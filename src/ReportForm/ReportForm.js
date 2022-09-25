import { React, useState, useEffect } from 'react';
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
    useDisclosure,
  } from '@chakra-ui/react'
import ReCAPTCHA from "react-google-recaptcha";

function ReportForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ incidentDate, setIncidentDate ] = useState(1664099542684);
    const [ incidentTime, setIncidentTime ] = useState(1664099542684);
    const [victimValue, setVictimValue] = useState('1');
    const [policeReportValue, setPoliceReportValue] = useState('1');
    const [isVerified, setIsVerified] = useState(false);



    const handleOnChangeCap = (value) => {
        console.log(incidentDate);
        setIsVerified(true);
      };

      // Not Working
    let allValuesValidated = name !== '' && 
        email !== '' && 
        phoneNumber !== '' &&  
        incidentDate !== 1664099542684 &&
        incidentTime !== 1664099542684 &&
        isVerified

        console.log(allValuesValidated);

        useEffect(() => {
            const sendData = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                incidentDate: incidentDate,
                incidentTime: incidentTime,
                victimValue: victimValue,
                policeReportValue: policeReportValue,
                isVerified: isVerified
            };
        }, []);
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

                    <FormLabel>Número de Teléfono</FormLabel>
                    <Input type='phone' onChange={(e) => {setPhoneNumber(e.target.value)}} />

                    <FormLabel>Fecha de Incidencia</FormLabel>
                    <Input type='date' onChange={(e) => {setIncidentDate(e.target.value)}} />

                    <FormLabel>Hora de Incidencia</FormLabel>
                    <Input type='time'onChange={(e) => {setIncidentTime(e.target.value)}}  />

                    <RadioGroup onChange={setVictimValue} value={victimValue}>
                        <FormLabel>¿Fuiste Victima?</FormLabel>

                        <Stack direction='row'>
                            <Radio value='1'>Si</Radio>
                            <Radio value='2'>No</Radio>
                        </Stack>
                    </RadioGroup>

                    <RadioGroup onChange={setPoliceReportValue} value={policeReportValue}>
                        <FormLabel>¿Ya fue reportado?</FormLabel>

                        <Stack direction='row'>
                            <Radio value='1'>Si</Radio>
                            <Radio value='2'>No</Radio>
                        </Stack>
                    </RadioGroup>

                    { policeReportValue === '1' ? ReportKeyForm() : <></>}

                    <ReCAPTCHA
                        sitekey="6LeaWSkiAAAAAIoGI0-R3bRuMxr5u6O3PwIOVxwk"
                        onChange={(e) => handleOnChangeCap(e)}
                    />
                </FormControl>
                <Button disable={`${!allValuesValidated}`} onClick={onClose}>Subir Reporte</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

function ReportKeyForm() {
    return (
        <>
            <FormLabel optionalIndicator>N&uacute;mero de Folio</FormLabel>
            <Input type='text' />
        </>
    )
}

export default ReportForm;
