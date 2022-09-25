import { React, useState } from 'react';
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
    const [victimValue, setVictimValue] = useState('1');
    const [policeReportValue, setPoliceReportValue] = useState('1')
    const [isVerified, setIsVerified] = useState(false);


    const handleOnChangeCap = (value) => {
        setIsVerified(true);
      };

  
    return (
        <>
        <Button onClick={onOpen}>Crear Reporte</Button>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen} size={'md'}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Crear Reporte</DrawerHeader>
            <DrawerBody>
                <FormControl>
                    <FormLabel>Nombre Completo</FormLabel>
                    <Input type='email' />

                    <FormLabel>Número de Teléfono</FormLabel>
                    <Input type='phone' />

                    <FormLabel>Fecha de Incidencia</FormLabel>
                    <Input type='date' />

                    <FormLabel>Hora de Incidencia</FormLabel>
                    <Input type='time' />

                    <RadioGroup onChange={setVictimValue} value={victimValue}>
                        <FormLabel>Fuiste Victima?</FormLabel>

                        <Stack direction='row'>
                            <Radio value='1'>Si</Radio>
                            <Radio value='2'>No</Radio>
                        </Stack>
                    </RadioGroup>

                    <RadioGroup onChange={setPoliceReportValue} value={policeReportValue}>
                        <FormLabel>Ya fue reportado?</FormLabel>

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
                <Button onClick={onClose}>Subir Reporte</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

function ReportKeyForm() {
    return (
        <>
            <FormLabel>Numero de Folio</FormLabel>
            <Input type='text' />
        </>
    )
}

export default ReportForm;
