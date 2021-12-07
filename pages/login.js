import React from 'react'
import tw from 'tailwind-styled-components'

const Login = () => {
    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png"/>
            <SignInButton>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default Login


const Wrapper = tw.div`
    flex flex-col bg-gray-200 h-screen w-screen p-4
`

const SignInButton = tw.button`
    bg-black text-white text-center py-4 mt-8 w-full cursor-pointers
`

const UberLogo = tw.div`
    h-20
`