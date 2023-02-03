import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Discord } from '@icons-pack/react-simple-icons';
import {IoLocationSharp} from 'react-icons/io5';

export default function Index() {
    return (
    <div className="">
        <Head>
            <title>Storm</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>   
        <section className=''>
            <div className="links"> 
                <ul className='flex font-bold'>
                    <li><Link href={'https://github.com/stormforcejj'} rel="noopener noreferrer" target="_blank"><Github className="justify-center mx-2" color='#fff' size={30} /></Link></li>
                    <li className='py-1'>
                        <Link href={'https://goo.gl/maps/Vev1nLPSzN9ztcYG8'}rel="noopener noreferrer" target="_blank">
                            <span className='justify-center px-6 py-2 m-2 font-bold rounded-l-full rounded-r-full bg-neutral-900 hover:bg-neutral-800'>Wales</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <h1 className='text-[50px] font-bold text-white'>Hi, I'm Storm 👋</h1>
            <p className='text-xl'>I'm a 17 year old aspiring developer and student from Wales.</p>
        </section>
    </div>
    )
}
