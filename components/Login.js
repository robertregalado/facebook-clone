import React from 'react'
import Image from 'next/dist/client/image';
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div>
            <Image
                src="https://i.imgur.com/zdWM4OO.png"
                width={400}
                height={400}
                objectFit="contain"
            />
            <h1
                onClick={signIn}
                className='p-5 bg-blue-500 rounded-full text-white
                text-center cursor-pointer'>
                Login with Facebook

            </h1>
        </div>
    )
}

export default Login;
