import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
    const [ rideDuration, setRideDuration ] = useState()

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoib21hcmRyYXoiLCJhIjoiY2t3amxtc3lwMHFhNTJ1cXZtcjhkNmhpMCJ9.yw1LL0RskRr7J8NnzCQicw`)            
            .then(res => res.json())
            .then(data => {
                console.log(pickupCoordinates)
                console.log(dropoffCoordinates)
                setRideDuration(data.routes[0].duration / 100)
        })
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl}/>
                            <CarDetails>
                                <Service>{car.service}</Service>
                                <Time> {car.multiplier * 5}min away</Time>
                            </CarDetails>
                        <CarPrice>
                            <Price>${(rideDuration*car.multiplier).toFixed(2)}.00</Price>
                        </CarPrice> 
                    </Car>
                )) }
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col
`

const CarList = tw.div`
    overflow-y-scroll
`

const Car = tw.div`
    flex p-4 items-center
`

const CarImage = tw.img`
    h-14 mr-2
`

const CarDetails = tw.div`
    flex-1
`

const CarPrice = tw.div`

`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`