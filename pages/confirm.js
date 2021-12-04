'// https://www.youtube.com/watch?v=dLHk4g55SJQ stopped at 40:53'
import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'

const confirm = () => {

    const { pickupCoordinates, setPickupCoordinates } = useState()
    const { dropoffCoordinates, setdropoffCoordinates } = useState()
    
    const getPickupCoordinates = () => {
        const pickup = 'Santa Monica';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoib21hcmRyYXoiLCJhIjoiY2t3amxtc3lwMHFhNTJ1cXZtcjhkNmhpMCJ9.yw1LL0RskRr7J8NnzCQicw" ,
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center)
            })
    }

    const getDropoffCoordinates = () => {
        const dropoff = 'Los Angeles';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoib21hcmRyYXoiLCJhIjoiY2t3amxtc3lwMHFhNTJ1cXZtcjhkNmhpMCJ9.yw1LL0RskRr7J8NnzCQicw" ,
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setdropoffCoordinates(data.features[0].center);
            })
    }

    useEffect(() => {
        getPickupCoordinates();
        getDropoffCoordinates();
    });


    return (
        <Wrapper>
            <Map/>
            <RideContainer>
                Ride selector
                Confirmbutton 
                {pickupCoordinates}
                {dropoffCoordinates}
            </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1
`