"https://www.youtube.com/watch?v=_VuGmykVgTg stopped at 1:52:07"
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl";
import { useEffect } from 'react';
import Map from './components/map'
import Link from 'next/link';


export default function Home() {
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        {/* Header  */}
        <Header>
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg'/>
          <Profile>
            <Name>Omar Draz</Name>
            <UserImage 
              src='https://i.picsum.photos/id/94/200/200.jpg?hmac=6A2OfXxXR04lSduBcURN4k0_3aiDGcJQjMpSwDmQevg'
            />
          </Profile>
        </Header>
        <ActionButtons>
        <Link href='/search'>
            <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserve
          </ActionButton>
        </ActionButtons>
        {/* ActionButtons */}
        {/* InputButtons */}
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-400 p-px
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`