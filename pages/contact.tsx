import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Discord, Spotify, Flickr } from '@icons-pack/react-simple-icons';

export default function Index() {
    return (
    <div className="">
        <Head>
            <title>• James</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.svg" />
        </Head>   
            <h1 className='text-[50px] font-extrabold'>Contact Me 🚀</h1>
            <h2 className='text-[27px] font-extrabold pt-5'>Social Media</h2>
            <div className="flex links">
                <ul>
                    <li className='inline-flex justify-content'><Discord /><span> - Discord | stormforcejj#4036</span></li>
                    <li className='inline-flex justify-content'><Github /><span> - Github | stormforcejj</span></li>
                    <li className='inline-flex justify-content'><Spotify /><span> - Spotify</span></li>
                    <li className='inline-flex justify-content'><Flickr /><span>- Flickr</span> </li>
                </ul>
            </div>
    </div>
    )
}
