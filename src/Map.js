import { React, useRef } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react'

function Map() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return(
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={""}>
                Open
            </Button>
        </>
    );
}

export default Map;
