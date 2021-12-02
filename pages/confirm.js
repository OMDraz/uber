'// https://www.youtube.com/watch?v=dLHk4g55SJQ stopped at 27:50'
import React from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'

const confirm = () => {
    return (
        <Wrapper>
            <Map/>
            <RideContainer>
                {/* Ride Selector */}
                {/* Confirm Button */}

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