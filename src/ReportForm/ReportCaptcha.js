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

function ReportCaptcha({email, sendData}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

    const [isVerified, setIsVerified] = useState(false);
    function handleOnChange(value) {
        setIsVerified(true);

        fetch(`https://dev.linkedblocks.xyz/2fa/getCode?email=${email}`, {
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
          setTwoFA(resData.data.authCode);
        }
    }).catch(err => {
        console.log(err);
    });
    }
    const [ userCode, setUserCode ] = useState('');
    const [ twoFA, setTwoFA ] = useState('');

  function handle2FA(user2FA) {


    if (!user2FA) {
      if (user2FA === twoFA) {
        const request = createUserReportMutation({sendData});

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
    }
  }

  return (
    <>
      <ReCAPTCHA
          sitekey='6LeaWSkiAAAAAIoGI0-R3bRuMxr5u6O3PwIOVxwk'
          onChange={(e) => handleOnChange(e)}
      />

      <Modal isOpen={isVerified} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Factor de Doble Autenticación</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <FormLabel>Codigo</FormLabel>
            <Input type='text' onChange={(e) => {setUserCode(e.target.value)}} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handle2FA(userCode)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ReportCaptcha;