'// https://www.youtube.com/watch?v=dLHk4g55SJQ stopped at 40:53'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'

const confirm = () => {

    const router = useRouter()
    const { pickup, dropoff } = router.query 

    const [pickupCoordinates, setPickupCoordinates] = useState();
    const [dropoffCoordinates, setDropoffCoordinates] = useState();
    
    const getPickupCoordinates = async (pickup) => {
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

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoib21hcmRyYXoiLCJhIjoiY2t3amxtc3lwMHFhNTJ1cXZtcjhkNmhpMCJ9.yw1LL0RskRr7J8NnzCQicw" ,
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);


    return (
        <Wrapper>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector/>
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
`