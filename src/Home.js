import React from 'react';
import { Heading, Text, Grid, GridItem, Flex, Spacer, Box, Button } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import NLLogo from './assets/imgs/GOBIERNO_NL_LOGO-02.png';
import './home.css'

function Home() {
  return (
    <Container>
            <Container className="container70">
                <Heading>Servicio impulsado por ciudadanos para su seguridad</Heading>
                <Text fontSize='lg'>
                Blue Alert es una aplicación que permite la optimización de los recursos policiales por medio de reportes de ciudadanos activos que buscan el mejoramiento de la seguridad en el estado de Nuevo León.</Text>
                <Button colorScheme='facebook'>Generar reporte</Button>
            </Container>
        <Container className="container30">
            <Box boxSize='sm'>
                <Image src={NLLogo} alt='Nuevo León Logo' />
            </Box>
        </Container>
    </Container>
  )
}

export default Home;