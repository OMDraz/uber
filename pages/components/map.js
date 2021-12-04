import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl";
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmRyYXoiLCJhIjoiY2t3amxtc3lwMHFhNTJ1cXZtcjhkNmhpMCJ9.yw1LL0RskRr7J8NnzCQicw';


const map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.172],
          zoom: 4
        });

        if(props.pickupCoordinates){
          addToMap(map, props.pickupCoordinates)
        }

        if(props.dropoffCoordinates){
          addToMap(map, props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
          map.fitBounds([
            props.pickupCoordinates,
            props.dropoffCoordinates
            ],{
              padding: 120
            }
            
            );
        }

      }, [props.pickupCoordinates, props.dropoffCoordinates]);

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
      }

    return (
        <Wrapper id='map'></Wrapper>
    )
}

export default map

const Wrapper = tw.div`
    flex-1 h-1/2
`
