"https://www.youtube.com/watch?v=_VuGmykVgTg stopped at 1:05:33"
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl";
import { useEffect } from 'react';
import Map from './components/map'


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
              src='uber/pages/assets/image.jpeg'
            />
          </Profile>
        </Header>
        {/* ActionButtons */}
        {/* InputButtons */}
      </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1
`

const Header = tw.div`
  
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`

`

const Name = tw.div`

`

const UserImage = tw.img`

`
