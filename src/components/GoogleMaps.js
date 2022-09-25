import { Box, SkeletonText } from '@chakra-ui/react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useState, useRef } from 'react';

const center = { lat: 25.645881, lng: -100.288731};
function GoogleMaps() {

    const [map, setMap] = useState(/** @type google.maps.Map */null);
    const [myRef, setMyRef] = useState();

    /** @type React.mutableRefObject<HTMLInputElement> */
    const ref = useRef();
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    });

  if(!isLoaded) {
    return <SkeletonText />
  }

  function setValuesOfRef(value) {
    console.log(value.latLng.lat())
    console.log(value.latLng.lng())
    if (value === '') {
        return;
    }
    const centerPoint = { lat: value.latLng.lat(), lng: value.latLng.lng() }
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
            {/* Here display markers or directions */}
        </GoogleMap>
    </Box>
  )
}

function CustomMarker({lat, lng}) {
    const customCenter = { lat: lat, lng: lng };
    return (
        <Marker position={customCenter}></Marker>
    )
}

export default GoogleMaps;