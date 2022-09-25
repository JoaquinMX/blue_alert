import React from 'react';
import { Heading, Text, Grid, GridItem, Flex, Spacer, Box, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import NLLogo from './assets/imgs/GOBIERNO_NL_LOGO-02.png';
import './Css/Home.scss'

function Home() {
  return (
    <div className="home-content">
        <div className="section">
          <Grid
              templateAreas={`
                  "nav left"
                  "nav right"
              `}
              gridTemplateRows={'50px 100%'}
              height="100%">
              <GridItem area={'nav left'}>
                <Text
                  bgGradient="linear(to-r, #7F7FD5, #86A8E7, #91EAE4)"
                  bgClip="text"
                  className='page-title'>
                  Impulsando la seguridad para los ciudadanos
                </Text>

                <Text className='page-subtitle'>
                  Blue Alert es una aplicación que permite la optimización de los recursos policiales 
                  por medio de reportes de ciudadanos activos que buscan el mejoramiento de la seguridad 
                  en el estado de Nuevo León.
                </Text>
              </GridItem>

              <GridItem area={'nav right'}>
                <Image src={NLLogo} alt='Nuevo León Logo' />
              </GridItem>


          </Grid>

      {/* <Heading>Servicio impulsado por ciudadanos para su seguridad</Heading>
      <Text fontSize='lg'>
        Blue Alert es una aplicación que permite la optimización de los recursos policiales 
        por medio de reportes de ciudadanos activos que buscan el mejoramiento de la seguridad 
        en el estado de Nuevo León.
      </Text>
      <Image src={NLLogo} alt='Nuevo León Logo' /> */}
      </div>
    </div>
  )
}

export default Home;