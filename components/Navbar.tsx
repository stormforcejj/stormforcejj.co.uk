import Link from "next/link";
import React, {useState} from "react";
// import SpotifyNP from '@/components/SpotifyNP';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Spotify } from '@icons-pack/react-simple-icons';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="fixed top-0 left-0 z-10 w-full duration-300 ease-in">
            <div className="flex items-center justify-between max-w-4xl p-4 m-auto">
                <ul className="hidden font-bold sm:flex">
                    <li className="px-6 py-4 m-2 rounded-l-full rounded-r-full hover:bg-neutral-900 hover:bg-opacity-50"><Link href='/'>&gt;_</Link></li>
                    <li className="px-6 py-4 m-2 rounded-l-full rounded-r-full hover:bg-neutral-900 hover:bg-opacity-50"><Link href='/about'>About</Link></li>
                    <li className="px-6 py-4 m-2 rounded-l-full rounded-r-full hover:bg-neutral-900 hover:bg-opacity-50"><Link href='/projects'>Projects</Link></li>
                    <li className="px-6 py-4 m-2 rounded-l-full rounded-r-full hover:bg-neutral-900 hover:bg-opacity-50"><Link href='/contact'>Contact</Link></li>
                </ul>

                {/* <SpotifyNP /> */}
                 <div className="hidden ml-auto lg:align-center lg:flex xl:inline">
                    <span className="py-1 text-neutral-500">Not Playing Anything </span><Spotify className="inline-flex align-center" color='#1DB954' size={20} />
                </div>

                {/* Mobile Buttons*/}
                <div className="fixed z-10 sm:hidden display-block left-3 top-3" onClick={handleNav}>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                {/* Mobile Menu */}
                <div className={nav ? "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in sm:hidden bg-neutral-900" : "absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in sm:hidden bg-neutral-900"}>
                <ul className="text-[2rem] font-bold">
                    <li><Link href='/'>&gt;_</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/projects'>Projects</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;