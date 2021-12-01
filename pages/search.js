import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';

const Search = () => {
    return (
        <Wrapper>
            {/* Button Container */}
                <ButtonContainer>
                    <Link href='/'>
                        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                    </Link>
                </ButtonContainer>
            {/* Input container */}
                <Inputcontainer>
                    <FromTwoIcons>
                        <Circle src="https://img.icons8.com/ios/50/9CA3AF/filled-circle.png"/>
                        <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                        <Square src="https://img.icons8.com/windows/32/000000/square-full.png"/>
                    </FromTwoIcons>
                    <InputBoxes>
                        <Input placeholder='Enter pickup location'/>
                        <Input placeholder='Where to?'/>
                    </InputBoxes>
                    <PlusIcon src="https://img.icons8.com/ios/48/000000/plus--v1.png" />
                </Inputcontainer>
            {/* Saved Places */}
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios/50/ffffff/star--v1.png"/>
                Saved Places
            </SavedPlaces>
            {/* Confirm Location */}
            <ConfirmLocation>
                <Link href='/'>
                    <ConfirmButton>
                        Confirm Locations
                    </ConfirmButton>
                </Link>
            </ConfirmLocation>
        </Wrapper>
    )
}

export default Search

const Wrapper =  tw.div`
    bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
    bg-white px-4
`

const BackButton = tw.img`
    active:bg-green-700
`

const Inputcontainer = tw.div`
    bg-white flex items-center px-4 pb-4
`

const FromTwoIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
    h-2.5 
`

const Line = tw.img`
    h-10
`

const Square = tw.img`
    h-3 
`

const InputBoxes = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`       

const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2
`


const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`       

const ConfirmLocation = tw.div`
    bg-grey flex justify-center
`

const ConfirmButton = tw.button`
    bg-black text-white w-11/12 h-10 mt-3 active:bg-black-500
`