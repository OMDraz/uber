import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl";
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmRyYXoiLCJhIjoiY2t3amxtc3lwMHFhNTJ1cXZtcjhkNmhpMCJ9.yw1LL0RskRr7J8NnzCQicw';


const map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.172],
          zoom: 4
        });

        addToMap(map)
      });

      const addToMap = (map) => {
        const marker1 = new mapboxgl.Marker()
          .setLngLat([12.554729, 55.70651])
          .addTo(map);
      }


    return (
        <Wrapper id='map'></Wrapper>
    )
}

export default map

const Wrapper = tw.div`
    flex-1
`
