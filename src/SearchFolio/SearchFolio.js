import {React, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import StatusCard from './StatusCard';

function SearchFolio() {

  const [ isItDisplayingCard, setIsItDisplayingCard ] = useState(false); 
  const [ haveTheUserSearch, setHaveTheUserSearch] = useState(false);

  useEffect( () => {
    //REQUEST INFO TO API
    if (haveTheUserSearch/** && cardExists */) {
        setIsItDisplayingCard(true);
    }
  }, [haveTheUserSearch]);

  return (
    <Container>
        <Container>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onKeyDown={(e) => e.key === 'Enter' ? setHaveTheUserSearch(true) : e}
                onSubmit={(e) => e.preventDefault()}
            >
                <TextField id="search" label="Search" variant="outlined" />
            </Box>
        </Container>
        <Container>
            {isItDisplayingCard ? <StatusCard /> : haveTheUserSearch ? <Typography className='error-text'>No se han encotrado resultados con su búsqueda</Typography> : <Typography className='initial-text'>Ingrese el folio que desea buscar</Typography>}
        </Container>
    </Container>
    
  );
}

export default SearchFolio;