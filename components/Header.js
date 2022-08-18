import React from 'react';
import Image from 'next/dist/client/image';

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

import HeaderIcon from './HeaderIcon';
import RightSideIcon from './RightSideIcon';

function Header() {
    return (
        <div className='sticky top-0 z-50 bg-white flex
        items-center p-2 lg:px-5 shadow-md'>

            {/* Left */}
            <div className='flex items-center'>
                <Image
                    src="https://i.imgur.com/zdWM4OO.png"
                    width={40}
                    height={40}
                    layout="fixed"
                />
            </div>

            <div className='flex ml-2 items-center rounde-full bg-gray-100 p-2'>
                <SearchIcon className='h-6 text-gray-600' />
                <input
                    className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none 
                    placeholder-gray-500 flex-shrink'
                    type="text"
                    placeholder='Search Facebook'
                />
            </div>


            {/* Center */}
            <div className='justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/* Profile picture */}
                <p className='whitespace-nowrap font-semibold pr-3'> Robert Regalado</p>
                <RightSideIcon active Icon={ViewGridIcon} />
                <RightSideIcon Icon={ChatIcon} />
                <RightSideIcon Icon={BellIcon} />
                <RightSideIcon Icon={ChevronDownIcon} />
            </div>

        </div>
    )
}

export default Header
