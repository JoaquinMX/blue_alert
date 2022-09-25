import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { createUserReportMutation } from '../graphql/fields.js'

function ReportCaptcha({email, name, genre, phoneNumber, incidentKind, description, latitude, longitude, isVictim, isReportedToPolice, policeReport, isVerified}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [twoFactor, setTwoFactor] = useState("")
  const [userCode, setUserCode] = useState("")
  
  function handleOnChange(e) {
      onOpen();
      fetch(`https://dev.linkedblocks.xyz/2fa/getCode?email=${email}`, {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
          'Content-Type': 'application/json'
      }})
      .then(res => {
        if(res.status !== 200 && res.status !== 201) {
          throw new Error('Falied POST')
        }

        return res.json()
      })
      .then(resData => {
        if (resData.errors) {
          
        }
        else {
          setTwoFactor(resData.authCode)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handle2FA(e) {
      if(userCode.toString() === twoFactor.toString()) {
          const sendData = {
            name: name,
            email: email,
            genre: genre,
            phone: phoneNumber,
            incidentKind: incidentKind,
            description: description,
            latitude: latitude,
            longitude: longitude,
            isVictim: isVictim === '1' ? true : false,
            isReportedToPolice: isReportedToPolice === '1' ? true : false,
            policeReport: policeReport,
            isVerified: isVerified
        }
        const request = createUserReportMutation(sendData);

        fetch('https://dev.linkedblocks.xyz/api', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error('Falied POST');
          }
          return res.json()
        }).then(resData => {
          if (resData.errors) {
            toast({
              title: 'Error.',
              description: "Ocurrio un error al crear el reporte" + resData.errors[0].message,
              status: 'error',
              duration: 10000,
              isClosable: true,
            })} 
          else {
            toast({
              title: 'Reporte Creado.',
              description: "Su reporte ha sido creado",
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
            onClose()
        }})
        .catch(err => {
          console.log(err)
        })
      }
    }

  return (
    <>
      <ReCAPTCHA
          sitekey='6LeaWSkiAAAAAIoGI0-R3bRuMxr5u6O3PwIOVxwk'
          onChange={(e) => handleOnChange(e)}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Factor de Doble Autenticación</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <FormLabel>Codigo</FormLabel>
            <Input type='text' onChange={(e) => {setUserCode(e.target.value)}} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handle2FA}>
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ReportCaptcha;